# Implementation Plan — Portfolio Content & Data Update

**Tanggal:** 2026-08-26
**Target:** Memperbarui seluruh konten portfolio agar akurat mencerminkan proyek riil
**Status:** Draft — Menunggu Konfirmasi

---

## 1. Analisis Proyek

### 1.1 California Housing Prices
| Aspek | Detail |
|-------|--------|
| **Tech Stack** | Python, scikit-learn, XGBoost, CatBoost, LightGBM, Flask, Docker, pandas, numpy, matplotlib, seaborn |
| **Problem Statement** | Prediksi harga perumahan California dari dataset sensus 1990 |
| **Solusi** | Pipeline ML end-to-end: EDA → feature engineering → training comparison (3 model ensemble) → inference API via Flask → Docker packaging |
| **Fitur Utama** | Feature engineering (rooms_per_household, bedrooms_per_room), model comparison, Flask inference server, test suite, Docker support |
| **Status** | Completed, production-ready |

### 1.2 CMDB AI Chatbot (Groq-Bot)
| Aspek | Detail |
|-------|--------|
| **Tech Stack** | Python, FastAPI, Groq API (gpt-oss-20b), Qdrant (vector DB), sentence-transformers (all-MiniLM-L6-v2), transformers (BART-Large-MNLI), pydantic, uvicorn, Tailwind CSS |
| **Problem Statement** | Asisten CMDB untuk menjawab pertanyaan teknis infrastruktur, dependensi CI, impact analysis, dan pelacakan insiden |
| **Solusi** | RAG pipeline dengan adaptive routing (IP lookup vs vector search), zero-shot classification untuk query categorization, query optimization via LLM memory |
| **Fitur Utama** | Adaptive routing (IP pattern detection → deterministic response), 5-category zero-shot classification, cosine similarity search, dark-themed glassmorphism UI, CSRF/CORS protection, segregated logging |
| **Status** | Completed, deployed |

### 1.3 Exam Cheating Detection (Final)
| Aspek | Detail |
|-------|--------|
| **Tech Stack** | Python, YOLOv8, PyTorch, OpenCV, ALBumentations, scikit-learn, Flask, TensorRT |
| **Problem Statement** | Deteksi kecurangan ujian secara real-time: mendeteksi smartphone dan klasifikasi perilaku (no-cheating / provide-object / see-friends-work) via keypoint/pose |
| **Solusi** | Dual-model approach: object detection (bbox) untuk smartphone + pose estimation untuk perilaku curang, deployment edge (Jetson Orin Nano), evidence capture otomatis |
| **Fitur Utama** | Real-time inference, CLI pipeline (train/predict/evaluate/preprocess), TensorRT export, data augmentation, test suite komprehensif |
| **Status** | Completed, meraih Top 3 Favorite Thesis Award |

### 1.4 Finance Tracker App
| Aspek | Detail |
|-------|--------|
| **Tech Stack** | React 18, TypeScript, Tailwind CSS v4, Vite, shadcn/ui, Radix UI, Recharts, Framer Motion, next-themes, react-hook-form, lucide-react |
| **Problem Statement** | Aplikasi personal finance tracker yang modern dengan visualisasi interaktif dan dark mode |
| **Solusi** | SPA dengan local storage persistence, dashboard interaktif, manajemen transaksi, budget tracking, chart analytics |
| **Fitur Utama** | Dashboard overview, transaction CRUD, pie/bar charts (Recharts), budget tracking dengan visual indicator, dark/light theme toggle, mobile responsive, smooth animations |
| **Status** | Completed |

### 1.5 YOLOv8 Lab Activity Recognition
| Aspek | Detail |
|-------|--------|
| **Tech Stack** | Python, YOLOv8, PyTorch, OpenCV, ALBumentations, scikit-learn, Flask, ultralytics, tqdm, matplotlib |
| **Problem Statement** | Sistem pengenalan aktivitas manusia lengkap dari akuisisi data hingga inference |
| **Solusi** | Three-stage pipeline: preprocessing (acquisition → annotation → augmentation → split), training (YOLO config), inference (Flask serving) |
| **Fitur Utama** | Full dataset workflow, frame extraction, data augmentation, model training dengan config YAML, Flask inference server, lisensi MIT |
| **Status** | Completed, open-source MIT |

### 1.6 Next.js Portfolio (Target — proyek saat ini)
| Aspek | Detail |
|-------|--------|
| **Tech Stack** | Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS 4, Framer Motion, Marked |
| **Struktur** | Modular feature-based: `src/entities/`, `src/features/`, `src/content/`, `app/components/` |
| **Design System** | Editorial aesthetic: warm cream/beige palette, Cormorant Garamond + Inter fonts, asymmetric layouts, generous whitespace, sharp edges |
| **Status** | Build clean, ada perubahan uncommitted (JSX→TSX migration, new projects added) |

