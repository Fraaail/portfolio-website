# Repository Structure and Source/Build Separation

This repository currently contains deployable compiled artifacts.

## Current layout

- `index.html`: production entrypoint.
- `assets/`: active hashed JS/CSS bundle and referenced media assets.
- `docs/`: planning, implementation, and operations notes.
- `project_overview/`: roadmap/checklist tracking artifacts.
- `case-studies/`: downloadable one-page case-study PDFs.

## Source vs build policy

1. Treat `assets/index-*.js` and `assets/index-*.css` as build outputs.
2. Keep only the active hashed entry pair referenced by `index.html`.
3. Keep authoring/operational files in stable folders (`docs/`, `project_overview/`).
4. If source code is restored in future, place it under `src/` and generate outputs only into `dist/` (or equivalent), then publish from that output folder.

## Future-ready structure target

- `src/` for authored source files.
- `dist/` for generated production output.
- `docs/` for process/design/roadmap documentation.
- `project_overview/` for delivery checklists and logs.
