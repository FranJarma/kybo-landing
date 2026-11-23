# Smooth scrolling throughout the landing

The user confirmed smooth wheel and trackpad scrolling throughout the landing. Existing native anchor scrolling and header compensation remain authoritative.

Use route-scoped Lenis 1.3.27 with a brief interpolation, native touch gestures and no transformed page wrapper. Cancel wheel inertia on deliberate interaction so browser anchors, focus and keyboard scrolling take over. Stop while the mobile dialog locks body scrolling; let its panel and horizontal product rails keep their own native scroll. Reduced motion uses the browser directly. Dispose listeners and animation frames when leaving the landing, including `/menu`.

- [x] Add the landing-only controller and preserve the native anchor path.
- [x] Verify wheel movement, anchors, keyboard, mobile navigation, horizontal rails, reduced motion and route cleanup in the browser.
- [x] Run existing tests, types/lint and production build.

Browser checks passed at 1440px and 390px, including a short 340px-high mobile dialog. A 600px wheel input produced 44 distinct intermediate positions and settled at its requested distance; repeated small trackpad deltas also settled correctly. Anchors retain their URL, focus and sticky-header clearance. Horizontal carousel input, keyboard PageDown, native touch, dialog background locking, internal panel scrolling, live reduced-motion changes and disposal/recreation across `/menu` all pass. The 14 existing tests, targeted lint, TypeScript and full production build pass; the five existing ordering warnings in unrelated files remain.

The requested commit also includes the latest supplied menu PDF (`77d869d451`), all nine regenerated reader images and the updated accessible combo text. The source PDF is preserved byte-for-byte. The compiled reader passes 1440px/390px checks for image version, page selection, last-page controls, zoom and no overflow; its downloaded PDF SHA256 matches the supplied file.
