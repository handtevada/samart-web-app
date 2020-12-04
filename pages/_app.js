import React from 'react';
import Head from 'next/head';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import '../assets/styles/styles.scss';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <meta content='width=device-width, initial-scale=1.0' name='viewport' />
        <title>Samart Edu-Care Nursery (Rangsit-Nakornnayork-57)</title>

        <meta content='' name='description' />
        <meta content='' name='keywords' />

        <meta property='og:url' content='https://samarteducarenursery.com' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='SAMART EDU-CARE NURSERY (Rangsit-Nakornnayork-57)' />
        <meta
          property='og:description'
          content='Choose the nursery, Choose Samart Edu-Care Nursery. (Rangsit-Nakornnayork-57)'
        />
        <meta property='og:image' content='https://samarteducarenursery.com/img/cover.jpg' />
      </Head>
      <div id='root'>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}
