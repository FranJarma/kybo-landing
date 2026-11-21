# Product carousel

Source: [Carta Kybo / Landing](https://www.figma.com/design/C0M35OEPwFwn7aqaabqKaq/Carta-Kybo?node-id=113-666).

The landing catalogue contains the 43 products and nine categories from Figma. `lib/products.ts` owns names, descriptions, category membership, image paths and decorative colors. `ProductCard` renders the shared presentation; `ProductRail` owns scrolling and navigation; `ProductCarousel` owns category selection. Styles stay in a CSS module. No carousel dependency was added.

## Responsive behavior

- Below 640 px: one complete card, 24 px symmetric page gutters.
- 640–1023 px: two complete cards, reserved space for lateral controls.
- From 1024 px: three complete cards, with a maximum content width of 1248 px.
- Navigation advances by the visible card count and clamps at the end. A category change resets the rail. Native horizontal scrolling supports touch gestures and scroll snapping; left/right keys and labeled buttons also navigate. Controls are at least 44 px. No automatic advance; reduced motion is respected.

The four updated drinks use the supplied photos. Blueberry Bubble and Bubble Sunrise use the final revisions supplied later in the conversation. Transparent cutouts retain contact shadows and are optimized to local WebP assets. Images use `contain`; combinations stay fully visible. Barlow fonts are local, with the OFL license included. The downloadable PDF now contains nine menu pages and the same four updated drink photographs.

## Verification

- TypeScript: `tsc --noEmit` passed.
- ESLint for the changed TypeScript files passed.
- Catalogue checks passed: 43 unique IDs; category counts 3/4/3/7/3/3/6/5/9; all local image paths exist; responsive width arithmetic at nine viewport widths.
- Production compilation passed using `next build --no-lint` and a local placeholder for `RESEND_API_KEY`. No email requests were sent. Real deployments require the existing Resend configuration.
- Full-project lint remains blocked by existing formatting errors in `components/ui/dialog.tsx` and `components/ui/sonner.tsx`, and `any` in `app/api/types/fudo.ts`. These unrelated files were preserved.
- The PDF was rendered and the updated drink pages checked visually. Figma menu and desktop/mobile carousel states were also checked.
- Browser verification of the implementation is still pending: this execution environment refused Chromium's Unix socket creation, and the connected browser could not reach the local app. No browser test pass is claimed.

## Review before merging

Run the existing dev command with the project's normal environment. Check 320, 390, 640, 768, 1024 and 1440 px. Confirm the complete card count, equal gutters, no document overflow, all nine filters and counts, last-page alignment, disabled edge buttons, touch scrolling, keyboard navigation, reduced motion, loaded images, and the PDF link. Check the existing mobile navigation and page anchors remain usable. This branch has not been merged or deployed to production.
