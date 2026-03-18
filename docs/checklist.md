# Portfolio Implementation Checklist

This checklist is derived directly from improvements.md and reorganized into an execution-first format.

Use this status key per task:
- [ ] Not started
- [~] In progress
- [x] Completed

Recommended tracking fields:
- Owner:
- Target date:
- Notes/Blockers:

---

## Master roadmap

## Phase 1 (1-2 days) - Critical foundation (P0)
Goal: fix discoverability, accessibility fundamentals, and quick performance bottlenecks.

Success criteria:
- Metadata and social previews render correctly when URL is shared.
- Keyboard-only navigation works across nav, cards, modal, and contact icons.
- Motion-heavy sections respect reduced motion preferences.
- Obvious performance pitfalls are reduced (3D cost, rendering overhead).

## Phase 2 (2-4 days) - Conversion and product quality (P1)
Goal: improve portfolio narrative clarity, conversion pathways, and reliability.

Success criteria:
- Project stories communicate problem/process/outcome.
- Primary CTA is visible and repeatable across sections.
- Analytics capture key funnel events.
- UI is robust on mobile, tablet, and desktop.

## Phase 3 (ongoing) - Scale, quality, maintainability (P2)
Goal: establish long-term maintainability, process quality, and authority-building.

Success criteria:
- Repo structure and build workflow are clean and reproducible.
- QA and CI prevent regressions.
- Content authority and case-study depth continue improving over time.

---

## P0 checklist - High urgency, high impact

### SEO and metadata
- [x] Add improved homepage title strategy in index.html.
  - Acceptance: title communicates role + specialization + name.
- [x] Add meta description in index.html.
  - Acceptance: concise value proposition appears in SERP snippets.
- [x] Add Open Graph tags (og:title, og:description, og:image, og:url, og:type).
  - Acceptance: social share previews render correctly.
- [x] Add Twitter card tags (twitter:card, twitter:title, twitter:description, twitter:image).
  - Acceptance: X/Twitter preview is complete and not generic.
- [x] Add canonical URL tag.
  - Acceptance: canonical resolves to primary production domain.
- [x] Add JSON-LD schema markup (Person + WebSite).
  - Acceptance: rich results testing tools show valid schema.

### Accessibility fundamentals
- [x] Convert non-semantic clickable containers into semantic button/a elements.
  - Acceptance: all clickable controls are reachable and operable by keyboard.
- [x] Add visible focus states for all interactive components.
  - Acceptance: focus ring is always visible in keyboard navigation.
- [x] Ensure keyboard interaction parity (Enter/Space/Escape where relevant).
  - Acceptance: no pointer-only required interactions.
- [x] Add aria-current or equivalent active-state semantics on nav links.
  - Acceptance: screen readers announce active section.
- [x] Add skip-to-content link.
  - Acceptance: keyboard users can bypass nav quickly.
- [x] Validate modal accessibility (focus trap, Escape close, focus return).
  - Acceptance: modal flow is fully keyboard and screen-reader compatible.

### CSS and visual correctness
- [x] Fix invalid CSS tokenization for portfolioHeadText font-size (font-size:7 rem).
  - Acceptance: valid declaration used and renders consistently.
- [x] Review and align global color-scheme declaration with actual visual theme.
  - Acceptance: browser-level controls and form UI match intended theme.

### Performance quick wins
- [x] Disable preserveDrawingBuffer unless explicitly needed.
  - Acceptance: rendering overhead is reduced without functional regressions.
- [x] Reassess devicePixelRatio strategy for 3D canvas.
  - Acceptance: lower GPU pressure on low-end/mobile devices.
- [x] Gate or reduce 3D complexity on reduced-motion/low-power contexts.
  - Acceptance: low-end users receive a lighter experience or fallback.
- [x] Add fallback state for 3D loading errors.
  - Acceptance: no blank/blocked hero if model fails to load.

### Build artifact hygiene
- [x] Clean outdated hashed assets from repository/deploy output.
  - Acceptance: only active production bundle artifacts remain.
- [x] Establish single deployable build output policy.
  - Acceptance: repeat builds do not accumulate stale assets.

---

