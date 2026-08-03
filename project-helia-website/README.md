# Project Helia website

Next.js (App Router) site for Project Helia.

## Run it

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Codebase map

| File | What it does |
|---|---|
| [`app/theme.ts`](app/theme.ts) | **All the tunable stuff lives here**: colors, fonts, launch date, nav links, footer text, team roster, sponsor list. Change something here and it updates everywhere it's used. |
| [`app/page.tsx`](app/page.tsx) | The actual page — nav, hero, about, sponsors, team, footer sections. Pulls all copy/colors from `theme.ts` instead of hardcoding them. |
| [`app/layout.tsx`](app/layout.tsx) | Root layout: loads the Inter font and sets the page `<title>`. |
| [`app/globals.css`](app/globals.css) | Tailwind import + a couple of global CSS vars (mostly unused now that the page uses inline styles from `theme.ts`). |
| [`app/components/CountdownTimer.tsx`](app/components/CountdownTimer.tsx) | The DAYS/HRS/MIN/SEC countdown box. Reusable — pass it any `targetDate`. |
| [`app/components/TeamGrid.tsx`](app/components/TeamGrid.tsx) | Renders a grid of team member cards from a `members` array. |
| [`app/components/SponsorGrid.tsx`](app/components/SponsorGrid.tsx) | Renders a grid of sponsor logo boxes from a `sponsors` array. Give a sponsor a `logoUrl` and it'll show the image instead of the placeholder text. |

## Common edits

- **Change a color** (e.g. the cyan accent, background, text colors) → [`app/theme.ts`](app/theme.ts), the `COLORS` object.
- **Change the font** → [`app/theme.ts`](app/theme.ts) `FONT_FAMILY`, and swap the font import in [`app/layout.tsx`](app/layout.tsx) if you want a different Google Font.
- **Change the launch date/time** → [`app/theme.ts`](app/theme.ts) `LAUNCH_DATE`.
- **Add/remove nav links** → [`app/theme.ts`](app/theme.ts) `NAV_LINKS` (used by both the top nav and the footer).
- **Add/edit team members** → [`app/theme.ts`](app/theme.ts) `TEAM_MEMBERS`.
- **Add/edit sponsors** → [`app/theme.ts`](app/theme.ts) `SPONSORS`.
- **Contact email / footer blurb / copyright** → [`app/theme.ts`](app/theme.ts), the various `*_TEXT`/`*_DESCRIPTION` constants.
- **Instagram section** → currently a static placeholder mockup inline in [`app/page.tsx`](app/page.tsx) (search for "Instagram — placeholder"). Swap that block for the real embed once you have one.

## Notes

- Bootstrapped with `create-next-app`. Uses Tailwind for the base setup, but the imported design (`app/theme.ts` + `app/page.tsx`) uses inline styles pulling from theme constants instead of Tailwind classes, so colors/fonts stay in one place.
- `next.config.ts` pins `turbopack.root` to this folder — needed because a stray lockfile one level up in `~/` was confusing Next's workspace-root detection.
