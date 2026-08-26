# Next.js Portfolio

Personal portfolio built with Next.js 15, React 19, Tailwind CSS 4, and Framer Motion.
Modular feature-based structure with clear separation between UI, metadata, and markdown content.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript 5.x |
| Runtime | React 19.1.0 |
| Styling | Tailwind CSS 4 |
| Animations | Framer Motion (motion v12) |
| Markdown | Marked v17 |
| Build | Turbopack |
| Linting | ESLint v9 |

## Project Structure

```
nextjs-portfolio/
├── app/                          # Route entrypoints only
│   ├── layout.tsx                # Root layout (fonts, scroll, metadata)
│   ├── page.tsx                  # Home page — orchestrates all sections
│   ├── globals.css               # Global CSS + Tailwind directives
│   ├── components/               # UI components (About, Contact, Footer, Header, etc.)
│   ├── project/[slug]/           # Dynamic project detail pages
│   └── learning/[slug]/          # Dynamic learning detail pages
│
├── src/
│   ├── entities/portfolio/       # Domain layer: types, repository, content loader
│   │   ├── data/                 # Metadata sources (projects, learning, services, meta)
│   │   ├── types.ts              # Shared TypeScript type definitions
│   │   ├── repository.ts         # Data access boundary for UI
│   │   ├── content.server.ts     # Server-side markdown file loader
│   │   ├── content-map.ts        # Slug -> markdown file path mapping
│   │   └── asset-keys.ts         # Service icon & tool icon key definitions
│   ├── features/home/sections/   # Home page section composition
│   └── shared/lib/               # Shared utilities (motion variants, markdown renderer)
│
├── src/content/
│   ├── projects/                 # Project long-form content (6 markdown files)
│   └── learning/                 # Learning material content (6 markdown files)
│
├── assets/                       # Static images & icons
│   └── assets.js                 # Centralized asset registry
│
├── public/                       # Public static files (background images, plots)
├── docs/                         # Architecture docs & manual
└── .gitignore                    # Git ignore rules
```

## Getting Started

```bash
npm install
npm run dev      # Start development server on http://localhost:3000
npm run build    # Production build with Turbopack
npm start        # Run production server
npm run lint     # ESLint check
```

## Content Workflow

1. **Update project/learning body text** in `src/content/**/*.md`
2. **Update cards metadata** in `src/entities/portfolio/data/*.ts`
3. **Keep UI logic** inside `app/components/` or move gradually into `src/features/`

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — Navbar, Hero, About, Skills, Projects, Learning, Contact, Footer |
| `/project/[slug]` | Project detail page — renders markdown content from `src/content/projects/` |
| `/learning/[slug]` | Learning material detail page — renders markdown content from `src/content/learning/` |

## Data Architecture

```
UI Components (app/components/)
       ↓
Repository (src/entities/portfolio/repository.ts)
       ↓
Data Sources (src/entities/portfolio/data/*.ts)
Markdown Files (src/content/**/*.md)
```

**Key files:**
- `repository.ts` — Single source of truth for all data queries (`getProjects`, `getServiceCapabilities`, etc.)
- `content-map.ts` — Slug-to-file mapping, keeps routes decoupled from filenames
- `content.server.ts` �� Server-side markdown reader with try-catch error handling
- `assets.js` — Centralized image import/export registry

## Current Projects (6)

| Project | Category | Status |
|---------|----------|--------|
| Exam Cheating Detection (YOLOv8) | Computer Vision & AI | Completed |
| CMDB AI Chatbot | AI Engineering & NLP | Completed |
| California Housing Prices | Data Science & ML | Completed |
| Lab Activity Recognition | Computer Vision & AI | Completed |
| Finance Tracker App | Full-stack Web Dev | Completed |
| Next.js Portfolio | Web Development & Design | In Progress |

## Key Metrics

| Metric | Value |
|--------|-------|
| Total Components | 8 |
| Dynamic Routes | 2 (`/project/[slug]`, `/learning/[slug]`) |
| Project Content Files | 6 |
| Learning Content Files | 6 |
| Service/Skill Pillars | 4 |
| Responsive Breakpoints | 5 (sm, md, lg, xl, 2xl) |

---

## Architecture Deep Dive

### Layer 1: Entry Points (`app/`)

**`layout.tsx`** — Root layout
- Sets up HTML scroll-smooth behavior
- Imports Google Fonts (Cormorant Garamond + Inter)
- Applies antialiased text and overflow-x-hidden body class
- Provides root metadata (title, description)

**`page.tsx`** — Home page orchestrator
- Imports all 8 section components from `src/features/home/sections`
- Renders in order: Navbar → Header → About → Skills → Projects → Learning → Contact → Footer

