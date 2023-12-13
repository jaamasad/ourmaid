import MainHead from "@/components/MainHead";
import Hero from "@/components/Press Release/Hero";
import Section1 from "@/components/Press Release/Section1";
import React from "react";

const pressRelease = () => {
  return (
    <>
      <MainHead
        metaTitle="Residential and commercial cleaning franchise, press release."
        metaDesc="Press releases, by Our Maids Franchise, Inc. We are America’s most affordable residential and commercial cleaning service franchise, and the most reliable."
      />
      <Hero />
      <Section1 />
    </>
  );
};

export default pressRelease;
