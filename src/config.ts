// Site-wide settings that are not translated. Values marked PLACEHOLDER must be replaced before launch.

/** PLACEHOLDER: target launch date shown in the /coming-soon countdown. */
export const LAUNCH_DATE = '2027-03-01T00:00:00Z';

/** PLACEHOLDER: public inboxes. */
export const EMAILS = {
  hello: 'hello@zippo.com',
  support: 'support@zippo.com',
  press: 'press@zippo.com',
  studios: 'studios@zippo.com',
};

/** PLACEHOLDER: social profiles. */
export const SOCIALS = [
  { name: 'Instagram', url: 'https://instagram.com/' },
  { name: 'TikTok', url: 'https://tiktok.com/' },
  { name: 'YouTube', url: 'https://youtube.com/' },
  { name: 'X', url: 'https://x.com/' },
];

/** Web3Forms access key (public by design). Set PUBLIC_WEB3FORMS_KEY in .env and in Vercel. */
export const WEB3FORMS_KEY = import.meta.env.PUBLIC_WEB3FORMS_KEY ?? '';
