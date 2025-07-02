import React from "react";
import { SiMongodb, SiExpress, SiReact, SiNextdotjs, SiTypescript, SiPostgresql } from "react-icons/si";

const Skill = () => {
  const skills = [
    { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
    { name: "Express", icon: <SiExpress className="text-white" /> },
    { name: "React", icon: <SiReact className="text-sky-500" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-indigo-700" /> },
  ];
  return (
    <div className="py-10 px-6">
      <h1 className="text-2xl font-bold text-center md:text-3xl text-colortitle font-poppins mb-3">My Skills</h1>

      <p className="text-center max-w-prose text-base md:mx-auto text-gray-300 mb-6">Berikut adalah beberapa keterampilan pengembang web yang saya kuasai untuk mendukung karier saya sebagai seorang web developer.</p>

      <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
        {skills.map((skill, index) => (
          <div key={index} className=" shadow-md hover:shadow-xl transition-all duration-300 rounded-2xl p-5 flex flex-col items-center justify-center text-center">
            <div className="text-4xl mb-3 text-white">{skill.icon}</div>
            <p className="text-sm font-medium text-gray-100">{skill.name}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Skill;
