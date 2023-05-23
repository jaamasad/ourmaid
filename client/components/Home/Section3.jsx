import React from "react";
import { motion } from "framer-motion";

const Section3 = () => {
  return (
    <div className=" px-5 bg-[#F3E5F6] mx-auto mt-48 md:mt-20 flex flex-col items-center justify-center min-h-screen py-20 overflow-x-hidden">
      <section className="flex items-center justify-center text-gray-600 max-w-7xl body-font">
        <div className="container flex flex-col items-center mx-auto md:flex-row">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.7,
            }}
            className="flex flex-col items-center text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0"
          >
            <h1 className="mb-4 text-xl font-medium text-gray-900 text-pink-900 title-font sm:text-2xl">
              WANT TO OWN A BUSINESS IN THE BIGGEST, MOST DIVERSE ECONOMY IN THE
              WORLD? (THE UNITED STATES, CANADA AND MEXICO) THIS IS IT.out
            </h1>
            <p className="leading-normal text-[16px] md:text[17px] mb-4">
              We are offering a home-based franchise opportunity where you can
              operate from your home or office and everything is online. You
              will have access to OurMaidsInc. app that allows our clients to
              find, book, pay, find prices, cancel, reschedule, see their next
              appointment, and more. You will find our little smart robot chat
              amaizing. You can even talk to her and she will respond to you on
              text on almost any language. We are so excited to offer you this
              amazing artificial intelligence to work for you. Your initial
              investment will cover many of the vital expenses associated with
              opening an Our Maids, Inc. franchise location, such as furniture
              and fixtures, the initial inventory, and the construction of any
              necessary leasehold improvements. The total initial investment for
              the Our Maids, Inc. franchise can range from $32,150 to $39,750
              and includes a one-time franchise fee of $20,000.
            </p>
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.7,
            }}
            className="w-5/6 lg:max-w-lg lg:w-full md:w-1/2"
          >
            <img
              className="object-cover object-center rounded"
              alt="Home Deep Cleaning Services"
              src="https://lirp.cdn-website.com/94c95444/dms3rep/multi/opt/services_house_cleaning-576w.jpg"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Section3;
