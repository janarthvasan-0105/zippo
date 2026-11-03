// Single source of truth for supported locales. Plain JS so astro.config and scripts can import it.
// `code` is the URL segment and dictionary file name; `hreflang` is the BCP 47 tag used in HTML.
export const defaultLocale = 'en';

export const locales = [
  { code: 'en', hreflang: 'en', name: 'English', dir: 'ltr' },
  { code: 'hi', hreflang: 'hi', name: 'हिन्दी', dir: 'ltr' },
  { code: 'es', hreflang: 'es', name: 'Español', dir: 'ltr' },
  { code: 'pt-br', hreflang: 'pt-BR', name: 'Português (Brasil)', dir: 'ltr' },
  { code: 'id', hreflang: 'id', name: 'Bahasa Indonesia', dir: 'ltr' },
  { code: 'th', hreflang: 'th', name: 'ไทย', dir: 'ltr' },
  { code: 'vi', hreflang: 'vi', name: 'Tiếng Việt', dir: 'ltr' },
  { code: 'fil', hreflang: 'fil', name: 'Filipino', dir: 'ltr' },
  { code: 'ja', hreflang: 'ja', name: '日本語', dir: 'ltr' },
  { code: 'ko', hreflang: 'ko', name: '한국어', dir: 'ltr' },
  { code: 'zh-hans', hreflang: 'zh-Hans', name: '简体中文', dir: 'ltr' },
  { code: 'ar', hreflang: 'ar', name: 'العربية', dir: 'rtl' },
];
