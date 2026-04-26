# Manual Book Portfolio Next.js

Dokumen ini adalah panduan operasional untuk mengelola, mengembangkan, dan memelihara proyek portfolio berbasis Next.js 15.

## 1. Tujuan Manual

- Menjaga struktur proyek tetap konsisten dan mudah diaudit.
- Mempermudah update konten tanpa merusak layer UI.
- Menjadi referensi onboarding developer atau maintainer baru.

## 2. Ringkasan Arsitektur

Proyek menggunakan struktur modular dengan pemisahan tanggung jawab:

- `app/`: entrypoint route Next.js.
- `src/entities/portfolio/data/`: metadata domain (project, learning, service, meta).
- `src/content/`: konten panjang format Markdown.
- `src/entities/portfolio/repository.ts`: boundary akses data untuk komponen.
- `src/shared/lib/`: utility bersama (markdown renderer, motion preset, fallback content).
- `assets/assets.js`: registry aset gambar/icon.

## 3. Persiapan Environment

1. Install dependency:
   - `npm install`
2. Jalankan server development:
   - `npm run dev`
3. Akses aplikasi:
   - `http://localhost:3000`

## 4. Alur Kerja Update Konten

### 4.1 Update isi Project/Learning (Markdown)

- Edit file di:
  - `src/content/projects/*.md`
  - `src/content/learning/*.md`
- Gunakan heading Markdown yang rapi (`## Overview`, `## Highlights`, dll) agar konsisten dengan tampilan halaman detail.

### 4.2 Update metadata kartu (ringkas)

- Edit:
  - `src/entities/portfolio/data/projects.ts`
  - `src/entities/portfolio/data/learning.ts`
- Field penting:
  - `title`, `slug`, `description`, `category`, `status`, `bgImage`
  - optional: `technologies`, `features`, `achievements`, `topics`, `duration`, `level`

### 4.3 Sinkronisasi slug ke file markdown

- Pastikan slug ada di:
  - `src/entities/portfolio/content-map.ts`
- Contoh:
  - slug `my-project` harus dipetakan ke `projects/my-project.md`

## 5. Panduan Menambah Konten Baru

### 5.1 Menambah Project baru

1. Tambahkan metadata di `projects.ts` dengan slug unik.
2. Buat file markdown di `src/content/projects/<slug>.md`.
3. Daftarkan mapping slug di `content-map.ts`.
4. Tambahkan gambar thumbnail/banner ke `public/`.
5. Isi properti `bgImage` dengan path publik, contoh: `"/my-project-cover.png"`.

### 5.2 Menambah Learning Material baru

1. Tambahkan metadata di `learning.ts`.
2. Buat konten markdown di `src/content/learning/<slug>.md`.
3. Tambah mapping di `content-map.ts`.
4. Verifikasi halaman detail dapat diakses di `/learning/<slug>`.

## 6. Panduan Menambah/Update Asset

1. Taruh file asset di folder `assets/` atau `public/` sesuai kebutuhan.
2. Daftarkan import dan export object `assets` di `assets/assets.js`.
3. Jika asset digunakan oleh metadata berbasis key (misal service icon), pastikan key cocok dengan data di `src/entities/portfolio/data/*.ts`.

## 7. Aturan Pengembangan

- Gunakan `repository.ts` sebagai akses data dari komponen.
- Hindari import data mentah langsung dari file yang bukan boundary.
- Pisahkan:
  - View: komponen section/page
  - Data: `entities/portfolio/data`
  - Content body: `src/content`
- Simpan util lintas fitur di `src/shared/lib`.

## 8. Framer Motion Guidelines

- Gunakan preset dari `src/shared/lib/motion.ts` untuk animasi berulang.
- Hindari duplikasi variant di banyak komponen jika pola sama.
- Pastikan animasi tidak mengganggu aksesibilitas dan readability.

## 9. TypeScript Guidelines

- Tipe domain dipusatkan di `src/entities/portfolio/types.ts`.
- Saat menambah field metadata, update type terlebih dahulu lalu data source.
- Hindari `any`; gunakan tipe eksplisit pada model data.

## 10. Testing dan Validasi

### 10.1 Validasi lokal

- Jalankan:
  - `npm run lint`
  - `npm run dev`
- Cek route utama:
  - `/`
  - `/project/[slug]`
  - `/learning/[slug]`

### 10.2 Checklist sebelum merge

- Slug unik dan konsisten.
- Mapping markdown lengkap.
- Tidak ada broken image path.
- Tidak ada import langsung ke struktur data lama.
- Tampilan mobile dan desktop tetap normal.

## 11. Troubleshooting

### 11.1 Halaman detail kosong/tidak tampil

- Cek slug di metadata.
- Cek mapping di `content-map.ts`.
- Cek file markdown benar-benar ada di `src/content`.
- Pastikan tidak ada typo pada nama file/path.

### 11.2 Gambar tidak muncul

- Cek path `bgImage` dan keberadaan file di `public/`.
- Jika dari `assets`, cek key sudah didaftarkan di registry.

### 11.3 Lint error dari file non-utama

- Jika error berasal dari folder legacy/test, pisahkan perbaikannya agar tidak mencampur dengan refactor utama.

## 12. Rencana Peningkatan Berikutnya

- Migrasi komponen `app/components/*.jsx` ke `.tsx`.
- Pindahkan section UI dari `app/components` ke `src/features/home/sections`.
- Pindahkan access key kontak ke environment variable + API route/server action.
- Tambahkan automated content validation script (slug map checker).

---

Jika terjadi perubahan struktur besar, perbarui `docs/architecture.md` dan dokumen ini secara bersamaan agar manual tetap relevan.
