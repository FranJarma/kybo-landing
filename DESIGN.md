---
name: Kybo
description: Expressive retro food culture in the pedestrian heart of Salta.
colors:
  blue: "#013e5e"
  orange: "#ff8000"
  cream: "#fff0d4"
  card: "#fffaf0"
typography:
  carousel-headline:
    fontFamily: "var(--font-barlow-condensed), sans-serif"
    fontSize: "clamp(50px, 5vw, 72px)"
    fontWeight: 900
    lineHeight: 0.96
    letterSpacing: "0"
  product-title:
    fontFamily: "var(--font-barlow-condensed), sans-serif"
    fontSize: "32px"
    fontWeight: 700
    lineHeight: "35px"
    letterSpacing: "0"
  product-copy:
    fontFamily: "var(--font-barlow), Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "24px"
  display:
    fontFamily: "var(--font-barlow), Arial, Helvetica, sans-serif"
    fontSize: "clamp(48px, 6vw, 88px)"
    fontWeight: 800
    lineHeight: 1.04
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "var(--font-barlow), Arial, Helvetica, sans-serif"
    fontSize: "clamp(36px, 4.5vw, 64px)"
    fontWeight: 800
    lineHeight: 1.04
    letterSpacing: "-0.025em"
  title:
    fontFamily: "var(--font-barlow), Arial, Helvetica, sans-serif"
    fontSize: "clamp(26px, 2.5vw, 34px)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.015em"
  body:
    fontFamily: "var(--font-barlow), Arial, Helvetica, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.6
  lead:
    fontFamily: "var(--font-barlow), Arial, Helvetica, sans-serif"
    fontSize: "20px"
    fontWeight: 500
    lineHeight: 1.5
  navigation:
    fontFamily: "var(--font-barlow), Arial, Helvetica, sans-serif"
    fontSize: "17px"
    fontWeight: 600
    lineHeight: 1.6
  action:
    fontFamily: "var(--font-barlow), Arial, Helvetica, sans-serif"
    fontSize: "17px"
    fontWeight: 700
    lineHeight: 1.6
  mobile-nav:
    fontFamily: "var(--font-barlow), Arial, Helvetica, sans-serif"
    fontSize: "clamp(24px, 5vw, 32px)"
    fontWeight: 600
    lineHeight: 1.3
rounded:
  action: "100px"
  panel: "16px"
  circular: "50%"
spacing:
  page-gutter: "clamp(24px, 5vw, 80px)"
  rail-gap: "24px"
  section: "100px"
components:
  button-primary:
    backgroundColor: "{colors.orange}"
    textColor: "{colors.blue}"
    rounded: "{rounded.action}"
    padding: "14px 26px"
  button-primary-hover:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.blue}"
  button-small:
    backgroundColor: "{colors.orange}"
    textColor: "{colors.blue}"
    rounded: "{rounded.action}"
    padding: "10px 22px"
  button-menu:
    backgroundColor: "{colors.blue}"
    textColor: "{colors.cream}"
    rounded: "{rounded.action}"
    padding: "14px 26px"
  button-menu-hover:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.blue}"
  carousel-button:
    textColor: "{colors.blue}"
    rounded: "{rounded.circular}"
    width: "52px"
    height: "52px"
  navigation:
    backgroundColor: "{colors.blue}"
    textColor: "{colors.cream}"
  mobile-navigation:
    backgroundColor: "{colors.blue}"
    textColor: "{colors.cream}"
    typography: "{typography.mobile-nav}"
    height: "100dvh"
  hours-panel:
    textColor: "{colors.cream}"
    padding: "36px"
---

# Design System: Kybo

## Overview

**Creative North Star: "Kybo's retro art playground"**

Kybo combines Art Deco stepped arches, retro curves and strong rounded lettering with the satin volumes of Plastic Art. Large blue and cream fields create a calm structure around an expressive, youthful food brand. Controlled asymmetry and playful anti-art references give the imagery its character while the reading order stays clear.

The supplied illustration (`public/images/kybo-art.webp`) established this world and remains an available reference asset. The hero now uses the user's supplied portrait film (`public/videos/hero-95097ceb55.mp4`), with a still drawn from that same video. Its orange field, floating pearls and sculptural drink extend the brand's expressive material. Real product cards use Kybo's own photographs; original logos remain untouched. The visual system documents the implemented stylesheet, with the user's explicit brief supplying its descriptive language.

**Key Characteristics:**

- Broad blue and cream bands with confident orange actions.
- Rounded display lettering paired with readable body copy.
- Art Deco geometry and satin illustrated volumes.
- Controlled asymmetric art alongside truthful product photography.
- Flat interface surfaces, clear keyboard focus and restrained motion.

## Colors

