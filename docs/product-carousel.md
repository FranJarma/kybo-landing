# Product carousel

Source: [Carta Kybo / Landing](https://www.figma.com/design/C0M35OEPwFwn7aqaabqKaq/Carta-Kybo?node-id=113-666). Existing PR: [#1](https://github.com/FranJarma/kybo-landing/pull/1).

The catalogue keeps 43 unique products and nine categories, with counts **3/4/3/7/3/3/6/5/9**. `lib/products.ts` owns product data, `ProductCard` owns presentation, `ProductCategoryFilters` owns category controls, and `useProductRail` plus `lib/carousel-navigation.ts` own scrolling and edge calculations. No carousel dependency was added.

## Corrections

- Removed the duplicate Regular-only Barlow declaration and the invalid `--font-display` fallback that made Condensed inherit ordinary Barlow. The existing local Barlow 400/500/600/700/800 files are preserved and included in Git. Real Condensed Bold700 and Black900 are registered once through `next/font/local`, with their OFL license.
- Matched current Figma typography: uppercase heading Black900 at72px desktop/50px mobile, product names Bold700 at32px/35px, body Regular400 at16px/24px, filters SemiBold600 at15px. The original Kybo logo is unchanged.
- Matched the 485px card rhythm:70px name,280px visual,72px description,10px gaps,20px/24px padding. Cards use bone #FFFAF0, blue #013E5E and the approved ingredient-colored circles. Photos use contain with their existing integrated contact shadows; no blend-mode workaround or extra shadow.
- Downloaded all41 unique approved Figma PNG sources and compared all43 catalogue entries with their local WebP versions. All match within normal lossy compression tolerance (opaque-pixel RGB mean difference below5/255; alpha mean difference below0.02/255). All43 circle colors also match Figma.
- Preserved every original photo. Bubble Sunrise, Blueberry Bubble, Kybo Tea and Coffee Iced Latte now use filenames containing their content hashes, so old optimized or browser-cached paths cannot show earlier opaque revisions.
- One complete card below640px, two from640–1023px and three from1024px. The rail is at most1248px wide with symmetric gutters. End navigation clamps to a complete final page; category changes reset the rail. Touch, Left/Right, Home/End, visible focus, accessible announcements and reduced motion remain supported. No autoplay, prices or purchase buttons.
- `/menu` previously displayed two stale previews although the PDF already had nine pages. It now shows nine uncropped, versioned WebP previews rendered directly from the unchanged current PDF, in1/2/3 columns. Each preview links to its PDF page; open, download and Fudo links remain available.

## Verification performed

| Check                                                      | Result                                                                                                                                                    |
| ---------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Node tests (`node --test tests/product-carousel.test.mjs`) | 7 passed: catalogue integrity, asset paths,1/2/3-card final pages, fractional widths, navigation and short categories                                     |
| TypeScript (`tsc --noEmit --incremental false`)            | Passed                                                                                                                                                    |
| Full-project ESLint (`eslint . --ext .ts,.tsx`)            | 0 errors;5 existing ordering warnings in unrelated files                                                                                                  |
| Full default Next.js production build                      | Passed with lint and type checks enabled; no `--no-lint` flag                                                                                             |
| Browser widths320/390/640/768/1024/1440                    | Passed: complete-card counts1/1/2/2/3/3, symmetric margins, no document overflow, all9 filters and full last pages                                        |
| Actual browser fonts                                       | CDP confirmed BarlowCondensed-Black, BarlowCondensed-Bold, Barlow-Regular and Barlow-SemiBold; no font404s or duplicate Barlow family requests            |
| Images                                                     | All43 loaded with transparent corners, correct aspect ratios and aligned visual slots; all approved sources/colors compared                               |
| Keyboard and motion                                        | Left/Right, Home/End, disabled ends and immediate reduced-motion navigation passed                                                                        |
| Native touch and mobile navigation                         | Swipe passed at390px; modal focus containment, Escape focus restoration and Encontranos destination focus passed                                          |
| Resize and PDF                                             | End-of-rail phone→desktop resize retained3 complete cards. PDF returned HTTP200, valid `%PDF-` and2332410 bytes;9 pages rendered and drink pages reviewed |
| Independent review                                         | Approved, no actionable findings                                                                                                                          |

Browser tests used local Edge/Chromium with viewport and touch emulation. They waited for scroll/focus completion rather than assuming synchronous native browser events. Screenshots were inspected against current Figma desktop/mobile frames. Local review artifacts remain ignored under `.impeccable/review/carousel/`.

## Validation fixes and remaining notes

Windows CRLF files conflicted with the formatter's default LF preference. `endOfLine:auto` now applies to formatting and the ESLint rule, including Next's cached lint configuration. Only generated/local review folders and Next's generated declaration file are excluded. No rules are disabled. The necessary existing blockers were fixed: missing semicolons in two UI wrappers, `unknown` instead of `any` for unused Fudo relationship values, and an ESM import for the Tailwind animation plugin.

Five existing non-blocking ordering warnings remain outside the changed carousel; Next also reports that its optional ESLint plugin is not configured. No build or browser checks remain blocked. No merge or production deployment was performed.
