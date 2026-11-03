import { locales, defaultLocale } from './locales.mjs';
import { slugOf, type PageKey } from './routes';
import type en from './en.json';

export type Dict = typeof en;
export type Lang = (typeof locales)[number]['code'];

const dicts = import.meta.glob<Dict>('./*.json', { eager: true, import: 'default' });

export const getDict = (lang: string): Dict => dicts[`./${lang}.json`];

export const getLocale = (lang: string) => locales.find((l) => l.code === lang)!;

/** URL of a page in a locale, e.g. href('hi', 'shows') -> '/hi/shows/'. English has no prefix. */
export function href(lang: string, page: PageKey = 'home', hash = '') {
  const parts = [lang === defaultLocale ? '' : lang, slugOf(page)].filter(Boolean);
  return '/' + parts.map((p) => p + '/').join('') + hash;
}

/** Fill {placeholders} in a translated string. */
export const fmt = (s: string, vars: Record<string, string | number>) =>
  s.replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? `{${k}}`));

export { locales, defaultLocale };
