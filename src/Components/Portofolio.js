import React from "react";
import { portofolio } from "../constants";
import { FaGithub } from "react-icons/fa";

const Portfolio = () => {
  return (
    <section className="py-12">
      {/* ---------- Section heading & short pitch ---------- */}
      <header className="text-center px-4 mb-10">
        <h1 className="text-2xl md:text-3xl font-poppins font-bold text-colortitle mb-3">Creative Showcase</h1>
        <p className="max-w-2xl mx-auto text-sm md:text-base opacity-80">
          A curated selection of my recent projects showcasing robust backend logic with Node.js, thoughtful full‑stack architecture, and a sharp attention to UI detail. Click any card to view the live app, and use the GitHub icon to
          explore the source code
        </p>
      </header>

      {/* ---------- Project grid ---------- */}
      <div className="px-3 md:px-10 grid gap-4 md:gap-4 lg:grid-cols-2">
        {portofolio.map((item, id) => (
          <article key={id} className="group relative rounded-xl overflow-hidden shadow-lg bg-white/5 backdrop-blur-md border border-white/10 transition hover:shadow-xl">
            {/* Project image */}
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              <div className="h-[250px] md:h-[280px] bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: `url(${item.img})` }} />
            </a>

            {/* Content */}
            <div className="p-5">
              <h2 className="text-lg md:text-xl font-semibold mb-1 text-white">{item.nama}</h2>
              <p className="text-sm text-white/80 mb-7">{item.desc}</p>

              <div className="flex justify-between items-center">
                <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-sm px-4 py-2 bg-[#502499] hover:bg-[#3c1d75] text-white rounded-md transition">
                  See Detail
                </a>
                {item.github && (
                  <a href={item.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub repository" className="text-2xl text-white hover:text-colortitle transition-colors">
                    <FaGithub />
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
