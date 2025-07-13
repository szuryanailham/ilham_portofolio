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
        I am a Junior Back End JavaScript Developer focused on building modern and responsive web applications using JavaScript.
        <br className="hidden md:block" />
        <br className="hidden md:block" />
        I have experience developing end-to-end applications with React on the frontend and Node.js with Express on the backend.
        <br className="hidden md:block" />
        <br className="hidden md:block" />
        Additionally, I’m proficient in managing data using MySQL, PostgreSQL, and MongoDB to ensure performance and scalability.
      </p>

      <a href="/resume.pdf" download className=" mt-10 inline-flex items-center gap-2 px-6 py-3 border border-white rounded-xl text-white hover:bg-[#502499] hover:text-white transition-all duration-300">
        <FiDownload className="text-xl" />
        <span>Download Resume</span>
      </a>
    </div>
  );
};

export default Hero;
