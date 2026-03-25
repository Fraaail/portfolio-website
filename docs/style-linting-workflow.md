# Style Linting and Formatting Workflow

## Scope

Because this repository is currently build-output-first, style checks focus on maintained source-of-truth text files:

- `index.html`
- Markdown docs (`*.md`)
- GitHub workflow YAML files (`.github/workflows/*.yml`)

## Tooling

- Prettier for formatting consistency
- markdownlint-cli2 for Markdown linting

## CI Workflow

- Workflow file: `.github/workflows/style-check.yml`
- Triggers: push to `main` and pull requests

## Local usage (optional)

Run these commands from repository root:

1. `npx --yes markdownlint-cli2 "**/*.md" "!assets/**" "!pc_portfolio/**" "!portfolio_pc/**"`
2. `npx --yes prettier --check index.html README.md CONTRIBUTING.md "docs/**/*.md" ".github/workflows/*.yml"`

## Notes

- Generated bundle outputs in `assets/` are excluded from style checks.
- Large binary artifacts (PDFs) are excluded from formatting scope.
