import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative h-fit">
      <video
        className="inset-0 w-full h-auto object-cover filter brightness-75 z-0 sm:mt-0"
        autoPlay
        controls
        loop
      >
        <source src="/video1_new.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Hero;
