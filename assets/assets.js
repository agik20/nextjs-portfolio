import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import moon_icon from './moon_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import anaconda from './anaconda.png';
import github from './github.png';
import jupyter from './jupyter.png';
import docker from './docker.png';
import tableau from './tableau.png';
import tensorflow from './tensorflow.png';

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    moon_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark, 
    anaconda,
    github,
    jupyter,
    docker,
    tableau,
    tensorflow
};

// Data yang tidak duplikat
export const workData = [
  {
    title: 'Real-Time Detection of Cheating Activities in Written Exams Based on Deep Learning',
    slug: 'cheating-detection-yolov8',
    description: 'Aug 2024 - Jul 2025',
    category: 'Computer Vision & AI',
    status: 'Completed',
    bgImage: '/exam-cheating.png',
    link: 'https://github.com/agik20/Exam-Cheating',
    technologies: ['YOLOv8', 'Python', 'OpenCV', 'PyTorch', 'Jetson Orin Nano', 'Computer Vision', 'Pose Estimation', 'Edge Computing'],
    features: [
      'YOLOv8-based model for object and pose detection in real-time exam monitoring',
      'Edge deployment on Jetson Orin Nano with web-based dashboard',
      'Automatic alert system with visual evidence and activity logging',
      'Supports multiple cheating categories including smartphone use and peer interaction'
    ],
    achievements: [
      'Achieved 96% pose estimation accuracy and 98% object detection precision',
      'Operated at 8–9 FPS with 2.9 s average latency per detection',
      'Reduced manual supervision effort by 60%',
      'Integrated dashboard for live proctoring and evidence review'
    ],
    content: `
## Overview
A deep learning–based real-time proctoring system that detects cheating activities during written exams. Built using YOLOv8 for both object detection and pose estimation, the system identifies suspicious behaviors like smartphone use or interactions between students.
      
## Highlights
- Designed for deployment on **Jetson Orin Nano** with 1080p camera input.
- Processes live video streams with **low-latency inference**.
- Delivers automated evidence capture with timestamps and classification labels.
- Developed to assist academic integrity through intelligent automation.

## Impact
Enabled educational institutions to maintain fair and efficient exam supervision while demonstrating scalable AI integration in real-time environments.
    `
  },
  {
    title: 'Criminal Suspect Localization Using CCTV-Based Face Recognition and Object Detection',
    slug: 'criminal-localization-cctv',
    description: 'Aug 2025 - Aug 2025',
    category: 'Surveillance & Security AI',
    status: 'Completed',
    bgImage: '/face-recognition.png',
    link: 'https://github.com/agik20/criminal-suspect-localization',
    technologies: ['YOLOv10', 'FaceNet', 'SVM', 'OpenCV', 'Python', 'TensorFlow', 'CCTV Integration', 'Web Dashboard'],
    features: [
      'Real-time face detection using YOLOv10s optimized for CCTV environments',
      'High-accuracy face recognition with FaceNet and SVM classification',
      'Mock database for suspect identity matching via simulated NIK input',
      'Web interface for live monitoring, history tracking, and suspect search'
    ],
    achievements: [
      'Achieved 100% accuracy, precision, and recall across all classes',
      'Seamless operation on both CPU and GPU environments',
      'Fully integrated front-end dashboard for law enforcement simulation',
      'Demonstrated strong potential for intelligent video surveillance systems'
    ],
    content: `
## Overview
A computer vision system for automatic suspect localization through CCTV feeds using **YOLOv10** for detection and **FaceNet + SVM** for recognition. Built to support law enforcement with automated, accurate identity tracking.

## Highlights
- Detects and classifies faces in real-time from CCTV streams.
- Provides match results and visual logs through an interactive web dashboard.
- Uses a simulated NIK-based database for demonstration without using real data.

## Impact
Streamlines surveillance operations by automating suspect recognition and reducing manual monitoring time, showcasing the potential of AI-assisted security infrastructure.
    `
  },
  {
    title: 'UI/UX Portfolio Design',
    slug: 'uiux-portfolio-design',
    description: 'Aug 2025 - Sep 2025',
    category: 'Web Development & Design',
    status: 'Completed',
    bgImage: '/uiux.png',
    link: 'https://github.com/agik20/nextjs-portfolio',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Responsive Design', 'SEO Optimization'],
    features: [
      'Fully responsive personal portfolio built with Next.js and Tailwind CSS',
      'Dark/light mode with smooth animation transitions using Framer Motion',
      'SEO-optimized structure for performance and visibility',
      'Modular, maintainable codebase designed for scalability'
    ],
    achievements: [
      'Deployed live at 98% Lighthouse performance score',
      'Achieved WCAG 2.1 accessibility compliance',
      'Responsive across all devices and screen sizes',
      'Showcases projects, skills, and experience interactively'
    ],
    content: `
## Overview
A personal portfolio website developed to present my technical projects and skills in a visually engaging way. Built using **Next.js 14**, it emphasizes performance, accessibility, and smooth user experience.

## Highlights
- Integrated **dark/light theme toggle** with custom animations.
- Structured content for **SEO optimization and fast load times**.
- Implemented responsive layouts ensuring consistency across devices.
- Deployed seamlessly to **Vercel** for global accessibility.

## Impact
Serves as my professional digital presence, showcasing AI, data science, and engineering projects through a clean and modern interface.
    `
  },
  {
  title: 'California Housing Prices – Machine Learning Project',
  slug: 'california-housing-prices',
  description: 'Aug 2025 - Present',
  category: 'Data Science & Machine Learning',
  status: 'Completed',
  bgImage: '/work-3.png',
  link: 'https://github.com/agik20/californiahousinprice',
  technologies: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib', 'Seaborn', 'Flask', 'Docker', 'Data Visualization'],
  features: [
    'End-to-end ML pipeline from EDA to web app deployment',
    'Comprehensive data preprocessing and feature engineering',
    'Regression modeling with Random Forest and XGBoost',
    'Interactive Flask app for real-time housing price prediction',
    'Dockerized environment for scalable deployment'
  ],
  achievements: [
    'Achieved R² score of 0.83 using XGBoost',
    'Reduced MAE by 30% compared to baseline model',
    'Developed fully functional Flask web interface for predictions',
    'Visualized key housing trends and geographic correlations'
  ],
  content: `
## Overview
A full-cycle machine learning project focused on predicting **California housing prices** using census data. This project demonstrates the application of advanced regression models, feature engineering, and data visualization for real-world predictive analytics.

## Key Components
- **Exploratory Data Analysis**: Detailed statistical and spatial exploration of housing attributes.
- **Feature Engineering**: Created ratio-based features such as \`rooms_per_household\` and \`bedrooms_per_room\` to improve model performance.
- **Modeling**: Implemented Linear Regression, Random Forest, and XGBoost with hyperparameter optimization via GridSearchCV.
- **Deployment**: Packaged into a **Flask web application** with Docker support for scalable inference.

## Results
| Model | MAE | RMSE | R² Score |
|--------|------|-------|----------|
| Linear Regression | 48,660 | 67,305 | 0.67 |
| Random Forest | 32,187 | 49,243 | 0.82 |
| XGBoost | 31,827 | 48,125 | 0.83 |

## Insights
- **Median income** shows the highest correlation with housing prices (≈0.69).
- **Coastal proximity** strongly increases property value.
- **Feature engineering** significantly improved prediction accuracy.
- Random Forest and XGBoost effectively captured non-linear relationships between socio-economic and geographic factors.

## Impact
Showcases strong proficiency in machine learning pipeline design, from **data acquisition to model deployment**, and demonstrates the capability to extract actionable insights from real-world datasets through **statistical rigor and automation**.
  `
},
];

