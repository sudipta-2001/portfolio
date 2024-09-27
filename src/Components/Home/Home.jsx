import React from "react";
import avatarImg from "../../assets/photo1.png";
import TextChange from "../TextChange";
import home from "../../assets/home-png.webp";

const Home = () => {
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10 ">
        <h1 className="text-xl md:text-6xl text-teal-800 font-bold flex leading-normal tracking-tighter">
          <TextChange />
        </h1>
        <p className="text-sm md:text-2xl tracking-tight text-teal-600">
          Frontend developer
        </p>
        <div className=" gap-5 flex flex-wrap">
          <button className="mt-5 md:md-10 text-white py02 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
            <a href="#Footer">Contact Me</a>
          </button>
          <button className="mt-5 md:md-10 text-white py02 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#52707B]">
            <a href="https://drive.google.com/file/d/1LZe5OxzKKizJFZ1EQblzFxauVMse-RM-/view?usp=sharing">Download CV</a>
          </button>
        </div>
      </div>
      <div className="relative">
        <img className=" h-80 mr-10" src={avatarImg} alt="" />
      </div>
    </div>
  );
};

export default Home;
