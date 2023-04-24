import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative pt-36">
        <video
        src="/video1_new.mp4#t=0.39"
        className="absolute inset-0 z-0 object-cover w-full h-auto mt-20 filter brightness-75 sm:mt-0"
        autoPlay
        controls = {true}
        loop
        preload="metadata"
      ></video>
      <div className="z-20 flex items-center mt-[40%] mb-[56%] md:mt-[78%] md:mb-[22%] lg:mt-[62%] lg:mb-[16%] justify-center">
        <div className="flex items-center justify-center flex-col z-20 py-5 md:py-10  px-4 md:px-8 bg-black text-white opacity-70 rounded-[30px] absolute -bottom-60 md:-bottom-28  w-[95%] md:w-[75%] lg:w-[900px] xl:w-[1050px] mx-auto">
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
