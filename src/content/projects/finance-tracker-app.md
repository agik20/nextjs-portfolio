---
A modern personal finance tracker SPA with interactive dashboards, budget management, and data visualization. Built with React 18, shadcn/ui, and Recharts — zero external API dependencies, all data persists in browser local storage.
---

## Features

### Dashboard Overview
Real-time financial health snapshot with key metrics at a glance.

### Transaction Management
- Add income and expense transactions
- Category-based organization
- Edit and delete operations

### Visual Analytics
- Pie charts for expense category breakdown
- Bar charts for monthly spending trends
- Interactive hover states with Recharts

### Budget Tracking
- Set spending limits per category
- Visual progress indicators
- Alert when approaching limits

### Theme & UX
- Dark/light mode toggle (next-themes)
- Smooth Framer Motion transitions
- Mobile-responsive layout

---

## Architecture

| Layer | Technology |
|-------|-----------|
| Framework | React 18 + Vite |
| Styling | Tailwind CSS v4 |
| Components | shadcn/ui + Radix UI primitives |
| Charts | Recharts |
| Animations | Framer Motion |
| Forms | react-hook-form |
| Storage | Browser localStorage |
| Icons | lucide-react |

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

## Data Model

All transaction data is stored client-side with the following schema:

```typescript
interface Transaction {
  id: string;
  type: 'income' | 'expense';
  amount: number;
  category: string;
  date: string;
  description?: string;
}
```

---

## Impact

Demonstrates proficiency in modern React ecosystem, component architecture with shadcn/ui, data visualization with Recharts, and state management without backend dependencies.