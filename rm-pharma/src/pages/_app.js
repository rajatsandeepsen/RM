import '@/styles/globals.scss'
import Layer from '@/components/layer'
import Head from 'next/head'
import Meta from '@/components/meta'

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
    <title>RM-Pharma</title>
      <Meta />
      <link rel="icon" href="/favicon.ico" />
      <link rel="short icon" href="/favicon.ico" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css"></link>
    </Head>
  <Layer>
  <Component {...pageProps} />
  </Layer>
  </>)
}
