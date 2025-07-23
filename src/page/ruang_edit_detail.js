import React, { useState } from "react";
import { project1 } from "../Assets/Utils/Index";
import { FaGithubAlt } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import image_porto_1 from "../Assets/Images/detail-porto/ruang-edit/image_1.png";
import image_porto_2 from "../Assets/Images/detail-porto/ruang-edit/image_2.png";
import image_porto_3 from "../Assets/Images/detail-porto/ruang-edit/image_3.png";
import image_porto_4 from "../Assets/Images/detail-porto/ruang-edit/image_4.png";
import image_porto_5 from "../Assets/Images/detail-porto/ruang-edit/image_5.png";
import { FiArrowLeft } from "react-icons/fi";
import { HiOutlineDocumentText } from "react-icons/hi";
import { Link } from "react-router-dom";
const RuangEditDetail = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const contributions = [
    { role: "UI Design", percent: 100 },
    { role: "Frontend Development", percent: 90 },
    { role: "Project Management", percent: 80 },
    { role: "Backend Development", percent: 85 },
    { role: "Deployment & DevOps", percent: 75 },
  ];

  const images = [
    {
      id: 1,
      src: image_porto_1,
      alt: "Ruang Edit – Homepage UI Design",
    },
    {
      id: 2,
      src: image_porto_2,
      alt: "Dashboard Interface – Admin View",
    },
    {
      id: 3,
      src: image_porto_3,
      alt: "Login Page UI – Clean Auth Layout",
    },
    {
      id: 4,
      src: image_porto_4,
      alt: "Mentor Profile Page – Detail UI",
    },
    {
      id: 5,
      src: image_porto_5,
      alt: "Course Listing – User Selection View",
    },
  ];

  return (
    <div className="p-6 md:p-10 max-w-6xl mx-auto font-sans text-base leading-relaxed">
      {/* Back Button */}
      <div className="mb-6">
        <Link
          to="/" // Ganti ke path tujuan seperti "/portfolio" atau gunakan onClick jika ingin pakai history.back()
          className="inline-flex items-center text-white hover:text-[#c9b6ff] transition-colors"
        >
          <FiArrowLeft className="text-xl mr-2" />
          <span>Back</span>
        </Link>
      </div>

      {/* Gambar / Hero Section */}
      <div className="mb-10">
        <img src={project1} alt="Ruang Edit Project Cover" className="w-full max-h-[500px] object-cover rounded-xl shadow" />
      </div>

      {/* Tombol Demo */}
      <div className="mb-12 w-full flex justify-center flex-wrap gap-4">
        {/* Tombol Demo */}
        <a
          href="https://ruangedit.ilhamsuryana.my.id"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 bg-white text-black border border-black rounded-xl text-sm font-semibold shadow-md hover:scale-105 transition-transform duration-300"
        >
          <FiExternalLink className="text-lg" />
          View Project Demo
        </a>

        {/* Tombol Github */}
        <a
          href="https://github.com/szuryanailham/BISMILLAH-RUANG_EDIT"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 bg-white text-black border border-black rounded-xl text-sm font-semibold shadow-md hover:scale-105 transition-transform duration-300"
        >
          <FaGithubAlt className="text-lg" />
          View Source Code
        </a>

        {/* Tombol Dokumentasi */}
        <a
          href="https://www.notion.so/Ruang-Edit-1e6f6694a17c80499232f5f667187180?source=copy_link" // Ganti dengan link dokumentasi aslimu
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 bg-white text-black border border-black rounded-xl text-sm font-semibold shadow-md hover:scale-105 transition-transform duration-300"
        >
          <HiOutlineDocumentText className="text-lg" />
          View Documentation
        </a>
      </div>

      {/* Judul & Deskripsi */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-2 border-b pb-2 inline-block">🎬 Ruang Edit - Platform Online Course Editing</h1>
        <p className="mt-4">
          Ruang Edit is an online course platform focused on photography, videography, and content creation for aspiring professionals in the creative industry. The website features two main classes designed to help users build practical
          skills and prepare for real-world creative work. The goal of this platform is to help creative content creators grow their skills through affordable yet effective learning materials..
        </p>
      </div>

      {/* My */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3 border-b pb-1">💼 My Contribution</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Designed the business model and structured the user flow of the application</li>
          <li>Created clean and engaging UI designs using Figma to enhance user experience</li>
          <li>Developed the frontend using React.js and Tailwind CSS for a responsive interface</li>
          <li>Built the backend using Laravel, implementing RESTful APIs and database architecture</li>
          <li>Handled server deployment using Linux, Nginx, Docker, and Docker Compose</li>
        </ul>
      </section>

      {/* Contribution Progress Bars */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-1">📊 Contribution Breakdown</h2>
        <div className="space-y-4">
          {contributions.map((item) => (
            <div key={item.role}>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-white/90">{item.role}</span>
                <span className="text-sm text-white/60">{item.percent}%</span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-3">
                <div className="bg-[#502499] h-3 rounded-full transition-all duration-1000" style={{ width: `${item.percent}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Teknologi */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3 border-b pb-1">🧱 Technology Used</h2>
        <div className="flex flex-wrap gap-3 text-sm mt-4 p-3">
          {["React", "Inertia.js", "Laravel 10", "Tailwind CSS", "MySQL", "Xendit API"].map((tech) => (
            <span key={tech} className="px-3 py-1 border rounded-full">
              {tech}
            </span>
          ))}
        </div>
      </section>
      {/* Gallery Project */}
      <section>
        <section className="my-12">
          <h2 className="text-2xl font-semibold mb-4">🖼️ UI Portfolio Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((img) => (
              <img key={img.id} src={img.src} alt={img.alt} className="rounded shadow cursor-pointer hover:opacity-90" onClick={() => setSelectedImage(img.src)} />
            ))}
          </div>

          {/* Lightbox */}
          {selectedImage && (
            <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50" onClick={() => setSelectedImage(null)}>
              <img src={selectedImage} alt="Preview" className="max-w-full max-h-[90vh] rounded shadow-lg" />
              <button className="absolute top-4 right-4 text-white text-3xl" onClick={() => setSelectedImage(null)}>
                &times;
              </button>
            </div>
          )}
        </section>
      </section>
    </div>
  );
};

export default RuangEditDetail;
