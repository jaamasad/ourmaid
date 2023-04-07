import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative pt-36 h-[65vh]">
        <video
        src="/video1_new.mp4"
        className="absolute inset-0 w-full h-full object-cover filter brightness-75 z-0"
        autoPlay
        loop
        muted
      ></video>
      <div className="z-20 flex items-center justify-center">
        <div className="flex items-center justify-center flex-col z-20 py-5 md:py-7  px-4 md:px-8 bg-black text-white opacity-70 rounded-[15px] absolute mt-96 w-[90%]  lg:w-[630px] xl:w-[830px] mx-auto">
          <h1 className="text-3xl md:text-6xl font-bold text-center tracking-[2px] mb-6 lg:mb-10">
            PRESS RELEASES <span className="text-xl text-pink-700">By OurMaids, Inc.</span>
          </h1>
          <h3 className="text-xl md:text-2xl tracking-[2px] mb-3 lg:mb-5 font-bold text-center">
            We've opened twelve Franchises so far. Find your nearest location
            down here.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Hero;
