---
A UI/UX portfolio design focused on editorial aesthetic with responsive layouts, dark/light theming, and modular component architecture. Built as a showcase of modern frontend design patterns and accessibility-first component composition.
---

## Design System

### Typography

- **Headlines:** Cormorant Garamond (300, 400, 500, 600) — serif display for editorial impact
- **Body/UI:** Inter (300, 400, 500) — sans-serif for readability across all screen sizes

### Color Palette

| Token | Value | Usage |
|-------|-------|-------|
| cream | #f2ece4 | Main background |
| cream-light | #f7f3ee | Section alternates |
| paper | #ffffff | Card containers |
| ink | #1a1a1a | Primary text |
| charcoal | #2c2c2c | Secondary text |
| sage | #6b6560 | Muted labels |
| mist | #c4bdb5 | Borders, dividers |
| stone | #e8e2da | Subtle backgrounds |
| dark-bg | #1c1a17 | Dark sections (Projects) |

### Layout Principles

- **Asymmetric grids** — 7/5, 5/7 column ratios for visual interest
- **Generous whitespace** — 24-40px padding between sections
- **Sharp edges** — no border-radius, creating crisp editorial aesthetic
- **Monochrome palette** — warm neutrals with strategic italic serif accents

---

## Architecture

| Layer | Technology | Purpose |
|-------|-----------|---------|
| Framework | Next.js 15 (App Router) | Route entrypoints and static generation |
| Language | TypeScript | Type-safe component development |
| Styling | Tailwind CSS 4 | Utility-first responsive design |
| Components | Modular section architecture | Reusable About, Skills, Project, Contact sections |
| Animations | Framer Motion | Scroll-triggered reveals and hover interactions |
| Images | next/image | Optimized asset serving with lazy loading |

---

## Key Features

### Responsive Layout System

CSS Grid and Flexbox breakpoints for seamless adaptation:

| Breakpoint | Devices | Layout Changes |
|------------|---------|---------------|
| `sm` (640px) | Large phones | Single column → 2-column project grid |
| `md` (768px) | Tablets | Sidebar navigation, expanded spacing |
| `lg` (1024px) | Desktops | Full asymmetric grid layouts |
| `xl` (1280px) | Wide screens | Max-width constrained at 7xl |

### Modular Component Architecture

Each section operates as an independent, self-contained component:

- `Header.tsx` — Hero with profile image, tagline, CTAs
- `About.tsx` — Editorial statement + education timeline
- `Skills.tsx` — 2x2 capability grid with hover states
- `Project.tsx` — Dark-themed project card grid
- `Learning.tsx` — Journal list with thumbnails
- `Contact.tsx` — Form with Web3Forms integration
- `Navbar.tsx` — Fixed navigation with mobile slide-out menu
- `Footer.tsx` — Multi-column footer with social links

### Dark/Light Theming

CSS custom properties enable seamless theme switching:
- Light theme: cream backgrounds, ink text
- Dark theme: dark-bg sections with paper text
- Smooth CSS transition on theme variable changes

### SEO & Accessibility

- Semantic HTML5 elements (`<section>`, `<nav>`, `<footer>`)
- Proper heading hierarchy (h1 → h2 → h3 → h4)
- `alt` attributes on all images
- ARIA labels on interactive elements
- Keyboard-navigable navigation

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS 4 |
| Animations | Framer Motion |
| Images | next/image |
| Icons | Custom SVG assets |

---

## Impact

Maintains strong UX quality across screen sizes with editorial design principles. Improved maintainability through modularized component structure and consistent design token system. Serves as both a professional digital presence and a template for future content-driven website projects.