**`globals.css`** — Global styles
- Tailwind CSS base + components + utilities directives
- Custom design tokens (cream, ink, sage palette)
- Responsive breakpoint definitions

---

### Layer 2: Components (`app/components/`)

| Component | Purpose | State |
|-----------|---------|-------|
| `Navbar.tsx` | Fixed nav with mobile slide-out menu | `isScrolled`, `isMobileMenuOpen` |
| `Header.tsx` | Hero section — name, title, profile image, CTAs | None (static) |
| `About.tsx` | Profile summary, education timeline, tool icons | None (static) |
| `Skills.tsx` | 2×2 skill grid with modal for details | `selectedService` |
| `Project.tsx` | Dark-themed project card grid with hover effects | None (static) |
| `Learning.tsx` | Journal/learning material grid | None (static) |
| `Contact.tsx` | Form with Web3Forms API integration | `isSubmitting`, `status` |
| `Footer.tsx` | Multi-column footer with social links | None (static) |

---

### Layer 3: Domain (`src/entities/portfolio/`)

**`types.ts`** — Core type definitions
```typescript
interface PortfolioProject {
  title: string; slug: string; description: string;
  category: string; status?: string; bgImage: string;
  link?: string; technologies?: string[];
  features?: string[]; achievements?: string[];
}

interface ServiceCapability {
  icon: ImageDataType;
  title: string; description: string;
  professionalDetails: {
    businessValue: string; collaboration: string;
    keyAchievements: string[]; toolsTechnologies: string[];
  };
}
```

**`repository.ts`** — Data access layer
- `getProjects()` — returns all `PortfolioProject` entries
- `getProjectBySlug(slug)` — finds project by URL slug
- `getServiceCapabilities()` — maps skill data with actual icon images
- `getLearningMaterials()` — returns all learning content entries

**`content.server.ts`** — Server-side markdown loader
- Reads `.md` files from `src/content/` directory at build time
- Returns `Promise<string | undefined>` with error handling

**`content-map.ts`** — Slug-to-file routing map
- `projectContentMap`: slug → relative markdown path
- `learningContentMap`: slug → relative markdown path

**`asset-keys.ts`** — Type-safe icon key definitions
- `serviceIconKeys`: 4 service skill icons
- `toolIconKeys`: tech stack tool icons

---

### Layer 4: Shared Utilities (`src/shared/lib/`)

**`markdown.ts`** — Markdown → HTML renderer
- Uses `marked` library
- Single entry point for consistent rendering across project and learning detail pages

**`motion.ts`** — Reusable Framer Motion animation presets
- `viewportOnce`: `{ once: true, margin: "-100px" }`
- `containerRevealVariants`: staggered children animation (100ms delay)
- `itemRevealVariants`: fade-in + slide-up (0.5s duration, easeOut)

---

### Layer 5: Dynamic Routes

**`app/project/[slug]/page.tsx`**
- `generateStaticParams()` — pre-renders all 6 project routes at build time (SSG)
- `generateMetadata()` — dynamic SEO title and description per project
- Fetches markdown via `getProjectMarkdownContent(slug)` and renders with `renderMarkdown()`

**`app/learning/[slug]/page.tsx`**
- Same SSG pattern for 6 learning material routes
- Includes category filtering for related materials navigation

---

## Build & Deployment

### Static Site Generation (SSG)
All project and learning pages are pre-rendered at build time via `generateStaticParams()`. This produces static HTML files for optimal performance and SEO.

```bash
npm run build   # Compiles with Turbopack, generates all static routes
npm start       # Serves the production build
```

### Environment Variables
Create a `.env.local` file:
```bash
NEXT_PUBLIC_WEB3FORMS_KEY=your_web3forms_access_key
```

---

## Design System

### Colors
| Token | Value | Usage |
|-------|-------|-------|
| cream | `#f2ece4` | Main background |
| paper | `#ffffff` | Card containers |
| ink | `#1a1a1a` | Primary text |
| charcoal | `#2c2c2c` | Secondary text |
| sage | `#6b6560` | Muted text |
| dark-bg | `#1c1a17` | Project section background |

### Typography
- **Display:** Cormorant Garamond (300-600 weight) — serif for headlines
- **Body:** Inter (300-500 weight) — sans-serif for UI and body text

---

## Migration Status

Following `docs/architecture.md` migration plan:

- [x] Split data from UI (metadata in `src/entities/portfolio/data/*.ts`)
- [x] Split content from UI (markdown in `src/content/**/*.md`)
- [x] Convert all components from `.jsx` to `.tsx`
- [x] Update `.gitignore` to exclude implementation docs
- [x] Standardize all project content to consistent editorial format
- [x] Replace hardcoded Web3Forms key with `.env` variable (see `Contact.tsx`)

---

**Last updated:** August 2026
