import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative pt-36">
     <video
        src="/video3_new.mp4"
        className="absolute inset-0 w-full h-auto object-cover filter brightness-75 z-0 mt-20 sm:mt-0"
        autoPlay
        loop
      ></video>
      <div className="z-20 flex items-center mt-[40%] mb-[16%] md:mt-[40d%] md:mb-[22%] lg:mt-[50%] lg:mb-[8%] justify-center">
        <div className="flex items-center justify-center flex-col z-20 py-2 md:py-2  px-4 md:px-8  text-white rounded-[15px]  mt-10 w-[85%] lg:w-[900px] mx-auto">
          <h1
            style={{ color: 'rgb(157 23 77)', fontSize: '3.5vw'}}
          >
            START UP COSTS. YOU CAN FIND THIS FIGURES ON THE FDD AS WELL.{" "}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
