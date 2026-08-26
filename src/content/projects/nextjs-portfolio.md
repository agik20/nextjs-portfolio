---
A personal portfolio website with editorial design aesthetic, featuring modular feature-based architecture, markdown-driven content system, and smooth Framer Motion animations. Built as both a showcase piece and a living project under active development.
---

## Architecture

| Layer | Technology | Purpose |
|-------|-----------|---------|
| Framework | Next.js 15 (App Router) | Route entrypoints and static generation |
| Language | TypeScript | Full type safety across all layers |
| Entities | src/entities/portfolio/ | Domain layer: data, types, repository |
| Features | src/features/home/sections/ | Home page section composition |
| Shared | src/shared/lib/ | Motion utilities, markdown parser, helpers |
| Content | src/content/projects/, src/content/learning/ | Markdown long-form content |
| Components | app/components/ | React UI components |
| Assets | assets/assets.js | Centralized static image registry |

---

## Content System

Projects and learning materials are managed through a four-layer content pipeline:

1. **Metadata** — `src/entities/portfolio/data/*.ts` (titles, slugs, categories, tech stacks)
2. **Content** — Markdown files in `src/content/` (long-form descriptions, charts, analysis)
3. **Mapping** — `content-map.ts` (slug → file path registry)
4. **Loading** — `content.server.ts` (server-side markdown parsing with Marked)

This separation ensures content authors can edit `.md` files without touching component code.

---

## Design System

### Typography

- **Headlines:** Cormorant Garamond (300, 400, 500, 600) — serif display
- **Body/UI:** Inter (300, 400, 500) — sans-serif

### Color Palette

| Token | Value | Usage |
|-------|-------|-------|
| cream | #f2ece4 | Main background |
| cream-light | #f7f3ee | Section backgrounds |
| paper | #ffffff | Card containers |
| ink | #1a1a1a | Primary text |
| charcoal | #2c2c2c | Secondary text |
| sage | #6b6560 | Muted text |
| mist | #c4bdb5 | Borders/dividers |
| stone | #e8e2da | Subtle backgrounds |
| dark-bg | #1c1a17 | Dark sections |

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS 4 |
| Animations | Framer Motion |
| Markdown | Marked |
| Build | Turbopack |
| Linting | ESLint |

---

## Impact

Demonstrates expertise in modern React ecosystem, editorial design system implementation, content-driven architecture with markdown rendering, and component-based TypeScript patterns. Clean build with Turbopack and zero type errors.
