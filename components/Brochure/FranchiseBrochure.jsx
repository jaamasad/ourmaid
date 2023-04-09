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
      <iframe src="/document/Franchise-Brochure.pdf#toolbar=0" width="100%" height="1000" />
      </div>
    </motion.section>
  );
};

export default FranchiseBrochure;
