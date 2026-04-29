# 📋 Dokumentasi Lengkap NextJS Portfolio Project

**Tanggal:** 29 April 2026  
**Versi Project:** 0.1.0  
**Framework:** Next.js 16.2.4 | React 19.1.0 | TypeScript 5.x

---

## 📁 STRUKTUR FOLDER LENGKAP

```
nextjs-portfolio/
├── 📄 package.json                          # Konfigurasi dependencies & scripts
├── 📄 tsconfig.json                         # Konfigurasi TypeScript
├── 📄 next.config.ts                        # Konfigurasi Next.js
├── 📄 eslint.config.mjs                     # Konfigurasi ESLint
├── 📄 postcss.config.mjs                    # Konfigurasi PostCSS (Tailwind)
├── 📄 README.md                             # Dokumentasi project
├── 📄 next-env.d.ts                         # Type definitions Next.js auto-generated
├── 📄 tsconfig.tsbuildinfo                  # Build info untuk incremental compilation
│
├── 📁 app/                                  # Next.js App Router - Entry Points
│   ├── 📄 layout.tsx                        # Root layout component (HTML/body setup)
│   ├── 📄 page.tsx                          # Home page (/)
│   ├── 📄 globals.css                       # Global CSS styles
│   │
│   ├── 📁 components/                       # Reusable UI Components (akan dipindah ke src/features)
│   │   ├── Navbar.jsx                       # Navigasi bar dengan mobile menu support
│   │   ├── Header.jsx                       # Hero section - intro & profile
│   │   ├── About.jsx                        # Section tentang diri & education
│   │   ├── Skills.jsx                       # Section expertise & technical capabilities
│   │   ├── Project.jsx                      # Section showcase portfolio projects
│   │   ├── Learning.jsx                     # Section knowledge base & learning materials
│   │   ├── Contact.jsx                      # Section contact form (Web3Forms integration)
│   │   └── Footer.jsx                       # Footer dengan links & social media
│   │
│   ├── 📁 learning/                         # Dynamic route untuk learning materials
│   │   └── [slug]/
│   │       └── page.tsx                     # Detail page untuk single learning material
│   │
│   └── 📁 project/                          # Dynamic route untuk projects
│       └── [slug]/
│           └── page.tsx                     # Detail page untuk single project
│
├── 📁 src/                                  # Source code - Business logic & utilities
│   │
│   ├── 📁 entities/                         # Domain layer - Data models & access
│   │   └── portfolio/                       # Portfolio domain (semua data portfolio)
│   │       ├── 📄 types.ts                  # TypeScript type definitions
│   │       ├── 📄 repository.ts             # Data access functions (queries)
│   │       ├── 📄 content.server.ts         # Server-side markdown content loader
│   │       ├── 📄 content-map.ts            # Mapping slug → markdown file path
│   │       ├── 📄 asset-keys.ts             # Icon & asset key definitions
│   │       │
│   │       └── 📁 data/                     # Metadata sources (array of objects)
│   │           ├── projects.ts              # Project metadata & info
│   │           ├── learning.ts              # Learning material metadata
│   │           ├── meta.ts                  # General metadata (social, tools, year)
│   │           └── services.ts              # Service capabilities & expertise data
│   │
│   ├── 📁 features/                         # Feature layer - UI composition by page
│   │   └── home/
│   │       └── sections/
│   │           └── index.ts                 # Export dari app/components (re-export barrel)
│   │
│   ├── 📁 content/                          # Long-form content (Markdown files)
│   │   ├── 📁 projects/                     # Project detailed descriptions
│   │   │   ├── cheating-detection-yolov8.md
│   │   │   ├── criminal-localization-cctv.md
│   │   │   ├── uiux-portfolio-design.md
│   │   │   └── california-housing-prices.md
│   │   │
│   │   └── 📁 learning/                     # Learning material detailed content
│   │       ├── it-infrastructure-foundation.md
│   │       ├── effective-communication-art.md
│   │       ├── linux-learning.md
│   │       ├── itsm-essentials.md
│   │       ├── cmdb-essentials.md
│   │       └── key-components-itsm.md
│   │
│   └── 📁 shared/                           # Shared utilities & libraries
│       └── lib/
│           ├── 📄 markdown.ts               # Markdown rendering utility (Marked)
│           ├── 📄 motion.ts                 # Reusable Framer Motion animation variants
│           └── 📄 content-fallback.ts       # Fallback content untuk legacy items
│
├── 📁 assets/                               # Static assets & images
│   ├── 📄 assets.js                         # Asset registry (image imports & exports)
│   ├── logo.png                             # Portfolio logo
│   ├── profile-img.png                      # Profile picture
│   ├── user-image.png                       # User avatar
│   │
│   ├── 📁 Icons/                            # Icon assets
│   │   ├── code-icon.png / code-icon-dark.png
│   │   ├── web-icon.png                     # Web development icon
│   │   ├── mobile-icon.png                  # Mobile development icon
│   │   ├── ui-icon.png                      # UI/UX icon
│   │   ├── graphics-icon.png                # Graphics/Design icon
│   │   ├── edu-icon.png / edu-icon-dark.png
│   │   ├── project-icon.png / project-icon-dark.png
│   │   ├── mail_icon.png / mail_icon_dark.png
│   │   ├── menu-black.png / menu-white.png
│   │   ├── close-black.png / close-white.png
│   │   ├── arrow-icon.png / arrow-icon-dark.png
│   │   ├── right-arrow.png / right-arrow-dark.png
│   │   ├── right-arrow-white.png
│   │   ├── right-arrow-bold.png / right-arrow-bold-dark.png
│   │   ├── hand-icon.png
│   │   ├── download-icon.png
│   │   └── send-icon.png
│   │
│   └── 📁 Tools/                            # Tech stack icons
│       ├── vscode.png
│       ├── git.png
│       ├── github.png
│       ├── docker.png
│       ├── firebase.png
│       ├── figma.png
│       ├── mongodb.png
│       ├── jupyter.png
│       ├── anaconda.png
│       ├── tableau.png
│       └── tensorflow.png
│
├── 📁 public/                               # Public static files (accessible di root)
│
├── 📁 docs/                                 # Project documentation
│   ├── 📄 architecture.md                   # Architecture guidelines & patterns
│   └── 📄 manual-book.md                    # Manual & guidelines
│
├── 📁 .next/                                # Next.js build output (auto-generated)
│
├── 📁 node_modules/                         # Dependencies (auto-generated)
│
└── 📁 .git/                                 # Git repository
```

