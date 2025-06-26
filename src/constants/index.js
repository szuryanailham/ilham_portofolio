import { Instagram, javascriptPorto, whatsapp, laravelPorto, Linkedin, reactPorto, tailwindsPorto, Ability1, Ability2, Ability3, github, project1, project2, project3 } from "../Assets/Utils/Index";
export const title = "HEI, I AM SZURYANA ";

export const Deskripsi =
  "Saya Fullstack Developer dengan 3+ tahun pengalaman dalam membangun aplikasi web yang responsif, interaktif, dan scalable. Menguasai Figma Design, HTML, CSS, JavaScript, serta framework modern seperti Laravel , Next.js, dan Express.";

export const LinkSocialMediaArray = [
  {
    id: "Linkedin",
    title: "Linkedin",
    image: Linkedin,
    url: "https://www.linkedin.com/in/ilhamsuryana",
  },

  {
    id: "Whatshapp",
    title: "Whatsapp ",
    image: whatsapp,
    url: "https://wa.me/6285853438903",
  },
  {
    id: "Instagram",
    title: "Instagram",
    image: Instagram,
    url: "https://www.instagram.com/iamsuryana_/",
  },

  {
    id: "Github",
    title: "Github",
    image: github,
    url: "https://github.com/szuryanailham",
  },
];

export const HeroSubTitle = "Membangun Pengalaman Visual yang Berkesan melalui  Setiap Baris pixel dan Kode";

export const experience = [
  {
    Title: "Bootcamp Fullstack Developer – PT Amanah Karya",
    year: "16 Februari 2024 – 30 Juni 2024",
    deskripsi: "Mengikuti program Kampus Merdeka Angkatan 6 dengan fokus pada pengembangan aplikasi web menggunakan framework Laravel serta praktik kerja tim dan kolaborasi Git.",
  },
  {
    Title: "Web Developer – PT Wesclic Studio",
    year: "20 Desember 2024 – 2 Februari 2025",
    deskripsi: "Berperan sebagai Fullstuck developer.yang diminta untuk mengembangkan REST API mengunakan laravel untuk aplikasi berbasis Multiplaform baik mobile app dan web ",
  },
  {
    Title: "Fullstack Contributor – Ruang Edit Course",
    year: "20 Mei 2025 – Sekarang",
    deskripsi:
      "Berperan dalam perancangan dan pengembangan platform pembelajaran online Ruang Edit, mencakup analisis dan desain business flow, pembuatan ERD (Entity Relationship Diagram), desain antarmuka pengguna (UI), serta implementasi sisi front-end dan back-end sebagai Fullstack Developer.",
  },
];

export const portofolio = [
  {
    id: 1,
    nama: "Ruang Edit – Course Learning Website",
    url: "/portfolio/ruang-edit",
    github: "https://github.com/szuryanailham/BISMILLAH-RUANG_EDIT",
    img: project1,
    tehno: { reactPorto, javascriptPorto, tailwindsPorto, laravelPorto },
    deskripsi: {
      ringkasan: "Website pembelajaran berbasis course yang membantu pengguna belajar video editing dengan sistem pembelian token dan akses materi eksklusif.",
      problem: ["User tidak bisa langsung mengakses materi tanpa membayar.", "Pembelian course perlu divalidasi otomatis.", "Materi kursus tidak terorganisir dan tidak terlindungi.", "User membutuhkan bukti transaksi melalui email."],
      solusi: [
        "Mengintegrasikan Midtrans API untuk transaksi dan validasi otomatis.",
        "Menggunakan token akses kelas yang dikirim via email setelah pembayaran.",
        "Admin dashboard untuk manajemen kelas, materi, dan harga.",
        "Sistem pengiriman email otomatis sebagai bukti transaksi dan akses kelas.",
      ],
      peran: "Fullstack Developer",
      tugas: [
        "Membangun antarmuka frontend dengan React dan Tailwind CSS.",
        "Membuat REST API menggunakan Laravel.",
        "Mengintegrasikan Midtrans untuk sistem pembayaran.",
        "Membuat sistem token akses untuk membuka kelas.",
        "Membangun sistem email otomatis menggunakan Laravel Mail.",
        "Mendesain UI/UX di Figma dan mengimplementasikannya ke dalam kode.",
      ],
    },
  },
  {
    id: 2,
    url: "/portfolio/zendo",
    nama: "Ruang Edit - course learning website",
    github: "https://github.com/szuryanailham",
    img: project2,
    tehno: { reactPorto, javascriptPorto, tailwindsPorto, laravelPorto },
  },
  {
    id: 3,
    url: "/portfolio/sumu",
    nama: "Ruang Edit - course learning website",
    github: "https://github.com/szuryanailham",
    img: project3,
    tehno: { reactPorto, javascriptPorto, tailwindsPorto, laravelPorto },
  },
];

export const AbilityArray = [
  {
    id: "1",
    title: "Design",
    image: Ability1,
    desc: "Saya membuat desain dan prototipe produk digital dengan ide-ide unik menggunakan Figma",
  },
  {
    id: "2",
    title: "Developer",
    image: Ability2,
    desc: "Saya membuat tampilan user interface dalam tehnologi website menggunakan bahasa pemograman terbaru",
  },
  {
    id: "3",
    title: "DevOps",
    image: Ability3,
    desc: "Saya berperan dalam mengelola deployment otomatis, CI/CD pipeline, monitoring server, serta pengelolaan infrastruktur untuk memastikan aplikasi berjalan optimal dan efisien.",
  },
];
