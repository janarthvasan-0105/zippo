# Zippo — Landing Page & Marketing Site
Ticket: none yet (no tracker chosen)
Status: FINAL DRAFT: all questions answered; awaiting approval

## Goal
A fast, mobile-first marketing site for **Zippo**, a mini drama platform (short, vertical,
episodic dramas, 1–3 min per episode). The site has to make a visitor want to watch, and turn
that into one measurable action: **join the waitlist / download the app** (decided in Q1).

### Success criteria (measurable)
- Lighthouse mobile: Performance ≥ 90, Accessibility ≥ 95, SEO ≥ 95, Best Practices ≥ 95
- LCP < 2.5s on simulated 4G; page weight on the home page < 1.5 MB (video lazy-loaded)
- Primary CTA visible above the fold at 375px width, and repeated at least twice down the page
- No horizontal scroll from 320px to 1920px; single dark cinematic theme (no light mode in v1)
- All 12 locales build; Arabic renders right-to-left with mirrored layout; `hreflang` alternates on every page
- Every page has a unique title, meta description and Open Graph image; sitemap.xml + robots.txt

## Proposed site map (v1)
| Page | Job |
| --- | --- |
| `/` Home (landing) | Hook → what Zippo is → show previews → how it works → social proof → CTA |
| `/shows` | Teaser catalog: genre rows of vertical posters (placeholder art until real titles exist) |
| `/genres` | Browse by mood: Romance, Revenge, CEO, Thriller, Fantasy, Werewolf |
| `/how-it-works` | Free episodes, coins / subscription, devices |
| `/coming-soon` | Launch countdown + first slate of shows; drives waitlist signups |
| `/about` | Mission, story |
| `/faq` | Pricing, episodes, devices, coins/subscription questions |
| `/contact` | Support, partnerships, press |
| `/press` | Press kit: logos, screenshots, fact sheet, media contact (footer link) |
| `/creators` | "Work with us": short pitch-a-show page for studios/writers, footer link only; main nav stays viewer-only |
| `/privacy`, `/terms` | Legal placeholders (real text supplied by you/legal) |
| `404` | Branded, links back to home |

Main nav: Home · Shows · Genres · How it works · Coming soon · FAQ · [Join waitlist]
Footer: About · Contact · Press · Work with us · Privacy · Terms · language switcher

Every page exists in each locale at `/{lang}/…`; English is also served at `/`.

Home page sections, in order:
1. **Hero**: headline + subline, primary CTA, phone mockup playing a looping vertical trailer
2. **What is a mini drama**: three beats ("1-minute episodes", "Cliffhanger every time", "Watch anywhere")
3. **Trending shows**: horizontal scroll of vertical posters, genre chips (Romance, Revenge, CEO, Thriller, Fantasy…)
4. **How it works**: pick a show → watch free episodes → unlock the rest
5. **Social proof**: ratings, viewer counts, press logos, quotes (real data only — placeholders marked as such)
6. **For creators** teaser → `/creators`
7. **Final CTA** band with app-store badges / waitlist form
8. Footer: nav, socials, legal, language switch (if i18n)

## Phases

### Phase 0: Project skeleton
Verified when: `npm run build` succeeds and `npm run dev` serves a blank branded page.
Files to touch: `package.json`, `astro.config.mjs`, `tailwind` config, `src/layouts/Base.astro`, `.gitignore`, `README.md`

#### Step 0.1: Scaffold Astro + Tailwind, git init (Size: S)
- Acceptance criteria: builds clean; base layout with SEO head component; README with run commands
- Verification command: `npm run build`
- Files likely touched: as above
- Test seams: build output in `dist/`
- Blocked by: none (after approval)

### Phase 1: Design system & brand direction
Verified when: a `/styleguide` page (dev-only) shows colors, type scale, buttons, cards in both themes.
Files to touch: `src/styles/tokens.css`, `src/components/ui/*`, `public/` logo/favicon