---

## 2. Pemetaan Komponen (Component Mapping)

### 2.1 HeaderSection (`Header.tsx`)
**Perubahan yang direncanakan:**
- Tagline: "Data Scientist & AI Engineer" → lebih spesifik mencakup CV, MLOps, dan Full-stack
- Sub-header labels: tambahkan "Computer Vision", "MLOps", "Full-stack"
- Narasi tetap singkat, editorial tone

### 2.2 AboutSection (`About.tsx`)
**Perubahan yang direncanakan:**
- Deskripsi: tambahkan konteks thesis award (Top 3) dan pencapaian deteksi real-time
- Education: tetap sama (UII 2021-2025, SMAN 1 Berastagi)
- Stats: pertahankan 98% accuracy, <3s latency, Top 3 Thesis, 2025 Graduated
- Technical Toolkit: update icon set sesuai tech stack riil

### 2.3 SkillsSection (`Skills.tsx`)
**Perubahan yang direncanakan:**
- Reorganisasi 4 skill pillars berdasarkan proyek riil:
  1. **Data Science & ML** — California Housing, Flight Price Prediction
  2. **Computer Vision & AI** — Exam Cheating, Lab Activity Recognition
  3. **AI Engineering & RAG** — CMDB Chatbot, AIOps Chatbot
  4. **Full-stack Development** — Portfolio, Finance Tracker
- Setiap pillar: business value, collaboration, achievements, tools spesifik
- Update toolsTechnologies untuk setiap pillar sesuai data riil

### 2.4 ProjectSection (`Project.tsx`)
**Perubahan yang direncanakan:**
- Replace `projectData` dengan 6-7 proyek riil dari analisis:
  1. Exam Cheating Detection (Computer Vision & AI)
  2. CMDB AI Chatbot (AI Engineering & NLP)
  3. California Housing Prices (Data Science & ML)
  4. YOLOv8 Lab Activity Recognition (Computer Vision)
  5. Finance Tracker App (Full-stack Web)
  6. Next.js Portfolio (Web Development)
- Tiap proyek: title, slug, description (periode), category, status, technologies, features (3-4 point spesifik), achievements (2 point riil)
- Hapus placeholder/generic entries (flight-price-prediction generic, rag-cmdb-chatbot generic, aiops-cmdb generic)
- Ganti generic description dengan deskripsi teknis presisi

### 2.5 LearningSection (`Learning.tsx`)
**Perubahan yang direncanakan:**
- Evaluasi apakah learning materials masih relevan
- Pertimbangkan menambahkan materi teknis: ML fundamentals, Computer Vision basics, RAG/AI engineering
- Atau pertahankan IT/ITSM materials jika target audience adalah IT ops role

### 2.6 ContactSection (`Contact.tsx`)
**Perubahan yang direncanakan:**
- Perbaiki hardcoded Web3Forms key → gunakan env var (NEXT_PUBLIC_WEB3FORMS_KEY)
- Narasi tetap sama
- Social links tetap sama

### 2.7 NavbarSection (`Navbar.tsx`)
**Perubahan yang direncanakan:**
- Fix typo syntax: `className="text-3xl font-serif font-light ...}` → hapus `}` berlebih
- Menu items tetap: Home, About, Work, Journal, Contact
- Navigasi tetap sama

### 2.8 FooterSection (`Footer.tsx`)
**Perubahan yang direncanakan:**
- Deskripsi tagline: sesuaikan dengan domain keahlian baru
- Navigasi & social tetap sama

---

## 3. Tahap Eksekusi (Step-by-Step)

### Phase 1: Foundation (Data & Types)
**Langkah 1.1** — Update `src/entities/portfolio/data/projects.ts`
- Ganti seluruh `projectData` array dengan 6-7 proyek riil
- Pastikan setiap entry memiliki: title, slug, description (periode), category, status, bgImage, link, technologies, features, achievements
- Hapus entri placeholder/generic

**Langkah 1.2** — Update `src/entities/portfolio/data/services.ts`
- Sesuaikan 4 skill pillars dengan deskripsi riil dari proyek
- Update toolsTechnologies di setiap pillar
- Update keyAchievements berdasarkan data riil (accuracy, latency, award)
- Pertahankan 4 pilar: Data Science & ML, Computer Vision & AI, AI Engineering & RAG, Full-stack Development

**Langkah 1.3** — Update `src/entities/portfolio/data/meta.ts`
- Verifikasi social links masih akurat
- Verifikasi year value

