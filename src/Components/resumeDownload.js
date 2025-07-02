import React from "react";
import { FiDownload } from "react-icons/fi";

function ResumeDownload() {
  return (
    <>
      <h1 className="text-2xl md:text-3xl font-poppins font-bold mb-6 text-white text-center">My Resume</h1>
      <div className="flex justify-center mt-10 px-4">
        <div className="w-full max-w-md p-6 border-2 border-[#502499] rounded-xl bg-white/5 backdrop-blur-md text-center">
          <p className="text-base md:text-md font-poppins mb-6 text-white text-center">Klik tombol di bawah ini untuk mengunduh dan melihat detail resume saya.</p>

          <a href="/resume.pdf" download className="inline-flex items-center gap-2 px-6 py-3 border border-white rounded-xl text-white hover:bg-[#502499] hover:text-white transition-all duration-300">
            <FiDownload className="text-xl" />
            <span>Unduh Resume</span>
          </a>
        </div>
      </div>
    </>
  );
}

export default ResumeDownload;
