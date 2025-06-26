import { project2 } from "../Assets/Utils/Index";
const ZendoDetail = () => {
  return (
    <div className="p-6 md:p-10 max-w-6xl mx-auto font-sans text-base leading-relaxed">
      {/* Hero Gambar */}
      <div className="mb-10">
        <img src={project2} alt="Zendo Project Cover" className="w-full max-h-[500px] object-cover rounded-xl shadow" />
      </div>

      {/* Tombol Demo */}
      <div className="mb-12">
        <a href="https://zendo.id" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 border border-black rounded-xl text-sm font-medium hover:bg-black hover:text-white transition duration-300">
          🚀 Kunjungi Zendo.id
        </a>
      </div>

      {/* Judul & Deskripsi */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-2 border-b pb-2 inline-block">🛵 Zendo – Layanan On-Demand via WhatsApp</h1>
        <p className="mt-4">
          Zendo adalah layanan *on-demand service* berbasis ojek yang hadir untuk memenuhi berbagai kebutuhan harian Anda, kapan saja dan di mana saja. Dengan integrasi WhatsApp sebagai media pemesanan utama, Zendo mengutamakan kecepatan,
          kenyamanan, dan layanan profesional untuk pelanggan di berbagai kota.
        </p>
      </div>

      {/* Peran Saya */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3 border-b pb-1">💡 Peran Saya dalam Proyek</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Membangun RESTful API Laravel untuk sistem layanan Zendo seperti antar barang, laundry, beli makanan, dll.</li>
          <li>Mengelola endpoint pemesanan via WhatsApp dan mencatat histori layanan pengguna.</li>
          <li>Merancang sistem backend untuk mengatur kurir, pelanggan, dan rute layanan.</li>
          <li>Membuat logika pricing berdasarkan zona layanan, jarak tempuh, dan jenis layanan.</li>
        </ul>
      </section>

      {/* Modul API Laravel */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3 border-b pb-1">🔌 Modul API Laravel yang Dibangun</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Autentikasi pelanggan dan driver.</li>
          <li>Pemesanan layanan via WhatsApp & REST endpoint.</li>
          <li>Manajemen order status (menunggu, dijemput, selesai, dibatalkan).</li>
          <li>Sistem notifikasi ke admin/driver (via webhook/WA bot).</li>
          <li>Dashboard API untuk melihat order & performa driver.</li>
        </ul>
      </section>

      {/* Permasalahan & Solusi */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3 border-b pb-1">🛠️ Permasalahan & Solusi</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Masalah:</strong> Pelanggan kesulitan akses aplikasi native atau malas install app tambahan.
            <br />
            <strong>Solusi:</strong> Integrasi penuh dengan WhatsApp untuk proses order yang cepat, familiar, dan mobile-friendly.
          </li>
          <li>
            <strong>Masalah:</strong> Admin kesulitan memantau banyak order sekaligus dari berbagai channel.
            <br />
            <strong>Solusi:</strong> Backend menyediakan API dashboard yang tersinkronisasi dengan WA order log dan manajemen kurir.
          </li>
          <li>
            <strong>Masalah:</strong> Rute pengantaran dan jenis layanan sangat bervariasi.
            <br />
            <strong>Solusi:</strong> Endpoint API dibuat dinamis dengan logika pricing dan category service yang fleksibel.
          </li>
        </ul>
      </section>

      {/* Teknologi */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3 border-b pb-1">🧱 Teknologi yang Digunakan</h2>
        <div className="flex flex-wrap gap-3 text-sm mt-4">
          {["Laravel 10", "Sanctum", "REST API", "MySQL", "WhatsApp Gateway", "NodeMailer", "Postman", "GitHub"].map((tech) => (
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
zendo-backend/
├── app/
│   ├── Http/
│   │   ├── Controllers/
│   │   ├── Middleware/
│   │   └── Services/
├── routes/
│   ├── api.php
├── database/
│   ├── migrations/
│   └── seeders/
└── config/
`}
        </pre>
      </section>

      {/* Penutup */}
      <section>
        <h2 className="text-2xl font-semibold mb-3 border-b pb-1">📌 Pembelajaran & Dampak</h2>
        <p>
          Proyek ini memberi saya pengalaman dalam membangun sistem API untuk bisnis real-time berbasis layanan lokal. Saya juga belajar memahami kebutuhan UX non-app seperti via WhatsApp dan menyusun logika service modular yang bisa tumbuh
          fleksibel mengikuti skala bisnis.
        </p>
      </section>
    </div>
  );
};

export default ZendoDetail;
