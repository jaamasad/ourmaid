import React from "react";
import { motion } from "framer-motion";
import ContactSection from "./ContactSection";
import ContactForm from "./ContactForm";


const Section1 = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-5 py-20 mx-auto mt-48 overflow-x-hidden max-w-7xl md:mt-20">
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.7,
        }}
        className="flex flex-col w-full gap-4 mb-12 text-2xl font-medium text-center text-gray-900 title-font sm:text-3xl"
      >
        DO YOU LIKE TRAVELING? LIVING IN DIFFERENT PARTS OF THE WORLD FOR LONG
        PERIODS OF TIME: UP ON THE MOUNTAINS OR DOWN THE SEA LEVEL ON THE BEST
        BEACHES OF THE WORLD OR IN SOPHISTICATED CITIES LIKE PARIS, LOS ANGELES,
        BERLIN?
        <br />
        <span className="text-pink-800 ">
          IF THE ANSWER IS YES, THEN THIS FRANCHISE IS FOR YOU.
        </span>
      </motion.h1>
      <ContactForm />
      <section className="flex items-center justify-center w-full text-gray-600 body-font">
        <div className="container flex flex-col items-center mx-auto md:flex-row">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.7,
            }}
            className="flex flex-col items-center text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0"
          >
            <p className="leading-relaxed text-[18px] mb-4">
              Thank you for your interest in becoming a franchisee! Our Maids
              Inc. is proud to allow others to be a part of our successful brand
              that continues to receive acclaim from clients thanks to our
              dedication to providing excellent residential and commercial
              cleaning services. We pride ourselves on our ability to get the
              job done all while having the best attitude and a smile on our
              faces every single time. We are offering any aspiring business
              owner, entrepreneur, or seasoned veteran a chance to access our
              extremely profitable and streamlined concept to build upon it in
              other communities. We welcome anyone passionate about providing
              these services across the United States, Canada and Mexico! (and
              in the coming years all over the world) We will show you how in
              one week or less you will be making money.
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
              alt="hero"
              src="https://lirp.cdn-website.com/94c95444/import/clib/ourmaids_com/dms3rep/multi/opt/21121942_lel_d600-600x400-1044w.jpg"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Section1;
