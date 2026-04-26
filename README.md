# Next.js Portfolio

Personal portfolio built with Next.js 15, React 19, Tailwind CSS 4, and Framer Motion.  
This project uses a modular feature-based structure with clear separation between UI, metadata, and markdown content.

## Tech Stack

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Marked (Markdown rendering)

## Project Structure

```text
app/                              # Route entrypoints only
src/
  entities/portfolio/
    data/                         # Metadata source (projects, learning, services, meta)
    repository.ts                 # Data access boundary for UI
    content.server.ts             # Server-side markdown loader
    content-map.ts                # Slug -> markdown file map
    types.ts                      # Shared domain types
  features/home/sections/         # Home page section composition
  shared/lib/                     # Shared utilities (motion + markdown + fallback)
  content/
    projects/*.md                 # Project long-form content
    learning/*.md                 # Learning long-form content
assets/assets.js                  # Asset registry only
docs/architecture.md              # Architecture decisions and migration notes
```

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run development server:
   ```bash
   npm run dev
   ```
3. Open `http://localhost:3000`.

## Content Workflow

- Update project/learning body text in `src/content/**/*.md`.
- Update cards metadata in `src/entities/portfolio/data/*.ts`.
- Keep UI logic inside `app/components` or move gradually into `src/features`.