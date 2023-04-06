import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative pt-36 h-[67vh]">
      <img
        src="https://lirp.cdn-website.com/94c95444/import/clib/ourmaids_com/dms3rep/multi/opt/36195294_lel_d600-600x400-1920w.jpg"
        className="absolute inset-0 w-full h-full object-cover filter brightness-75 z-0"
      />
      <div className="z-20 flex items-center justify-center">
        <div className="flex items-center justify-center flex-col z-20 py-5 md:py-7  px-4 md:px-8  text-white bg-black opacity-75 rounded-[15px] absolute mt-72 md:mt-80 lg:mt-96 w-[85%] lg:w-[900px] mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-center tracking-[2px] mb-2 lg:mb-4">
            Our Maids Franchise, Inc, Operations Manual{" "}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
