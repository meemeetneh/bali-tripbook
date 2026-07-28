# Changelog

## v0.6.5 — 2026-07-29

- Completed the locked Airbnb Cereal visual system across Hotels, Flights, Travel Docs, Packing, Emergency and My Picks.
- Refined the Home, Places, place-detail, itinerary and hotel layouts to their approved mobile reference patterns.
- Replaced unsupported glyph fallbacks with consistent inline SVG icons for Hotels, Packing, Travel Docs and Emergency.
- Ensured title-and-icon pairs remain on one line across the shared page headers; shortened the Travel Docs title for compact screens.
- Added interactive packing progress and retained saved-place behaviour through localStorage.
- Updated the PWA cache version and app shell for all new layouts, fonts, styles and scripts.

## v0.6.4 — 2026-07-28

- Added the supplied licensed Airbnb Cereal font files and made them the app-wide type family.
- Added the locked Home-screen visual system: coral, charcoal, thin icons, quiet shadows, compact cards and four-tab navigation.
- Applied the shared Airbnb Cereal system to every existing page and versioned the offline cache for the new assets.

## v0.6.3 — 2026-07-28

- Established the app-wide Inter type scale: 300 for supporting copy, 400 for standard UI and 500 for emphasis; no UI text exceeds 500.
- Reduced header, section-label, card-title, place-row and itinerary typography to preserve more usable space.
- Changed coral metadata labels to sentence case with tighter leading.
- Reduced Places category-tile height and venue-row density.
- Removed the itinerary day-progress panel, compacted date cards and restored its persistent bottom navigation.

## v0.6.2 — 2026-07-28

- Switched the entire interface to locally hosted Inter (400, 500, 600 and 700).
- Added Inter to the offline app shell, so the chosen typography remains available without a network connection.
- Corrected the Home bottom navigation grid from five slots to four, matching its four navigation items.

## v0.6.1 — 2026-07-28

- Realigned the interface to the locked UI system in `/ui system`.
- Applied the locked white canvas, charcoal typography, coral action treatment, soft-gray surfaces, large corner radii and lighter card shadows across the app.
- Reworked Places into the locked search, category and compact venue-row pattern.
- Reworked place details into an image-led screen with an overlapping information sheet.
- Reworked the itinerary into the locked day-strip and compact timeline layout.
- Versioned the offline cache so the new stylesheet replaces the previous preview styling.

## v0.6 — 2026-07-28

- Added the Anasera Villas detail page with stay overview, maps, arrival-pickup guidance, contact guidance and pre-arrival notes.
- Added dedicated Breakfast, Coffee, Dinner, Yoga and Spa discovery pages.
- Added a reusable place-detail route with hero imagery, descriptions, recommendations, hours, price ranges, scooter estimates, Google Maps and persistent saves.
- Updated My Picks to show and remove saved places.
- Converted the itinerary to activity timeline cards with time, duration, travel, notes and maps actions.
- Improved the service worker with a v0.6 app shell, navigation fallback and runtime caching for viewed images.
- Kept unverified flight and yoga logistical details explicitly unconfirmed.
