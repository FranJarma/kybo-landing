---
name: Kybo
description: Expressive retro food culture in the pedestrian heart of Salta.
colors:
  blue: "#013e5e"
  orange: "#ff8000"
  cream: "#fff0d4"
typography:
  display:
    fontFamily: "var(--font-display), sans-serif"
    fontSize: "clamp(48px, 6.5vw, 96px)"
    fontWeight: 400
    lineHeight: 1.04
  headline:
    fontFamily: "var(--font-display), sans-serif"
    fontSize: "clamp(36px, 4.5vw, 64px)"
    fontWeight: 400
    lineHeight: 1.04
  title:
    fontFamily: "var(--font-display), sans-serif"
    fontSize: "clamp(26px, 2.5vw, 34px)"
    fontWeight: 400
    lineHeight: 1.04
  body:
    fontFamily: "Arial, Helvetica, sans-serif"
    fontSize: "17px"
    lineHeight: 1.6
  mobile-nav:
    fontFamily: "Arial, Helvetica, sans-serif"
    fontSize: "clamp(24px, 5vw, 32px)"
    lineHeight: 1.6
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

The supplied illustration (`public/images/kybo-art.webp`) anchors this world. Its sculptural food forms, orange curves, stepped arch and checkerboard are illustration, not evidence of a product for sale. Real products use Kybo's own photographs; original logos remain untouched. The visual system documents the implemented stylesheet, with the user's explicit brief supplying its descriptive language.

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

**Display Font:** Local HWT Artz (`public/fonts/hwt_artz.otf`), loaded through Next.js as `--font-display`, with sans-serif fallback.

**Body Font:** Arial, Helvetica, sans-serif.

**Character:** Heavy-looking, rounded retro display forms create the voice at normal font weight. Straightforward body type keeps descriptions, addresses, navigation and practical information readable.

### Hierarchy

- **Display:** The frontmatter display role is the desktop h1. The phone hero uses its own fluid size (`clamp(40px, 10.5vw, 64px)`), with a separate tablet size (`clamp(40px, 6vw, 64px)`).
- **Headline:** The frontmatter headline role is h2. Short lines and balanced wrapping suit section entrances.
- **Title:** The frontmatter title role is h3. Product names use a local size (`30px`, then `28px` on mobile).
- **Body:** The frontmatter body role is the desktop baseline. Mobile body copy becomes smaller (`16px`), paragraphs stay within a readable measure (`64ch`), and hero copy uses a larger size (`20px`, then `18px` on mobile).
- **Action labels:** Inherit body type and use bold weight (`700`); avoid introducing a separate decorative label font.
- **Mobile navigation:** Use the frontmatter mobile-nav role for section links in the full-screen menu. Its larger Arial labels distinguish destination choices from the unchanged action-label typography.

**The Two-Voice Rule.** Use HWT Artz for short expressive headings and Arial for information and interaction. Do not redraw the logo as display text.

## Layout

The shared centered container has a maximum width (`1320px`) and subtracts twice the page gutter from the viewport. Desktop sections use generous vertical spacing from the section token. The hero uses unequal shrinkable columns (`minmax(0, 1fr) minmax(0, 1.04fr)`) with a generous gap (`45px`), so its supplied illustration balances the copy without forcing symmetry. The artwork is limited to `560px` wide on desktop and keeps its complete `4/5` aspect ratio.

Products form a horizontal snapping rail with three visible items on large screens, two at the medium breakpoint (`1000px`), and one generous partial-width item below `701px` (`84%`). The rail gap is the frontmatter token. Location and social content use unequal two-column grids, becoming single-column below `800px` to avoid cramped content on portrait tablets.

Use content-driven breakpoints. Below `960px`, navigation opens as a full-viewport modal menu rather than a header dropdown; the header height changes from `90px` to `76px` through `--header-height`, and page gutters use `clamp(20px, 4.5vw, 40px)`. Its solid blue surface fills `100dvh`, scrolls independently in short viewports and keeps its own header sticky. Hero columns remain side by side on tablets, then stack below `640px`. On phones the artwork is limited to `280px` wide, with tighter copy spacing; the complete illustration remains visible in the page. Body type and section spacing change at `700px` (`16px` and `65px`). The menu-page heading uses its own phone size to prevent awkward wrapping.

Alternate broad blue and cream sections, with the orange menu band acting as a compact interruption. Keep enough space for rounded display forms and actual product silhouettes to remain legible.

## Elevation & Depth

Interface surfaces use no box shadows. Blue and cream fields, outlines, overlapping geometry and imagery establish hierarchy. Plastic Art depth belongs to the supplied illustration's satin volumes; it does not imply glossy or raised controls. Existing action hover movement is small (`translateY(-3px)`) and active feedback is brief (`scale(0.97)`).

**The Illustrated-Depth Rule.** Let the artwork carry sculptural volume; keep buttons and panels flat in material.

## Shapes

Art Deco stepped arches, retro waves and checkerboard geometry are the signature vocabulary within the supplied illustration. Repeated arched product-photo windows use large top corners (`180px 180px 16px 16px`), while the hours panel uses an outlined arch (`80px 80px 16px 16px`; mobile `65px 65px 16px 16px`). The illustration frame itself uses the panel radius from the frontmatter, preserving the complete artwork.

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

Cards are editorial groupings without enclosing shadows or additional panels. Each has an arched original product photo, HWT Artz name and short Arial description. Keep the real product visible when choosing cover versus contain. Image hover enlarges gently (`scale(1.035)`, `0.35s`); carousel arrows use the outlined circular control token, orange hover fill and small lift (`translateY(-2px)`). The scrolling rail supports touch and keyboard focus; end controls are disabled appropriately.

### Hours and Media Panels

The hours panel is cream-outlined on blue, with the established arched silhouette and frontmatter padding; mobile padding reduces to `26px`. Times use tabular numerals and right alignment. Media panels use flat blue surfaces, cream text and the panel radius. Load external video only after the existing explicit load action, preserving the fallback destination link.

### Menu Previews

Show the two original PDF pages (`public/images/menu/page-1.png` and `public/images/menu/page-2.png`) as full-width images with automatic height, preserving every page's proportions and contents. Stack them in a grid with the established rail gap and vertical margins (`32px`). Each linked preview uses the panel radius and opens the original PDF; hover adds a blue outline (`3px`) with a compact offset (`3px`). Keep the direct PDF open and download actions and the Fudo alternative alongside the previews.

### Focus and Motion

All focus-visible controls use a solid current-color outline (`3px`) with an offset (`6px`). Preserve the skip link. Current color ensures the ring remains visible on both blue and cream fields. The art entrance runs once (`0.8s`, `cubic-bezier(0.16, 1, 0.3, 1)`) and the rail may scroll smoothly. Under `prefers-reduced-motion: reduce`, disable CSS animations and transitions, use automatic page scrolling and immediate carousel movement.

## Do's and Don'ts

### Do:

- **Do** use the normative palette and the local HWT Artz/Arial pairing.
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
