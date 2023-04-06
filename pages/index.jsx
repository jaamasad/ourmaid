import Head from "next/head";
import { Inter } from "@next/font/google";
import Hero from "@/components/Home/Hero";
import Section1 from "@/components/Home/Section1";
import ContactSection from "@/components/Home/ContactSection";
import Section2 from "@/components/Home/Section2";
import Section3 from "@/components/Home/Section3";
import Section4 from "@/components/Home/Section4";
import Section5 from "@/components/Home/Section5";
import Cards from "@/components/Home/Cards";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Hero />
      <Section1 />
      <ContactSection />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Cards />
    </>
  );
}
