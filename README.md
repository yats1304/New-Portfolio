# 🧑‍💻 Yatish Chaubal — Portfolio

A personal developer portfolio built with Next.js 16, showcasing projects, skills, and contact info. Designed with performance-first principles — custom fonts, noise textures, scroll-driven animations, and View Transitions — while keeping Lighthouse scores high.

> 🌐 **Live Site**: [https://yatishchaubal.online](https://yatishchaubal.online)

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Pages & Sections](#pages--sections)
- [Projects Showcased](#projects-showcased)
- [Performance & SEO](#performance--seo)
- [Getting Started](#getting-started)
- [Environment & Scripts](#environment--scripts)

---

## Overview

This portfolio serves as a personal landing page and project showcase for **Yatish Chaubal**, a full-stack developer based in Mumbai, India. The site is a single-domain Next.js App Router application with dedicated project detail pages, a resume viewer, and a contact section. Animations are powered by Motion (Framer Motion), with scroll-driven card reveals on the hero and projects grid.

---

## Features

| Feature                  | Details                                                                                         |
| ------------------------ | ----------------------------------------------------------------------------------------------- |
| **Animated Hero**        | Staggered text fade-in, activity status badge, scroll-to-reveal CTA                             |
| **Scroll-Driven Cards**  | Project cards animate from a stacked/rotated hero state into a grid on scroll using spring physics |
| **Projects Grid**        | 2×2 responsive grid with per-card color accents and hover effects                              |
| **Project Detail Pages** | Dedicated case study pages for each featured project                                            |
| **View Transitions**     | Native browser View Transitions API for smooth page navigation                                  |
| **Dark Footer**          | Full-bleed black footer with animated word slider ("build / create / design / make")            |
| **Sticky Floating Nav**  | Pill-style navbar that hides nav links on scroll-up, reveals on scroll-down                     |
| **Mobile Menu**          | Collapsible mobile navigation with smooth open/close transitions                                |
| **Resume Page**          | Inline resume viewer with download link                                                         |
| **Dark Mode**            | System-aware theme support via CSS variables                                                    |
| **Noise Texture Overlay**| Subtle `framer-noise.png` overlay at low opacity for visual depth                              |
| **Local Font**           | Switzer variable font loaded via `next/font/local` with `font-display: swap`                   |
| **Vercel Analytics**     | `@vercel/analytics` for real-time visitor insights                                              |
| **Microsoft Clarity**    | Session recording and heatmap integration via `Clarity` component                              |
| **JSON-LD Schema**       | Structured data (`LocalBusiness`) injected in layout for SEO                                    |
| **E2E Tests**            | Playwright test suite covering key page flows                                                   |
| **Zero UI**              | `@react-zero-ui/core` for attribute-driven UI state (mobile menu, scroll direction)            |

---

## Tech Stack

| Layer             | Technology                                      |
| ----------------- | ----------------------------------------------- |
| Framework         | Next.js 16 (App Router)                         |
| Language          | TypeScript                                      |
| Styling           | Tailwind CSS v4                                 |
| Animations        | Motion (Framer Motion) — `motion/react`         |
| UI State          | `@react-zero-ui/core` (attribute-driven state)  |
| Icons             | `react-icons` + custom `@react-zero-ui/icon-sprite` |
| Font              | Switzer Variable (self-hosted via `next/font/local`) |
| Analytics         | Vercel Analytics + Microsoft Clarity            |
| Testing           | Playwright                                      |
| Linting/Formatting| ESLint + Prettier + `prettier-plugin-tailwindcss` |
| Git Hooks         | Husky                                           |
| Deployment        | Vercel                                          |

---

## Project Structure

```
New-Portfolio/
├── app/
│   ├── layout.tsx                    # Root layout (font, TopBar, Footer, analytics, JSON-LD)
│   ├── globalsV2.css                 # Global styles and CSS variables
│   ├── fonts/
│   │   └── Switzer-Variable.woff2   # Self-hosted variable font
│   ├── images/                       # Optimised .webp project preview images
│   │   ├── frovo.webp
│   │   ├── arrow-vision.webp
│   │   ├── klimate.webp
│   │   └── hirenest.webp
│   ├── components/
│   │   ├── HeroV2.tsx               # Hero section (headline, badge, CTA, scroll indicator)
│   │   ├── HeroScrollClick.tsx      # Scroll-down affordance animation
│   │   ├── ProjectsSection.tsx      # Section wrapper for the projects grid
│   │   ├── ProjectsGrid.tsx         # Scroll-driven animated card grid (4 projects)
│   │   ├── ProjectCard/
│   │   │   ├── AnimatedCard.tsx     # Spring-physics card with scroll offset
│   │   │   └── Card.tsx             # Card visual (image, label, color accent)
│   │   ├── AnimatedText.tsx         # Intersection-triggered text animation
│   │   ├── AnimatedElement.tsx      # Generic animated wrapper (fade + slide)
│   │   ├── Icon.tsx                 # Icon sprite renderer
│   │   ├── Socials.tsx              # Social links (LinkedIn, GitHub, X)
│   │   ├── Footer/
│   │   │   ├── FooterV2.tsx         # Dark footer with contact info and word slider
│   │   │   └── TextSlider.tsx       # Animated word cycling ("build/create/design/make")
│   │   ├── TopBar/
│   │   │   ├── TopBarV2.tsx         # Floating pill navbar (logo + nav links + CTA)
│   │   │   ├── MobileMenu.tsx       # Collapsible mobile nav drawer
│   │   │   └── MobileMenuButton.tsx # Hamburger toggle
│   │   └── ui/
│   │       ├── ActivityDot.tsx      # Pulsing green "available" status dot
│   │       ├── CallToActionButton.tsx
│   │       └── Clarity.tsx          # Microsoft Clarity script injector
│   ├── projects/                    # Project detail/case study pages
│   ├── resume/                      # Resume page
│   ├── hooks/
│   │   ├── useOffset.ts             # Measures element offsets for card animation
│   │   ├── useMediaQuery.ts         # `useIsMobile` hook
│   │   └── useCompositorSpring.ts   # GPU-accelerated spring transform hook
│   ├── utils/
│   │   ├── lazy-ui.tsx              # LazyMotion wrapper + re-exported motion primitives
│   │   ├── Link.tsx                 # Wrapped Next.js Link with View Transition support
│   │   └── ViewTransition.tsx       # View Transitions API integration
│   └── ui/
│       └── Elements.tsx             # Shared typographic primitives (H2, etc.)
├── config/
│   └── siteConfig.ts               # All site-wide constants (URLs, meta, slugs, NAP)
├── public/
│   ├── yatish-logo.png
│   ├── Resume (Yatish_Chaubal).pdf
│   └── assets/
│       ├── framer-noise.png         # Noise texture overlay
│       └── bg-home-poster-optimized.webp  # OG image
├── tests/                          # Playwright e2e test specs
├── package.json
├── tsconfig.json
├── eslint.config.mjs
├── prettier.config.mjs
└── playwright.config.ts
```

---

## Pages & Sections

### Home (`/`)

The home page is composed of vertically stacked sections:

1. **Hero** — Name, role tagline, Mumbai location badge with an activity dot, and a CTA button. Text elements animate in with staggered fade + slide using Motion.
2. **Projects Grid** — Four project cards in a 2×2 grid. On page load the cards are stacked and rotated in a "deck" formation; as the user scrolls they spring outward into the grid using scroll-driven `useSpring` and compositor-layer transforms.
3. **Footer** — Full-bleed dark section with email, social links, and an animated word slider cycling through "build / create / design / make".

### Projects (`/projects`)

A dedicated projects listing page with links to individual case study pages for each featured project.

### Project Detail (`/projects/[slug]`)

Individual case study pages for:
- `frovo`
- `arrow-vision`
- `klimate`
- `hirenest`
- `travel`

### Resume (`/resume`)

Inline resume viewer with a downloadable PDF.

---

## Projects Showcased

| Project          | Type                       | Color Accent |
| ---------------- | -------------------------- | ------------ |
| **HireNest**     | Full-Stack Job Portal       | Orange       |
| **Frovo**        | Full-Stack App              | —            |
| **Arrow Vision** | Full-Stack App              | —            |
| **Klimate**      | Frontend / Weather App      | —            |

Each project card links to a dedicated case study page at `/projects/[slug]`.

---

## Performance & SEO

- **`next/font/local`** with `display: swap` eliminates layout shift from font loading.
- **`next/image`** used for all project preview images (`.webp`, optimised at build time).
- **Noise and border overlays** use `pointer-events-none` and `position: absolute` so they never affect layout or interactivity.
- **JSON-LD structured data** (`LocalBusiness` schema) is injected in the root layout via a `<script type="application/ld+json">` tag for Google rich results.
- **View Transitions API** provides native browser page transitions with zero JS animation overhead on navigation.
- **`@vercel/analytics`** for production traffic monitoring without adding cookie banners.
- **Motion's `LazyMotion`** with `domAnimation` keeps the animation bundle minimal — only the features actually used are loaded.
- **Zero UI** (`@react-zero-ui/core`) drives mobile menu open/close and scroll direction state via `data-*` HTML attributes, avoiding React re-renders for UI state.

---

## Getting Started

### Prerequisites

- **Node.js** ≥ 20
- **npm** ≥ 9

```bash
# 1. Clone the repository
git clone https://github.com/yats1304/New-Portfolio.git
cd New-Portfolio

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

The site will be available at **http://localhost:3000**.

---

## Environment & Scripts

No environment variables are required to run the project locally. All configuration is in `config/siteConfig.ts`.

| Command           | Description                                            |
| ----------------- | ------------------------------------------------------ |
| `npm run dev`     | Start Next.js dev server                               |
| `npm run build`   | Run `zero-icons` prebuild then compile for production  |
| `npm start`       | Serve the production build                             |
| `npm run lint`    | Run ESLint                                             |
| `npm run format`  | Format all files with Prettier                         |
| `npm run type-check` | Run TypeScript compiler check without emitting     |
| `npm test`        | Run Playwright end-to-end tests                        |
| `npm run test:ui` | Run Playwright tests with interactive UI               |
| `npm run clean`   | Remove `.next`, `node_modules`, and `package-lock.json`|

---

_Built with ❤️ using Next.js, Motion, Tailwind CSS, and TypeScript._
