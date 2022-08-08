# Contributing

- [Submitting changes](#submitting-changes)
- [Issues and labels](#issues-and-labels)
- [Commit with Terminal commands](commit-with-terminal-commands)
- [Commit with Commitizen](#commit-with-commitizen)

## Submitting changes

If this is the first time you are contributing to an project thru gt we would really appreciate if you would read the [Open-Source.guide](https://opensource.guide/) before committing.

## Issues and labels

| Type             | Semver          | Git Label | Explanation                                                    |
| ---------------- | --------------- | --------- | -------------------------------------------------------------- |
| breaking change  | BREAKING CHANGE |           | A major change                                                 |
| bug              | fix             |           | A bug fix                                                      |
| feature          | feat            |           | A new feature                                                  |
| documentation    | docs            |           | Documentation improvements                                     |
| style            | style           |           | Changes made white-space, formatting, missing semi-colons, etc |
| refactor         | refactor        |           | A code change that neither fixes a bug nor adds a feature      |
| performance      | perf            |           | Performance improvements                                       |
| test             | test            |           | Add missing tests                                              |
| chore            | chore           |           | Changes the build process                                      |
| released         |                 |           | Used by Semantic-Release-Bot                                   |
| duplicate        |                 |           | This issue or pull request already exists                      |
| wontfix          |                 |           | This will not be worked on                                     |
| helpwanted       |                 |           | Extra attention is needed                                      |
| question         |                 |           | Further information is requested                               |
| good first issue |                 |           | Good for newcomers                                             |

## Semantic Release Labels

| Type                | Explanation                                                    | Semver (eg. 1.5.2) | Git Message Example                                    |
| ------------------- | -------------------------------------------------------------- | ------------------ | ------------------------------------------------------ |
| **fix**             | A bug fix                                                      | x.x.**1**          | **fix:** _update package.json_                         |
| **feat**            | A new feature                                                  | x.**1**.x          | **feat:** _add new eslint to package.json_             |
| **BREAKING CHANGE** | A major change                                                 | **1**.x.x          | **BREAKING CHANGE:** _upgrade to strapi 3 & gatsby 3_  |
| **docs**            | Documentation improvements                                     |                    | **docs:** _update README.md_                           |
| **style**           | Changes made white-space, formatting, missing semi-colons, etc |                    | **style:** _add styles in breadcrumb component_        |
| **refactor**        | A code change that neither fixes a bug nor adds a feature      |                    | **refactor:** _fixed better intendation in index.html_ |
| **perf**            | Performance improvements                                       |                    | **perf:** _add tree-shaking to webpack_                |
| **test**            | Add missing tests                                              |                    | **test:** _add test to .travis.yml_                    |
| **chore**           | Changes the build process                                      |                    | **chore:** _update .travis.yml & netlify.toml_         |

## Commit

### With Terminal commands

Our bug tracker utilizes several labels to help organize and identify issues. Here's what they represent and how we use them:

Always write a clear log message for your commits. One-line messages are fine for small changes, but bigger changes should look like this:

```sh
$ git commit -m "feat: A brief summary of the commit"
```

### With Commitizen

```sh
$ cz
```

## Git branches

| Name          | Versioning | Automated Testing | Description                                       |
| ------------- | ---------- | ----------------- | ------------------------------------------------- |
| **Main**      | Live       |                   | Production                                        |
| **[PR #1]**   |            | LHT, SRB          | Pull request made from Next to Main, BETA version |
| **Next**      | Beta       |                   | Beta/Stage, used for showcasing clients           |
| **[PR #2]**   |            | LHT, SRA          | Pull request made from Develop to Next            |
| **"Develop"** | Alpha      |                   | Alpha/Stage, used for internal tests & showcasing |
| **[PR #3]**   |            | LHT, SRA          | Pull request made from "Feature/Fix" to Develop   |
| **"Develop"** | Alpha      |                   | Alpha/Stage, used for internal tests & showcasing |

- **LHT** = Lighthouse Test
- **SRA** = Semantic Release Bot, ALPHA version
- **SRB** = Semantic Release Bot, BETA version

```text
◎ <-- Main
┃
┠══[PR #1]══╮
┃           ⊙ <-- Next
┃           ║
┃           ║
┃           ╠──[PR #2]──╮
┃           ║           │
┃           ║           ⊙ <-- Develop
┃           ║           │
┃           ║           │
┃           ║           ⊙┄┄[PR #3]┄┄╮
┃           ║           │           ┆
┃           ║           │           ◌ <-- "Feature/Fix"
┃           ║           │           ┆
┃           ║           │           ┆
┃           ║           │           ┆
┃           ║           │           ┆
●           ○           ○           ◌
```

## Releases

See the Releases section of our project for [CHANGELOG](CHANGELOG.md) for each release version of Vince Live UI project.

## Checking coding style

Run `npm` & `npm test` before committing to ensure your changes follow our coding standards.
