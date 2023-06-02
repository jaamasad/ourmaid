import React from "react";

const Main = () => {
  return (
    <div className="relative h-fit">
      <video
        src="/video2_new.mp4"
        className="inset-0 z-0 object-cover w-full mt-20 h-96 filter brightness-75 "
        autoPlay
        controls

      >
        <source src="/video2_new.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Main;
