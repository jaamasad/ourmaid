import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center ">
     <video
        className="inset-0 z-0 object-cover w-full mt-20 h-96 filter brightness"
        autoPlay
        controls>
       <source src="/video3_new.mp4" type="video/mp4" />
     </video>
      <div className="z-20 flex items-center justify-center my-10">
        <div className="flex items-center justify-center flex-col z-20   px-4 md:px-8  text-white rounded-[15px] w-[85%] lg:w-[900px] mx-auto gap-y-10">
          <h1 className="text-[#9D174D] text-6xl font-semibold tracking-wider"
          >
            START UP COSTS. YOU CAN FIND THIS FIGURES ON THE FDD AS WELL.{" "}
          </h1>
          <h2 className="text-2xl text-[#9D174D] tracking-wider">
          PAY THE $20K FRANCHISE FEE IN ONE YEAR WITH $3K DOWN AND 12 MONTHLY PAYMENTS OF $1,420 EACH.
          <br/> (PLEASE BE ADVISED: THIS OFFER DOES NOT APPLY TO ANY AREA DEVELOPMENT PROGRAM)
            
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;