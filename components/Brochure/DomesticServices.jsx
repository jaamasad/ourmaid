import React from "react";
import { motion } from "framer-motion";

const DomesticServices = () => {
  return (
    <div className="max-w-7xl px-5 mx-auto flex flex-col items-center justify-center py-20 pt-72 md:pt-40 overflow-x-hidden">
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.7,
        }}
        className="title-font sm:text-3xl text-center md:text-left mb-3 flex flex-col text-2xl font-medium text-pink-800 w-full"
      >
        DOMESTIC SERVICES.
      </motion.h1>
      <section className="text-gray-600 body-font flex items-center justify-center">
        <div className="container mx-auto flex  md:flex-row flex-col items-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.7,
            }}
            className="lg:flex-grow md:w-1/2 lg:pr-12 md:pr-8 flex flex-col md:items-start md:text-left md:mb-0 items-center text-center"
          >
            <p className="leading-relaxed text-[18px] mb-4">
              Daily, two o three times a week housekeeping to homes of all
              sizes. This service is different to home cleaning. Home cleaning
              has a checklist of things to do for a flat rate. Once the team do
              them all, they are finished and leave. DOMESTIC SERVICES, on the
              other hand, is the kind of a service you ask them to do for a
              period of time, usually four hours a day. You can ask them to
              bring you coffee, do laundry, wash dishes, walk the dog, weep the
              garage, and all those chores they usually do not on a regular Home
              cleaning service. it is charge by the hour, one maid or two or as
              many as you need or want. Minimum of 4 hours a day. and a minimum
              of two days a week.
            </p>
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.7,
            }}
            className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
          >
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://lirp.cdn-website.com/94c95444/dms3rep/multi/opt/services_house_cleaning-1920w.jpg"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DomesticServices;
