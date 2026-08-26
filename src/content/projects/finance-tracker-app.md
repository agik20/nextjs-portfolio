---
A modern personal finance tracker SPA with interactive dashboards, budget management, and data visualization. Built with React 18, shadcn/ui, and Recharts — zero external API dependencies, all data persists in browser local storage.
---

## Architecture

| Layer | Technology | Purpose |
|-------|-----------|---------|
| Framework | React 18 + Vite 6 | Build tool and component rendering |
| Language | TypeScript | Type-safe component development |
| Styling | Tailwind CSS v4 | Utility-first responsive design |
| Components | shadcn/ui + Radix UI | Accessible primitive component library |
| Charts | Recharts | Interactive pie/bar charts for analytics |
| Animations | Framer Motion | Smooth page transitions and micro-interactions |
| Forms | react-hook-form | Performant form validation |
| Theme | next-themes | Dark/light mode persistence |
| Icons | lucide-react | Consistent icon system |

---

## Key Features

### Dashboard Overview

Real-time financial health snapshot with key metrics at a glance — total balance, income, expenses, and savings rate displayed in a clean editorial layout.

### Transaction Management

- Add, view, edit, and delete income and expense transactions
- Category-based organization with custom category creation
- Form validation with react-hook-form

### Visual Analytics

- Pie charts for expense category breakdown
- Bar charts for monthly spending trends
- Interactive hover states and responsive chart resizing

### Budget Tracking

- Set spending limits per category
- Visual progress indicators showing remaining budget
- Threshold alerts when approaching spending limits

### Theme & UX

- Dark/light mode toggle with session persistence
- Smooth Framer Motion transitions between views
- Mobile-responsive layout across all breakpoints

---

## Project Structure

```
src/
├── components/
│   ├── ui/              # shadcn/ui primitives
│   ├── budget-tracker.tsx
│   ├── expense-chart.tsx
│   ├── finance-overview.tsx
│   ├── transaction-form.tsx
│   └── transaction-list.tsx
├── lib/                 # Utilities
└── App.tsx
```

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 + Vite 6 |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| UI Library | shadcn/ui, Radix UI |
| Charts | Recharts |
| Animations | Framer Motion |
| Forms | react-hook-form |
| Theme | next-themes |
| Icons | lucide-react |

---

## Impact

Demonstrates proficiency in modern React ecosystem, shadcn/ui component architecture, Recharts data visualization, and client-side state management without any backend dependencies. Fully responsive across mobile, tablet, and desktop breakpoints with polished editorial aesthetics.
