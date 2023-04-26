import React from "react";
import Head from 'next/head'


const MainHead = ({metaTitle}) => {
  return (
    <Head>
    <title>{metaTitle}</title>
  </Head>      
  );
};

export default MainHead;
