import React from "react";
import {motion} from 'framer-motion'

const ContactSection = () => {
  return (
    <section className="text-gray-600 body-font bg-[#F3E5F6]">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center overflow-x-hidden">
        <motion.div 
        initial={{ x: -100,opacity: 0 }}
        whileInView={{x:0, opacity: 1 }}
        transition={{
          duration: 0.7,
        }}
        className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 capitalize font-medium text-gray-900">
          RUN YOUR BUSINESS FROM THE PALM OF YOUR HAND. WE WILL SHOW YOU HOW. 
          </h1>
          <p className="mb-8 text-[18px] leading-relaxed">
          If our concept interests you, fill out the form to learn more about our franchise opportunities. We speak English, Spanish and French. But our chatbot can answer you in almost any language. You can write or speak to it.
          </p>
        </motion.div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <motion.form 
           initial={{ x: 100,opacity: 0 }}
           whileInView={{x:0, opacity: 1 }}
           transition={{
             duration: 0.7,
           }}
          className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2 sm:w-1/3">
              <div className="relative">
                <label htmlFor="name" className="leading-7 text-sm text-gray-600 font-semibold">
                  Name
                </label>
                <input
                required
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-1/2 sm:w-1/3">
              <div className="relative">
                <label htmlFor="email"  className="leading-7 text-sm text-gray-600 font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  required
                  id="email"
                  name="email"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-1/2 sm:w-1/3">
              <div className="relative">
                <label htmlFor="phone" className="leading-7 text-sm text-gray-600 font-semibold">
                  Direct Phone no.
                </label>
                <input
                  type="tel" pattern="^\+?\d{1,3}[- ]?\d{3}[- ]?\d{3}[- ]?\d{4}$"
                  id="phone"
                  required
                  name="phone"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-1/2 sm:w-1/3">
              <div className="relative">
                <label htmlFor="address" className="leading-7 text-sm text-gray-600 font-semibold">
                  Address Area of interest
                </label>
                <input
                  type="text"
                  required
                  id="address"
                  name="address"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-1/2 sm:w-1/3">
              <div className="relative">
                <label htmlFor="postal" className="leading-7 text-sm text-gray-600 font-semibold">
                  Postal Code
                </label>
                <input
                  type="text"
                  required
                  id="postal"
                  name="postal"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-1/2 sm:w-1/3">
              <div className="relative">
                <label htmlFor="state" className="leading-7 text-sm text-gray-600 font-semibold">
                State or Country of Interest
                </label>
                <input
                  type="text"
                  id="state"
                  required
                  name="state"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-1/2 sm:w-1/3">
              <div className="relative">
                <label htmlFor="hear" className="leading-7 text-sm text-gray-600 font-semibold">
                How did you hear about us?
                </label>
                <input
                  type="text"
                  id="hear"
                  name="hear"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-1/2 sm:w-1/3">
              <div className="relative">
                <label htmlFor="capital" className="leading-7 text-sm text-gray-600 font-semibold">
                Liquid Capital Available
                </label>
                <input
                  type="text"
                  id="capital"
                  name="capital"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label htmlFor="message" className="leading-7 text-sm text-gray-600 font-semibold">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
            </div>
            <div className="p-2 w-full">
              <button
                type="submit"
                className="flex text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-pink-600 rounded text-lg"
              >
                Submit
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
