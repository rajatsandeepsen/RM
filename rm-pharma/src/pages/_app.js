import 'bootstrap/scss/bootstrap.scss'
import '@/styles/globals.scss'

import { useEffect } from 'react'
import Layer from '@/components/layer'
import Head from 'next/head'
import Meta from '@/components/meta'

import AOS from "aos";
import "aos/dist/aos.css";

import { Inter,Montserrat } from 'next/font/google'
const montserrat = Montserrat({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");

    AOS.init({
      easing: "ease-out",
      once: true,
      offset: 50,
      duration: 500,
      delay: 200,
    });
  }, []);

  return (
    <>
    <Head>
    <title>RM-Pharma</title>
      <Meta />
      <link rel="icon" href="/favicon.ico" />
      <link rel="short icon" href="/favicon.ico" />
    </Head>
  <Layer>
  <Component {...pageProps} />
  </Layer>
  </>)
}
