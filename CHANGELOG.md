# Changelog

## v0.6.18 — 2026-07-29

- Reorganised Places into separate Café, Restaurant, Beach Club, Wellness, Shopping and Nightlife lists.
- Moved Hatch Uluwatu Sunday Market to Shopping, kept Hatch nightlife separate, moved all spas into Wellness, and removed Vasana.

## v0.6.17 — 2026-07-29

- Added Hatch Uluwatu’s Sunday Market and nightlife as separate interested options with current operating-time notes, event links and Instagram.

## v0.6.16 — 2026-07-29

- Added verified official website or Instagram links to all identified user-supplied places.
- Kept Nibs Uluwatu linkless because no reliable official account or site could be confirmed.

## v0.6.15 — 2026-07-29

- Added Nibs Uluwatu as an interested dessert choice, with venue details intentionally left for confirmation.

## v0.6.14 — 2026-07-29

- Added Ømbae Sunset Yoga at Ulu Cliffhouse to Monday, 3 Aug at 5 PM as a planned, unreserved Uluwatu activity.
- Added current public-class pricing, booking, venue and Ømbae Instagram links.

## v0.6.13 — 2026-07-29

- Added Sundays Beach Club as an interested Uluwatu breakfast or brunch option, with live booking, menu, Instagram and Maps links.
- Documented the adult IDR 800k daily-pass cost and IDR 500k food-and-drink credit separately.

## v0.6.12 — 2026-07-29

- Added the verified % Arabica Bali Uluwatu branch with official website, Instagram and Maps links.
- Did not add Canggu because it is not listed among the official Bali locations.

## v0.6.11 — 2026-07-29

- Added ULU Balinese SPA Club as an interested Canggu spa with live booking, price-list, Instagram and Maps links.
- Added a dated price survey and kept the final treatment cost explicitly subject to confirmation on the live booking page.

## v0.6.10 — 2026-07-29

- Corrected Saltwood to Saltwood Uluwatu, an interested brunch or sunset-dinner option.
- Removed the incorrect yoga and Bingin references.

## v0.6.9 — 2026-07-29

- Added Cashew Tree, Nourish and Suka Uluwatu as interested Uluwatu café and restaurant options.
- Left all three unplanned and unreserved, with live-route, menu and hours checks still to do.

## v0.6.8 — 2026-07-29

- Added Santanera in Canggu as the planned 1 Aug dinner, based on your shared map.
- Marked it clearly as planned only; no reservation has been made or stored.

## v0.6.7 — 2026-07-29

- Marked the 2–4 Aug Uluwatu stay as confirmed and added non-sensitive room and timing details.
- Kept confirmation files, booking and reference IDs, payment details and personal information out of Tripbook.

## v0.6.6 — 2026-07-29

- Synced the 31 Jul–4 Aug 2026 itinerary from the Tripbook handoff source.
- Added all five itinerary days, confirmed AirAsia AK368 and AK369 schedules, and the confirmed Talixo arrival transfer.
- Updated stays, transport guidance and travel documents while keeping booking references and ticket details private.
- Versioned the offline cache to include the synced itinerary data and renderer.

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
