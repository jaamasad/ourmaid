import React, { useEffect, useState } from "react";
import { HiX, HiMenuAlt4 } from "react-icons/hi";
import { motion } from "framer-motion";
import Link from "next/link";

// import { urlFor } from "@/client/client";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt
} from "react-icons/fa"; 
import { HiOutlineMail } from "react-icons/hi";

const links = [
  { name: "brochure", link: "/brochure" },
  // { name: "webinar", link: "/webinar" },
  { name: "franchise costs", link: "/franchiseCosts" },
  { name: "FDD", link: "/fdd2" },
  { name: "Operations Manual", link: "/operationsManual" },
  { name: "Press Release", link: "/pressRelease" },
];

const MainNavbar = ({ logo }) => {
  const [toggle, setToggle] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 0.7,
      }}
      className={`right-0 left-0 fixed ${scroll ? "top-0" : "top-15"} ${
        scroll ? "bg-[rgb(255,255,255,0.7)]" : "bg-[#a3a3a375]"
      } z-30`}
    >
      <div
        className={`flex px-2  max-w-7xl mx-auto items-center justify-between py-[18px] h-20`}
      >
        <a href="tel:3023895221" className="text-2xl text-pink-800 lg:hidden hover:text-[#F3D8E6]">
          <FaPhoneAlt />
         </a>
         
        <motion.div
          initial={{ x: -25, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.7,
          }}
          className="logo"
        >
          <Link href="/">
            <img
              src="/logo.jpg"
              // src={urlFor(logo[0]?.logoImg)}
              alt="Our Maids Franchise"
              className="w-60"
            />
          </Link>
        </motion.div>
        <motion.ul
          initial={{ x: 55, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.7,
          }}
          className="items-center justify-center hidden gap-4 lg:gap-6 lg:flex"
        >
          {links.map((link, index) => (
            <li
              key={index}
              className="relative font-semibold text-black uppercase transition-colors duration-300 ease-in-out navHover"
            >
              <Link href={link.link} className="">
                {link.name}
              </Link>
            </li>
          ))}
        </motion.ul>
        <div className="relative flex items-center justify-center w-10 h-10 p-2 text-gray-200 bg-pink-700 rounded-full lg:hidden">
          <HiMenuAlt4
            onClick={() => {
              setToggle(true);
            }}
            className=" w-[90%] h-[90%] cursor-pointer"
          />
          {toggle && (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="fixed bg-[url(/bgWhite.png)] bg-repeat z-10 h-screen w-[100%] sm:w-[70%] flex flex-col bg-pink-50 bg-cover top-0 right-0 shadow-2xl"
            >
              <HiX
                className="m-4 text-3xl text-black cursor-pointer"
                onClick={() => {
                  setToggle(false);
                }}
              />
              <ul className="flex flex-col items-center justify-center gap-8">
                {links.map((link, index) => (
                  <motion.li
                    initial={{ y: -25, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.7,
                    }}
                    key={index}
                    className="text-center"
                  >
                    <Link
                      href={link.link}
                      onClick={() => {
                        setToggle(false);
                      }}
                      className="z-10 font-semibold text-gray-800 uppercase hover:text-pink-800"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <motion.ul
                initial={{ y: -25, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.7,
                }}
                className="flex items-center justify-center gap-6 md:hidden mt-7 "
              >
                <li>
                  <Link
                    target="_blank"
                    href="#"
                    className="text-2xl text-black hover:text-[#F3D8E6]"
                  >
                    <FaFacebookF />
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    href="#"
                    className="text-2xl text-black hover:text-[#F3D8E6]"
                  >
                    <FaTwitter />
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    href="#"
                    className="text-2xl text-black hover:text-[#F3D8E6]"
                  >
                    <FaInstagram />
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    href="#"
                    className="text-2xl text-black hover:text-[#F3D8E6]"
                  >
                    <FaLinkedin />
                  </Link>
                </li>
              </motion.ul>
              <motion.div
                initial={{ y: -25, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.7,
                }}
                className="flex flex-wrap items-center justify-center gap-4 md:hidden mt-7"
              >
                <div className="flex flex-col items-center justify-center gap-8">
                  <p
                    onClick={() => setActiveCall(!activeCall)}
                    className="text-lg font-semibold text-center text-gray-700"
                    style={{ overflowWrap: "anywhere" }}
                  >
                    {" "}
                    Call us. Llamenos. Appelle nous:{" "}
                    <span className="text-pink-700">302-389-5221</span>
                  </p>
                  <p className="text-gray-700 text-lg text-center font-[500] text-clip">
                    FRANCHISING@OURMAIDS.COM{" "}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.nav>
  );
};

export default MainNavbar;
