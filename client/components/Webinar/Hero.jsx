import React from "react";

const Hero = () => {
  return (
    <div className="relative h-[67vh]">
      <video
        src="/video3_new.mp4#t=0.39"
        className="absolute inset-0 z-0 object-cover w-full h-full filter brightness-75"
        autoPlay
        controls = {true}
        loop
        preload="metadata"
      ></video>
      <div className="z-20 flex items-center justify-center">
        <div className="flex items-center justify-center flex-col z-20 py-4 md:py-6  px-4 md:px-8  text-white rounded-[15px] absolute mt-[800px] lg:mt-[755px] w-[85%] lg:w-[1000px] mx-auto bg-black opacity-75">
          <h1
            style={{ textShadow: "4px 4px 12px #000000" }}
            className="text-3xl drop-shadow-2xl md:text-6xl font-bold text-center tracking-[2px]"
          >
            Web binar goes here, working on it. INDUSTRY STATISTICS{" "}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
