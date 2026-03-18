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

## In progress
31. P1 UX and conversion improvements:
- Add downloadable resume mirror (backup to external drive link).

## Verification checklist for each implemented item
- [ ] No syntax errors.
- [ ] No runtime console errors.
- [ ] Keyboard flow works where relevant.
- [ ] Mobile and desktop rendering checked.
- [ ] Checklist status updated in docs/checklist.md.

## Next immediate implementation target
P1 item #31 onward in strict order (remaining UX and conversion improvements).
