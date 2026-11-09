# Chop Shop Barbershop — PMG Business Package Demo

A 3-page static, mobile-first demonstration site. Not affiliated with or approved by Chop Shop until the client authorizes it.

## Pages
- index.html — home, featured services and barber names
- services.html — service list, staff and Booksy booking buttons
- contact.html — location, walk-in info and sample inquiry form

## Deploy
Upload the CONTENTS of this folder (not the ZIP itself) to the root of a GitHub repository. Deploy as a static site on a suitable host. Images are in `/assets`.

## Before going live
1. Confirm authorization to use logo, photographs and branding.
2. Verify prices, barber roster, full weekly hours, phone number and services.
3. Obtain the business's Booksy website widget code from Booksy Biz > Business Settings > Online Booking > Your Website. Insert the official widget script on the site; test desktop/mobile. Direct Booksy buttons are configured in `script.js` as a fallback.
4. Configure the contact form with a real recipient and form service; the demo currently only opens an email draft without a destination address.
5. Confirm the Booksy URL and replace if necessary.
6. Set up domain/hosting, analytics and SEO metadata before production deployment.

## Commercial scope
Matches PMG's publicly listed $399 Business package: up to 3 pages, mobile responsive layout, contact form (production integration pending), basic SEO, revisions and launch assistance. Domain, hosting and third-party integrations may have separate costs. No custom booking backend.


## Update: barber portraits and icons
- Barber portrait cards are on both Home and Services & Barbers. Add approved JPG photos to `assets/barbers/`: `chris.jpg`, `junior.jpg`, `samuel.jpg`, `sam.jpg`, `mando.jpg`. Each card automatically uses the photo when present, or displays an initial-letter placeholder when missing.
- Arrow, hamburger menu, and close icons are SVG files in `assets/icons/`. No emoji or Unicode arrow glyphs are used for icons.
- The user-supplied transparent logo is installed as `assets/logo.png` on all three pages. The header image uses `object-fit: contain` without a background box, cropping, or blend mode.


## V4 barber profiles
- Five standalone pages are in `barbers/` and are linked from all crew cards on Home and Services.
- Centered avatar shares the exact portrait file with the card, followed by four independent work images, and a booking section.
- The fixed barber booking control fades when the main booking section is visible, and is never substituted with the general shop URL.
- See `MISSING-INFORMATION.md` for the full per-barber and business-wide checklist.
- Put individual URL strings into `barber-profiles.js`.
- Booking action remains visibly pending without an individual URL; no misleading redirect.
- All navigation/icon assets are local SVGs.

## V5 — 16 barber profiles
- Preserves V4 overall design, three main pages and general shop Booksy CTA links.
- Added Mac, Joey, Angel, Austin, Jay, Ale, Kevin, Bre, AJ, Rey, Daniel (16 total).
- All 16 crew cards link to standalone profile pages in `barbers/`.
- Every profile keeps a centered portrait, 4-photo grid, and floating-to-permanent personal booking CTA.
- Read `MISSING-INFORMATION.md` for the exact filenames and all client information still needed.
- `barber-data.json` is a tracking manifest for content; personal booking links are actually activated in `barber-profiles.js`.
