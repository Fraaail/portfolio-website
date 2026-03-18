# Media Optimization Strategy

This strategy defines how image assets should be managed for quality, performance, and maintainability in this portfolio.

## Goals

- Keep above-the-fold media fast and visually sharp.
- Reduce offscreen image impact on LCP and bandwidth.
- Standardize dimensions and quality settings for future uploads.

## Format Policy

1. Primary delivery format: WebP.
2. Preferred next-step format for high-traffic hero/gallery assets: AVIF with WebP fallback.
3. Keep PNG only for transparent assets or pixel-art visuals that degrade in lossy conversion.

## Quality Targets

- Hero/banner images: quality 78-82 (WebP) or 45-55 (AVIF).
- Gallery/project preview images: quality 72-78 (WebP) or 40-50 (AVIF).
- Icon-like raster images: quality 80+ (or PNG if edges blur).

## Dimension Targets

- Full-width content images: max width 1600px.
- Card/gallery images: generate 480px, 768px, and 1200px variants.
- Thumbnail strips: max width 320px per image.

## Runtime Delivery Rules

1. Above-the-fold images should stay eager.
2. Non-critical/offscreen images should use lazy loading.
3. Non-critical images should use async decoding.
4. Add responsive sizes hints by layout context (`grid`, `full-width`, `cards`).

## Source/Build Workflow

1. Add optimized variants before build.
2. Reference responsive variants where source-level edits are available.
3. Keep only active production assets after each deploy update.
4. Re-check Lighthouse image opportunities after each major content update.

## Verification Checklist

- Offscreen images are lazy-loaded.
- Hero/critical images remain eager and stable.
- Gallery/card images use responsive sizing hints.
- No broken image links after optimization updates.
