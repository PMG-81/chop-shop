# Chop Shop V8 — Services and Hours Fix

This is the complete website, retaining all V7 barber-profile functionality.

## Changes
- **Services page** now renders live database services (previously only hard-coded HTML).
- **Home services** continue to render live database services.
- **Contact hours** render all seven days, even if all are marked closed (previously the page ignored hours when every day was closed).
- **Admin hours Save** now uses UPDATE on the seven pre-existing rows, not UPSERT, matching the existing RLS policies. It confirms each row was updated.
- Dynamic service booking buttons inherit the existing shop-level Booksy link if one is configured.

## First-time step (recommended)
In Supabase > SQL Editor, run `V8-IMPORT-EXISTING-SERVICES.sql` to import the three original services into the Admin editor. This won't overwrite any services you've already added or change any barbers. You can then edit/delete them directly in Admin.

## Deployment
Replace the contents of your GitHub repository with this site's updated files, keeping the same Cloudflare Pages build output directory. No new credentials or admin creation needed. Wait for Cloudflare deployment, then refresh `/admin` and `/services` and `/contact`.

If hours still fail, verify there are seven rows in `public.business_hours`; the original setup SQL inserted them. The Admin screen will now show an error rather than falsely confirming a save.
