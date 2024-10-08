# TS App Template

This is a template for all the typescript applications that I build in my personal life!

I am sure it could be loads better so pull requests are always appreciated and will be reviewed when I can.

Always open to learning new things, and using new libraries that achieve things in a better way so changes with good discussion in PRs also appreciated.

## GitHub Actions

There are two workflows configured within this template:

* `release.yml` - uses semantic release to build and deploy new versions of this template (and uses of the template) to GitHub
* `test.yml` - runs the unit tests and validates code styling and formatting

## Settings

### Code Style & Formatting

Uses: [eslint](https://eslint.org/), [prettier](https://prettier.io/), [typescript-eslint](https://typescript-eslint.io/packages/typescript-eslint)

Configuration can be found in:

* [eslint.config.mjs](./eslint.config.mjs)
* [prettier.config.js](./prettier.config.js)

The configuration here is fairly lightweight, using mainly the standard, recommended options for Typescript and NodeJS.

Prettier will enforce the following stylistic choices:

* `semi: true` - Semicolons will be used at the end of every statement.
* `singleQuote: true` - Strings will be formatted with single quotes.
* `tabWidth: 2` - Indentation will use 2 spaces per level.
* `trailingComma: 'none'` - No trailing commas will be added to lists, objects, or function parameters.

### Conventional Commits

Uses: [commitlint](https://commitlint.js.org/), [commitlint/config-conventional](https://github.com/conventional-changelog/commitlint)

This setup enforces conventional commit structure:

`<type>(<scope>): <description>`

* `<type>` - Describes the nature of the change.
* `<scope> (optional)` - Specifies what part of the project is affected by the change.
* `<description>` - A short summary of the change.

Example commit message: `feat(setup): adds and enforces prettier code formatting`

The (commonly used) commit types supported include:

	•	feat: A new feature.
	•	fix: A bug fix.
	•	docs: Changes to documentation only.
	•	style: Code formatting (e.g., whitespace, missing semicolons), no code change.
	•	refactor: Code changes that neither fix a bug nor add a feature.
	•	perf: Performance improvements.
	•	test: Adding or modifying tests.
	•	build: Changes that affect the build system or external dependencies.
	•	ci: Changes to CI configuration files and scripts.
	•	chore: Other changes that don’t modify src or test files.
	•	revert: Reverts a previous commit.

### Commit Length

The commit header (type + scope + description) should be a maximum of 72 characters long.

### Breaking Changes

> [!IMPORTANT]  
> If a commit introduces a breaking change, 'BREAKING CHANGE: `<description>`' MUST be included in the footer of the commit message

Example:

```
feat: refactor API responses to use new format

BREAKING CHANGE: The API responses now use snake_case instead of camelCase.
```

### Git Hooks

Uses: [husky](https://github.com/typicode/husky#readme)

* Commit Message validation
* Pre-Commit Checks: runs tests and linting/formatting
* Pre-Push Checks: runs tests and linting/formatting

### Typescript

Uses: [typescript](https://www.typescriptlang.org/), [rimraf](https://github.com/isaacs/rimraf#readme)

Configuration can be found in:

* [tsconfig.json](./tsconfig.json)
* [package.json](./package.json) - for typescript build configuration & scripts

### Semantic Release

Uses: [semantic-release](https://github.com/semantic-release/semantic-release#readme)

Configuration can be found in:

* [release.config.js](./release.config.js)

Semantic release is configured to push to the built package to GitHub packages.

> [!NOTE]
> By default the scope of the repository is set to `private: true` in the package.json.  For open source or public repositories you will need to tweak the settings.