Deep blue grounds the brand, warm cream opens breathing room, and vivid orange marks the next action. The frontmatter is normative and mirrors `app/globals.css`.

### Primary

- **Kybo Blue:** Header, hero, location and footer fields; body text on cream; inverse actions inside the orange menu band.

### Secondary

- **Kybo Orange:** Primary actions, text selection and the menu invitation band. This is a deliberate brand color, not an error or warning code.

### Neutral

- **Kybo Cream:** Main page background, text on blue and light action hover fills. Original product image backgrounds may remain white; do not recolor the photographs to force the palette.

**The Three-Color Rule.** Build interface hierarchy with the established blue, orange and cream; preserve additional colors already present in supplied artwork and photography.

## Typography

**Family:** Local Barlow (`public/fonts/barlow/`), loaded through Next.js as `--font-barlow`. It also supplies Tailwind's sans family. Arial and Helvetica are loading fallbacks, with Next.js adjusting fallback metrics.

**Menu reference:** The supplied PDF embeds Barlow ExtraBold (800) for category headings and Barlow Bold (700) for product names. Its large “menú!” word uses a different display face; the requested website treatment uses Barlow throughout the interface and keeps the original logo image.

**Character:** ExtraBold headings and Bold product names carry the menu's confident voice. Regular descriptions, Medium introductions and SemiBold navigation create contrast within one family. Keep the source copy's capitalization and the existing left alignment on phones.

**Delivery:** Five unmodified WOFF2 Latin subsets (400, 500, 600, 700 and 800), about 110 KiB total, are served locally with `font-display: swap`. Spanish accents and punctuation are included. The OFL license and source details live beside the fonts; there is no runtime Google Fonts request.

### Hierarchy

- **Display:** The frontmatter display role is the desktop h1. The phone hero uses its own fluid size (`clamp(40px, 10.5vw, 64px)`), with a separate tablet size (`clamp(40px, 6vw, 64px)`).
- **Headline:** The frontmatter headline role is h2. Short lines and balanced wrapping suit section entrances.
- **Title:** The frontmatter title role is h3, using Bold (700) with more leading than display titles. Product names use a local size (`30px`, then `28px` on mobile).
- **Body:** Regular (400) is the desktop baseline. Mobile body copy becomes smaller (`16px`), and paragraphs stay within a readable measure (`64ch`).
- **Introductions:** Medium (500), `20px/1.5` on desktop; hero copy becomes `18px` on smaller screens. The menu-page introduction shares this role.
- **Navigation and links:** SemiBold (600). Hero secondary links and the address use `16px`; the location-section address uses `24px`, then `21px` on mobile.
- **Action labels:** Bold (700), inherited size; keep the current button heights and spacing.
- **Mobile navigation:** Use the frontmatter mobile-nav role for section links in the full-screen menu, with SemiBold (600) and `1.3` line height. The action keeps its separate Bold role.
- **Footer statement:** ExtraBold (800), `clamp(42px, 5vw, 72px)/1.05`, with display tracking. Existing `13px` copyright and `14px` embed notes remain supporting metadata.

**The Typography Roles Rule.** Barlow carries the existing landing's reading and interaction roles. The approved Figma carousel uses Barlow Condensed Black (900) for its uppercase heading and Bold (700) for product names and customization. Both families are registered once through `next/font/local`; the carousel reuses the existing Barlow weights rather than declaring another family. Condensed's two local WOFF2 files and OFL license live in `public/fonts/barlow-condensed/`. The logo remains the original image.

## Layout

The shared centered container has a maximum width (`1320px`) and subtracts twice the page gutter from the viewport. Desktop sections use generous vertical spacing from the section token. The hero uses unequal shrinkable columns (`minmax(0, 1fr) minmax(0, 1.04fr)`) with a generous gap (`45px`), so its portrait video balances the copy without forcing symmetry. The film is limited to `380px` wide on desktop and keeps its complete `9/16` aspect ratio inside an arched window (`144px 144px 20px 20px`). Keep the copy and actions on the blue field.

Products use the approved Figma carousel: three complete cards from 1024px, two from 640px and one below 640px, within a maximum 1248px rail. Its gap remains 24px; the final page keeps the same complete-card count. Location and social content use unequal two-column grids, becoming single-column below `800px` to avoid cramped content on portrait tablets.

Use content-driven breakpoints. Below `960px`, navigation opens as a full-viewport modal menu rather than a header dropdown; the header height changes from `90px` to `76px` through `--header-height`, and page gutters use `clamp(20px, 4.5vw, 40px)`. Its solid blue surface fills `100dvh`, scrolls independently in short viewports and keeps its own header sticky. Hero columns remain side by side on tablets, then stack below `640px`. On phones the video follows the message and actions, is limited to `320px` wide and keeps its complete portrait proportions with `120px` upper corners. Body type and section spacing change at `700px` (`16px` and `65px`).

