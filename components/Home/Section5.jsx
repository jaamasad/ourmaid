import React from "react";
import { motion } from "framer-motion";

const Section5 = () => {
  return (
    <div className=" bg-[#F3E5F6] px-5 mx-auto flex items-center justify-center flex-col py-10 overflow-x-hidden">
      <section className="text-gray-600 max-w-7xl body-font flex items-center justify-center">
        <div className="container mx-auto flex gap-5 md:flex-row flex-col items-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.7,
            }}
            className="md:w-1/3 "
          >
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="/section5.jpg"
            />
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.7,
            }}
            className="lg:flex-grow md:w-2/3 flex flex-col md:items-start md:text-left items-center text-center"
          >
            <h1 className="title-font md:text-xl text-xl mb-4 font-medium text-pink-900">
              WE WILL SHOW HOW EASY IT IS TO RUN AN OUR MAIDS, INC. FRANCHISE.
              You will be ready and selling in ten days or less of training!
            </h1>
            <p className="leading-normal text-[17x] mb-4">
              Our Maids, Inc. has achieved tremendous success due to our quality
              service and years in the industry. As a franchisee, you will be
              able to accomplish this same quality service work ethic, and
              experience through our comprehensive training program. This
              program will show you the ins and outs of the business and an
              in-depth exercise of our daily operations. Completing this
              training program will guarantee a successful partnership with Our
              Maids, Inc.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Section5;
