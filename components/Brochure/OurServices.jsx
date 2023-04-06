import React from "react";
import { motion } from "framer-motion";

const OurServices = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 0.7,
      }}
      className="text-gray-800 body-font bg-[#F3E5F6]"
    >
      <div className="max-w-7xl px-6 py-24 mx-auto">
        <div className="flex flex-col w-full mb-12">
          <h1 className="sm:text-5xl text-4xl font-semibold title-font text-center mb-4 text-pink-800">
            OUR SERVICES
          </h1>
          <p className="mx-auto font-medium  text-center leading-relaxed text-2xl md:text-3xl">
            OUR MAIDS, INC, CLEANS THOUSANDS OF HOMES PER YEAR.
          </p>
        </div>
        <div className="flex flex-col w-full mb-12">
          <ol className="list-decimal">
            <li>
              <p className="text-lg md:text-xl mb-3 font-normal">
                <span className="text-xl md:text-2xl font-semibold text-pink-800">
                  SUBSCRIPTIONS
                </span>
                (weekly, biweekly, monthly and AIRBNB) cleaning service to homes
                and offices. Includes all services on Our Maids Detailed
                checklist. See below. Sign up for any of these services and save
                $100
              </p>
            </li>
            <li>
              <p className="text-lg md:text-xl mb-3 font-normal">
                <span className="text-xl md:text-2xl font-semibold text-pink-800">
                  Airbnb cleaning
                </span>
                Includes all services on Our Maids Detailed checklist plus the
                oven. See below.
              </p>
            </li>
            <li>
              <p className="text-lg md:text-xl mb-3 font-normal">
                <span className="text-xl md:text-2xl font-semibold text-pink-800">
                  FIRST TIME STANDARD CLEANING.
                </span>
                Includes all services on Our Maids Detailed checklist. See
                below.
              </p>
            </li>
            <li>
              <p className="text-lg md:text-xl mb-3 font-normal">
                <span className="text-xl md:text-2xl font-semibold text-pink-800">
                  DEEP CLEAN
                </span>
                (Seasonal cleaning) to homes, offices and buildings. Includes
                all services on Our Maids Detailed checklist. See below, plus a
                DEEP CLEAN list of items. (Scroll down to see them)
              </p>
            </li>
            <li>
              <p className="text-lg md:text-xl mb-3 font-normal">
                <span className="text-xl md:text-2xl font-semibold text-pink-800">
                  MOVE-IN, MOVE-OUT
                </span>
                for tenants and landlords. This type of service is offered to
                those who will turn the keys tomorrow and want their deposit
                back. Paying OurMaids, Inc. $200 ensures you have your thousand
                or more deposit back. (Scroll down to see the checklist of what
                is included)
              </p>
            </li>
            <li>
              <p className="text-lg md:text-xl mb-3 font-normal">
                <span className="text-xl md:text-2xl font-semibold text-pink-800">
                  POST CONSTRUCTION
                </span>
                clan-up. We will do the final touch to your masterpieces!
                (Scroll down to see the checklist of what is included)
              </p>
            </li>
            <li>
              <p className="text-lg md:text-xl mb-3 font-normal">
                <span className="text-xl md:text-2xl font-semibold text-pink-800">
                  JANITORIAL SERVICES
                </span>
                for buildings of all sizes: (minimum of one year contract)
              </p>
            </li>
            <li>
              <p className="text-lg md:text-xl mb-3 font-normal">
                <span className="text-xl md:text-2xl font-semibold text-pink-800">
                  OFFICE AND FACILITIES CLEANING
                </span>
                and sanitizing to building of all sizes.
              </p>
            </li>
          </ol>
        </div>
      </div>
    </motion.section>
  );
};

export default OurServices;
