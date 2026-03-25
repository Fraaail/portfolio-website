# Contributing Guidelines

## Scope

This project is currently maintained as a compiled production portfolio with roadmap-driven incremental improvements.

## Workflow

1. Follow chronological implementation order from `project_overview/checklists/implementation_log.md` and `docs/checklist.md`.
2. Keep changes minimal and scoped to the active roadmap item.
3. Update checklist/log status in the same change set.
4. Run diagnostics after edits and confirm no file-level errors.

## Build artifact rules

1. Keep only active hashed entry artifacts referenced by `index.html`.
2. Do not commit stale `assets/index-*.js` or `assets/index-*.css` files.
3. Preserve referenced media paths when optimizing assets.

## Quality expectations

1. Accessibility and reliability fixes should preserve keyboard and fallback behavior.
2. New links/assets must be validated.
3. Document major implementation decisions in `docs/`.

## Pull request checklist

- [ ] Change aligns to the next chronological roadmap item.
- [ ] Diagnostics show no new file errors.
- [ ] `docs/checklist.md` updated.
- [ ] `project_overview/checklists/implementation_log.md` updated.