Alternate broad blue and cream sections, with the orange menu band acting as a compact interruption. Keep enough space for rounded display forms and actual product silhouettes to remain legible.

## Elevation & Depth

Interface controls use no box shadows. Blue and cream fields, outlines, overlapping geometry and imagery establish hierarchy. Plastic Art depth belongs to the supplied illustration's satin volumes; it does not imply glossy or raised controls. The menu book is the specific exception: paper curvature and restrained shadows communicate a physical page turn. Existing action hover movement is small (`translateY(-3px)`) and active feedback is brief (`scale(0.97)`).

**The Illustrated-Depth Rule.** Let the artwork carry sculptural volume; keep buttons and panels flat in material.

## Shapes

Art Deco stepped arches, retro waves and checkerboard geometry are the signature vocabulary within the supplied illustration. The social-photo window uses large top corners (`180px 180px 16px 16px`), while the hours panel uses an outlined arch (`80px 80px 16px 16px`; mobile `65px 65px 16px 16px`). The illustration frame itself uses the panel radius from the frontmatter, preserving the complete artwork.

Actions are pill-shaped, carousel controls are circular, and practical map, video and menu-preview frames use the restrained panel radius. Controlled asymmetry belongs in artwork and major compositions; controls retain clear alignment and familiar hit areas.

## Components

### Buttons

Flat, confident pills with readable labels and a directional icon when useful. The primary and compact variants use the frontmatter colors and padding, with minimum heights (`56px` and `46px`), bold labels and generous icon separation (`22px`). The orange menu banner uses the inverse blue action variant.

Hover changes the fill to cream and moves the action upward slightly; active presses scale it down. On the cream menu page, the primary action instead becomes blue with cream text on hover. State transitions use short durations (`0.2s`). Disabled native buttons become translucent (`opacity: 0.35`) with a default cursor.

### Text Links

Underlined links communicate secondary actions with a minimum target height (`44px`), icon gap (`12px`) and underline offset (`5px`). Their hover state thickens the underline (`2px`) while retaining the current text color. Navigation and footer links add an underline on hover.

### Navigation

A sticky blue header carries the unchanged original logo, cream text and one compact orange menu action. Desktop navigation is horizontal with unwrapped labels. Below `960px`, the trigger opens a Radix Dialog with a solid blue overlay and a full-viewport blue panel; the background is hidden from modal interaction and accessibility navigation, and body scrolling is locked. The panel uses the mobile-navigation frontmatter height, independent vertical scrolling, contained overscroll and bottom safe-area padding. Its sticky header repeats the same original logo and provides an explicit cream X with a generous square target (`48px`).

Section links use the mobile-nav typography role with minimum targets (`56px`). Center their vertical group within the remaining viewport, left-align it to the shared page gutter, and use a consistent gap (`16px`) and vertical padding (`32px`). The orange menu action keeps its regular minimum height (`56px`) and adds extra separation above it (`16px` in addition to the group gap).

Opening focuses the X, and keyboard focus loops within the dialog. Escape or the X closes it and restores focus to the trigger. Selecting a section closes the dialog and preserves destination-anchor focus rather than moving focus back to the trigger; same-page sections receive focus without an extra scroll. Other destinations follow the selected link. Resizing to desktop (`960px` or wider) also closes the dialog. Use the existing Radix Dialog implementation for modal semantics, focus management, hidden background and scroll locking.

`lib/navigation.ts` owns the labels and section IDs: `/#favoritos`, `/#encontranos` and `/#mundo-kybo`. Header links also work from `/menu`. Legacy hashes stay available as aliases at the same section positions. Use one scroll compensation on the document (`--header-height + 16px`) rather than adding a second offset on each section.

### Product Cards and Carousel

The current Figma page `113:666` is authoritative for this surface. Its 43 products belong to nine categories with counts 3/4/3/7/3/3/6/5/9. Cards use bone `#FFFAF0`, a 1.5px blue border and 16px corners. The order is name → complete transparent product over its ingredient-colored circle → description. Reserve 70px for the 32px/35px Condensed Bold title, 280px for the visual and 72px for 16px/24px Regular copy, with 10px gaps and 20px/24px block/inline padding. Minimum card height is 485px. Do not add image shadows, masks or blend modes: approved photographs already include their contact shadows. Use `object-fit: contain` and keep the 220px circle behind the photo, reducing it only when its container is narrower.

