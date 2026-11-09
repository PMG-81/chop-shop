# Chop Shop — V5 Pending Content / Client Checklist

The 3-page public site and all 16 barber profiles are included. Existing general shop booking links have not been changed. Individual profile booking links are disabled until supplied.

## Complete profile requirements

| Barber | Portrait | Work photos (4) | Short bio | Personal Booksy URL | Optional Booksy widget |
|---|---|---|---|---|---|
| Chris | Needed | 4 needed | Needed | Needed | Optional |
| Junior | Needed | 4 needed | Needed | Needed | Optional |
| Samuel | Needed | 4 needed | Needed | Needed | Optional |
| Sam | Needed | 4 needed | Needed | Needed | Optional |
| Mando | Needed | 4 needed | Needed | Needed | Optional |
| Mac | Needed | 4 needed | Needed | Needed | Optional |
| Joey | Needed | 4 needed | Needed | Needed | Optional |
| Angel | Needed | 4 needed | Needed | Needed | Optional |
| Austin | Needed | 4 needed | Needed | Needed | Optional |
| Jay | Needed | 4 needed | Needed | Needed | Optional |
| Ale | Needed | 4 needed | Needed | Needed | Optional |
| Kevin | Needed | 4 needed | Needed | Needed | Optional |
| Bre | Needed | 4 needed | Needed | Needed | Optional |
| AJ | Needed | 4 needed | Needed | Needed | Optional |
| Rey | Needed | 4 needed | Needed | Needed | Optional |
| Daniel | Needed | 4 needed | Needed | Needed | Optional |

**Totals:** 16 portrait images, 64 portfolio images, 16 short bios, 16 Booksy links. Optionally, up to 16 official booking widget codes.

## Exact file naming and replacement rules

Each profile uses the **same portrait** on the Home and Services crew card and on the individual profile. All images go under `assets/barbers/`.

- **Chris:** `chris.jpg` (portrait), `chris-work-1.jpg`, `chris-work-2.jpg`, `chris-work-3.jpg`, `chris-work-4.jpg` (portfolio)
- **Junior:** `junior.jpg` (portrait), `junior-work-1.jpg`, `junior-work-2.jpg`, `junior-work-3.jpg`, `junior-work-4.jpg` (portfolio)
- **Samuel:** `samuel.jpg` (portrait), `samuel-work-1.jpg`, `samuel-work-2.jpg`, `samuel-work-3.jpg`, `samuel-work-4.jpg` (portfolio)
- **Sam:** `sam.jpg` (portrait), `sam-work-1.jpg`, `sam-work-2.jpg`, `sam-work-3.jpg`, `sam-work-4.jpg` (portfolio)
- **Mando:** `mando.jpg` (portrait), `mando-work-1.jpg`, `mando-work-2.jpg`, `mando-work-3.jpg`, `mando-work-4.jpg` (portfolio)
- **Mac:** `mac.jpg` (portrait), `mac-work-1.jpg`, `mac-work-2.jpg`, `mac-work-3.jpg`, `mac-work-4.jpg` (portfolio)
- **Joey:** `joey.jpg` (portrait), `joey-work-1.jpg`, `joey-work-2.jpg`, `joey-work-3.jpg`, `joey-work-4.jpg` (portfolio)
- **Angel:** `angel.jpg` (portrait), `angel-work-1.jpg`, `angel-work-2.jpg`, `angel-work-3.jpg`, `angel-work-4.jpg` (portfolio)
- **Austin:** `austin.jpg` (portrait), `austin-work-1.jpg`, `austin-work-2.jpg`, `austin-work-3.jpg`, `austin-work-4.jpg` (portfolio)
- **Jay:** `jay.jpg` (portrait), `jay-work-1.jpg`, `jay-work-2.jpg`, `jay-work-3.jpg`, `jay-work-4.jpg` (portfolio)
- **Ale:** `ale.jpg` (portrait), `ale-work-1.jpg`, `ale-work-2.jpg`, `ale-work-3.jpg`, `ale-work-4.jpg` (portfolio)
- **Kevin:** `kevin.jpg` (portrait), `kevin-work-1.jpg`, `kevin-work-2.jpg`, `kevin-work-3.jpg`, `kevin-work-4.jpg` (portfolio)
- **Bre:** `bre.jpg` (portrait), `bre-work-1.jpg`, `bre-work-2.jpg`, `bre-work-3.jpg`, `bre-work-4.jpg` (portfolio)
- **AJ:** `aj.jpg` (portrait), `aj-work-1.jpg`, `aj-work-2.jpg`, `aj-work-3.jpg`, `aj-work-4.jpg` (portfolio)
- **Rey:** `rey.jpg` (portrait), `rey-work-1.jpg`, `rey-work-2.jpg`, `rey-work-3.jpg`, `rey-work-4.jpg` (portfolio)
- **Daniel:** `daniel.jpg` (portrait), `daniel-work-1.jpg`, `daniel-work-2.jpg`, `daniel-work-3.jpg`, `daniel-work-4.jpg` (portfolio)

## Where to insert remaining content

1. Save the portrait and work JPG files using the exact names above in `assets/barbers/`. A missing photo shows a designed placeholder; it does not break the card or profile.
2. Replace the short introduction text in the matching `barbers/<slug>.html` file under `.profile-bio`.
3. Put each person’s actual full HTTPS Booksy link in `barber-profiles.js` within `BARBER_BOOKSY`. Empty values leave personal booking buttons visibly pending, rather than sending users to the wrong barber.
4. If official individual Booksy widget code becomes available, it can be evaluated and added separately. It is **not** currently embedded, and iframe support is not assumed.

## Business-wide confirmations still needed

- Verify roster spelling and each barber’s professional name/title
- Confirm the shop-wide Booksy URL already configured on the site: `https://chopshoptx.booksy.com`
- Verify shop hours, services, prices and service descriptions
- Confirm shop phone, location, social media and any other contact details shown
- Configure live contact form delivery and approved destination email
- Confirm ownership/permission for all business photos, barber portraits, work photos and supplied logo
- Confirm client domain and hosting details, privacy requirements, and approval before launch

## Scope and pricing

- Three main pages (Home, Services & Barbers, Contact).
- Sixteen additional barber portfolio profile pages accessible through crew cards; they are public URLs, not password-protected, and not listed in primary navigation.
- Proposed client price from discussion: $399 Business package + $50 barber profile add-on = $449 total, subject to final agreement.
- Make clear ongoing content updates and any Booksy platform fees are separate if relevant.
