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
        <link rel="canonical" href="https://www.ourmaidsfranchise.com/" />
      </Head>
      <MainHead
        metaTitle="Brochure, best cleaning franchise in the world"
        metaDesc="Franchise brochure. OurMaids, Inc., has the highest work ethic standards such us, detail-oriented cleaning, best customer service, affordability, etc., you don’t find anywhere else."
      />
      <Main />
      <FranchiseBrochure />
      <DomesticServices />
      <OurServices />
    </>
  );
};

export default Brochure;
