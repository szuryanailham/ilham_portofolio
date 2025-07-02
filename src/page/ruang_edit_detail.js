import React, { useState } from "react";
import { project1 } from "../Assets/Utils/Index";
import { FaGithubAlt } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const RuangEditDetail = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const images = [
    {
      id: 1,
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
      alt: "Ruang Edit – Homepage UI Design",
    },
    {
      id: 2,
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
      alt: "Dashboard Interface – Admin View",
    },
    {
      id: 3,
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
      alt: "Login Page UI – Clean Auth Layout",
    },
    {
      id: 4,
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
      alt: "Mentor Profile Page – Detail UI",
    },
    {
      id: 5,
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
      alt: "Course Listing – User Selection View",
    },
  ];

  return (
    <div className="p-6 md:p-10 max-w-6xl mx-auto font-sans text-base leading-relaxed">
      {/* Gambar / Hero Section */}
      <div className="mb-10">
        <img src={project1} alt="Ruang Edit Project Cover" className="w-full max-h-[500px] object-cover rounded-xl shadow" />
      </div>

      {/* Tombol Demo */}
      <div className="mb-12 w-full flex justify-center gap-4">
        {/* Tombol Demo */}
        <a
          href="https://ruangedit.ilhamsuryana.my.id"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 bg-white text-black border border-black rounded-xl text-sm font-semibold shadow-md  hover:scale-105 transition-transform duration-300"
        >
          <FiExternalLink className="text-lg" />
          View Project Demo
        </a>

        {/* Tombol Github */}
        <a
          href="https://ruangedit.ilhamsuryana.my.id"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 bg-white text-black border border-black rounded-xl text-sm font-semibold shadow-md  hover:scale-105 transition-transform duration-300"
        >
          <FaGithubAlt className="text-lg" />
          View Project Source code
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

      {/* Alur Sistem */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3 border-b pb-1">⚙️ System Flow & Functionality</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Users register and log in using their email and password.</li>
          <li>They can browse available courses, view course details, and see information about mentors.</li>
          <li>Courses can be purchased through an integrated Xendit payment system.</li>
          <li>After a successful payment, a course access token is sent via email.</li>
          <li>The token is then used to unlock and access the course materials.</li>
        </ul>
      </section>

      {/* Permasalahan & Solusi */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3 border-b pb-1">🛠️ Problems & Solutions</h2>

        <div className="mb-6">
          <h3 className="font-semibold text-lg mb-2">Why This Application Was Built</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Problem:</strong> Admins had difficulty managing classes manually, from adding materials to setting access.
              <br />
              <strong>Solution:</strong> This app provides an intuitive class management dashboard with complete CRUD functionality.
            </li>
            <li>
              <strong>Problem:</strong> Members often struggled to choose the right materials related to editing, design, or other creative topics.
              <br />
              <strong>Solution:</strong> The platform organizes content by category and assigns mentors based on their specialization, helping members stay focused.
            </li>
            <li>
              <strong>Problem:</strong> Learning materials were not well-organized and often difficult for members to access.
              <br />
              <strong>Solution:</strong> An automated token system delivers instant access to course content only for verified users.
            </li>
            <li>
              <strong>Problem:</strong> Admins had trouble processing payments from various channels like banks and e-wallets efficiently.
              <br />
              <strong>Solution:</strong> Integration with Xendit as a payment gateway simplifies multi-channel transactions (bank transfer, QRIS, e-wallets).
            </li>
          </ul>
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
