import { FiDownload } from "react-icons/fi";
const Hero = () => {
  return (
    <div id="Home" className="w-full py-12 text-center flex items-center flex-col">
      <h1 className=" w-full md:w-[70%] split text-[40px] font-extrabold mb-1 leading-tight text-center md:text-[60px] mx-auto">
        <span className="text-secondColor ">
          {" "}
          <span className="text-[#2196F3]"> Crafting</span> Visual Journeys with Every <span className="text-[#502499]">Line of Code</span>
        </span>
      </h1>
      <p className="w-full max-w-3xl mx-auto mt-5 text-center font-normal text-base md:text-md font-fontTitle px-4 md:px-12 font-Trap leading-relaxed text-gray-300 ">
        Saya seorang Junior Fullstack Developer yang fokus pada pengembangan aplikasi web modern dan responsif menggunakan JavaScript.
        <br className="hidden md:block" />
        <br className="hidden md:block" />
        Saya terbiasa membangun aplikasi end-to-end dengan React di sisi frontend serta Node.js dan Express untuk backend.
        <br className="hidden md:block" />
        <br className="hidden md:block" />
        Selain itu, saya juga menguasai pengelolaan data menggunakan MySQL, PostgreSQL, dan MongoDB untuk memastikan performa dan skalabilitas aplikasi.
      </p>
      <a href="/resume.pdf" download className=" mt-10 inline-flex items-center gap-2 px-6 py-3 border border-white rounded-xl text-white hover:bg-[#502499] hover:text-white transition-all duration-300">
        <FiDownload className="text-xl" />
        <span>Unduh Resume</span>
      </a>
    </div>
  );
};

export default Hero;
