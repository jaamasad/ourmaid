import Hero from '@/components/franchiseCosts/Hero'
import TextSection from '@/components/franchiseCosts/TextSection'
import MainHead from '@/components/MainHead'
import React from 'react'
import Head from 'next/head';

const FranchiseCosts = () => {
  return (
    <div>
      <Head>
        <link rel="canonical" href="https://www.ourmaidsfranchise.com/" />

      </Head>
      <MainHead
        metaTitle="Franchise costs. Residential & commercial franchise business. "
        metaDesc="Start up costs. Find them on the Franchise Disclosure Document. Franchise fee is only $20K."
      />
      <Hero />
      <TextSection />
    </div>
  )
}

export default FranchiseCosts