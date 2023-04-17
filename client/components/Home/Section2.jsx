import React from "react";
import { motion } from "framer-motion";

const Section2 = () => {
  return (
    <div className="max-w-7xl px-5 mx-auto min-h-screen flex items-center justify-center flex-col py-10 overflow-x-hidden">
      <section className="text-gray-600 body-font flex items-center justify-center">
        <div className="container mx-auto flex gap-5 md:flex-row flex-col items-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.7,
            }}
            className="md:w-1/2 "
          >
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://lirp.cdn-website.com/94c95444/import/clib/ourmaids_com/dms3rep/multi/opt/186832818_1000-1000x667-1070w.jpg"
            />
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.7,
            }}
            className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left items-center text-center"
          >
            <h1 className="title-font sm:text-2xl text-xl mb-4 font-medium text-pink-900">
              22 YEARS IN THE CLEANING INDUSTRY MEANS: WE MADE ALL THE MISTAKES
              ALREADY! (so you do not have to.)
            </h1>
            <p className="leading-normal text-[17x] mb-4">
              We offer you as a franchisee, a finished, polished and proven
              system to make a decent living from anywhere you heart desires.
              Our Maids Inc. began with the goal of seeking to improve what
              other residential and commercial cleaning services lacked, the
              best customers service, and 24 hours open platform to book your
              service, reschedule it, pay for it, cancel it, do whatever you
              need to do to get your home cleaned at your fingertips any time!
              <br />
              It was the year 2,000 when Antonio V. Moreno, then a business
              student at Amberton University started Our Maids, Inc., in a small
              shop at Arapaho Road, in Richardson, Texas, with a clear vision:
              to create a cleaning service company that can be run from anywhere
              in the world and not tied to a brick and mortar dwelling. To day,
              Our Maids. inc., is the only residential and commercial cleaning
              service company that anybody can run form the palm of your hands!
            </p>
          </motion.div>
        </div>
      </section>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.7,
        }}
        className="leading-normal text-gray-600 text-[18px] mt-3 md:mt-8 text-center"
      >
        With over 22 years in the industry, we’ve been able to earn the respect
        of our clients through our reliable, uninterrupted professional service
        while keeping it economical for everyone in the community. Our
        commitment to cleaning any space requested with absolute efficiency like
        we would our own space is also what separates us from competitors. Our
        Maids Inc. continues to grow and receive positive reviews from
        customers. Headquartered in Dover, Delaware, We service different
        locations from everywhere Dover, DE; Ocean city, Maryland, Los Angeles,
        CA; Dallas Ft. Worth and Austin, TX. Greensboro-Winston-Salem, NC and
        Oklahoma City, OK. Soon, Our Maids Inc. will be a household name!
      </motion.p>
    </div>
  );
};

export default Section2;
