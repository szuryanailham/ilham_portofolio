import React from "react";
import { portofolio } from "../constants";
import { FaGithub } from "react-icons/fa";

const Portofolio = () => {
  return (
    <div>
      <h1 className="text-2xl font-poppins font-fontTitle font-bold text-center mt-10 md:text-3xl mb-3 py-2 text-colortitle">Creative Showcase</h1>
      <div className="px-3 md:px-10">
        {portofolio.map((item, id) => (
          <a target="_blank" rel="noopener noreferrer" href={item.url} key={id}>
            <div className="relative group w-full h-[250px] md:h-[400px] rounded-lg overflow-hidden">
              <div style={{ backgroundImage: `url(${item.img})` }} className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"></div>
              <div className="absolute bottom-4 left-5 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="text-white text-2xl font-semibold">
                  {/* Iterasi pada teknologi */}
                  {Object.values(item.tehno).map((tech, index) => (
                    <div>
                      <img
                        key={index}
                        src={tech} // Asumsikan `tech` adalah path gambar
                        alt={`Technology ${index}`}
                        className="w-8 h-8 mb-3"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between w-[80%] mx-auto">
              <h1 className="p-5 text-md md:text-xl font-fontTitle">{item.nama}</h1>
              <a href={item.github}>
                <FaGithub className="text-2xl self-center" />
              </a>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Portofolio;
