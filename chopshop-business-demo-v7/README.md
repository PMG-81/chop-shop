# Chop Shop V7 — Cloudflare Pages + Supabase

Deploy the contents of this folder as the Cloudflare Pages output directory (or upload these files to the root of the connected GitHub repository). Framework: None; build command: blank.

Supabase public configuration is already set in `supabase-config.js`. The SQL schema was previously installed in the Chop Shop Supabase project; no new SQL is required.

## Admin

Open `/admin` and sign in using your Supabase Authentication account. Your user UUID must have been added to `public.chopshop_admins` (already done in setup).

Manage 16 initial barber profiles, portraits, up to any number of portfolio images, individual Booksy URLs, services and shop hours. General shop Booksy URL remains in `script.js`. Photos upload to bucket `chopshop-images` with 5 MB limit. Admin uses public key + RLS, no admin password is bundled.

## Clean routes

Cloudflare Pages serves `/admin`, `/services`, `/contact`, `/barbers/chris`, etc. from their HTML files. Dynamically created barbers beyond the original 16 use `/barbers/profile?slug=...` (also extensionless).

## Notes

- Public pages load live Supabase data and fall back to local demo barber placeholders if unavailable. Automated static snapshot publishing is **not implemented**.
- A project paused by Supabase may prevent updates until resumed.
- Publish as a demo until the client approves text, services, hours, images and booking details.
- Images uploaded to Supabase Storage may not display while Supabase is unavailable.
- Contact form is still a demo mailto form; configure an approved recipient/service before launch.
- For password reset, configure allowed redirect URL `/admin` in Supabase Auth URL settings.
- Any new barber can be added without coding; deleting an existing barber leaves its old static route deployed, but its page will display “Profile unavailable.”
