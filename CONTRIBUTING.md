# Contributing

- [Submitting changes](#submitting-changes)
- [Local setup](#local-setup)
- [Commit messages](#commit-messages)
- [Issues and labels](#issues-and-labels)
- [Branches and releases](#branches-and-releases)

## Submitting changes

This repository is a profile README, so most contributions are corrections: a broken link, an outdated fact, a typo. Open an issue using one of the templates, or send a pull request straight away for small fixes.

If this is your first open-source contribution, [opensource.guide](https://opensource.guide/) is a good read before you start. By participating you agree to the [Code of Conduct](CODE_OF_CONDUCT.md). Security problems go through [SECURITY.md](SECURITY.md), not the issue tracker.

## Local setup

```sh
nvm use          # Node version from .nvmrc
npm ci           # install dev dependencies
npm run lint     # biome + markdownlint + link check
```

`npm run lint:code` runs [Biome](https://biomejs.dev/) (formatter and linter for the JavaScript and JSON files; `npm run format` applies its fixes). `npm run lint:md` checks Markdown style with the rules in `.markdownlint-cli2.jsonc`. `npm run lint:links` fetches every link in the Markdown files and fails on anything that returns 4xx or 5xx, except for a short list of sites that block bots. The same checks run in CI on every pull request.

## Commit messages

Commits follow [Conventional Commits](https://www.conventionalcommits.org/) and are checked by commitlint in CI. The type decides the next version number, so pick it with care.

| Type                | Explanation                                              | Semver (eg. 1.5.2) | Example                                      |
| ------------------- | -------------------------------------------------------- | ------------------ | -------------------------------------------- |
| **fix**             | A correction                                             | x.x.**1**          | `fix: repoint CyprusJS link to GitHub`       |
| **feat**            | New content or a new section                             | x.**1**.x          | `feat: add Products & projects section`      |
| **BREAKING CHANGE** | The person described no longer behaves as documented     | **1**.x.x          | `feat!: replace Creative Director with ...`  |
| **docs**            | Documentation that is not the README itself              |                    | `docs: expand CONTRIBUTING`                  |
| **style**           | Formatting only                                          |                    | `style: align tech-stack table`              |
| **refactor**        | Restructuring without changing meaning                   |                    | `refactor: split tech stack by category`     |
| **perf**            | Faster to read, lighter to load                          |                    | `perf: shrink banner image`                  |
| **test**            | Lint and link-check configuration                        |                    | `test: ignore shields.io in link check`      |
| **chore**           | Tooling, dependencies, housekeeping                      |                    | `chore(deps): bump semantic-release`         |
| **ci**              | GitHub Actions                                           |                    | `ci: add OpenSSF Scorecard`                  |

Write the message yourself:

```sh
git commit -m "fix: correct Figma download count"
```

Or let Commitizen ask you the questions:

```sh
npx cz
```

## Issues and labels

| Label            | Used for                                           |
| ---------------- | -------------------------------------------------- |
| bug              | Something is wrong, broken or outdated             |
| enhancement      | A suggestion for new content or tooling            |
| question         | Anything else                                      |
| released         | Added by semantic-release when a fix ships         |
| duplicate        | Already reported                                   |
| wontfix          | Will not be worked on (see Known bugs in the README for examples) |
| help wanted      | Extra attention is needed                          |
| good first issue | Good for newcomers                                 |

## Branches and releases

`master` is the only long-lived branch and is what GitHub renders on the profile. Work happens on short-lived branches (`feat/...`, `fix/...`) merged through pull requests. The Lint workflow (Biome, Markdown, commit messages, links) must pass before merge.

On every push to `master`, [semantic-release](https://semantic-release.gitbook.io/) reads the commit messages since the last tag, decides the next version, updates [CHANGELOG.md](CHANGELOG.md) and `package.json`, and publishes a GitHub release. Nothing is published to npm. Release commits are tagged `[skip ci]` so they do not trigger a second run.
