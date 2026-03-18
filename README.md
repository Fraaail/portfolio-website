# Portfolio Website

UX/UI + tech portfolio website built with React, Tailwind CSS, and Three.js.

## Setup and Local Preview

This repository currently contains compiled production output.

To preview locally:

1. Open the project root.
2. Start a static server, for example:
	 - `python3 -m http.server 4173`
3. Open `http://localhost:4173`.

## Development Notes

- Most active improvements are currently applied at the entry layer (`index.html`) and compiled bundle integration points.
- Roadmap execution order is tracked in:
	- `docs/checklist.md`
	- `project_overview/checklists/implementation_log.md`

## Build and Deploy

Because this repository is build-output-first at the moment, deploy from repository root as static hosting.

Deploy checklist:

1. Ensure `index.html` references the active hashed JS/CSS entry pair.
2. Ensure stale hashed entry files are removed from `assets/`.
3. Validate critical accessibility and fallback behavior.

## Repository Structure

See `docs/repo-structure.md` for source/build separation policy and future-ready structure targets.

## Contribution Process

See `CONTRIBUTING.md` for contribution workflow and quality gates.

## CI and Dependency Governance

- CI build hygiene checks run via `.github/workflows/build-check.yml` on push and pull request.
- Style and formatting checks run via `.github/workflows/style-check.yml` for maintained HTML/Markdown/workflow files.
- Visual regression checks run via `.github/workflows/visual-regression.yml` using section screenshot diffs.
- Dependency maintenance and audit cadence is defined in `docs/dependency-audit-policy.md`.
- Style linting workflow details are documented in `docs/style-linting-workflow.md`.
- Visual regression workflow details are documented in `docs/visual-regression-workflow.md`.
- Scheduled third-party link validation runs via `.github/workflows/third-party-link-check.yml`.
- Analytics/privacy disclosure is documented in `docs/privacy-note.md`.

## Deployable Artifact Policy

This repository keeps exactly one active production entry bundle at a time:

- `assets/index-DZeOwcvB.js`
- `assets/index-Di1ofdRY.css`

The entrypoint file `index.html` must reference only the current active hashed JS/CSS pair.

## Build Output Hygiene Rules

1. After each production build/deploy refresh, keep only the active hashed entry assets referenced in `index.html`.
2. Remove stale hashed `assets/index-*.js` and `assets/index-*.css` files that are no longer referenced.
3. Keep media assets that are still referenced by the active JS bundle.
4. Verify the site still renders correctly after cleanup.

## Verification Checklist

1. `index.html` points to exactly one current JS and one current CSS hashed entry file.
2. No stale `assets/index-*.js`/`assets/index-*.css` files remain.
3. Keyboard accessibility patches still function as expected.
4. Fallback behavior for reduced motion and failed 3D load remains intact.
