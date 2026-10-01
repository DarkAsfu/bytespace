# ByteSpace

Pixel-accurate Figma implementation of the ByteSpace marketing site, built with Next.js 16 (App Router), React 19 and Tailwind CSS v4.

The project reproduces the Figma designs at a **1440 × 1024** reference width and scales them down fluidly for tablet and mobile.

## Stack

| Concern     | Choice                                        |
| ----------- | --------------------------------------------- |
| Framework   | Next.js 16.3.6 (App Router, RSC)               |
| UI          | React 19.2                                     |
| Styling     | Tailwind CSS v4 (`@theme` tokens in CSS)       |
| TypeScript  | TS 5, `@/*` path alias                         |
| Linting     | ESLint 9 + `eslint-config-next`                |
| UI primitive| shadcn (`base-nova`) + Base UI, Lucide icons   |
| Fonts       | Poppins (Google), Satoshi & Clash Display (local) |

## Requirements

- Node.js **>= 20.9** (`next` engine requirement; verified on Node 24)
- npm (or any compatible package manager)

## Getting started

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Scripts

```bash
npm run dev     # dev server on :3000
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
npx tsc --noEmit  # typecheck (no dedicated script)
```

## Routes

| Route                  | File                            | Status                       |
| ---------------------- | ------------------------------- | ---------------------------- |
| `/`                    | `app/page.tsx`                  | Implemented (full landing)   |
| `/login`               | `app/(auth)/login/page.tsx`     | Implemented                  |
| `/register`            | `app/(auth)/register/page.tsx`  | Implemented                  |
| 404                    | `app/not-found.tsx`             | Implemented                  |
| `/search`              | `app/search/page.tsx`           | Placeholder                  |
| `/courses/[courseId]`  | `app/courses/[courseId]/page.tsx` | Placeholder                |
| `/creators/[creatorId]`| `app/creators/[creatorId]/page.tsx` | Placeholder              |

Landing page composition (`app/page.tsx`):

```
HeroBanner → LogoStrip → FeaturedCourses → LearningCategories
→ WhyBytespace → CreatorCta → Testimonials → SiteFooter
```

## Project structure

```
app/
  layout.tsx              # fonts, html/body shell
  globals.css             # Tailwind theme tokens (colors + font families)
  page.tsx                # home
  not-found.tsx           # 404 (hero + footer)
  fonts/                  # Satoshi (400/500/700), Clash Display Bold
  (auth)/                 # auth route group, shared layout
components/
  auth/                   # AuthCanvas, StageFrame, RegisterStage, SigninStage,
                          # AuthMobile, forms, cards, Decor
  home/                   # hero, navbars, course/category cards, sections, footer
  not-found/              # NotFoundHero
  ui/                     # shadcn primitives
lib/
  routes.ts               # typed href builders (routes.login(), …)
  typography.ts           # shared type scale + card class tokens
  utils.ts                # cn()
public/
  brand/                  # logo, bag, search, star, category icons, partner logos
  images/                 # hero, grid, courses, testimonials, section art
  images/auth/            # auth-only art (grid, avatars, decor masks)
  images/not-found/       # 404 grid overlay
```

## Design tokens

Declared in `app/globals.css` under `@theme inline`.

**Colors**

| Token                | Value     | Usage                        |
| -------------------- | --------- | ---------------------------- |
| `persian-blue`       | `#003BE2` | Primary brand / hero surface |
| `electric-lime`      | `#D4FB20` | CTAs, accents, 404 gradient  |
| `shuttle-50 … 950`   | `#F5F5F6` → `#242528` | Text & borders on dark |
| `black-700 / 950`    | `#4F4F4F` / `#000000` | Body copy on light |
| `progress-track`     | `#F6F6F6` | Progress bars                |

**Typefaces** — `font-poppins` (display), `font-satoshi` (UI/body), `font-clash-display` (logo lockup). Reusable classes live in `lib/typography.ts` (`type.heading`, `type.bodyL`, `type.logo`, …), so size/leading changes are made in one place.

## Responsive strategy

Two patterns are used deliberately:

1. **Fluid sections with a fixed reference width** (home, footer). Desktop art is positioned with `calc(50% ± n)` anchors and `lg:h-[1024px]` so it stays centred at any width; text scales through the `type.*` classes.
2. **Scaled fixed stages** (`components/auth/stage-frame.tsx`). The 1440 × 1024 art is rendered at natural size and CSS-transform scaled about its centre:

   | Viewport | Scale |
   | -------- | ----- |
   | 1024     | 0.71  |
   | 1280     | 0.86  |
   | 1366     | 0.93  |
   | ≥ 1440   | 1.00  |

Breakpoints in use: `sm` 640, `lg` 1024, `xl` 1280, plus `min-[1366px]` and `min-[1440px]` where the design needs an exact edge.

## Conventions

- **Links** always go through `lib/routes.ts`; no hard-coded hrefs.
- **Images** use `next/image` (local assets in `public/`). Decorative art is `aria-hidden` with empty `alt`.
- **Grid overlays** are absolutely positioned at `inset: -0.2% -0.14% 0 0` with `object-fit: cover` so the 2px lines stay anchored to the stage edges. Each page owns exactly one grid layer (`components/home/hero-banner.tsx`, `components/auth/auth-canvas.tsx`, `components/not-found/not-found-hero.tsx`).
- **Auth decor** (`components/auth/decor.tsx`) tints a matcap PNG with a `hard-light` layer masked by the image itself; images must be sized `100%` (an absolutely positioned `<img>` with `width: auto` falls back to its 2500px intrinsic width).
- `AGENTS.md` carries a Next.js agent note: this Next version has breaking changes, so check `node_modules/next/dist/docs/` before using unfamiliar APIs.

## Deployment

Deploy to [Vercel](https://vercel.com) or any Node host:

```bash
npm run build
npm run start
```

The `app/` directory is self-contained — no environment variables are required yet.