export const learningData = [
  {
    title: 'IT Infrastructure Foundation',
    slug: 'it-infrastructure-foundation',
    description: 'Comprehensive guide to IT infrastructure fundamentals',
    category: 'IT Infrastructure',
    status: 'Completed',
    bgImage: '/it-infrastructure.png',
    duration: '10 min reading',
    level: 'Beginner to Intermediate',
    technologies: ['Data Centers', 'Servers', 'Networking', 'System Administration', 'Security'],
    features: [
      'Comprehensive coverage of IT infrastructure components',
      'Real-world analogies for better understanding',
      'Technical details with practical examples',
      'Professional system administration tools and practices'
    ],
    topics: [
      'Data Center Fundamentals',
      'System Administrator Roles',
      'Server Types and Management',
      'Client Devices',
      'LAN Components',
      'Communication Media',
      'Firewalls and Security',
      'UPS Systems',
      'Network Geography',
      'Network Access Types'
    ],
    content: `
## IT Infrastructure Foundation

Infrastruktur TI adalah tulang punggung seluruh layanan digital modern. Mulai dari aplikasi perbankan, layanan streaming, sampai sistem internal perusahaan, semuanya bergantung pada komponen-komponen yang bekerja secara konsisten dan dapat diandalkan. Untuk memahami bagaimana semua itu terhubung dan berfungsi, kita perlu melihat gambaran besar mulai dari pusat operasi hingga perangkat yang berada di tangan pengguna.

Segalanya berawal dari Data Center, sebuah fasilitas khusus yang menjadi rumah bagi server, storage, perangkat jaringan, sistem pendingin, keamanan fisik, power backup, dan pengendalian lingkungan. Data center dirancang agar layanan digital tetap beroperasi selama 24 jam penuh tanpa gangguan, dengan standar ketat mengenai listrik, suhu, kelembapan, dan kontrol akses. Di sinilah peran System Administrator menjadi krusial. Mereka memastikan sistem tetap berjalan stabil, mengelola server dan OS, melakukan monitoring, memasang security patch, mengatur akses pengguna, hingga melakukan backup dan recovery. Berbagai tools mereka gunakan, mulai dari SSH dan PowerShell hingga platform monitoring seperti Zabbix atau Grafana.

Komponen utama yang menjadi inti operasi adalah server. Server hadir dalam berbagai platform seperti Windows Server, Linux, hingga UNIX, dan masing-masing memiliki fungsi khas: web server untuk menyajikan halaman web, database server untuk mengelola data, application server untuk menjalankan logika bisnis, hingga file atau directory server untuk penyimpanan dan otentikasi. Lebih jauh, server juga dikelompokkan berdasarkan tipenya. Mainframe melayani transaksi berkecepatan tinggi dengan reliabilitas ekstrem; High Availability server didesain dengan redundansi dan mekanisme failover; cluster menggabungkan banyak server menjadi satu kesatuan; sementara virtual server memungkinkan satu perangkat fisik menjalankan banyak mesin virtual melalui hypervisor seperti VMware, Proxmox, atau Hyper-V.

Di sisi pengguna, terdapat berbagai jenis client yang terhubung ke server, mulai dari perangkat ultra-sederhana seperti dumb terminal, thin client yang sebagian besar prosesnya terjadi di server, perangkat transaksi seperti ATM atau POS, hingga mobile client seperti smartphone. Semua perangkat ini terhubung melalui jaringan yang dibangun dari elemen dasar seperti switch, router, dan access point. Switch menghubungkan perangkat dalam LAN melalui kabel, access point menyediakan konektivitas wireless, dan router mengarahkan trafik antarjaringan hingga keluar menuju internet. Pada tingkat penyedia layanan, router ISP mengelola trafik dalam skala yang jauh lebih besar, menghubungkan kota-kota dan wilayah.

Komunikasi antar perangkat berlangsung melalui media kabel maupun nirkabel. Kabel UTP (Cat5e, Cat6, dan seterusnya) umum digunakan dalam LAN, sementara fiber optic menyediakan kecepatan tinggi untuk backbone dan sambungan jarak jauh. Di sisi wireless, koneksi hadir dalam bentuk WiFi, jaringan seluler seperti 4G dan 5G, hingga koneksi satelit dan microwave link untuk area yang sulit dijangkau. Untuk menjaga jaringan tetap aman, organisasi menerapkan firewall, baik berupa perangkat fisik maupun perangkat lunak, yang mengendalikan lalu lintas berdasarkan aturan keamanan dan mendeteksi aktivitas mencurigakan.

Agar seluruh perangkat ini tetap bekerja saat listrik terganggu, digunakan UPS (Uninterruptible Power Supply). Selain menyediakan daya cadangan, UPS melindungi perangkat dari lonjakan arus dan memberi waktu bagi sistem untuk melakukan shutdown secara aman. Infrastruktur jaringan sendiri terbagi menurut cakupan geografis, mulai dari LAN pada ruangan atau gedung, backbone sebagai penghubung antar-LAN, MAN untuk skala kota, hingga WAN yang mencakup wilayah luas lintas kota atau negara. Berdasarkan akses, jaringan dibedakan menjadi intranet, yang sepenuhnya digunakan secara internal, dan extranet, yang membuka sebagian aksesnya untuk pihak eksternal seperti vendor atau partner bisnis.

Seluruh komponen ini bekerja sebagai satu ekosistem. Memahami fondasinya membuat kita lebih siap menghadapi konsep yang lebih maju seperti cloud computing, container orchestration, automation, dan keamanan siber. Infrastruktur TI mungkin terlihat kompleks, tetapi dengan gambaran besar yang jelas, kita bisa melihat pola kerjanya dengan jauh lebih mudah.
    `
  },
  {
    title: 'General Banking',
    slug: 'general-banking',
    description: 'Fundamentals of banking operations and services',
    category: 'Banking & Finance',
    status: 'Completed',
    bgImage: '/general-banking.png',
    duration: '10 min reading',
    level: 'Professional',
    technologies: ['Banking Operations', 'Communication Skills', 'Document Management', 'Financial Systems'],
    features: [
      'Complete overview of banking operations and financial systems',
      'Professional communication skills for banking environment',
      'Standardized document management procedures',
      'Regulatory compliance and security protocols'
    ],
    topics: [
      'General Banking Operations',
      'Effective Communication in Banking',
      'Document Management Standards',
      'Payment Systems',
      'Customer Service Excellence',
      'Regulatory Compliance'
    ],
    content: `
## Banking Fundamentals Training

### 1. General Banking

#### Pengertian Bank
Menurut UU No. 10 Tahun 1998, bank adalah badan usaha yang menghimpun dana dari masyarakat dalam bentuk simpanan dan menyalurkannya kembali kepada masyarakat dalam rangka meningkatkan taraf hidup rakyat banyak.

#### Fungsi Utama Bank
- **Menghimpun dana**: Tabungan, giro, deposito
- **Menyalurkan dana**: Kredit atau pembiayaan
- **Memberikan jasa keuangan**: Transfer, inkaso, kliring, safe deposit box, ATM, layanan digital

#### Peranan Bank dalam Sistem Keuangan
- Mengalihkan dana/aset dari pihak yang surplus ke pihak yang defisit
- Menjaga stabilitas sistem keuangan dengan menyediakan likuiditas
- Mendukung sistem pembayaran nasional

#### Jenis Produk Simpanan
- **Tabungan**: Bisa ditarik kapan saja, tidak dapat ditarik dengan cek
- **Giro**: Penarikan menggunakan cek atau bilyet giro
- **Deposito**: Penarikan berdasarkan jangka waktu

#### Sistem Pembayaran
**BI-RTGS**
Layanan transfer dana elektronik antar bank dalam rupiah secara real time untuk transaksi bernilai besar.

**Kliring**
Proses perhitungan warkat antar bank meliputi:
- Cek
- Bilyet giro
- Sertifikat Deposito (CD)
- Nota Debet
- Nota Kredit

**Biaya Transfer**
Biaya transfer keluar dibebankan pada nasabah pemberi amanat.

**Keamanan Simpanan**
Dana nasabah dijamin oleh LPS (Lembaga Penjamin Simpanan) hingga batas tertentu.

### 2. Communication Skill

#### Komunikasi Empatik
Empati dalam komunikasi berarti memahami dan merasakan sudut pandang orang lain. Fokusnya bukan memotong, menilai, atau menyiapkan sanggahan, tetapi mendengarkan dengan kualitas penuh.

#### Elemen Komunikasi Efektif
- **Verbal**: Pemilihan kata dan kejelasan isi pesan
- **Non-verbal**: Bahasa tubuh, ekspresi wajah, kontak mata. Ini merupakan elemen paling kuat dalam menyampaikan emosi
- **Intonasi**: Penekanan dan ritme bicara

#### Prinsip-prinsip Dasar Komunikasi
- **Clarity**: Pesan harus jelas, ringkas, dan mudah dipahami
- **Coherence**: Keselarasan antara kata, bahasa tubuh, dan intonasi
- **Active Listening**: Menghindari gangguan internal maupun eksternal, fokus pada isi pembicara

#### Storytelling dalam Bisnis
Tujuannya adalah menciptakan keterlibatan emosional, membangun konteks, dan membuat pesan lebih mudah diingat.

#### Komunikasi Berdasarkan Tipe DISC
- **Compliance (C)**: Fokus pada data, fakta, logika, prosedur
- **Steadiness (S)**: Hindari tekanan. Berikan aspek keamanan, stabilitas, dan jaminan jangka panjang

#### Fungsi Feedback
Digunakan untuk memastikan pemahaman dan menyesuaikan pesan jika diperlukan.

### 3. Tata Persuratan

#### Asas Persuratan
- **Asas Pertanggungjawaban**: Isi, format, dan prosedur surat harus dapat dipertanggungjawabkan
- **Asas Kerahasiaan**: Isi surat hanya dapat diakses oleh pihak yang berkepentingan
- **Asas Pembakuan**: Surat disusun mengikuti tata cara, format, dan bentuk yang telah ditetapkan secara resmi

#### Jenis Persuratan BNI
- Surat Edaran
- Pengumuman
- Instruksi
- Surat Keluar Lainnya sesuai kebutuhan organisasi

#### Pengelolaan Surat Keluar
- Surat rahasia dan sangat rahasia dikelola oleh Sekretaris unit/organisasi BNI terkait
- Agenda Surat Keluar berisi: Nomor, Tanggal, Kepada, Tujuan, Perihal, dan Keterangan
- Masa berlaku nomor Agenda Surat Keluar adalah 1 tahun
- Unit pengolah wajib menyimpan pertinggal/salinan sebagai bukti

#### Pengelolaan Surat Masuk
1. Penerimaan (kegiatan awal)
2. Pencatatan dalam agenda
3. Pembubuhan disposisi oleh pejabat berwenang
4. Diteruskan ke sub unit yang berkaitan dengan isi surat
5. Pengarsipan

### Penutup
Ketiga topik ini membentuk fondasi penting dalam operasional perbankan modern. Mulai dari pemahaman sistem keuangan, kemampuan komunikasi yang efektif, hingga tata kelola persuratan yang tertib dan terstandarisasi. Pemahaman menyeluruh terhadap materi ini bukan hanya membantu kinerja individu, tetapi juga menjaga integritas dan profesionalitas organisasi.
    `
  },
  {
    title: 'The Art of Effective Communication',
    slug: 'effective-communication-art',
    description: 'Journey towards meaningful human connection beyond words',
    category: 'Professional Development',
    status: 'Completed',
    bgImage: '/communication.png',
    duration: '15 min reading',
    level: 'All Levels',
    technologies: ['Active Listening', 'Non-Verbal Communication', 'Storytelling', 'Personal Branding', 'Negotiation'],
    features: [
      'Deep psychological insights into human connection',
      'Practical frameworks for everyday communication',
      'Personal branding through consistent communication',
      'Ethical influence and persuasion techniques'
    ],
    topics: [
      'Mindset Shift in Communication',
      'The 7-38-55 Rule of Communication',
      'Active Listening Mastery',
      'Non-Verbal Power',
      'Personal Branding Through Communication',
      'Influence and Persuasion',
      'Negotiation Styles',
      'Storytelling in Presentations'
    ],
    content: `
## Ketika Komunikasi Bukan Lagi Sekadar Bicara: Catatan Perjalanan Menuju Komunikasi yang Efektif

Beberapa waktu lalu, saya mengikuti sebuah pelatihan tentang Effective Communication Skill. Awalnya saya mengira pelatihan ini hanya akan berisi teori-teori klasik: cara berbicara, cara mendengar, dan hal-hal normatif lain yang mungkin sudah kita dengar sejak sekolah. Tapi ternyata, komunikasi jauh lebih dalam daripada sekadar menyusun kata dengan sopan.

### Komunikasi Dimulai dari Mindset yang Sederhana: Menganggap Orang Lain Penting

Salah satu kalimat yang menghentak saya selama pelatihan adalah ini:

**"Komunikasi baru bekerja ketika kita menganggap orang yang kita ajak bicara lebih penting daripada diri sendiri."**

Kalimat itu sederhana, tapi efeknya tidak. Saya jadi sadar: sering kali kita berbicara bukan untuk berkomunikasi, tetapi untuk menunggu giliran menjawab. Kita sering lupa bahwa komunikasi adalah pertukaran, bukan monolog dua arah yang saling menunggu berhenti.

Yang menarik, materi pelatihan membedakan jelas antara berbicara dan berkomunikasi. Semua orang bisa berbicara, tetapi tidak semua bisa berkomunikasi. Berbicara hanya menyampaikan pesan. Komunikasi menuntut respons, kesalingpahaman, dan koneksi.

### Kenyataan yang Sering Kita Lupakan: Kata Hanya 7% dari Komunikasi

Saat mendengarnya, saya sempat mengernyit. Tapi datanya sudah terkenal sejak penelitian Albert Mehrabian:

- **7%** makna datang dari kata-kata
- **38%** dari suara (intonasi, ritme, dinamika)
- **55%** dari visual (gestur, kontak mata, bahasa tubuh)

Di momen itu saya langsung mengingat seluruh presentasi yang pernah berantakan. Ternyata bukan karena materinya kurang lengkap, tapi karena cara saya menyampaikannya tidak membangun rasa dan kehadiran.

### Mendengar: Keterampilan yang Paling Disepelekan tapi Paling Menentukan

Di pelatihan itu, kami diminta mengamati orang lain berbicara dan mendengarkan tanpa menyela. Terdengar mudah, tapi praktiknya tidak.

Mendengar aktif berarti menanggalkan ego dan kebutuhan untuk membalas. Mendengar dengan niat memahami, bukan menunggu kesempatan untuk unjuk gigi. Dan anehnya, ketika kita benar-benar mendengar, orang lain langsung menurunkan pertahanan.

Itu yang membuat komunikasi terasa alami.

### Ketika Non-Verbal Bicara Lebih Cepat daripada Mulut

Saya mulai memperhatikan bagaimana orang berjalan, duduk, menatap, atau mengangguk saat lawan bicara bicara. Pelatihan menunjukkan bahwa komunikasi non-verbal menciptakan "suasana psikologis" bahkan sebelum kata terlontar.

Bahasa tubuh tertentu bisa menciptakan kesan profesional. Cara duduk bisa menunjukkan rasa percaya diri. Cara kita mengangkat kepala bisa memberi sinyal keterbukaan. Semua itu mungkin terlihat sepele, tapi dampaknya panjang.

Saya menemukan bahwa personal branding yang kuat tidak bermula dari CV atau LinkedIn, tapi dari cara kita hadir di ruangan.

### Komunikasi Buruk Bukan Sekadar Kesalahpahaman. Dampaknya Bisa Separah itu.

Bagian ini cukup membuka mata.

Komunikasi yang buruk bisa menyebabkan:
- Hilangnya bisnis
- Konflik berkepanjangan
- Jatuhnya kepercayaan
- Menurunnya produktivitas
- Bahkan rusaknya hubungan rumah tangga

Sebaliknya, komunikasi yang baik membuat orang merasa terlihat, dihargai, dan aman. Efeknya tidak hanya pada performa kerja, tetapi juga pada motivasi, energi, dan hubungan jangka panjang.

Ternyata komunikasi itu punya efek domino.

### Personal Branding: Bukan Soal Pura-Pura, Tapi Soal Konsistensi

Ada satu sesi yang mengubah cara saya melihat personal branding. Pelatihnya berkata:

**"Personal branding adalah cara Anda membuat orang lain mengingat Anda tanpa Anda hadir."**

Ini bukan soal membangun persona palsu. Bukan soal pencitraan. Personal branding adalah pola perilaku, bahasa tubuh, pilihan kata, hingga cara kita bersikap di ruang profesional — yang dilakukan konsisten, sehingga membentuk persepsi jangka panjang.

Saya belajar bahwa kredibilitas dibangun melalui:
- Konsistensi
- Keahlian yang nyata
- Etika yang jelas
- Ketepatan kita mengambil tanggung jawab

Hal-hal kecil seperti mengucapkan salam, menyebut nama, membalas pesan dengan tepat, ternyata membentuk citra kita lebih kuat dibanding prestasi yang hanya sesekali terlihat.

### Mengomunikasikan Pengaruh: Bagaimana Kita Mempengaruhi Tanpa Memaksa

Ada satu bagian pelatihan yang menarik tentang "Power of Influence".

Intinya sederhana: manusia lebih mudah dipengaruhi ketika merasa:
- Dipahami
- Mirip dengan kita
- Bisa membayangkan masa depan positif ("future state")

Di sinilah persuasi etis bekerja. Bukan memaksa, tapi menghubungkan nilai kita dengan kebutuhan orang lain.

### Negosiasi: Empat Gaya yang Menentukan Hasil

Pelatihan merangkum empat gaya negosiasi:
1. **Menghindar**: menjauh dari konflik
2. **Kompetisi**: menang cepat, tapi hubungan rentan
3. **Akomodasi**: mengalah demi relasi
4. **Kolaborasi**: mencari solusi terbaik untuk semua pihak

Gaya terbaik?
Tergantung situasi. Tapi kolaborasi memberi hasil jangka panjang yang paling sehat.

### Presentasi Bukan Tentang Slide. Storytelling yang Menentukan.

Di bagian presentasi dan storytelling, saya akhirnya memahami kenapa presentasi yang baik tidak ditentukan oleh template PowerPoint, tetapi oleh alur cerita.

Pelatihan mengajarkan:
- Bagaimana membangun ketertarikan
- Bagaimana menyusun storyboard
- Bagaimana menutup presentasi dengan pesan yang bertahan lama

Yang paling menarik:
Presentasi terbaik justru terasa seperti obrolan, bukan ceramah.

### Saat Berhadapan dengan Penolakan, Jangan Terburu-Buru Menjawab

Bagian objection handling mengingatkan saya bahwa tidak semua "tidak" berarti penolakan mutlak.

Ada tiga tipe penolakan:
1. Salah pengertian
2. Kurang yakin
3. Melihat kelemahan

Tugas kita bukan membalas argumen, tapi memahami jenis penolakannya. Dari sana, kita baru bisa menjawab dengan data, empati, atau klarifikasi.

### Penutup: Komunikasi adalah Keterampilan Hidup, Bukan Sekadar Skill Kantor

Di akhir pelatihan, saya menyadari bahwa komunikasi adalah keterampilan yang harus terus dilatih. Ia bukan bawaan lahir — ia dibentuk oleh kebiasaan, kesadaran, dan kesediaan kita melihat manusia sebagai manusia. Komunikasi yang baik menciptakan hubungan. Hubungan menciptakan kepercayaan. Kepercayaan menciptakan peluang. Dan di dunia kerja hari ini, peluang adalah mata uang paling berharga. Pelatihan ini bukan sekadar materi. Ia adalah pengingat bahwa manusia terhubung bukan karena kata-kata, tapi karena makna yang kita bangun bersama.
    `
  },
  {
    title: 'Linux Learning Journey: From Networking Basics to System Security',
    slug: 'linux-learning-journey',
    description: 'Comprehensive journey through Linux networking, security, and system administration',
    category: 'System Administration',
    status: 'Completed',
    bgImage: '/linux.png',
    duration: '15 min reading',
    level: 'Intermediate',
    technologies: ['Linux', 'Networking', 'DNS', 'NTP', 'Security', 'Package Management', 'System Administration'],
    features: [
      'Comprehensive coverage of Linux networking fundamentals',
      'Practical DNS configuration with BIND',
      'Time synchronization with NTP',
      'Security hardening and firewall management',
      'Package management with YUM/RPM'
    ],
    topics: [
      'Network Interface Configuration',
      'IP Addressing and Subnetting',
      'DNS Zone File Configuration',
      'NTP Time Synchronization',
      'Firewall Management',
      'System Security Hardening',
      'Package Management',
      'System Administration Mindset'
    ],
    content: `
## Linux Learning Journey: From Networking Basics to System Security

Ketika pertama kali memutuskan untuk serius belajar Linux, saya mengira perjalanan ini hanya akan sebatas mengenal beberapa command dasar, instalasi server, lalu selesai. Namun saya sadar bahwa Linux bukan hanya sebuah sistem operasi - ia adalah ekosistem yang menghubungkan jaringan, server, keamanan, hingga filosofi open source yang begitu dalam.

Artikel ini saya tulis bukan sekadar rangkuman kaku, tapi sebagai narasi perjalanan belajar. Saya ingin berbagi apa saja yang saya pelajari - dari konsep dasar jaringan, konfigurasi DNS, manajemen paket, hingga keamanan sistem - lengkap dengan momen "aha!" yang saya alami.

---

## Networking: The Secret Language That Connects Everything

Bayangkan kamu punya komputer super canggih, tapi ia sendirian - tidak bisa berbicara dengan komputer lain. Maka seluruh kekuatan itu jadi percuma. Di sinilah jaringan masuk: jaringan adalah bahasa komunikasi komputer.

Di awal course, saya belajar tentang network interface. Sebelumnya saya pikir ini hanya istilah teknis, tapi ternyata inilah jembatan yang menghubungkan komputer ke dunia luar. Bisa berupa kartu fisik (NIC) atau virtual interface.

Lalu masuk ke hal-hal mendasar seperti:
- **IP Address**: identitas numerik tiap perangkat. Tanpa IP, komputer tidak bisa saling menyapa.
- **Subnet Mask**: cara membagi jaringan besar jadi potongan kecil (subnet). Bayangkan seperti alamat rumah dengan RT/RW.
- **Gateway**: pintu keluar masuk antarjaringan. Kalau tanpa gateway, komputer hanya bisa ngobrol dengan tetangga satu kompleks.
- **MAC Address**: "sidik jari" unik tiap kartu jaringan. Tidak bisa diganti sembarangan, karena menempel di hardware.

Perintah sederhana seperti:
\`\`\`bash
ifconfig -a      # melihat interface
ping 8.8.8.8     # cek konektivitas
netstat -r       # lihat routing table
\`\`\`

tiba-tiba jadi punya makna. Saya tidak lagi melihat command itu sebagai hafalan, tapi sebagai alat investigasi. Seperti detektif, kita bisa melacak siapa bicara dengan siapa di dalam jaringan.

---

## DNS: The Magic Behind Domain Names

Selanjutnya saya masuk ke topik DNS (Domain Name System). Ini salah satu bagian yang paling membuka mata.

Sebelum belajar, saya hanya tahu: kalau mengetik google.com, maka website akan terbuka. Tapi course ini menjelaskan apa yang benar-benar terjadi di balik layar.

DNS adalah penerjemah. Ia mengubah nama domain yang mudah diingat (misalnya facebook.com) menjadi alamat IP yang sebenarnya dipakai komputer.

Saya belajar mengkonfigurasi BIND (Berkeley Internet Name Domain), salah satu software DNS paling populer di Linux. Dari membuat zone file, menambahkan A record, CNAME, sampai MX record untuk email server.

Contoh sederhana isi zone file:
\`\`\`bind
$TTL 86400
@   IN  SOA     masterdns.lab.local. root.lab.local. (
        2011071001  ; Serial
        3600        ; Refresh
        1800        ; Retry
        604800      ; Expire
        86400 )     ; Minimum TTL
@       IN  NS      masterdns.lab.local.
@       IN  A       192.168.1.29
clienta IN  A       192.168.1.240
\`\`\`

Dulu saya pikir ini rumit, tapi setelah memahami logikanya, ternyata seperti membuat kamus: siapa punya nama apa, dan alamat IP-nya berapa.

Perintah seperti:
\`\`\`bash
dig clienta.lab.local
nslookup google.com
\`\`\`

jadi terasa seperti "membuka kunci" rahasia internet.

---

## Time Synchronization: The Little Details That Make the Difference

Bagian yang mengejutkan saya adalah soal NTP (Network Time Protocol).

Sepele? Awalnya saya kira iya. "Apa pentingnya jam server sinkron?" pikir saya.

Ternyata salah besar. Dalam dunia server, perbedaan waktu 2–3 menit saja bisa berakibat fatal: log tidak sinkron, sistem otentikasi gagal, bahkan transaksi data bisa kacau.

Dengan NTP, server Linux bisa menjaga detak jantungnya tetap akurat, sinkron dengan server global.

Konfigurasi NTP cukup sederhana:
\`\`\`bash
yum install ntpd -y
vi /etc/ntp.conf
systemctl enable ntpd
systemctl start ntpd
\`\`\`

Tapi efeknya luar biasa: seluruh sistem punya "jam dunia" yang sama.

---

## Package Management: Linux Software Marketplace

Kalau jaringan adalah bahasa, maka manajemen paket adalah pasar tempat kita belanja kebutuhan.

Di Red Hat atau CentOS, saya belajar bagaimana RPM dan YUM bekerja. Ini bukan sekadar cara install software, tapi ekosistem distribusi software yang stabil.

Contoh:
\`\`\`bash
yum install httpd       # install Apache web server
yum update              # update semua paket
yum history undo 3      # rollback transaksi instalasi ke keadaan sebelumnya
rpm -qa | grep ntp      # cek paket yang sudah terpasang
\`\`\`

Setiap paket punya dependensi, versi, dan riwayat. Linux mengajarkan disiplin: jangan asal install, pahami dulu ekosistemnya.

---

## Security: The Most Important Lesson

Bagian paling kritis adalah security.

Linux kuat, tapi bukan berarti kebal. Justru karena banyak digunakan di server, Linux selalu jadi target serangan.

Beberapa hal yang saya pelajari:
- **Firewall (firewalld, iptables)**: bukan sekadar "blokir", tapi membangun aturan kepercayaan.
- **Audit system**: melacak siapa melakukan apa di server.
- **DNSSEC**: cara mengamankan DNS agar tidak dipalsukan.
- **OpenSCAP & Compliance**: memeriksa apakah sistem sudah sesuai standar keamanan.

Contoh menyalakan firewall:
\`\`\`bash
systemctl start firewalld
firewall-cmd --add-service=http --permanent
firewall-cmd --reload
\`\`\`

Setiap langkah kecil ini berarti: kamu baru saja menutup satu pintu masuk yang bisa dimanfaatkan penyerang.

---

## Refleksi: Dari Hafalan ke Pemahaman

Di akhir course, saya sadar perjalanan ini bukan sekadar menghafal command. Linux mengajarkan cara berpikir:
- Bahwa jaringan bukan kabel, tapi bahasa komunikasi.
- Bahwa DNS adalah kamus besar internet.
- Bahwa waktu server sama pentingnya dengan data itu sendiri.
- Bahwa keamanan adalah mindset, bukan fitur tambahan.

Yang paling penting, Linux membentuk pola pikir administrator: tidak lagi melihat sistem sebagai "kotak hitam", tapi sebagai ekosistem yang bisa dimengerti, dikontrol, dan diamankan.

---

## Conclusion: Why You Should Start Learning Linux

Kalau kamu baru mulai, jangan takut dengan banyaknya istilah, singkatan, dan command. Setiap perintah yang terlihat aneh punya cerita, dan setiap konfigurasi punya alasan.

Bagi saya, course ini bukan hanya tiket untuk pekerjaan di bidang IT. Ini adalah perjalanan intelektual: dari awam menjadi lebih memahami bagaimana dunia digital kita bekerja.

Linux itu bukan sekadar digunakan - Linux itu harus dipahami. Dan begitu kamu memahaminya, kamu akan melihat teknologi dengan cara yang sama sekali baru.
    `
  }  
];

