# Portfolio Architecture Guide

## Target Structure

```text
app/                          # Next.js App Router entrypoints only
src/
  entities/
    portfolio/
      data/
        projects.ts            # project metadata source
        learning.ts            # learning metadata source
      repository.ts           # data access boundary
      content.server.ts       # server-side markdown loader
      content-map.ts          # slug-to-content mapping
      types.ts                # domain-level TypeScript types
  content/
    projects/*.md             # project long-form content
    learning/*.md             # learning long-form content
  features/
    home/
      sections/               # UI section composition for homepage
  shared/
    lib/
      markdown.ts             # markdown rendering utilities (Marked)
      motion.ts               # shared Framer Motion presets
```

## Naming Conventions

- `entities/*`: business/domain data and retrieval functions.
- `features/*`: page- or feature-specific UI assembly.
- `shared/lib/*`: cross-feature technical helpers.
- Use `PascalCase` for React components and `camelCase` for helper modules.
- Keep route files in `app/*` as thin orchestrators.

## Separation Rules

- **View layer**: components in `app/components` (incrementally move into `src/features/*`).
- **Business/data layer**: access portfolio data through `repository.ts`, with metadata sourced from `data/*.ts`.
- **Content management**: markdown rendering always via `renderMarkdown()` helper, loaded from `src/content/*` in server routes with fallback for legacy inline content.
- **Animation strategy**: shared variants live in `src/shared/lib/motion.ts` to avoid duplication.

## Next Migration Steps

1. Move each file from `app/components/*` into `src/features/home/sections/*`.
2. Continue splitting `assets/assets.js` into:
   - `src/entities/portfolio/data/*.ts` (metadata) ✅
   - `src/content/projects/*.md` and `src/content/learning/*.md` (body content) ✅
3. Keep `assets/assets.js` as image registry only ✅
4. Convert remaining `.jsx` components into `.tsx` incrementally, starting from `Learning` and `Skills`.
5. Replace inline contact key with environment variable and server action/API route.
