# Zippo: marketing site

Pre-launch landing page and marketing site for **Zippo**, a mini drama platform (vertical, one-minute episodes).
Static site built with Astro 5 and Tailwind CSS 4, in 12 languages, deployed on Vercel.

## Run it

Requires Node 20.3+ (Node 22.23+ once Astro is upgraded, see below).

```sh
npm install
npm run dev        # http://localhost:4321
npm run build      # checks translations, then builds to dist/
npm run preview    # serve dist/ locally
npm run og         # regenerate public/og.png (social share image)
```

The forms post to Web3Forms with the key in `src/config.ts` (public by design); `PUBLIC_WEB3FORMS_KEY` in `.env` overrides it.

## Where things live

| What | Where |
| --- | --- |
| Pages (one view per page) | `src/views/` |
| Routing: every page × every locale | `src/pages/[...path].astro`, page list in `src/i18n/routes.ts` |
| Languages | `src/i18n/locales.mjs` (list), `src/i18n/<code>.json` (copy) |
| Brand colors and fonts | `src/styles/global.css` (`@theme`) |
| Sample shows | `src/data/shows.ts`, photos in `src/assets/photos/` |
| Launch date, emails, socials, form key | `src/config.ts` |
| Production domain | `astro.config.mjs` (`site`) or the `SITE_URL` env var |

## Translations

`en.json` is the source. Every other locale must have exactly the same keys, array lengths and `{placeholders}`.
`npm run build` runs `scripts/check-i18n.mjs` first and fails if any file drifts.
All non-English files are machine-translated and marked `"_review": "machine translation, needs native review"`.
Change the marker to `"reviewed"` once a native speaker has checked a file.

To add a page: add it to `src/i18n/routes.ts`, create a view in `src/views/`, register it in `src/pages/[...path].astro`,
and add its copy to all 12 JSON files.

## Before launch: placeholders to replace

- **Shows**: titles in `src/data/shows.ts` are made up; photos are Unsplash stock (sources in `src/content/credits.json`). Every poster shows a "Sample" badge.
- **Launch date** for the countdown, **emails** and **social links**: `src/config.ts`.
- **Legal text**: `legal.privacy` and `legal.terms` in the JSON files (pages show a placeholder notice).
- **Logo**: `public/favicon.svg` and `public/brand/zippo-logo.svg` are a starter mark.
- **Hero video**: `src/components/PhoneMockup.astro` cycles stills; swap in a real vertical trailer when one exists.

## Deploy (Vercel)

1. Push this repo to GitHub and import it in Vercel (framework preset: Astro, auto-detected).
2. No environment variables are required. Set `SITE_URL` only if the domain is not `https://zippostreaming.com`.
3. Enable **Web Analytics** in the Vercel project (the site already loads its script in production).
4. Add `zippostreaming.com` (and `www.zippostreaming.com`, redirecting to it) under Project → Settings → Domains and follow the DNS instructions.

## Known follow-up

`npm audit` flags Astro ≤ 7.3.1. The advisories concern server rendering, server islands and runtime image handling,
none of which this static site uses. The fix is Astro 7.4.5, which needs Node 22.23+; upgrade once Node is updated locally.
