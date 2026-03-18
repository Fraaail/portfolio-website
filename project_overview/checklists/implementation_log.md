# Chronological Implementation Log

This log tracks implementation order from docs/checklist.md and docs/improvements.md.

## Sequence rule
Always implement top-to-bottom in P0, then P1, then P2.

## Completed
1. P0 SEO metadata: homepage title strategy in index.html.
2. P0 SEO metadata: meta description in index.html.
3. P0 SEO metadata: Open Graph tags in index.html.
4. P0 SEO metadata: Twitter card tags in index.html.
5. P0 SEO metadata: canonical URL tag in index.html.
6. P0 SEO metadata: JSON-LD (Person + WebSite) in index.html.
7. P0 Accessibility: added skip-to-content link and visible focus states in index.html.
8. P0 Accessibility: added nav aria-current sync and keyboard parity patching in index.html bootstrap script.
9. P0 CSS correctness: fixed `portfolioHeadText` invalid font-size declaration via override in index.html.
10. P0 Performance quick wins: updated 3D canvas config in compiled bundle (`dpr:[1,1.5]`, `preserveDrawingBuffer:!1`).
11. P0 Accessibility fundamentals: converted primary clickable project preview container from non-semantic `div` to semantic `button` in compiled bundle.
12. P0 Accessibility fundamentals: expanded visible keyboard focus styles to cover all focusable controls (`a`, `button`, `role=button`, and `tabindex` elements).
13. P0 Accessibility fundamentals: added explicit keyboard parity handling for modal Escape-close path in index.html bootstrap script.
14. P0 Accessibility fundamentals: confirmed and retained active nav semantics using `aria-current` hash sync in index.html bootstrap script.
15. P0 Accessibility fundamentals: confirmed and retained skip-to-content link at document start.
16. P0 Accessibility fundamentals: implemented modal focus management (focus trap, Escape close support, and focus restoration).
17. P0 CSS and visual correctness: validated and retained fixed `portfolioHeadText` font-size tokenization via index.html override.
18. P0 CSS and visual correctness: aligned browser color-scheme metadata to `light` and kept root color-scheme declaration consistent.
19. P0 Performance quick wins: gated heavy 3D rendering in reduced-motion contexts by mounting a static fallback.
20. P0 Performance quick wins: added and retained timed fallback state when 3D canvas fails to mount.
21. P0 Build artifact hygiene: removed stale hashed `assets/index-*.js` and `assets/index-*.css` files, keeping only active entry artifacts.
22. P0 Build artifact hygiene: documented a single deployable build output policy in README.
23. P1 Media and asset optimization: documented image optimization strategy (format policy, quality ranges, target dimensions) in docs/media-optimization-strategy.md.
24. P1 Media and asset optimization: added runtime lazy-loading and async decoding for non-critical/offscreen images.
25. P1 Media and asset optimization: added responsive image sizing hints (`sizes`) for grid/full-width contexts where possible.
26. P1 Media and asset optimization: compressed/resized largest raster assets in-place (ImageMagick), reducing payload for key portfolio media.
27. P1 UX and conversion improvements: expanded nav IA by including the existing `tech-stack` (Library) section in primary navigation.
28. P1 UX and conversion improvements: injected consistent primary CTA links (`Let's Work Together` to `#contact`) across major sections.
29. P1 UX and conversion improvements: injected concise top-fold value proposition copy in the home section.
30. P1 UX and conversion improvements: added visible top-fold availability statement for full-time/freelance opportunities.
31. P1 UX and conversion improvements: added downloadable local resume mirror (`/resume-mirror.txt`) as backup beside external resume link.
32. P1 Case-study quality: added mini case-study structure to featured project cards (problem, role, process, constraints, outcomes).
33. P1 Case-study quality: added timeline and responsibility summaries in project card enhancements.
34. P1 Case-study quality: added project status tags (Live/Academic/Concept) for featured projects.
35. P1 Case-study quality: added deeper writeup links to project repositories from enhanced case-study blocks.
36. P1 Case-study quality: added what-I-learned reflections and measurable outcomes for strongest projects.
37. P1 Accessibility expansion: retained and verified reduced-motion behavior for heavy/looping interactions.
38. P1 Accessibility expansion: added heading hierarchy guard to ensure a top-level `h1` exists.
39. P1 Accessibility expansion: improved image alt text quality and treated decorative overlay icons as hidden from screen readers.
40. P1 Accessibility expansion: hardened contrast for secondary/body gray text and existing focus/hover states.
41. P1 Accessibility expansion: ensured custom cursor never intercepts pointer interactions and is disabled on coarse pointers.
42. P1 Reliability and analytics: implemented analytics funnel events for project, resume, and contact interactions.
43. P1 Reliability and analytics: added graceful media/network error handling with UI fallback messaging.
44. P1 Reliability and analytics: added loading skeleton behavior for heavy section imagery until load completes.
45. P1 Reliability and analytics: improved hash navigation behavior to reduce noisy history updates and preserve smooth scrolling.
46. P2 Content authority and growth: added insight/design note content and surfaced it in an in-page Insights section.
47. P2 Content authority and growth: added updates/changelog artifacts and linked them from the site.
48. P2 Content authority and growth: generated downloadable one-page case-study PDFs for featured projects.
49. P2 Content authority and growth: documented and linked an i18n readiness plan.
50. P2 Visual system and code quality: introduced global design tokens for color, spacing, typography, radius, and line-height.
51. P2 Visual system and code quality: reduced duplicated injected UI style patterns by consolidating repeated pill/button treatments.
52. P2 Visual system and code quality: standardized typography and spacing rhythm across global headings/body text.
53. P2 Maintainability and workflow: documented source/build output separation policy in `docs/repo-structure.md`.
54. P2 Maintainability and workflow: updated README with setup, local preview, development, build, and deploy guidance.
55. P2 Maintainability and workflow: added `CONTRIBUTING.md` with chronological workflow and quality gates.
56. P2 Maintainability and workflow: added automated CI build checks in `.github/workflows/build-check.yml` for critical files, active hashed entry artifacts, and roadmap doc presence.
57. P2 Maintainability and workflow: added dependency update and audit policy in `docs/dependency-audit-policy.md` and linked governance references in README.
58. P2 Security and privacy: added portfolio privacy disclosure artifact in `docs/privacy-note.md` and rendered an in-page analytics privacy note in contact area.
59. P2 Security and privacy: added periodic third-party link validation policy and scheduled CI workflow in `.github/workflows/third-party-link-check.yml`.
60. P2 Security and privacy: removed avoidable debug logging points from the active production bundle `assets/index-DZeOwcvB.js` via exact-string replacements.
61. P2 Full-domain alignment: reconciled completed implementation statuses in `docs/checklist.md` full-domain sections for accessibility, performance, UX, content quality, and visual system tasks.
62. P2 Visual system and code quality: added style linting/formatting workflow for maintained files via `.github/workflows/style-check.yml`, `.prettierrc.json`, `.prettierignore`, `.markdownlint.json`, and `docs/style-linting-workflow.md`.
63. UX content adjustment: removed injected `Let's Work Together` section CTA buttons and removed injected Insights section from `index.html` per current direction.
64. P2 Visual system and code quality: added visual regression checks for key sections via `.github/workflows/visual-regression.yml`, `visual-regression/check.js`, and `docs/visual-regression-workflow.md`.

## In progress
65. Full-domain checklist continuation:
- SEO and discoverability: add favicon variants + manifest.

## Verification checklist for each implemented item
- [ ] No syntax errors.
- [ ] No runtime console errors.
- [ ] Keyboard flow works where relevant.
- [ ] Mobile and desktop rendering checked.
- [ ] Checklist status updated in docs/checklist.md.

## Next immediate implementation target
Item #65 onward in strict order (remaining full-domain checklist tasks).