**Langkah 1.4** — Update `assets/assets.js`
- Tambah icon tech baru jika diperlukan (Groq, Qdrant, YOLO, FastAPI, React, dll)
- Atau gunakan existing icons yang paling representatif

### Phase 2: Component Updates
**Langkah 2.1** — Update `Header.tsx`
- Update subtitle dan tagline labels

**Langkah 2.2** — Update `About.tsx`
- Update deskripsi naratif
- Verifikasi stats data

**Langkah 2.3** — Update `Skills.tsx`
- Pastikan rendering benar dengan data services.ts yang baru
- Tidak perlu perubahan struktur, hanya data-driven

**Langkah 2.4** — Update `Project.tsx`
- Pastikan rendering benar dengan projectData baru
- Verifikasi link GitHub, slug routing, gambar background

**Langkah 2.5** — Update `Learning.tsx`
- Evaluasi konten (lihat keputusan di Section 2.5)

**Langkah 2.6** — Update `Contact.tsx`
- Fix hardcoded Web3Forms key
- Tambahkan fallback yang aman

**Langkah 2.7** — Update `Navbar.tsx`
- Fix typo syntax pada line 124

**Langkah 2.8** — Update `Footer.tsx`
- Update tagline deskripsi

### Phase 3: Content Files
**Langkah 3.1** — Review/update markdown content files
- `src/content/projects/california-housing-prices.md`
- `src/content/projects/rag-cmdb-chatbot.md`
- `src/content/projects/aiops-cmdb.md`
- Buat content files baru untuk proyek yang belum ada (exam-cheating, lab-activity, finance-tracker)

**Langkah 3.2** — Update `content-map.ts`
- Sinkronkan slug mapping dengan projectData baru

### Phase 4: Verification & Cleanup
**Langkah 4.1** — Run build verification
**Langkah 4.2** — Visual review di browser
**Langkah 4.3** — Cleanup old .jsx files (already in D state)
**Langkah 4.4** — Commit semua perubahan

---

## 4. Kriteria Verifikasi

### 4.1 Build & Type Check
- [ ] `npm run build` berjalan tanpa error
- [ ] TypeScript compilation clean (no type errors)
- [ ] No unused imports atau dead code warnings

### 4.2 Data Accuracy
- [ ] Semua 6-7 proyek memiliki deskripsi teknis yang presisi
- [ ] Tech stack setiap proyek sesuai requirements.txt / package.json riil
- [ ] Features dan achievements merujuk pada kemampuan riil (bukan placeholder)
- [ ] Link GitHub valid dan mengarah ke repositori yang benar
- [ ] Slug sesuai dengan file content markdown yang tersedia

### 4.3 UI/UX Verification
- [ ] Semua section ter-render dengan benar (no layout break)
- [ ] Animasi Framer Motion berjalan smooth
- [ ] Responsive di mobile (375px), tablet (768px), desktop (1440px)
- [ ] Dark/light contrast sesuai design system
- [ ] Gambar profil dan project backgrounds ter-load dengan benar
- [ ] No console errors di browser DevTools

### 4.4 Functional Verification
- [ ] Navigation anchors bekerja (scroll ke section yang tepat)
- [ ] Project detail pages render dengan content markdown yang sesuai
- [ ] Learning detail pages render dengan benar
- [ ] Contact form submit berjalan (setelah fix env var)
- [ ] Mobile menu toggle berfungsi

### 4.5 Security Check
- [ ] Tidak ada hardcoded credentials/secrets di kode
- [ ] Web3Forms key menggunakan env var
- [ ] Semua external links menggunakan `rel="noopener noreferrer"`

---

## 5. Risk & Considerations

| Risiko | Mitigasi |
|--------|----------|
| Gambar background project tidak tersedia | Gunakan placeholder atau ambil dari public/ folder yang sudah ada |
| Typo syntax di Navbar.tsx mungkin menyebabkan render error | Fix sebelum commit, verify build |
| Web3Forms key expose jika di-commit | Gunakan env var, tambahkan ke .gitignore |
| Markdown content files belum ada untuk beberapa proyek baru | Buat draft content file atau tandai TODO |
| Perubahan besar di projectData bisa break detail pages | Update content-map.ts dan pastikan slug konsisten |

---

## 6. Estimated Timeline

| Phase | Estimasi |
|-------|----------|
| Phase 1: Data & Types | ~30 menit |
| Phase 2: Component Updates | ~45 menit |
| Phase 3: Content Files | ~30 menit |
| Phase 4: Verification & Cleanup | ~15 menit |
| **Total** | **~2 jam** |
