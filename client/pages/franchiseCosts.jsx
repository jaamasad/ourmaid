import Hero from '@/components/franchiseCosts/Hero'
import TextSection from '@/components/franchiseCosts/TextSection'
import MainHead from '@/components/MainHead'
import React from 'react'
import Head from 'next/head';

const FranchiseCosts = () => {
  return (
    <div>
      <Head>
        <title>Start Up Cleaning Business Franchise Cost</title>
        <link rel="canonical" href="https://www.ourmaidsfranchise.com/" />

      </Head>
      <header>
        <meta name="description" content="Our franchise costs are affordable and provide you with everything you need to get your business up and running. Contact us today to learn more about our franchise opportunities and franchise costs." />
      </header>
      <MainHead
        metaTitle="Put Title here for franchisecosts page"
        metaKeywords="Put Keywords here for franchisecosts page"
        metaDesc="Put description here for franchisecosts page"
      />
      <Hero />
      <TextSection />
    </div>
  )
}

export default FranchiseCosts