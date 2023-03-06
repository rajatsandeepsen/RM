import 'bootstrap/scss/bootstrap.scss'
import '@/styles/globals.scss'

import { useEffect } from 'react'
import Layer from '@/components/layer'
import Head from 'next/head'
import Meta from '@/components/meta'

export default function App({ Component, pageProps }) {
  
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
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