## P1 checklist - High value, moderate effort

### Media and asset optimization
- [x] Define image optimization strategy (WebP/AVIF, quality levels, dimensions).
- [x] Implement lazy-loading for non-critical images and gallery previews.
- [x] Add responsive image handling (srcset/sizes where possible).
- [x] Compress and resize oversized media files.

Acceptance criteria:
- [ ] Above-the-fold media loads quickly.
- [ ] Offscreen media does not impact initial LCP heavily.

### UX and conversion improvements
- [x] Improve nav IA to include all major sections (including skills/library if applicable).
- [x] Add consistent primary CTA placement across key sections.
- [x] Add concise top-fold value proposition (role, specialty, business/user impact).
- [x] Add clear availability statement (full-time/freelance/internship).
- [x] Add downloadable resume mirror (backup to external drive link).

Acceptance criteria:
- [ ] Users can identify role and next step within first scroll.
- [ ] CTA path is visible in multiple sections.

### Case-study quality
- [x] Upgrade each featured project with mini case-study structure:
  - [x] Problem
  - [x] Role
  - [x] Process
  - [x] Constraints
  - [x] Outcome/metrics
- [x] Add timeline + responsibilities for team projects.
- [x] Add project status tags (live, archived, concept, academic).
- [x] Add links to deeper docs/writeups for top projects.
- [x] Add what-I-learned reflection per project.

Acceptance criteria:
- [x] At least 2 strongest projects include measurable outcomes.
- [ ] Recruiter can assess impact quickly from each card/detail view.

### Accessibility expansion
- [x] Add prefers-reduced-motion behavior for looping and heavy animations.
- [x] Verify heading hierarchy (single h1 and logical h2/h3 order).
- [x] Improve alt text quality for meaningful images.
- [x] Verify color contrast across default/hover/focus states.
- [x] Ensure custom cursor does not interfere with pointer usability.

Acceptance criteria:
- [ ] Keyboard-only journey can complete full site exploration.
- [ ] No major contrast violations remain.

### Reliability and analytics
- [x] Add analytics funnel events for:
  - [x] Project card click
  - [x] Resume click
  - [x] Contact actions
- [x] Add graceful error state for failed media/network fetches.
- [x] Add loading skeletons for heavy sections where needed.
- [x] Audit smooth-scroll + history behavior to avoid noisy URL state.

Acceptance criteria:
- [x] Basic conversion funnel can be measured.
- [x] Failure states do not break user journey.

---

## P2 checklist - Polish and long-term quality

### Content authority and growth
- [x] Add blog/insight snippets or design notes.
- [x] Add updates/changelog section for recent improvements.
- [x] Create downloadable one-page case-study PDF(s).
- [x] Add i18n readiness plan if targeting broader audience.

### Visual system and code quality
- [x] Introduce tokenized design system for color/spacing/type.
- [x] Reduce duplicated style patterns/utilities.
- [x] Add style linting and formatting workflow (if source available).
- [x] Standardize typography scale and spacing rhythm globally.
- [x] Add visual regression checks for key pages/components.

### Maintainability and workflow
- [x] Separate source and build output clearly in repo structure.
- [x] Update README with setup/dev/build/deploy sections.
- [x] Add contribution guidelines (even for solo future-proofing).
- [x] Add automated build checks in CI.
- [x] Add dependency update and audit policy.

### Security and privacy
- [x] Add privacy note if analytics are enabled.
- [x] Validate third-party links/resources periodically.
- [x] Remove avoidable debug logs from production bundles.

---

## Full domain checklist (1:1 coverage from improvements.md)

### 1) SEO and discoverability
- [x] Title strategy per route/section.
- [x] Meta description.
- [x] OG tags.
- [x] Twitter card tags.
- [x] Canonical.
- [x] JSON-LD Person + WebSite.
- [x] Favicon variants + manifest.
- [x] Robots + sitemap.

### 2) Accessibility (A11y)
- [x] Semantic interactive elements.
- [ ] Accessible labels + visible focus.
- [x] Skip-to-content.
- [x] Prefers-reduced-motion handling.
- [x] Modal focus trap/Escape/focus restore.
- [x] Heading hierarchy audit.
- [x] Descriptive alt text.
- [x] Contrast verification.
- [x] Cursor behavior compatibility.
- [x] aria-current for nav state.

