import DomesticServices from "@/components/Brochure/DomesticServices";
import FranchiseBrochure from "@/components/Brochure/FranchiseBrochure";
import Main from "@/components/Brochure/Main";
import OurServices from "@/components/Brochure/OurServices";
import React from "react";
import MainHead from "@/components/MainHead";

const Brochure = () => {
  return (
    <>
      <MainHead metaTitle='Brochure, best cleaning franchise in the world' />
      <Main />
      <FranchiseBrochure />
      <DomesticServices />
      <OurServices />
    </>
  );
};

export default Brochure;
