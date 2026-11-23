# Kybo hero video

Replace the opening illustration with the supplied 720×1280 video. Keep the existing message, links, original logo and broad blue/cream composition. The supplied portrait film becomes the single focal motion sequence.

Use a complete 9:16 portrait window beside the copy on desktop, with an arched top that echoes the brand geometry. Stack below the message on phones. Preserve the original file and derive the still poster from its own frame.

Load the muted inline video only when visible and autoplay preferences allow it. Provide a 44px keyboard-operable pause/play control. Stop when offscreen or the tab is hidden; honor explicit pause. Reduced motion and data saving start with the still poster and allow deliberate playback. Keep the poster if playback fails. Use native video without another dependency or decorative entrance animation.

- [x] Inspect the supplied video and preserve its original proportions.
- [x] Replace the illustration with the arched video window and matching neutral control.
- [x] Verify desktop/mobile composition, playback, pause, offscreen behavior, reduced motion, fallback, keyboard focus and no overflow.
- [x] Run the existing tests, types/lint and production build.

Browser verification passed at 1440, 768, 390 and 320px. Native video decodes, stays muted/inline and keeps 9:16 proportions; the old hero illustration is absent. Pause persists through scrolling, keyboard Space toggles playback with visible focus, and offscreen/visibility handling stops and resumes appropriately. Fresh reduced-motion and data-saving contexts fetch no video before deliberate playback. A blocked video request preserves the still poster. No browser exceptions or horizontal overflow. The 14 existing tests, targeted lint, TypeScript and the full production build pass; the full build retains only five existing ordering warnings in unrelated files.

The same work also refreshes all nine menu images and `public/menu.pdf` from the user's updated PDF (`ac714844c7`). Browser checks confirm the downloaded SHA256, all new image URLs, desktop/mobile navigation and zoom; accessible text matches the updated content.
