import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative h-fit">
      <video
        className="inset-0 z-0 object-cover w-full mt-20 h-96 filter brightness-75"
        autoPlay
        controls

      >
        <source src="/video1_new.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Hero;
