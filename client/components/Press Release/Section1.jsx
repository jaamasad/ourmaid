import React from "react";
import { motion } from "framer-motion";
import { TiTick } from "react-icons/ti";
import Releases from "./Releases";

const Section1 = () => {
  return (
    <section className="text-gray-800 body-font bg-[#F3E5F6]">
      <div className="px-5 py-24 mx-auto overflow-x-hidden max-w-7xl">
        <div className="flex flex-col w-full mb-12 text-center">
          <h1 className="mb-4 text-4xl font-semibold text-pink-800 sm:text-5xl title-font">
            PRESS RELEASES by Our Maids Franchise, Inc.
            We’ve opened twelve franchises so far. Find your nearest location by contacting us.
          </h1>
          <p className="mb-5 text-lg font-medium md:text-xl">
            We are America's most affordable residential and commercial cleaning
            service, and the most reliable, and we have been for 22
            uninterrupted years now! (scroll down to meet the founder) Need help
            with anything?
          </p>
        </div>
        <div className="container flex flex-col items-center gap-10 mx-auto md:flex-row">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.7,
            }}
            className="flex flex-col w-full mb-12"
          >
            <ul className="">
              <li className="flex items-center gap-4 mb-5 md:gap-8">
                <TiTick className="text-pink-800 text-[60px]" />
                <p className="text-lg font-medium md:text-xl">
                  More than 22 years of uninterrupted professional, cleaning
                  experience. We are an integral part of our communities.
                </p>
              </li>
              <li className="flex items-center gap-10 mb-5">
                <TiTick className="text-pink-800 text-[100px]" />
                <p className="text-lg font-medium md:text-xl">
                  Honesty and Integrity; It's been 22 years since our dear
                  customers left the key for us, and are still doing so.
                  Excellent reviews and many return customers, screened and
                  approved by leaders in the industry.
                </p>
              </li>
              <li className="flex items-center gap-10 mb-5">
                <TiTick className="text-pink-800 text-[70px]" />
                <p className="text-lg font-medium md:text-xl">
                  Friendly service and the best rates in any market. Antonio
                  started Our Maids, and still runs it by himself, knowing most
                  of our good patrons personally.
                </p>
              </li>
            </ul>
          </motion.div>
        </div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.7,
          }}
        >
          <Releases />
          
        </motion.div>
      </div>
    </section>
  );
};

export default Section1;
