import React from "react";
import { motion } from "framer-motion";

const Section = () => {
  return (
    <section className="text-gray-800 body-font bg-[#F3E5F6]">
      <div className="max-w-7xl px-5 py-24 mx-auto ">
        <div className="container mx-auto flex gap-10 md:flex-row flex-col items-center overflow-x-hidden">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.7,
            }}
            className="flex flex-col w-full mb-12"
          >
            <ul className="list-disc">
              <li>
                <p className="text-lg md:text-xl mb-5 font-medium">
                  Residential cleaning services are a $1.2 billion industry that
                  has grown, on average, 6.6% each year for the past decade.
                </p>
              </li>
              <li>
                <p className="text-lg md:text-xl mb-5 font-medium">
                  Commercial cleaning makes up a bulk of the market, with 2.3
                  million jobs in 2016.
                </p>
              </li>
              <li>
                <p className="text-lg md:text-xl mb-5 font-medium">
                  The commercial cleaning industry is expected to hit more than
                  $468 billion in revenue by 2027.{" "}
                </p>
              </li>
              <li>
                <p className="text-lg md:text-xl mb-5 font-medium">
                  Minority groups are looked after a lot by all levels of
                  government.
                </p>
              </li>
              <li>
                <p className="text-lg md:text-xl mb-5 font-medium">
                  The number of janitorial services businesses in the U.S. grew
                  at a rate of 5.7% per year from 2016 to 2021.{" "}
                </p>
              </li>
              <li>
                <p className="text-lg md:text-xl mb-5 font-medium">
                  As of May 2020, nearly three million people were working in
                  the cleaning service industry in the United States.
                </p>
              </li>
              <li>
                <p className="text-lg md:text-xl mb-5 font-medium">
                  The cleaning industry revenue grew 14% in 2021.
                </p>
              </li>
              <li>
                <p className="text-lg md:text-xl mb-5 font-medium">
                  80% of households are expected to be worth $40.38B by 2025.{" "}
                </p>
              </li>
            </ul>
            <p className="text-lg md:text-xl mb-5 font-medium">
              Our Maids A helping Hand for Busy PeopleNew Paragraph
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
              className="object-cover object-center rounded "
              alt="hero"
              src="/webinar.jpg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Section;