export const serviceData = [
  { 
    icon: assets.web_icon, 
    title: 'Core Data & Analytics Skills', 
    description: 'Proficient in data wrangling, analysis, and visualization to extract actionable insights.',
    professionalDetails: {
      businessValue: "Transforms raw datasets into actionable intelligence that supports data-driven decision-making across organizational levels.",
      collaboration: "Collaborates with analysts, business units, and engineers to define data KPIs, improve reporting, and enhance analytic workflows.",
      keyAchievements: [
        "Delivered insight reports that improved decision accuracy by 30%",
        "Built interactive dashboards enabling faster business insights",
        "Streamlined data cleaning pipeline reducing manual prep by 50%"
      ],
      toolsTechnologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Tableau", "SQL", "Jupyter Notebook"]
    }
  },
  { 
    icon: assets.mobile_icon, 
    title: 'Machine Learning & AI', 
    description: 'Experienced in building predictive models and deploying intelligent systems for automation and decision support.',
    professionalDetails: {
      businessValue: "Leverages ML and deep learning to automate complex decision-making processes and uncover predictive patterns in data.",
      collaboration: "Works with domain experts and data engineers to design scalable AI pipelines and ensure deployment-readiness of models.",
      keyAchievements: [
        "Developed YOLO-based model achieving 96% accuracy in real-time detection",
        "Optimized ML models reducing inference time by 40%",
        "Deployed end-to-end ML system with continuous retraining pipeline"
      ],
      toolsTechnologies: ["TensorFlow", "PyTorch", "YOLOv8", "Scikit-learn", "XGBoost", "OpenCV", "Jetson Orin Nano"]
    }
  },
  { 
    icon: assets.ui_icon, 
    title: 'Programming & Tools', 
    description: 'Strong foundation in software engineering, scripting, and collaborative version control.',
    professionalDetails: {
      businessValue: "Ensures efficient, maintainable, and scalable codebases that enhance development velocity and system reliability.",
      collaboration: "Adopts best practices in Git-based collaboration, CI/CD, and documentation for reproducible results and team consistency.",
      keyAchievements: [
        "Built modular codebases reused across multiple projects",
        "Reduced deployment friction using Dockerized workflows",
        "Implemented CI pipelines improving release stability by 25%"
      ],
      toolsTechnologies: ["Python", "Git", "GitHub", "VS Code", "Docker", "Linux", "Bash"]
    }
  },
  { 
    icon: assets.graphics_icon, 
    title: 'Data Engineering & MLOps', 
    description: 'Designs and maintains robust pipelines for large-scale data processing and model deployment.',
    professionalDetails: {
      businessValue: "Bridges ML research with production by establishing reliable, automated data and model pipelines.",
      collaboration: "Works with backend engineers and cloud specialists to orchestrate scalable model deployment on modern infrastructure.",
      keyAchievements: [
        "Implemented Airflow-based data pipelines reducing latency by 35%",
        "Deployed containerized models with monitoring and logging support",
        "Automated dataset versioning for reproducibility across projects"
      ],
      toolsTechnologies: ["Docker", "Airflow", "Kubernetes", "AWS", "Flask", "FastAPI", "GitHub Actions"]
    }
  },
];

export const toolsData = [
    assets.vscode, assets.jupyter, assets.git, assets.github, assets.anaconda, assets.docker, assets.tableau, assets.tensorflow
];

export const currentYear = new Date().getFullYear()

export const socialLinks = [
  {
      name: 'Instagram',
      url: 'https://www.instagram.com/ar.giii',
      icon: assets.instagram
  },
  {
      name: 'Github',
      url: 'https://github.com/agik20',
      icon: assets.github
  },
  {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/ardutra-agi-ginting-56216b316',
      icon: assets.linkedin
  },
];