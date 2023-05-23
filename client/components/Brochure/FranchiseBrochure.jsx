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
      <div className="px-6 py-24 mx-auto max-w-7xl">
        <img src="/document/brochure/franchise-brochure.webp" alt="House Cleaning Franchise" />
        <img src="/document/brochure/franchise-brochure_1.webp" alt="Home And Office Cleaning Services" />
        <img src="/document/brochure/franchise-brochure_2.webp" alt="Professiona l Deep Cleaning Services" />
        <img src="/document/brochure/franchise-brochure_3.webp" alt="Best Residential and Commercia l Cleaning Franchise" />
        <img src="/document/brochure/franchise-brochure_4.webp" alt="Training Program" />
        <img src="/document/brochure/franchise-brochure_5.webp" alt="Best Cleaning Franchise Opportunit ies" />
      </div>
    </motion.section>
  );
};

export default FranchiseBrochure;