---

## 🔧 KOMPONEN & FUNGSI DETAIL

### 📌 LAYER 1: ENTRY POINTS (App Router)

#### **`app/layout.tsx`** - Root Layout
```typescript
// Fungsi:
- Setup HTML tag dengan scroll-smooth
- Import global fonts (Helvetica Neue dari CDN)
- Render body dengan antialiased text & overflow-x-hidden
- Root metadata: title & description
```

#### **`app/page.tsx`** - Home Page
```typescript
// Fungsi: Orchestrator untuk semua sections
- Import semua sections dari src/features/home/sections
- Render urutan sections:
  1. NavbarSection
  2. HeaderSection (hero intro)
  3. AboutSection (profile & education)
  4. SkillsSection (expertise & services)
  5. ProjectSection (portfolio projects)
  6. LearningSection (knowledge base)
  7. ContactSection (contact form)
  8. FooterSection (footer)
```

#### **`app/globals.css`** - Global Styles
```css
// Fungsi:
- Base Tailwind CSS directives
- Global font setup
- Reset & normalize styles
- Custom color scheme definitions
```

---

### 📌 LAYER 2: COMPONENTS (UI Layer)

#### **`app/components/Navbar.jsx`** - Navigation Bar
```jsx
// Fungsi: Top navigation dengan responsive mobile menu
// State:
  - isScrolled: Boolean - navbar background change saat scroll
  - isMobileMenuOpen: Boolean - mobile menu toggle

// Features:
  ✓ Fixed navbar yang jadi semi-transparent saat scroll
  ✓ Desktop navigation: Home, About, Skills, Projects, Contact
  ✓ Mobile hamburger menu dengan click-outside close
  ✓ Logo/name yang link ke home (#top)
  ✓ Smooth animations (Framer Motion)
  ✓ Body overflow auto/hidden management untuk mobile menu

// Event Listeners:
  - scroll: update isScrolled state
  - mousedown: detect click outside untuk close mobile menu
```

#### **`app/components/Header.jsx`** - Hero Section
```jsx
// Fungsi: Hero/intro section dengan large typography
// Content:
  - Portfolio 2025 label dengan animated line
  - Main name: "Ardutra Agi Ginting" (large heading)
  - Professional title & description
  - CTA buttons (download CV, contact)
  - Profile image

// Animations (Framer Motion):
  - Container stagger: children animate sequentially
  - Item variants: fade-in + slide-up animation
  - Animated line element dari 0 → 3rem width
  - Text gradient effects
```

