import React from "react";
import { project1 } from "../Assets/Utils/Index";

const RuangEditDetail = () => {
  return (
    <div className="p-6 md:p-10 max-w-6xl mx-auto font-sans text-base leading-relaxed">
      {/* Gambar / Hero Section */}
      <div className="mb-10">
        <img src={project1} alt="Ruang Edit Project Cover" className="w-full max-h-[500px] object-cover rounded-xl shadow" />
      </div>

      {/* Tombol Demo */}
      <div className="mb-12">
        <a href="https://ruangedit.ilhamsuryana.my.id" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 border border-black rounded-xl text-sm font-medium hover:bg-black hover:text-white transition duration-300">
          🔍 Lihat Demo Proyek
        </a>
      </div>

      {/* Judul & Deskripsi */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-2 border-b pb-2 inline-block">🎬 Ruang Edit - Platform Course Editing</h1>
        <p className="mt-4">Sebuah platform pembelajaran online untuk mengakses kursus seputar video editing dan desain grafis. Proyek ini dikembangkan dengan teknologi Laravel, React, dan Inertia.js.</p>
      </div>

      {/* UI/UX Design */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3 border-b pb-1">🎨 Desain UI/UX</h2>
        <p className="mb-4">Desain dikembangkan di Figma dengan pendekatan minimalis dan fokus pada keterbacaan serta pengalaman pengguna yang efisien. Halaman utama menampilkan hero, kategori kelas, dan testimoni mentor.</p>
        <img src="https://i.ibb.co/fnpLYJ6/ruang-edit-design.png" alt="UI Design" className="rounded shadow w-full" />
      </section>

      {/* Alur Sistem */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3 border-b pb-1">⚙️ Alur Sistem & Fungsionalitas</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Pengguna mendaftar dan login menggunakan email & password.</li>
          <li>Melihat daftar kursus, detail materi, dan mentor.</li>
          <li>Melakukan pembelian course melalui integrasi Midtrans.</li>
          <li>Setelah pembayaran sukses, token kelas dikirim melalui email.</li>
          <li>Token digunakan untuk membuka akses ke materi pembelajaran.</li>
        </ul>
      </section>

      {/* Permasalahan & Solusi */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3 border-b pb-1">🛠️ Permasalahan & Solusi</h2>

        <div className="mb-6">
          <h3 className="font-semibold text-lg mb-2">Kenapa Aplikasi Ini Dibangun</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Masalah:</strong> Admin kesulitan mengelola kelas secara manual, mulai dari penambahan materi hingga pengaturan akses.
              <br />
              <strong>Solusi:</strong> Aplikasi ini menyediakan dashboard manajemen kelas yang mudah digunakan dengan fitur CRUD lengkap.
            </li>
            <li>
              <strong>Masalah:</strong> Member sering kebingungan saat harus memilih materi editing, desain, atau topik kreatif lain.
              <br />
              <strong>Solusi:</strong> Platform menyusun materi berdasarkan kategori dan mentor spesialis di bidangnya, sehingga member lebih terarah.
            </li>
            <li>
              <strong>Masalah:</strong> Akses materi oleh member tidak terorganisir dan sering terhambat.
              <br />
              <strong>Solusi:</strong> Sistem token otomatis memberikan akses ke materi secara instan dan hanya untuk user yang sah.
            </li>
            <li>
              <strong>Masalah:</strong> Admin kesulitan menerima pembayaran dari berbagai metode seperti bank dan e-wallet secara efisien.
              <br />
              <strong>Solusi:</strong> Integrasi Midtrans sebagai payment gateway mempermudah transaksi multichannel (bank, QRIS, e-wallet).
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-2">Masalah Teknis Saat Pengembangan</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Masalah:</strong> Status pembayaran tidak realtime.
              <br />
              <strong>Solusi:</strong> Menggunakan webhook Midtrans ke endpoint Laravel agar update status dilakukan otomatis.
            </li>
            <li>
              <strong>Masalah:</strong> Token akses harus langsung dikirim via email setelah pembayaran.
              <br />
              <strong>Solusi:</strong> Implementasi event & listener Laravel untuk trigger pengiriman email instan.
            </li>
            <li>
              <strong>Masalah:</strong> Embed YouTube tidak tampil di VPS.
              <br />
              <strong>Solusi:</strong> Gunakan link `https://www.youtube.com/embed/ID`, pastikan server memakai HTTPS dan header CSP sudah tepat.
            </li>
          </ul>
        </div>
      </section>

      {/* Teknologi */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3 border-b pb-1">🧱 Teknologi yang Digunakan</h2>
        <div className="flex flex-wrap gap-3 text-sm mt-4">
          {["React", "Inertia.js", "Laravel 10", "Tailwind CSS", "MySQL", "Midtrans API"].map((tech) => (
            <span key={tech} className="px-3 py-1 border rounded-full">
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Struktur Project */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3 border-b pb-1">📂 Struktur Project</h2>
        <pre className="text-sm p-4 rounded border overflow-x-auto">
          {`
BISMILLAH-RUANG_EDIT/
├── backend/
│   ├── app/
│   ├── config/
│   ├── database/
│   └── routes/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.tsx
│   └── package.json
└── README.md
`}
        </pre>
      </section>

      {/* Kesimpulan */}
      <section>
        <h2 className="text-2xl font-semibold mb-3 border-b pb-1">📌 Pembelajaran & Tantangan</h2>
        <p>
          Proyek ini mengajarkan saya bagaimana mengelola arsitektur fullstack modern, komunikasi real-time antara backend dan frontend tanpa REST API, dan penerapan sistem pembelian digital yang aman. Ruang Edit adalah hasil nyata dari
          kombinasi antara desain, logika sistem, dan kebutuhan pengguna.
        </p>
      </section>
    </div>
  );
};

export default RuangEditDetail;
