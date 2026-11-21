# Kybo product carousel correction plan

> **For agentic workers:** Use superpowers:executing-plans to implement this plan inline, followed by one fresh review of the complete change.

**Goal:** Complete and verify PR #1 against the current Figma carousel, preserving local typography and all 43 products.

**Architecture:** Keep the catalogue in `lib/products.ts`; separate the card, category controls and scrolling hook. Use one local Barlow family and locally served Barlow Condensed Bold/Black. Reuse approved image files when they match Figma; version changed assets without deleting originals.

**Tech Stack:** Next.js 15, React 19, CSS Modules, native horizontal scroll, Node's test runner and browser CDP.

**Spec:** User request and Figma `C0M35OEPwFwn7aqaabqKaq`, page `113:666`, desktop `114:666`, mobile `114:1562`.

## Constraints

- Preserve untracked `public/fonts/barlow/`, existing content, links, PDF, 43 products and category counts 3/4/3/7/3/3/6/5/9.
- Below 640px: one full card; 640–1023px: two; from 1024px: three. Maximum rail width 1248px, symmetric margins and full final page.
- Barlow body/controls; Condensed Black 900 section heading and Bold 700 card names, as measured in Figma. No synthetic weights or duplicate Barlow declarations.
- Bone #FFFAF0 cards, blue #013E5E, orange #FF8000 selected category, original transparent products and contact shadows. No generated photos, blend-mode workaround, prices, purchase buttons or autoplay.
- Commit and push to the existing feature branch and update PR #1; no force push, merge or production deployment.

## Review focus

- Long names and complete combos at 320px; title/image/description alignment.
- Final partial page and viewport changes while scrolled to the end.
- Touch and keyboard navigation, visible focus, reduced motion and filter reset.
- Optimized image cache serving old opaque images under reused paths.
- Fonts/assets on a clean checkout and the unchanged mobile navigation/menu PDF.

## Work

- [x] Reproduce typography/spacing/cache issues and compare all images with approved Figma sources.
- [x] Add regression checks for category integrity and navigation end/resize behavior; observe failures before correcting code.
- [x] Correct real font weights, shared card layout and controls; split presentation/filter/navigation responsibilities.
- [x] Verify 320, 390, 640, 768, 1024 and 1440px, all categories/products, touch/keyboard/focus and PDF.
- [x] Run types, lint and full production build. Review staged changes, commit and push, and update PR #1.

## Evidence and rulings

- Initial branch and remote both `25d63b6`; no staged or modified tracked files. Only the existing Barlow directory is untracked. No AGENTS.md was found in the workspace or its parent chain.
- Figma uses Condensed Black 900 / 72px desktop and 50px mobile; card titles are Condensed Bold 700 / 32px / 35px. Current CSS declares only Condensed 800 and a duplicate Regular-only Barlow family, causing incorrect and synthesized weights.
- Figma card geometry is 485px: border 3px total + padding 40px + title 70px + visual 280px + description 72px + two 10px gaps.
- Execution and final push are explicitly authorized in the user request. All changes stay on `feature/product-carousel`.

- Final evidence:7 Node tests, full tsc, ESLint0 errors/5 pre-existing warnings, and default Next production build passed. The six-width production-browser matrix passed all categories, actual platform fonts,43 transparent images, complete ends, resize, keyboard, touch, mobile navigation and PDF access.
- Ruling: replace only stale menu previews, not the already-current PDF. Render9 new images from that exact document and keep old files.
- Native scroll and Radix focus restore are asynchronous; the harness waits for their final state. No product-code workaround was added for test timing.
- Fresh independent code review approved the final source and menu additions with no actionable findings.
