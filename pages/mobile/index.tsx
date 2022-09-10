import React from 'react';
import MainMenu from '../../src/layouts/Header/MainMenu.tsx';
import Head from 'next/head';

export default function Mobile() {
  return (
    <>
      <Head>
          <title>Mobile Page</title>
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainMenu />
      <div>
        Hii Mobile
      </div>
    </>
  )
}