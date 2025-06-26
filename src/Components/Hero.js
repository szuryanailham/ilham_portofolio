import React from "react";

import { Deskripsi } from "../constants";
const Hero = () => {
  return (
    <div id="Home" className="w-full py-12 text-center flex items-center flex-col">
      <h1 className=" w-full md:w-[70%] split text-[40px] font-extrabold mb-1 leading-tight text-center md:text-[60px] mx-auto">
        <span className="text-secondColor ">
          {" "}
          <span className="text-[#2196F3]"> Crafting</span> Visual Journeys with Every <span className="text-[#502499]">Line of Code</span>
        </span>
      </h1>
      <p className=" w-[80%] font-fontTitle font-Trap mt-5 text-center text-md md:w-full md:mx-auto font-normal px-0 md:px-[100px]">{Deskripsi}</p>
    </div>
  );
};

export default Hero;
