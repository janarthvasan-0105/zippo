import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { locales, defaultLocale } from './src/i18n/locales.mjs';

// The production domain. Change it here (or set SITE_URL in Vercel) and every
// canonical URL, hreflang link, sitemap entry and OG image URL follows.
const site = process.env.SITE_URL ?? 'https://zippo.com';

export default defineConfig({
  site,
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter: (page) => !page.endsWith('/404/'),
      i18n: {
        defaultLocale,
        locales: Object.fromEntries(locales.map((l) => [l.code, l.hreflang])),
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
