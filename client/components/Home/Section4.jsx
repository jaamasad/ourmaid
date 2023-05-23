import React from "react";
import { motion } from "framer-motion";

const Section4 = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-5 py-10 mx-auto overflow-x-hidden max-w-7xl">
      <section className="flex items-center justify-center text-gray-600 body-font">
        <div className="container flex flex-col items-center gap-5 mx-auto md:flex-row">
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
              alt="Cleaning Franchise in The United States and The World"
              src="/section4.jpg"
            />
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.7,
            }}
            className="flex flex-col items-center text-center lg:flex-grow md:w-1/2 md:items-start md:text-left"
          >
            <h1 className="mb-2 text-xl font-medium text-pink-900 title-font md:text-xl">
            OUR MAIDS FRANCHISE, INC.(OUR MAIDS, OUR MAIDS, INC.) IS THE ONLY CLEANING FRANCHISE IN THE UNITED STATES AND THE WORLD YOU CAN OWN FOR THE LOW $32,500 (USD) TOTAL INVESTMENT. OUR MAIDS FRANCHISE , INC.(OUR MAIDS, INC.) IS THE ONLY CLEANING FRANCHISE IN THE UNITED WHERE YOU CAN GET YOUR INVESTMENT BACK IN ONE YEAR OR LESS.<span className="text-[17px] font-normal leading-">(please note: to get to this point one needs to work at least 6 days per week from 7:am to 7;pm and invest on advertising a minimum of $2,000 TO $3,000 per month. Results may vary by geographical areas and are not guaranteed.)</span>
            </h1>
            <p className="leading-normal text-[17x] mb-4">
            We are offering a home-based (but you can choose to rent an office space) franchise opportunity where you can operate from your home or office and everything is online. You will have access to OurMaidsInc. app that allows our clients to find, book, pay, find prices, cancel, reschedule, see their next appointment, and more. There is even a Live Chat floating button. Your initial investment will cover many of the vital expenses associated with opening an Our Maids, Inc. franchise location, such as furniture and fixtures, the initial inventory, and the construction of any necessary leasehold improvements. The total initial investment for the Our Maids, Inc. franchise can range from $32,150 to $39,750 and includes a one-time franchise fee of $20,000. 
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Section4;
