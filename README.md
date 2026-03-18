# Portfolio Website

UX/UI + tech portfolio website built with React, Tailwind CSS, and Three.js.

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