#### Step 1.1: Tokens, type, logo wordmark, favicon (Size: M)
- Acceptance criteria: color + type tokens; WCAG AA contrast on all text; logo SVG + favicon
- Verification command: `npm run build` + manual review of `/styleguide`
- Test seams: styleguide page
- Blocked by: 0.1

#### Step 1.2: Core components — Button, Nav, Footer, PhoneMockup, PosterCard, SectionHeading (Size: M)
- Acceptance criteria: responsive 320–1920px; keyboard accessible; no layout shift
- Verification command: `npm run build`
- Blocked by: 1.1

### Phase 2: Home page (highest risk — the conversion page, done first)
Verified when: home page passes the success criteria above on Lighthouse mobile.

#### Step 2.1: Hero + phone mockup with looping trailer (Size: M)
- Acceptance criteria: video lazy, muted, `playsinline`, poster frame first; respects `prefers-reduced-motion`
- Verification command: `npx lighthouse http://localhost:4321 --preset=perf --form-factor=mobile` (via `npm run preview`)
- Blocked by: 1.2

#### Step 2.2: Remaining home sections (what-is, trending, how-it-works, proof, creators teaser, CTA) (Size: M)
- Blocked by: 2.1

#### Step 2.3: Primary CTA wiring (waitlist form or store badges + deep links) (Size: S)
- Acceptance criteria: form validates, shows success/error states, submits to the chosen provider (Q6)
- Blocked by: 2.2

### Phase 3: Secondary pages
#### Step 3.1: `/shows` from a content file (`src/content/shows/*.json`) (Size: M) — Blocked by: 1.2
#### Step 3.2: `/creators` + contact form (Size: S) — Blocked by: 2.3
#### Step 3.3: `/about`, `/faq` (FAQ schema markup), `/contact`, legal, 404 (Size: M) — Blocked by: 1.2

#### Step 3.4: `/genres`, `/how-it-works`, `/coming-soon`, `/press` (Size: M) — Blocked by: 1.2

### Phase 3b: Internationalization
#### Step 3b.1: i18n routing + string dictionaries + language switcher + RTL support (Size: M)
- Acceptance criteria: English copy extracted to `src/i18n/en.json`; switcher keeps the current page; `dir="rtl"` for Arabic
- Blocked by: 2.2 (do the routing early so pages are built locale-aware from the start)
#### Step 3b.2: Machine-translate the 11 other locales, each file marked `"_review": "needs native review"` (Size: M)
- Verification: build check that every locale has every key (missing key fails the build)
- Blocked by: Phase 3 copy final

### Phase 4: SEO, analytics, polish
#### Step 4.1: OG images, sitemap, robots, JSON-LD (Organization, MobileApplication, FAQPage) (Size: S)
#### Step 4.2: Analytics + CTA click events (Size: XS)
#### Step 4.3: Full Lighthouse + accessibility pass, cross-browser check (Size: S)
Blocked by: Phases 2–3

### Phase 5: Deploy
#### Step 5.1: Deploy to the chosen host, preview URL, then custom domain (Size: S)
- Verification: live URL passes Lighthouse targets
- Blocked by: 4.3, and **you** connecting the host account + domain DNS (third-party action, confirmed before measuring)

## Decision log
Gate 1 and gate 2 answered 2026-11-03.

