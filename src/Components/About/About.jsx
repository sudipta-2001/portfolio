import React from "react";
import AboutImg from "../../assets/7358653-removebg-preview.png";
import { IoArrowForward } from "react-icons/io5";
import photo2 from "../../assets/photo2.png";
const About = () => {
  return (
    <div
      id="About"
      className="text-black md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12 shadow-slate-900 rounded-2xl"
    >
      <div>
        <h1 className="text-2xl md:text-4xl font-bold">About</h1>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img className="md:h-80" src={photo2} alt="About img" />

          <ul>
            <div className="flex gap-5 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className=" gap-3 text-xl md:text-2xl font-semibold leading-normal pb-3">
                  Frontend developer
                </h1>
                <p className="text-sm md:text-md gap-8 leading-5 text-justify">
                  Motivated Frontend Developer with strong proficiency in HTML,
                  CSS, JavaScript, and React. Experienced in building responsive
                  and user-centric web applications. Skilled in collaborating
                  with cross-functional teams, troubleshooting issues, and
                  implementing best practices in frontend development. Eager to
                  contribute to dynamic projects, learn from industry leaders,
                  and enhance user experiences through modern web technologies."
                </p>
              </span>
            </div>
            {/* <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Database developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores
                </p>
              </span>
            </div> */}
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal pb-3">
                post graduation
                </h1>
                <p className="text-sm md:text-md leading-tight">
                Master of Computer Application(MCA)
                
                </p>
              </span>
            </div>

            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal pb-3">
                Under Graduate
                </h1>
                <p className="text-sm md:text-md leading-tight">
                Bachelor of Computer Application(BCA)
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
