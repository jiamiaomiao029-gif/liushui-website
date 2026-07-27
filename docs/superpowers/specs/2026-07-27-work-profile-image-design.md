# Work Profile Image Replacement

## Goal

Replace only the desktop image beside the "我能帮你解决的事。" heading with the supplied portrait while preserving the existing third work-card image.

## Design

- Add the supplied 1080 x 1620 JPEG as `public/images/work-profile.jpg`.
- Change `works.photo` in `src/content.ts` from `/images/work-3.png` to `/images/work-profile.jpg`.
- Keep the current caption, work-card data, layout, and 3:2 `object-fit: cover` frame unchanged.
- Do not overwrite `work-3.png`, because it remains the image for the "内容系统搭建" card.

## Verification

- Confirm the new asset is a valid non-empty JPEG and is copied into `dist/images/` by the production build.
- Run `npm run build`.
- Verify the Work section at a desktop viewport: the new portrait appears beside the heading, the third card still uses `work-3.png`, and the layout has no overlap.
- Commit only the design, new image, and single content-path change, then push to `main`.