#### **`app/components/About.jsx`** - About Section
```jsx
// Fungsi: Profile, background, education & tools
// Content:
  - Professional summary & background
  - Education timeline:
    • 2018-2021: SMA (High School)
    • 2021-2025: Islamic University (Electrical Engineering)
  - Tools & technology icons (dari assets)
  - Technical expertise overview

// Layout:
  - Left column: About text & education
  - Right column: Tools grid dengan 3x3 layout
  - Responsive: 1 column mobile, 2 columns desktop
```

#### **`app/components/Skills.jsx`** - Technical Expertise Section
```jsx
// Fungsi: Showcase 4 main skill areas dengan detail modal
// Skills (dari serviceCapabilityData):
  1. Core Data & Analytics Skills
  2. Machine Learning & AI
  3. Programming & Tools
  4. Data Engineering & MLOps

// Features:
  ✓ Grid 4 items (2x2 responsive)
  ✓ Click untuk open detail modal (selectedService state)
  ✓ Modal display:
    - Title & description
    - Business value proposition
    - Key achievements (3 bullets)
    - Tools & technologies used
  ✓ Close modal dengan X button atau click outside
  ✓ Animated transitions

// State:
  - selectedService: Null | ServiceCapability
```

#### **`app/components/Project.jsx`** - Projects Showcase
```jsx
// Fungsi: Display portfolio projects dengan grid layout
// Data dari getProjects():
  1. Cheating Detection YOLOv8 (AI/Computer Vision)
  2. Criminal Localization CCTV (Security AI)
  3. UI/UX Portfolio Design (Web Dev)
  4. California Housing Prices (Data Analytics)

// Per Project Card:
  - Background image
  - Title & description
  - Category tag
  - Status badge
  - Technologies used (tags)
  - Features list
  - "View More" link → /project/[slug]

// Layout:
  - Grid responsive (1 mobile, 2 tablet, 2-3 desktop)
  - Hover animations on cards
```

#### **`app/components/Learning.jsx`** - Knowledge Base
```jsx
// Fungsi: Display learning materials & articles
// Data dari getLearningMaterials():
  1. IT Infrastructure Foundation
  2. The Art of Effective Communication
  3. Linux Essentials & System Administration
  4. IT Service Management (ITSM) Essentials
  5. CMDB Essentials
  6. Key Components of ITSM

// Per Learning Card:
  - Background image
  - Title & description
  - Category
  - Duration (reading time)
  - Level (Beginner/Intermediate/Advanced)
  - Topics list
  - "Read More" link → /learning/[slug]

// Layout:
  - Grid responsive (1-3 columns)
  - Similar styling ke Project section
```

#### **`app/components/Contact.jsx`** - Contact Form
```jsx
// Fungsi: Contact form dengan Web3Forms API integration
// Form Fields:
  - Name (text input)
  - Email (email input)
  - Message (textarea)
  - Submit button

// Functionality:
  ✓ Form validation
  ✓ Submit ke Web3Forms API
  ✓ Loading state saat sending
  ✓ Success/error message feedback
  ✓ Form reset setelah success
  ✓ Error handling dengan user-friendly messages

// Features:
  - Access key: Web3Forms credentials
  - Animated form elements
  - Responsive layout
```

#### **`app/components/Footer.jsx`** - Footer
```jsx
// Fungsi: Bottom navigation, social links & copyright info
// Content:
  - Brand section: Name & professional description
  - Availability status indicator (green dot)
  - Navigation links: Home, About, Skills, Projects, Contact
  - Social links: Instagram, Github, LinkedIn
  - Copyright notice dengan dynamic year

// Layout:
  - Black background
  - Multi-column responsive grid
  - Animated on scroll into view
  - Quick links section untuk easy navigation
```

---

### 📌 LAYER 3: BUSINESS LOGIC (src/entities/)