The rail shows one complete card below 640px, two from 640–1023px and three from 1024px, including its last page. Its maximum width is 1248px. Page gutters are 24px on phones; wider layouts reserve 64px per side for lateral controls until the maximum width produces larger symmetric gutters. Gaps are 24px. Controls are 44px on phones and 48px on wider screens. Navigation arrows rest on cream with blue outlines and turn orange only on enabled fine-pointer hover; touch does not retain an orange hover state. Filter buttons use real Barlow SemiBold (600), 15px labels and a 44px minimum height; the selected filter is orange. Horizontal filter scrolling retains inset keyboard focus rings.

On fine-pointer hover, the photograph scales to `1.045` over `350ms` and returns on exit; the card and circle retain their dimensions. A rounded SVG outline traces clockwise over `750ms` using the product's existing ingredient-circle color. The outline fades on exit. Reduced motion removes scaling and transitions, leaving immediate color feedback. Touch scrolling retains its existing behavior.

Match Figma's section rhythm: 32px/28px top/bottom padding and 20px group gaps on phones; 48px/40px padding and 24px gaps on wider screens. The rail supports native touch scrolling, Left/Right and Home/End keys, accessible position announcements and disabled end controls. Changing category remounts the rail at its start. There is no automatic advance; reduced motion uses immediate navigation. Catalog data, cards, filters and navigation live in separate files. Four approved drink photos use content-versioned filenames to avoid stale optimized images; original files remain available.

### Hours and Media Panels

The hours panel is cream-outlined on blue, with the established arched silhouette and frontmatter padding; mobile padding reduces to `26px`. Times use tabular numerals and right alignment. Media panels use flat blue surfaces, cream text and the panel radius. Load external video only after the existing explicit load action, preserving the fallback destination link.

### Menu Book

`/menu` fills `100dvh` with a compact blue toolbar, a cream reading area and persistent page controls. It uses the current supplied `public/menu.pdf` unchanged, with all nine pages rendered directly into uncropped, versioned WebP images. Reader images total about 2 MB; the original PDF is fetched only through its explicit download action. The toolbar contains the original logo linking home, PDF download and optional fullscreen. Per the user's simplification, omit the Fudo shortcut, visible title, file-size label and separate back arrow. Keep a screen-reader heading and descriptive control labels. Page arrows rest on cream with blue outlines and turn orange only on enabled fine-pointer hover, matching the carousel.

Fit complete pages within the available reading area: two open pages when its width reaches 800px, otherwise one. A route-specific HTML page-flip engine provides soft paper curvature and changing shadows over about `650ms`. Its isolated same-origin frame disposes the engine's animation loop on resize and unmount. Buttons, horizontal touch swipes, Left/Right and Home/End navigate; a select jumps to a spread and zoom opens an accessible, scrollable high-resolution page dialog. Fullscreen is available where the browser supports it. Reduced motion uses immediate page changes without decorative folds. If the effect fails, the static-page fallback retains navigation, zoom and PDF access. Actual extracted PDF text remains available to assistive technology.

### Focus and Motion

The landing uses Lenis for restrained wheel/trackpad smoothing (`lerp: 0.12`) while retaining native touch gestures and the existing CSS anchor behavior/header compensation. Deliberate clicks, pointer input and keyboard actions cancel wheel inertia so native links and focus can take over. The mobile dialog's body lock stops the engine; its scrollable panel and horizontal product rails retain native scrolling. Reduced motion and leaving the landing dispose the engine and its listeners, keeping `/menu` native.

All focus-visible controls use a solid current-color outline (`3px`) with an offset (`6px`). Preserve the skip link. Current color ensures the ring remains visible on both blue and cream fields. The supplied 10-second hero video is the opening focal motion: muted, inline and looped, with a neutral 44px pause/play control. Load and play only while visible; stop when offscreen or the tab is hidden, and preserve explicit pause. Reduced motion and data saving show the still poster until explicit playback. Keep that poster if the video cannot play. Under `prefers-reduced-motion: reduce`, disable CSS animations and transitions, use automatic page scrolling and immediate carousel movement.

## Do's and Don'ts

### Do:

- **Do** use the normative palette and local Barlow/Barlow Condensed roles.
- **Do** keep supplied artwork, original logos and real product photography in their established roles.
- **Do** use broad color fields, rounded forms and controlled asymmetric compositions.
- **Do** preserve visible current-color focus, mobile reflow and reduced-motion behavior.
- **Do** keep actual product silhouettes visible and image proportions credible.

### Don't:

- **Don't** generate replacement product photography or imply illustrated products are actual catalog items.
- **Don't** redraw, distort or recolor the original logos.
- **Don't** add interface shadows to imitate the illustration's Plastic Art material.
- **Don't** add unrelated colors or decorative fonts to the interface.
- **Don't** trade readable information and predictable navigation for visual disorder.
