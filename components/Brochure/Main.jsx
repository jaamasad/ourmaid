import React from "react";

const Main = () => {
  return (
    <div className="relative pt-36 h-[80vh] md:h-[130vh] lg:h-[140vh]">
      <video
        src="/video2_new.mp4"
        className="absolute inset-0 w-full h-auto object-cover filter brightness-75 z-0"
        autoPlay
        loop
        muted
      ></video>
      <div className="z-20 flex items-center justify-center">
        <div className="flex items-center justify-center flex-col z-20 py-5 md:py-10  px-4 md:px-8 bg-black text-white opacity-70 rounded-[30px] absolute -bottom-60 md:-bottom-28  w-[95%] md:w-[75%] lg:w-[900px] xl:w-[1050px] mx-auto">
          <h1 className="text-3xl md:text-6xl font-bold text-center tracking-[2px] mb-6 lg:mb-10">
            OurMaids Franchise, Inc.
          </h1>
          <h3 className="text-xl md:text-2xl tracking-[2px] mb-3 lg:mb-5 font-bold text-center">
            Best Residential and commercial cleaning franchise in the world
            since 2,023.
          </h3>
          <h3 className="text-lg md:text-2xl font-bold text-center mb-2 lg:mb-3">
            OUR CONCEPT.
            <span className="text-pink-300">
              (BROCHURE GOES HERE, we're working on it)
            </span>{" "}
          </h3>
          <p className="text-lg font-medium md:text-xl text-center">
            Offers cleaning services to homes, offices, and facilities of all
            types. We also offer Concierge Service to communities in shared
            condominiums. You will find here what to expect from our
            Professional teams at every job site.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