#### **`src/entities/portfolio/types.ts`** - Type Definitions
```typescript
// Type: PortfolioProject
  - title: string
  - slug: string
  - description: string
  - category: string
  - status?: string (e.g., "Completed")
  - bgImage: string
  - link?: string (GitHub link)
  - technologies?: string[]
  - features?: string[]
  - achievements?: string[]
  - content?: string (markdown content)

// Type: LearningMaterial
  - title: string
  - slug: string
  - description: string
  - category: string
  - status?: string
  - bgImage: string
  - duration?: string (e.g., "10 min reading")
  - level?: string (e.g., "Beginner")
  - technologies?: string[]
  - features?: string[]
  - topics?: string[]
  - content?: string

// Type: ServiceCapability
  - icon: unknown (image reference)
  - title: string
  - description: string
  - professionalDetails:
    - businessValue: string
    - collaboration: string
    - keyAchievements: string[]
    - toolsTechnologies: string[]
```

#### **`src/entities/portfolio/repository.ts`** - Data Access Layer
```typescript
// Query Functions:

function getProjects(): PortfolioProject[]
  → Return semua projects dari projectData

function getProjectBySlug(slug: string): PortfolioProject | undefined
  → Return project specific by slug

function getLearningMaterials(): LearningMaterial[]
  → Return semua learning materials dari learningMaterialData

function getLearningMaterialBySlug(slug: string): LearningMaterial | undefined
  → Return learning material specific by slug

function getServiceCapabilities(): ServiceCapability[]
  → Map serviceCapabilityData dengan actual icon images dari assets

function getPortfolioAssets()
  → Return semua assets object (images)

function getToolIcons()
  → Return array of tool icons (untuk About section)

function getSocialLinks()
  → Return array of social links

function getCurrentYear()
  → Return current year (untuk footer copyright)

// Pattern: Single source of truth untuk semua data queries
```

#### **`src/entities/portfolio/content.server.ts`** - Markdown Loader
```typescript
// Async Functions (SERVER-SIDE ONLY):

async function readMarkdown(relativePath?: string): Promise<string | undefined>
  → Read markdown file dari src/content directory
  → Path: process.cwd() + "/src/content/" + relativePath
  → Return content string atau undefined jika not found

async function getProjectMarkdownContent(slug: string): Promise<string | undefined>
  → Get project markdown dari projectContentMap
  → Call readMarkdown dengan mapped path

async function getLearningMarkdownContent(slug: string): Promise<string | undefined>
  → Get learning markdown dari learningContentMap
  → Call readMarkdown dengan mapped path

// Error Handling:
  - Try-catch untuk file read errors
  - Return undefined jika file tidak ada
```

#### **`src/entities/portfolio/content-map.ts`** - Content Routing
```typescript
// Mapping Objects:

projectContentMap: Record<string, string>
  "cheating-detection-yolov8" → "projects/cheating-detection-yolov8.md"
  "criminal-localization-cctv" → "projects/criminal-localization-cctv.md"
  "uiux-portfolio-design" → "projects/uiux-portfolio-design.md"
  "california-housing-prices" → "projects/california-housing-prices.md"

learningContentMap: Record<string, string>
  "it-infrastructure-foundation" → "learning/it-infrastructure-foundation.md"
  "effective-communication-art" → "learning/effective-communication-art.md"
  "linux-learning" → "learning/linux-learning.md"
  "itsm-essentials" → "learning/itsm-essentials.md"
  "cmdb-essentials" → "learning/cmdb-essentials.md"
  "key-components-itsm" → "learning/key-components-itsm.md"

// Purpose: Decouple slug names dari file paths
```

#### **`src/entities/portfolio/asset-keys.ts`** - Asset Definitions
```typescript
// Service Icon Keys (4 skill icons):
serviceIconKeys = ["web_icon", "mobile_icon", "ui_icon", "graphics_icon"]

// Tool Icon Keys (8 tech stack icons):
toolIconKeys = [
  "vscode",
  "jupyter",
  "git",
  "github",
  "anaconda",
  "docker",
  "tableau",
  "tensorflow"
]

// Type Exports:
type ServiceIconKey = keyof untuk service icons
type ToolIconKey = keyof untuk tool icons

// Purpose: Type-safe asset key references
```

#### **`src/entities/portfolio/data/projects.ts`** - Project Metadata
```typescript
// Array of PortfolioProject objects:
[
  {
    title: "Real-Time Detection of Cheating Activities in Written Exams...",
    slug: "cheating-detection-yolov8",
    description: "Aug 2024 - Jul 2025",
    category: "Computer Vision & AI",
    status: "Completed",
    bgImage: "/exam-cheating.png",
    link: "https://github.com/agik20/Exam-Cheating",
    technologies: ["YOLOv8", "Python", "OpenCV", "PyTorch", "Jetson Orin Nano"],
    features: [...],
    achievements: [...]
  },
  // ... 3 more projects
]

// Purpose: Single source for project data
```

