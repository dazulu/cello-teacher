import Head from 'next/head'
import { AppProps } from 'next/app'

import 'styles/reset.scss'
import 'styles/globals.scss'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Christoph Siska</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
