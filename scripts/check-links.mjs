#!/usr/bin/env node
// Checks every http(s) link and local file reference in the Markdown files of this repo.
// Usage: node scripts/check-links.mjs [files...]   (defaults to README.md CONTRIBUTING.md SECURITY.md CODE_OF_CONDUCT.md)
import { access, readFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";

const files = process.argv.slice(2);
const targets = files.length
	? files
	: ["README.md", "CONTRIBUTING.md", "SECURITY.md", "CODE_OF_CONDUCT.md"];

// Hosts that answer bots with 403/429 but work in a browser. Treated as "skipped", not failed.
const SKIP_HOSTS = new Set([
	"www.adobe.com",
	"www.linkedin.com",
	"www.figma.com",
	"www.ica.se",
	"www.volvocars.com",
	"www.cat.com",
	"www.difc.ae",
	"www.microsoft.com",
	"www.mysql.com",
	"www.npmjs.com",
	"www.linux.org",
	"twitter.com",
	"www.facebook.com",
	"www.instagram.com",
	"www.notion.com",
	"www.atlassian.com",
	"cursor.com",
	"openai.com",
	"platform.openai.com",
	"www.jonasbroms.com", // TODO: remove once the www DNS record is restored
]);

const urlRe = /(?:\]\(|src=")(https?:\/\/[^\s)"]+|(?!mailto:|#)[^\s)"#]+)(?:#[^)"]*)?[)"]/g;

let failed = 0;
for (const file of targets) {
	let text;
	try {
		text = await readFile(file, "utf8");
	} catch {
		continue;
	}
	const seen = new Set();
	for (const m of text.matchAll(urlRe)) {
		const target = m[1];
		if (!target || seen.has(target)) continue;
		seen.add(target);
		if (/^https?:\/\//.test(target)) {
			const host = new URL(target).host;
			if (SKIP_HOSTS.has(host)) continue;
			try {
				const res = await fetch(target, {
					method: "GET",
					redirect: "follow",
					headers: { "user-agent": "Mozilla/5.0 (link-check)" },
					signal: AbortSignal.timeout(20000),
				});
				if (res.status >= 400) {
					console.log(`FAIL ${res.status} ${target} (${file})`);
					failed++;
				}
			} catch (e) {
				console.log(`FAIL ERR ${target} (${file}): ${e.message}`);
				failed++;
			}
		} else {
			try {
				await access(resolve(dirname(file), target));
			} catch {
				console.log(`FAIL missing file ${target} (${file})`);
				failed++;
			}
		}
	}
	console.log(`checked ${seen.size} links in ${file}`);
}
if (failed) {
	console.log(`${failed} broken link(s)`);
	process.exit(1);
}
console.log("all links ok");
