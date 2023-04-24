import React from "react";
import { motion } from "framer-motion";

const FranchiseBrochure = () => {
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
        <img src="/document/brochure/franchise-brochure.webp" alt="" />
        <img src="/document/brochure/franchise-brochure_1.webp" alt="" />
        <img src="/document/brochure/franchise-brochure_2.webp" alt="" />
        <img src="/document/brochure/franchise-brochure_3.webp" alt="" />
        <img src="/document/brochure/franchise-brochure_4.webp" alt="" />
        <img src="/document/brochure/franchise-brochure_5.webp" alt="" />
      </div>
    </motion.section>
  );
};

export default FranchiseBrochure;
