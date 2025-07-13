import React from "react";
import { FiDownload } from "react-icons/fi";

function ResumeDownload() {
  return (
    <>
      {/* heading */}
      <h1 className="text-2xl md:text-3xl font-poppins font-bold mb-6 text-white text-center">My Résumé</h1>

      {/* wrapper */}
      <div className="flex justify-center mt-10 px-4">
        <div
          className="w-full max-w-md p-8 rounded-xl bg-[#1a2848] backdrop-blur-md
                        border-2 border-transparent bg-clip-padding
                        ring-2 ring-[#502499]/40 shadow-lg shadow-black/20 text-center"
        >
          <p className="text-base md:text-md font-poppins mb-8 text-white/90">Click the button below to download and explore my complete résumé in PDF format.</p>

          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl
                       border border-white/30 text-white font-medium
                       transition-all duration-300
                       hover:bg-gradient-to-r hover:from-[#6d3dfb] hover:to-[#502499]
                       hover:shadow-xl hover:translate-y-[-2px]"
          >
            <FiDownload className="text-xl animate-bounce-slow" />
            <span>Download Résumé</span>
          </a>
        </div>
      </div>
    </>
  );
}

export default ResumeDownload;

/* --------------- extra tailwind animation (in tailwind.config.js) --------------
  theme: {
    extend: {
    
    },
  },
---------------------------------------------------------------------------------*/
