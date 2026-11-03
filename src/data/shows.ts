// PLACEHOLDER: made-up sample titles with stock photography. Replace with the real slate before launch.
import type { ImageMetadata } from 'astro';

export const genres = ['romance', 'revenge', 'ceo', 'thriller', 'fantasy', 'werewolf'] as const;
export type Genre = (typeof genres)[number];

export interface Show {
  slug: string;
  title: string;
  genre: Genre;
  episodes: number;
  /** 'launch' = available on day one; otherwise the premiere month (YYYY-MM). */
  release: 'launch' | `${number}-${number}`;
}

export const shows: Show[] = [
  { slug: 'midnight-contract', title: 'Midnight Contract', genre: 'ceo', episodes: 80, release: 'launch' },
  { slug: 'forgotten-heiress', title: 'Return of the Forgotten Heiress', genre: 'revenge', episodes: 92, release: 'launch' },
  { slug: 'love-in-low-tide', title: 'Love in Low Tide', genre: 'romance', episodes: 64, release: 'launch' },
  { slug: 'silver-moon-alpha', title: 'Silver Moon Alpha', genre: 'werewolf', episodes: 75, release: 'launch' },
  { slug: 'seven-floors-down', title: 'Seven Floors Down', genre: 'thriller', episodes: 58, release: 'launch' },
  { slug: 'crown-of-blue-fire', title: 'Crown of Blue Fire', genre: 'fantasy', episodes: 70, release: 'launch' },
  { slug: 'ashes-wear-white', title: 'Ashes Wear White', genre: 'revenge', episodes: 66, release: 'launch' },
  { slug: 'billionaires-night-shift', title: "The Billionaire's Night Shift", genre: 'ceo', episodes: 84, release: 'launch' },
  { slug: 'paper-hearts-glass-city', title: 'Paper Hearts, Glass City', genre: 'romance', episodes: 60, release: 'launch' },
  { slug: 'howl-before-dawn', title: 'Howl Before Dawn', genre: 'werewolf', episodes: 72, release: 'launch' },
  { slug: 'static-on-line-two', title: 'Static on Line Two', genre: 'thriller', episodes: 50, release: 'launch' },
  { slug: 'tidebound-princess', title: 'The Tidebound Princess', genre: 'fantasy', episodes: 68, release: 'launch' },
  { slug: 'letters-to-nobody', title: 'Letters to Nobody', genre: 'romance', episodes: 60, release: '2027-04' },
  { slug: 'glasshouse-girl', title: 'Glasshouse Girl', genre: 'revenge', episodes: 72, release: '2027-05' },
  { slug: 'the-long-field', title: 'The Long Field', genre: 'thriller', episodes: 55, release: '2027-06' },
];

const photos = import.meta.glob<{ default: ImageMetadata }>('../assets/photos/*.jpg', { eager: true });

export const photo = (slug: string) => photos[`../assets/photos/${slug}.jpg`].default;

export const showsIn = (genre: Genre) => shows.filter((s) => s.genre === genre);
