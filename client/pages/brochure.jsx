import DomesticServices from "@/components/Brochure/DomesticServices";
import FranchiseBrochure from "@/components/Brochure/FranchiseBrochure";
import Main from "@/components/Brochure/Main";
import OurServices from "@/components/Brochure/OurServices";
import React from "react";
import MainHead from "@/components/MainHead";
import Head from 'next/head';
const Brochure = () => {
  return (
    <>
      <Head>
        <title>About Us Best Cleaning Franchise in The World</title>
        <link rel="canonical" href="https://www.ourmaidsfranchise.com/" />
      </Head>
      <header>
        <meta name="description" content="Our Maids Franchise delivers high-quality cleaning services and outstanding customer support to residential and commercial customers." />
      </header>
      <MainHead
        metaTitle="Brochure, best cleaning franchise in the world"
        metaKeywords="Put Keywords here for brochure page"
        metaDesc="Put description here for brochure page"
      />
      <Main />
      <FranchiseBrochure />
      <DomesticServices />
      <OurServices />
    </>
  );
};

export default Brochure;
