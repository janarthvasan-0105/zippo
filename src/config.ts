// Site-wide settings that are not translated. Values marked PLACEHOLDER must be replaced before launch.

/** PLACEHOLDER: target launch date shown in the /coming-soon countdown. */
export const LAUNCH_DATE = '2027-03-01T00:00:00Z';

/** PLACEHOLDER: public inboxes. */
export const EMAILS = {
  hello: 'hello@zippostreaming.com',
  support: 'support@zippostreaming.com',
  press: 'press@zippostreaming.com',
  studios: 'studios@zippostreaming.com',
};

/** PLACEHOLDER: social profiles. */
export const SOCIALS = [
  { name: 'Instagram', url: 'https://instagram.com/' },
  { name: 'TikTok', url: 'https://tiktok.com/' },
  { name: 'YouTube', url: 'https://youtube.com/' },
  { name: 'X', url: 'https://x.com/' },
];

/** Web3Forms access key. Public by design (it ships in every form's HTML); PUBLIC_WEB3FORMS_KEY overrides it. */
export const WEB3FORMS_KEY = import.meta.env.PUBLIC_WEB3FORMS_KEY || 'd883ff58-d16a-4763-b96b-66b1b9e215c1';
