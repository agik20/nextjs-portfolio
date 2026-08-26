---
A personal portfolio website with editorial design aesthetic, featuring modular architecture, markdown-driven content, and smooth Framer Motion animations. Built as both a showcase piece and a living project under active development.
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

## Architecture

```
app/                  # Route entrypoints only
src/
  entities/portfolio/ # Domain layer (data, types, repository)
  features/home/      # Feature modules
  shared/lib/         # Shared utilities (motion, markdown)
  content/            # Markdown content
    projects/*.md     # Project detail pages
    learning/*.md     # Learning material pages
assets/               # Static image assets
docs/                 # Architecture documentation
```

---

## Content System

Projects and learning materials are managed through:

1. **Metadata** — `src/entities/portfolio/data/*.ts` (titles, slugs, categories, tech stacks)
2. **Content** — Markdown files in `src/content/` (long-form descriptions, charts, analysis)
3. **Mapping** — `content-map.ts` (slug -> file path registry)
4. **Loading** — `content.server.ts` (server-side markdown parsing with Marked)

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

---

## Development

```bash
npm install
npm run dev     # Development server
npm run build   # Production build
npm run lint    # ESLint check
```

---

## Impact

Demonstrates expertise in modern React ecosystem, design system implementation, content-driven architecture, and editorial UI design patterns.