#### **`src/entities/portfolio/data/learning.ts`** - Learning Metadata
```typescript
// Array of LearningMaterial objects:
[
  {
    title: "IT Infrastructure Foundation",
    slug: "it-infrastructure-foundation",
    description: "Comprehensive guide to IT infrastructure fundamentals",
    category: "IT Infrastructure",
    status: "Completed",
    bgImage: "/it-infrastructure.png",
    duration: "10 min reading",
    level: "Beginner to Intermediate",
    technologies: ["Data Centers", "Servers", "Networking", "Security"],
    features: [...],
    topics: ["Data Center", "Servers", "LAN", "Firewall", ...]
  },
  // ... 5 more learning materials
]

// Purpose: Single source for learning data
```

#### **`src/entities/portfolio/data/meta.ts`** - Meta Information
```typescript
// Tool Asset Keys: Re-export dari asset-keys.ts
toolAssetKeys = ["vscode", "jupyter", "git", "github", ...]

// Social Links:
socialLinkData = [
  { name: "Instagram", url: "https://www.instagram.com/ar.giii" },
  { name: "Github", url: "https://github.com/agik20" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/..." }
]

// Functions:
getCurrentYearValue() → return new Date().getFullYear()

// Purpose: Centralized meta data management
```

#### **`src/entities/portfolio/data/services.ts`** - Service Capabilities
```typescript
// Array of ServiceCapabilitySeed objects (4 skills):
[
  {
    iconKey: "web_icon",
    title: "Core Data & Analytics Skills",
    description: "...",
    professionalDetails: {
      businessValue: "...",
      collaboration: "...",
      keyAchievements: [...],
      toolsTechnologies: ["Python", "Pandas", "NumPy", ...]
    }
  },
  {
    iconKey: "mobile_icon",
    title: "Machine Learning & AI",
    description: "...",
    professionalDetails: {...}
  },
  {
    iconKey: "ui_icon",
    title: "Programming & Tools",
    description: "...",
    professionalDetails: {...}
  },
  {
    iconKey: "graphics_icon",
    title: "Data Engineering & MLOps",
    description: "...",
    professionalDetails: {...}
  }
]

// Purpose: Service/skill data dengan icon references
```

---

### 📌 LAYER 4: SHARED UTILITIES (src/shared/)

#### **`src/shared/lib/markdown.ts`** - Markdown Renderer
```typescript
// Dependencies: marked library

function renderMarkdown(content?: string): string
  → Parse markdown string ke HTML string
  → Input: markdown content atau undefined
  → Output: HTML string (atau empty string jika no content)
  → Used in: project/learning detail pages untuk render long-form content

// Purpose: Single place untuk markdown rendering consistency
```

#### **`src/shared/lib/motion.ts`** - Animation Presets
```typescript
// Viewport Config:
viewportOnce = {
  once: true,              // Animate only once
  margin: "-100px"         // Trigger 100px before element enters
}

// Container Reveal Animation:
containerRevealVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,    // Delay between children: 100ms
      delayChildren: 0.2       // Initial delay: 200ms
    }
  }
}

// Item Reveal Animation:
itemRevealVariants = {
  hidden: { y: 20, opacity: 0 },           // Start: 20px down, hidden
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
}

// Purpose: Reusable animation variants untuk consistency
// Used in: About, Skills, Project, Learning sections
```

#### **`src/shared/lib/content-fallback.ts`** - Fallback Content (if exists)
```typescript
// Purpose: Provide fallback/legacy content untuk compatibility
// Used when: Markdown files tidak available atau error
```

---

### 📌 LAYER 5: FEATURE ORCHESTRATION (src/features/)

#### **`src/features/home/sections/index.ts`** - Section Exports (Barrel)
```typescript
// Re-exports semua components dari app/components sebagai sections:
export AboutSection from "@/app/components/About"
export ContactSection from "@/app/components/Contact"
export FooterSection from "@/app/components/Footer"
export HeaderSection from "@/app/components/Header"
export LearningSection from "@/app/components/Learning"
export NavbarSection from "@/app/components/Navbar"
export ProjectSection from "@/app/components/Project"
export SkillsSection from "@/app/components/Skills"

// Purpose: Centralized import point untuk home page
// Digunakan di app/page.tsx untuk orchestrate sections
```

