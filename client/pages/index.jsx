import Head from "next/head";
import { Inter } from "@next/font/google";
import Hero from "@/components/Home/Hero";
import Section1 from "@/components/Home/Section1";
import Section2 from "@/components/Home/Section2";
import Section3 from "@/components/Home/Section3";
import Section4 from "@/components/Home/Section4";
import Section5 from "@/components/Home/Section5";
import Cards from "@/components/Home/Cards";
import Map from "@/components/Home/Map";
import MainHead from "@/components/MainHead";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Best Residential and Commercial Cleaning Franchise in the World</title>
        <link rel="canonical" href="https://www.ourmaidsfranchise.com/" />

      </Head>
      <header>
        <meta name="description" content="Our Maids Franchise is a dedicated cleaning services company that offers the most reliable and efficient cleaning services in the market. Contact us today to start your own franchise!" />
      </header>
      <MainHead
        metaTitle="Best Cleaning franchise in the world."
        metaKeywords="Put Keywords here for home page"
        metaDesc="Put description here for home page"
      />

      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Cards />
      <Map />
    </>
  );
}
