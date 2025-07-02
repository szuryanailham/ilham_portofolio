import { Instagram, javascriptPorto, whatsapp, laravelPorto, Linkedin, reactPorto, tailwindsPorto, Ability1, Ability2, Ability3, github, project1 } from "../Assets/Utils/Index";
export const title = "HEI, I AM SZURYANA ";

export const Deskripsi =
  "Saya Junior Fullstack Developer yang berpengalaman membangun aplikasi web interaktif dan responsif menggunakan JavaScript. Terbiasa menggunakan React, Node.js, dan Express untuk pengembangan fullstack, serta menguasai database MySQL, PostgreSQL, dan MongoDB.";

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
export const HeroSubTitle = "Membangun Aplikasi Web yang Fungsional dan Interaktif dengan JavaScript, React, dan Node.js";

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