---

### 📌 LAYER 6: DYNAMIC ROUTES (app/[route]/[slug]/page.tsx)

#### **`app/project/[slug]/page.tsx`** - Project Detail Page
```typescript
// Async Component dengan Server-Side Data Fetching:

// Function: generateStaticParams()
  → Pre-generate static routes untuk semua projects
  → Return: [{ slug: "cheating-detection-yolov8" }, ...]
  → Purpose: Static Generation (SSG) untuk optimal performance

// Function: generateMetadata({ params })
  → Generate SEO metadata per project
  → Dynamic title: "${project.title} - Portfolio"
  → Dynamic description untuk SEO

// Component: ProjectDetail({ params })
  → Get project dari getProjectBySlug(params.slug)
  → Get markdown content: getProjectMarkdownContent(params.slug)
  → Render:
    • Project hero section dengan background image
    • Project details (title, category, technologies)
    • Rendered markdown content (long-form description)
    • Features, achievements, technologies used
    • Links (GitHub, back to projects)

// Error Handling:
  → If project not found: Show "Project Not Found" message
  → Fallback link back to projects grid
```

#### **`app/learning/[slug]/page.tsx`** - Learning Material Detail Page
```typescript
// Similar struktur ke project detail page:

// Function: generateStaticParams()
  → Return semua learning material slugs

// Function: generateMetadata({ params })
  → SEO metadata untuk learning materials

// Component: LearningDetail({ params })
  → Get material dari getLearningMaterialBySlug(params.slug)
  → Get markdown content: getLearningMarkdownContent(params.slug)
  → Render:
    • Learning material hero dengan background image
    • Material details (title, level, duration, topics)
    • Rendered markdown content (article/guide)
    • Related materials (same category)
    • Navigation links

// Purpose: Display full learning content dengan structured layout
```

---

### 📌 STATIC ASSETS & IMAGES (assets/)

#### **`assets/assets.js`** - Asset Registry
```javascript
// Imports semua image files:
import user_image from './user-image.png'
import code_icon from './code-icon.png'
import logo from './logo.png'
// ... 40+ more imports

// Exports single assets object:
export const assets = {
  user_image,
  code_icon,
  code_icon_dark,
  web_icon,
  mobile_icon,
  ui_icon,
  graphics_icon,
  vscode,
  jupyter,
  git,
  github,
  docker,
  firebase,
  figma,
  mongodb,
  anaconda,
  tableau,
  tensorflow,
  logo,
  profile_img,
  // ... more
}

// Purpose: Centralized asset management
// Usage: getPortfolioAssets() dari repository.ts
```

---

### 📌 CONFIGURATION FILES

#### **`package.json`** - Project Dependencies & Scripts
```json
{
  "name": "nextjs-portfolio",
  "version": "0.1.0",
  
  "scripts": {
    "dev": "next dev --turbopack",      // Development server
    "build": "next build --turbopack",  // Production build
    "start": "next start",              // Production server
    "lint": "eslint"                    // Code linting
  },
  
  "dependencies": {
    "next": "^16.2.4",
    "react": "19.1.0",
    "react-dom": "19.1.0",
    "motion": "^12.23.12",              // Framer Motion animations
    "marked": "^17.0.0",                // Markdown parser
    "@tailwindcss/typography": "^0.5.19" // Typography plugin
  },
  
  "devDependencies": {
    "typescript": "^5",
    "tailwindcss": "^4",
    "eslint": "^9",
    "@types/node": "^20",
    "@types/react": "^19"
  }
}
```

#### **`tsconfig.json`** - TypeScript Configuration
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "esModuleInterop": true,
    
    // Path aliases untuk clean imports:
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]    // @/... = root aliasing
    }
  }
}
```

#### **`next.config.ts`** - Next.js Configuration
```typescript
// Optimization settings untuk Next.js
// Image optimization
// Build configuration
// Experimental features
```

#### **`postcss.config.mjs`** - PostCSS Configuration
```javascript
// Tailwind CSS plugin setup
// Auto-prefixer untuk cross-browser compatibility
```

#### **`eslint.config.mjs`** - ESLint Configuration
```javascript
// Code quality rules
// Next.js plugin for ESLint
// React plugin for ESLint
```

---

## 🎯 DATA FLOW ARCHITECTURE

```
USER BROWSER
    ↓
