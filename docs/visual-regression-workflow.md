# Visual Regression Workflow

## Objective
Detect unintended visual changes across key portfolio sections.

## Coverage
Current check targets these section anchors:
- `#home`
- `#work`
- `#about`
- `#services`
- `#tech-stack`
- `#contact`

## Implementation
- Script: `visual-regression/check.js`
- Workflow: `.github/workflows/visual-regression.yml`
- Baselines: `visual-regression/baselines/*.png`
- Outputs: `visual-regression/current/*.png` and `visual-regression/diff/*.png`

## CI Behavior
1. If baseline image files are missing, CI generates them and fails the run intentionally.
2. Commit generated baselines, then re-run CI.
3. For existing baselines, diff ratio above 0.5% fails the check.

## Local usage
1. `npm init -y`
2. `npm install playwright pixelmatch pngjs http-server`
3. `npx playwright install chromium`
4. `npx http-server . -p 4173 -s`
5. In another terminal: `node visual-regression/check.js`

## Notes
- This is section-level visual regression, not component-storybook snapshot testing.
- Compiled bundle updates can legitimately shift rendering; update baselines only after review.
