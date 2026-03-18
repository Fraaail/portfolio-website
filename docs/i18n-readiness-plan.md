# i18n Readiness Plan

## Goal
Prepare the portfolio for multilingual support without disrupting current UX.

## Scope
- Initial target locales: en (default), fil, and one additional regional language if needed.

## Phase 1: Structure
1. Extract all user-facing strings into locale dictionaries.
2. Introduce key-based lookups for navigation, headings, project metadata, and CTA text.
3. Keep canonical internal IDs stable while translating labels.

## Phase 2: Formatting
1. Normalize date formatting with locale-aware APIs.
2. Ensure number/metric formatting uses locale-aware separators.
3. Audit line-break behavior for longer translations.

## Phase 3: UX and Accessibility
1. Add language switcher with persistent preference.
2. Set `lang` attribute dynamically per locale.
3. Re-run keyboard and screen-reader checks on each locale.

## Phase 4: Content Operations
1. Maintain translation memory for repeated phrases.
2. Add review checklist for translated case studies.
3. Validate links and metadata for each locale build.

## Definition of Ready for i18n rollout
- String extraction complete.
- Locale files versioned and documented.
- Language toggle design approved.
- Baseline translated content available for at least one non-default locale.
