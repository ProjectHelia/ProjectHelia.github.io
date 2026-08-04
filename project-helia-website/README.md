# Project Helia website

Next.js (App Router) + Tailwind CSS v4 site for Project Helia.

## Run it

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Two files you'll edit most

| I want to change... | Go to |
|---|---|
| A **color**, the font, or section spacing | [`app/globals.css`](app/globals.css) — the `@theme` block at the top |
| Any **words**, the launch date, team members, sponsors, links | [`app/content.ts`](app/content.ts) |

Everything else is layout, and lives in the components below.

## Codebase map

| File | What it does |
|---|---|
| [`app/globals.css`](app/globals.css) | Design tokens (`@theme`) + the long decorative gradients (`@utility`). Every `--color-X` here automatically becomes `bg-X`, `text-X` and `border-X` classes. |
| [`app/content.ts`](app/content.ts) | All the site's copy and data — headings, paragraphs, nav links, team roster, sponsor list, launch date. No styling. |
| [`app/page.tsx`](app/page.tsx) | Assembles the page: hero, about (the REXUS/BEXUS banner), blog, sponsors, team. Mostly just section wrappers. |
| [`app/layout.tsx`](app/layout.tsx) | Loads the Inter font and sets the browser tab title. |
| [`app/components/NavBar.tsx`](app/components/NavBar.tsx) | Fixed top nav. Watches which section is on screen and highlights that link. |
| [`app/components/CountdownTimer.tsx`](app/components/CountdownTimer.tsx) | The DAYS/HRS/MIN/SEC box. Pass it any `targetDate`. |
| [`app/components/SectionHeading.tsx`](app/components/SectionHeading.tsx) | The small uppercase label + big title above each section. |
| [`app/components/TeamGrid.tsx`](app/components/TeamGrid.tsx) | Grid of team members. Give a member a `photoUrl` and it shows the photo instead of the striped circle. |
| [`app/components/SponsorGrid.tsx`](app/components/SponsorGrid.tsx) | Wrapped row of sponsor logos. Give a sponsor a `logoUrl` to show the logo instead of the name, and a `websiteUrl` to make it clickable. |
| [`app/components/SiteFooter.tsx`](app/components/SiteFooter.tsx) | Footer + the `#contact` anchor. |
| [`app/components/Logo.tsx`](app/components/Logo.tsx) | The logo image, used by both the nav and the footer. Image lives in `public/`. |

## Styling notes

Styling is Tailwind utility classes, not inline `style={{}}`. Two conventions worth knowing:

- **Faded colors use a slash**: `text-white/65` is white at 65% opacity, `bg-accent/15` is the cyan at 15%. No need for a separate token per opacity.
- **Long gradients live in CSS**, not the JSX — `hero-sky`, `stripes` and the `halo` hover glow are custom classes defined with `@utility` in `globals.css`, so the markup stays readable.

Every section carries `scroll-mt-20` so the fixed nav doesn't cover its heading when you jump to it. Smooth scrolling comes from `scroll-behavior: smooth` in `globals.css`.

Sections over a photo (blog, team) lay a `bg-ink/60` div over the image and pass `onPhoto` to `SectionHeading` to switch the text to white. Change that one number to show more or less of the photo.

The Instagram feed is a Juicer embed. Its cards are sized by the `zoom` on `.juicer-feed` at the bottom of `globals.css` — that scales the whole embed rather than fighting Juicer's own card CSS.

## Notes

- `next.config.ts` pins `turbopack.root` to this folder — needed because a stray lockfile in `~/` was confusing Next's workspace-root detection.
