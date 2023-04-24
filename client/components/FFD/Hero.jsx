import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
      <div className="relative pt-36 h-[67vh]">
        <img
          src="/fdd.webp"
          className="absolute inset-0 w-full h-full object-cover filter brightness-75 z-0"
        />
      </div>
      <div className="z-20 flex items-center justify-center">
        <div className="flex items-center justify-center flex-col z-20 py-5 md:py-7  px-4 md:px-8  text-white bg-black opacity-75 rounded-[15px] absolute mt-72 md:mt-80 lg:mt-96 w-[85%] lg:w-[900px] mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-center tracking-[2px] mb-2 lg:mb-4">
            Our Maids Franchise , Inc.{" "}
          </h1>
          <h3 className="text-2xl md:text-3xl font-medium text-center  mb-1 lg:mb-3">
            Best cleaning franchise in the world.{" "}
          </h3>
          <p className="text-xl md:text-2xl text-center  lg:mb-2">
            Get the care you need, from professionals who are leaders in the
            cleaning industry in YOUR AREA, without braking bank!{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
