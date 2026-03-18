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

## In progress
12. P0 Accessibility fundamentals:
- Add visible focus states.
- Ensure keyboard interaction parity.
- Add aria-current for active nav state.
- Add skip-to-content.
- Validate modal keyboard/focus behavior.

## Verification checklist for each implemented item
- [ ] No syntax errors.
- [ ] No runtime console errors.
- [ ] Keyboard flow works where relevant.
- [ ] Mobile and desktop rendering checked.
- [ ] Checklist status updated in docs/checklist.md.

## Next immediate implementation target
P0 item #11 onward in strict order (remaining Accessibility fundamentals), then any remaining CSS correctness items, then remaining performance quick wins.