| Decision | Chosen option | Why |
| --- | --- | --- |
| Stage / primary CTA | Pre-launch → "Join the waitlist" | User: Zippo is pre-launch |
| Audience | Viewers only | User. `/creators` kept as a footer-only "Work with us" page |
| Framework | Astro 5 + Tailwind CSS 4 | User-confirmed. Static output, near-zero JS, content collections |
| Rendering | Fully static (SSG) | Marketing site, no per-user data |
| Content source | Local JSON/Markdown in repo | No CMS in v1 |
| Package manager | npm | Already installed |
| Brand colors | User palette: `#021024` (page bg), `#052659` (surfaces), `#5483B3` (borders/muted), `#7DA0CA` (secondary text), `#C1E8FF` (primary text, CTA, glow) | User-supplied. CTA = `#C1E8FF` fill on `#021024` text. Contrast on `#021024`: `#7DA0CA` ≈ 7:1, `#5483B3` ≈ 4.8:1 (AA, so it is fine for body text but used mainly for decoration) |
| Theme | Dark only | The palette is a deep-navy-to-ice-blue ramp built for a dark cinematic look |
| Fonts | Playfair Display (headlines) + Inter (body), Noto Sans families for non-Latin scripts | User accepted the recommendation; self-hosted via Fontsource |
| Pages | Home, Shows, Genres, How it works, Coming soon, About, FAQ, Contact, Press, Work with us (`/creators`), Privacy, Terms, 404 | User accepted the 4 recommended extras |
| Locales | en, hi, es, pt-BR, id, th, vi, fil, ja, ko, zh-Hans, ar (RTL) | User accepted. Non-English copy machine-translated and flagged for native review |
| Domain | `zippo.com`, set via one `SITE_URL` config value | User-supplied; connected in Vercel by the user at deploy |
| Forms | Web3Forms (Formspree as fallback) | User allowed either; Web3Forms needs only an access key, no dashboard setup |
| Languages | Multi-language (i18n routing `/{lang}/…`) | User: "all languages"; the exact locale list is set in gate 2 |
| Hosting | Vercel + user's existing domain | User |
| Analytics | Vercel Web Analytics | Built into the host, cookieless (no consent banner), CTA events supported |
| Content / imagery | Real, high-quality licensed stock photos (Unsplash/Pexels) as poster/hero art; made-up sample titles, marked as placeholders | User. Every photo's source and license is recorded in `src/content/credits.json` |
| Assumptions 1–4 | Accepted | User |
| Astro version (execution) | Stay on Astro 5.18 for now | `npm audit` flags Astro ≤ 7.3.1; fix needs Astro 7.4.5 + Node 22.23, local Node is 20.17. Advisories target SSR/server islands/runtime images, unused by this static site. Upgrade is a README follow-up |
| Non-Latin fonts (execution) | System fonts instead of bundled Noto | Bundling CJK Noto adds large CSS to every page; OSes already ship good fonts for these scripts. Headings switch to sans for hi/th/ja/ko/zh/ar |
| Hero visual (execution) | Animated stills in a phone frame | No trailer footage exists; swap for `<video>` later |
| Social proof (execution) | Replaced with a "Why Zippo" features section | Pre-launch has no real numbers, and the plan forbids fake ones |
| Styleguide page (execution) | Dropped | Visual verification done with screenshots of real pages instead |

## Not yet specified
- Phase 2: real trailer footage, show titles, posters — placeholders until you supply them
- Phase 3: legal page text — must come from you
- Phase 5: user supplies a Web3Forms access key and connects `zippo.com` in Vercel (third-party actions; build pauses here and confirms both are done before measuring the live site)
- Risk: "Zippo" is a well-known existing trademark (Zippo lighters, which uses zippo.com). User confirmed ownership; domain lives in one config value so it is a one-line change if needed

## Always / Never
- Always: mobile-first, dark-first cinematic look, accessible, fast, real numbers only in social proof
- Never (v1): user accounts, login, video streaming/player app, payments, CMS, blog (unless Q5 adds it), copying any existing platform's branding

## Progress
| Phase | Status |
| --- | --- |
| 0 Skeleton | done |
| 1 Design system | done |
| 2 Home page | done |
| 3 Secondary pages | done |
| 3b i18n | done: 12 locales, build-time key check passes |
| 4 SEO/analytics | done: Lighthouse mobile (home/shows/ja coming-soon) perf 97–99, a11y 100, SEO 100, BP 96 (local-only analytics 404). Shows LCP 2.51s vs 2.5s target |
| 5 Deploy | blocked on user: Web3Forms key, GitHub repo + Vercel project, domain DNS |