### 3) Performance and loading
- [x] Disable preserveDrawingBuffer if unnecessary.
- [x] DPR optimization strategy.
- [ ] Lazy-load 3D scene.
- [x] Static fallback for low-end/reduced-motion users.
- [ ] Defer non-critical scripts/features.
- [x] Compress/resize large gallery images.
- [ ] Modern formats + responsive media delivery.
- [x] Remove stale compiled assets.
- [ ] Set performance budgets (LCP/CLS/INP).
- [ ] Run Lighthouse regularly.
- [ ] Configure caching headers for immutable assets.
- [ ] Consider code splitting where feasible.

### 4) UX and information architecture
- [x] Include all major sections in nav.
- [x] Add mini case-study blocks per featured project.
- [x] Add consistent CTA placement.
- [x] Add concise top-fold value proposition.
- [ ] Add testimonials if available.
- [ ] Improve filtering/search (if portfolio grows).
- [x] Add project status tags.
- [x] Clarify role/timeline for team projects.
- [x] Add resume mirror link.
- [x] Add open-to-work statement.

### 5) Content quality and credibility
- [ ] Add proficiency/confidence indicators.
- [ ] Mark most-used production tools.
- [ ] Replace generic lines with concrete achievements.
- [x] Add measurable outcomes.
- [x] Add deep links to docs/case studies.
- [x] Add lessons learned per project.
- [x] Validate all external links.

### 6) Visual system and CSS quality
- [x] Fix invalid font-size declaration.
- [x] Align color-scheme with actual theme.
- [x] Add design tokens.
- [x] Reduce duplicate declarations.
- [x] Add linting/formatting pipeline.
- [x] Standardize heading scale/spacing.

### 7) Interaction and robustness
- [ ] Semantic controls for click-only elements.
- [ ] Audit history push behavior.
- [ ] Degrade animation loops safely in background tabs.
- [ ] Add graceful error states.
- [ ] Add skeleton/loading placeholders.

### 8) Security and privacy basics
- [ ] Add analytics privacy note if analytics enabled.
- [ ] Validate external embeds/resources.
- [ ] Remove unnecessary production debug logs.

### 9) Maintainability and repo hygiene
- [ ] Separate source/build outputs.
- [ ] Keep only current production artifacts.
- [ ] Expand README (setup/dev/build/deploy).
- [ ] Add contribution notes.
- [ ] Add CI build checks.
- [ ] Add dependency audit policy.

### 10) Testing and QA
- [ ] Responsive QA matrix (small mobile, large mobile, tablet, desktop).
- [ ] Accessibility QA checklist (keyboard, screen reader, contrast).
- [ ] Performance QA checklist (LCP, CLS, interaction smoothness).
- [ ] Broken-link checks for project/social/contact links.
- [ ] Hero/model fallback QA (including no-WebGL scenario).

---

## Sprint-ready execution board (optional)

## Sprint A - Foundation
- [ ] Metadata + social tags + canonical + schema.
- [ ] Accessibility semantics + focus states + skip link.
- [ ] Fix CSS invalid token + color-scheme alignment.
- [ ] 3D quick optimizations (buffer + DPR + fallback).
- [ ] Build artifact cleanup.

## Sprint B - Conversion
- [ ] Case-study upgrades for top projects.
- [ ] CTA and top-fold value proposition pass.
- [ ] Analytics funnel events.
- [ ] Link validation and content tightening.

## Sprint C - Quality system
- [ ] README and repo structure improvements.
- [ ] QA checklists formalized.
- [ ] CI checks and dependency policy.
- [ ] Visual regression baseline.

---

## Completion definition
A task is done only when:
- [ ] Implementation is merged.
- [ ] Manual QA passed on desktop + mobile.
- [ ] Accessibility spot-check passed.
- [ ] No critical regressions in core sections.
- [ ] Notes updated in this checklist.

---

## Notes log
- Date:
- What changed:
- Risks:
- Next actions: