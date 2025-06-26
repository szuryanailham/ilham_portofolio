import React from "react";
import { project3 } from "../Assets/Utils/Index";

const SumuDetail = () => {
  return (
    <div className="p-6 md:p-10 max-w-6xl mx-auto font-sans text-base leading-relaxed">
      {/* Hero Gambar */}
      <div className="mb-10">
        <img src={project3} alt="SUMU Project Cover" className="w-full max-h-[500px] object-cover rounded-xl shadow" />
      </div>

      {/* Tombol Demo */}
      <div className="mb-12">
        <a href="https://sumu.or.id" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 border border-black rounded-xl text-sm font-medium hover:bg-black hover:text-white transition duration-300">
          🌐 Kunjungi Sumu.or.id
        </a>
      </div>

      {/* Judul & Deskripsi */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-2 border-b pb-2 inline-block">🧭 SUMU – Sistem Untuk Monitoring Usaha</h1>
        <p className="mt-4">
          SUMU adalah platform berbasis web yang dikembangkan untuk memfasilitasi pendampingan usaha mikro, terutama yang dikelola oleh perempuan, melalui pendekatan komunitas. Website ini mendukung kegiatan pendampingan, pelaporan, dan
          kolaborasi antar pelaku usaha dan fasilitator program NGO.
        </p>
      </div>

      {/* Peran Saya */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3 border-b pb-1">💼 Peran Saya dalam Proyek</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Berperan sebagai developer backend Laravel untuk pengembangan API SUMU.</li>
          <li>Membangun sistem monitoring kegiatan usaha, pendampingan, dan evaluasi UMKM berbasis komunitas.</li>
          <li>Membuat sistem multi-role untuk admin NGO, fasilitator, dan anggota komunitas.</li>
          <li>Menangani input data kegiatan, realisasi program, dan dokumentasi berbasis indikator SDG.</li>
        </ul>
      </section>

      {/* Modul API Laravel */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3 border-b pb-1">📡 Modul API Laravel yang Dibangun</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Registrasi dan manajemen komunitas dampingan.</li>
          <li>Tracking kegiatan usaha dan log aktivitas fasilitator.</li>
          <li>Manajemen data program dan outcome berdasar indikator kinerja.</li>
          <li>Autentikasi pengguna dan peran (role-based access).</li>
          <li>Export laporan dalam format PDF dan Excel.</li>
        </ul>
      </section>

      {/* Permasalahan & Solusi */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3 border-b pb-1">🛠️ Permasalahan & Solusi</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Masalah:</strong> Sulit melacak perkembangan UMKM binaan dalam skala banyak & manual.
            <br />
            <strong>Solusi:</strong> Sistem SUMU menyediakan log kegiatan otomatis, pencapaian, dan indikator evaluasi per komunitas.
          </li>
          <li>
            <strong>Masalah:</strong> Koordinasi antar fasilitator & NGO pusat tidak efisien.
            <br />
            <strong>Solusi:</strong> Modul pelaporan harian/mingguan yang terintegrasi langsung ke dashboard pusat.
          </li>
          <li>
            <strong>Masalah:</strong> Keterbatasan dokumentasi program di lapangan.
            <br />
            <strong>Solusi:</strong> Fitur upload dokumentasi, foto kegiatan, dan outcome berbasis waktu & lokasi.
          </li>
        </ul>
      </section>

      {/* Teknologi */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3 border-b pb-1">🧱 Teknologi yang Digunakan</h2>
        <div className="flex flex-wrap gap-3 text-sm mt-4">
          {["Laravel 10", "REST API", "MySQL", "Filament Admin", "Midtrans", "Livewire", "Tailwind CSS", "JWT Auth"].map((tech) => (
            <span key={tech} className="px-3 py-1 border rounded-full">
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Struktur Backend */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3 border-b pb-1">📂 Struktur Backend Laravel</h2>
        <pre className="text-sm p-4 rounded border overflow-x-auto">
          {`
sumu-backend/
├── app/
│   ├── Http/
│   │   ├── Controllers/
│   │   └── Requests/
├── routes/
│   └── api.php
├── database/
│   ├── migrations/
│   └── seeders/
├── resources/
│   └── views/
└── config/
`}
        </pre>
      </section>

      {/* Penutup */}
      <section>
        <h2 className="text-2xl font-semibold mb-3 border-b pb-1">📌 Pembelajaran & Dampak</h2>
        <p>
          Proyek SUMU memperluas wawasan saya tentang pembangunan sosial berbasis teknologi dan bagaimana sistem informasi dapat membantu NGO dalam melacak dan meningkatkan kualitas pendampingan masyarakat. Saya juga belajar bekerja dengan
          skema multi-role user dan integrasi laporan kuantitatif & kualitatif.
        </p>
      </section>
    </div>
  );
};

export default SumuDetail;
