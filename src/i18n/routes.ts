// Every page of the site. Each one is built once per locale by src/pages/[...path].astro.
export const pages = [
  { key: 'home', slug: '' },
  { key: 'shows', slug: 'shows' },
  { key: 'genres', slug: 'genres' },
  { key: 'howItWorks', slug: 'how-it-works' },
  { key: 'comingSoon', slug: 'coming-soon' },
  { key: 'faq', slug: 'faq' },
  { key: 'about', slug: 'about' },
  { key: 'contact', slug: 'contact' },
  { key: 'press', slug: 'press' },
  { key: 'creators', slug: 'creators' },
  { key: 'privacy', slug: 'privacy' },
  { key: 'terms', slug: 'terms' },
] as const;

export type PageKey = (typeof pages)[number]['key'];

export const slugOf = (key: PageKey) => pages.find((p) => p.key === key)!.slug;