app/page.tsx (Home)
    ↓
render 8 sections (from src/features/home/sections/index.ts)
    ├→ NavbarSection (app/components/Navbar.jsx)
    ├→ HeaderSection (app/components/Header.jsx)
    ├→ AboutSection (app/components/About.jsx)
    │   ├→ calls getToolIcons() from repository
    │   └→ renders tools grid
    ├→ SkillsSection (app/components/Skills.jsx)
    │   ├→ calls getServiceCapabilities() from repository
    │   └→ renders 4 skill cards with modal
    ├→ ProjectSection (app/components/Project.jsx)
    │   ├→ calls getProjects() from repository
    │   └→ renders project grid → links to /project/[slug]
    ├→ LearningSection (app/components/Learning.jsx)
    │   ├→ calls getLearningMaterials() from repository
    │   └→ renders learning cards → links to /learning/[slug]
    ├→ ContactSection (app/components/Contact.jsx)
    │   └→ form submission to Web3Forms API
    └→ FooterSection (app/components/Footer.jsx)
        ├→ calls getSocialLinks(), getCurrentYear()
        └→ renders footer with links

DYNAMIC DETAIL PAGES:
/project/[slug] → app/project/[slug]/page.tsx
    ├→ calls getProjectBySlug(slug) from repository
    ├→ calls getProjectMarkdownContent(slug) for long-form content
    ├→ uses renderMarkdown() to parse markdown to HTML
    └→ displays detailed project view

/learning/[slug] → app/learning/[slug]/page.tsx
    ├→ calls getLearningMaterialBySlug(slug) from repository
    ├→ calls getLearningMarkdownContent(slug) for article content
    ├→ uses renderMarkdown() to parse markdown to HTML
    └→ displays detailed learning material view
```

---

## 🎨 STYLING STRATEGY

### Tailwind CSS
- **Framework**: Tailwind CSS v4 dengan PostCSS
- **Responsive**: Mobile-first approach
- **Breakpoints**: sm, md, lg, xl, 2xl

### Custom CSS
- **Location**: `app/globals.css`
- **Global variables**, resets, custom utilities

### Component Styling
- **Inline Tailwind**: Classes directly di JSX/TSX
- **Dark mode support**: Conditional classes (dark: prefix)
- **Animations**: Framer Motion motion components

### Typography
- **Font**: Helvetica Neue (imported dari CDN)
- **System font stack** untuk fallback

---

## 🚀 BUILD & DEPLOYMENT

### Development
```bash
npm run dev          # Start dev server dengan Turbopack
```

### Production Build
```bash
npm run build        # Compile dengan Turbopack
npm start            # Run production server
```

### Static Generation (SSG)
- `app/project/[slug]/page.tsx` → generateStaticParams() untuk pre-render semua projects
- `app/learning/[slug]/page.tsx` → generateStaticParams() untuk pre-render semua learning materials
- Result: Static HTML files untuk optimal performance

---

## 📊 KEY METRICS

| Metrik | Value |
|--------|-------|
| Total Components | 8 |
| Dynamic Routes | 2 (/project/[slug], /learning/[slug]) |
| Projects | 4 |
| Learning Materials | 6 |
| Services/Skills | 4 |
| Tool Icons | 8 |
| Total Markdown Files | 10 |
| Responsive Breakpoints | 5 |

---

## 🔄 MIGRATION ROADMAP

Sesuai dengan `docs/architecture.md`:

- [ ] Move `app/components/` → `src/features/home/sections/` incrementally
- [x] Split `assets/assets.js` into:
  - [x] `src/entities/portfolio/data/*.ts` (metadata) ✅
  - [x] `src/content/projects/*.md` (project content) ✅
  - [x] `src/content/learning/*.md` (learning content) ✅
- [x] Keep `assets/assets.js` as image registry only ✅
- [ ] Convert `.jsx` components to `.tsx` (starting with Learning & Skills)
- [ ] Replace inline contact key dengan environment variable

---

## 📝 NOTES

- **Tech Stack**: Next.js 16 + React 19 + TypeScript 5
- **Animation**: Framer Motion v12
- **Markdown**: Marked v17
- **Styling**: Tailwind CSS v4
- **Form**: Web3Forms untuk contact form
- **Build Tool**: Turbopack (Next.js default)
- **Environment**: Production-ready dengan SSG untuk performance

---

**Dokumentasi terakhir diupdate:** 29 April 2026
