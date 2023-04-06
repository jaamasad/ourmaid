import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const TopNavbar = () => {
  const [activeCall, setActiveCall] = useState(false);
  return (
    <div className=" bg-[#2E2E2E] md:block p-3 hidden">
      {" "}
      <div className="md:flex items-center gap-4 justify-between max-w-7xl mx-auto ">
        <motion.ul
          initial={{ y: -25, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.7,
          }}
          className="flex gap-3"
        >
          <li>
            <a href="#" className="text-2xl text-white hover:text-[#F3D8E6]">
              <FaFacebookF />
            </a>
          </li>
          <li>
            <a href="#" className="text-2xl text-white hover:text-[#F3D8E6]">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href="#" className="text-2xl text-white hover:text-[#F3D8E6]">
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href="#" className="text-2xl text-white hover:text-[#F3D8E6]">
              <FaLinkedin />
            </a>
          </li>
        </motion.ul>
        <motion.div
          initial={{ y: -25, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.7,
          }}
          className="flex items-center gap-4"
        >
          <HiOutlineMail className="text-4xl text-white" />
          <div className="">
            <p
              onClick={() => setActiveCall(!activeCall)}
              className="text-gray-200 text-lg font-semibold cursor-pointer"
            >
              {" "}
              {activeCall
                ? "302-389-5221"
                : "Call us. Llamenos. Appelle nous."}{" "}
            </p>
            <p className="text-gray-300 text-1xl font-[500]">
              FRANCHISING@OURMAIDS.COM{" "}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TopNavbar;
