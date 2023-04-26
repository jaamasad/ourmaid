import React from "react";

const Main = () => {
  return (
    <div className="relative h-fit">
      <video
        src="/video2_new.mp4"
        className="inset-0 w-full h-auto object-cover filter brightness-75 z-0 sm:mt-0"
        autoPlay
        controls
        loop
      >
        <source src="/video2_new.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Main;
