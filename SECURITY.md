# Security policy

This repository is a profile README and the tooling that releases it. There is no application code, no server and no user data. The main attack surface is the supply chain: npm dev dependencies, GitHub Actions and the links in the README.

## Supported versions

| Version | Supported |
| ------- | --------- |
| 2.x     | Yes       |
| 1.x     | Security fixes only, until the maintainer forgets |
| Human   | Patched continuously; see Known bugs in the README |

## Reporting a vulnerability

Please do not open a public issue for security problems.

1. Use [GitHub private vulnerability reporting](https://github.com/bromso/bromso/security/advisories/new) for anything that affects this repository: a compromised dependency, a workflow that leaks a token, a link that now points somewhere malicious.
2. For anything involving a person rather than a repository, email <jonasbroms@icloud.com> with "Security" in the subject.

You will get an acknowledgement within 72 hours and a fix or a decision within 14 days. Credit is given in the changelog unless you ask otherwise.

## What is in place

- Dependabot keeps npm packages and GitHub Actions current, grouped into one weekly pull request.
- Every workflow declares least-privilege `permissions` and checks out code with `persist-credentials: false`.
- The release workflow is the only job with write access, and only on `master`.
- OpenSSF Scorecard runs weekly and uploads its findings to code scanning.
- Every pull request is linted (Markdown, commit messages) and link-checked before merge.
- Branch protection on `master` is recommended: require the Lint workflow and one review (the CODEOWNERS file names the reviewer).

## Out of scope

- The opinions in the README. They are, as noted, highly opinionated.
- Third-party sites linked from the README. Report those to their owners.
