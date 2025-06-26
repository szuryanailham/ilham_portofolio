import React from "react";
import { AbilityArray } from "../constants";
const Ability = () => {
  return (
    <>
      <h1 className="text-2xl md:text-3xl font-poppins font-bold text-center m-6">My Specializations</h1>
      {AbilityArray.map((item) => (
        <div className="max-w-2xl mx-auto  shadow-md rounded-lg p-8 mb-6  border-white border-2">
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-xl md:text-2xl font-semibold">{item.title}</h2>
            <img className="w-fit h-8 object-contain" src={item.image} alt={item.title} />
          </div>
          <p className="text-white leading-relaxed">{item.desc}</p>
        </div>
      ))}
    </>
  );
};

export default Ability;
