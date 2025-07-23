import React from "react";
import { profile, Substract } from "../Assets/Utils/Index";
import { HeroSubTitle } from "../constants";
import { LinkSocialMediaArray, title } from "../constants";
import { MdOutlineDateRange, MdOutlineMailOutline } from "react-icons/md";
import { FaMapPin } from "react-icons/fa";

const Profile = () => {
  return (
    <div className="h-screen md:h-fit 2xl:h-screen w-full md:w-auto mb-2 static md:fixed 2xl:static">
      {/* Background image */}
      <img className="w-fit 2xl:w-auto mt-7 2xl:mx-auto" src={Substract} alt="Substract" />

      {/* Overlay content */}
      <div className="absolute inset-0 flex flex-col items-center mt-10 md:mt-5 2xl:mt-12 space-y-3 md:space-y-1 2xl:space-y-4">
        {/* image profile */}
        <img className="w-[270px] 2xl:w-[320px] h-fit mx-auto px-7 md:px-10" src={profile} alt="Profile" />

        {/* Title */}
        <div className="py-3 2xl:py-4">
          <h1 className="font-fontTitle text-xl 2xl:text-3xl font-semibold text-center mb-1">{title}</h1>
          <p className="text-md 2xl:text-sm text-center text-slate-400">Junior Back End Developer</p>
        </div>

        {/* Bio */}
        <div className="flex flex-col space-y-5 2xl:space-y-6 items-center">
          <div className="flex items-center gap-3">
            <MdOutlineDateRange className="text-xl 2xl:text-2xl" />
            <p className="text-sm 2xl:text-base">09.01.2002</p>
          </div>

          <div className="flex items-center gap-3">
            <FaMapPin className="text-xl 2xl:text-2xl" />
            <p className="text-sm 2xl:text-base">Yogyakarta, Indonesia</p>
          </div>

          <div className="flex items-center gap-3">
            <MdOutlineMailOutline className="text-xl 2xl:text-2xl" />
            <a className="text-xs 2xl:text-sm underline hover:text-blue-600" href="mailto:Szuryanailham090102@gmail.com">
              Szuryanailham090102@gmail.com
            </a>
          </div>
        </div>

        {/* Deskripsi */}
        <div className="mx-auto max-w-prose text-center font-fontTitle px-5 md:px-12 2xl:px-20 py-3 mb-10">
          <p className="text-[14px] 2xl:text-base">{HeroSubTitle}</p>
        </div>

        {/* link Sosmed */}
        <div className="flex space-x-3 2xl:space-x-4">
          {LinkSocialMediaArray.map((item) => (
            <a key={item.title} href={item.url} className="w-9 h-9 2xl:w-10 2xl:h-10 p-2 bg-gray-700 rounded-md hover:bg-gray-600">
              <img src={item.image} alt={item.title} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
