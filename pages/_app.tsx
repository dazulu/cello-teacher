import Head from 'next/head'
import { AppProps } from 'next/app'

import 'styles/reset.scss'
import 'styles/globals.scss'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" />

        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700;900&display=swap"
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700;900&display=swap"
          />
        </noscript>

        <meta property="og:title" content="foo" />
        <meta property="og:image" content="foo" />
        <meta property="og:description" content="foo" />
        <meta property="og:url" content="foo" />
        <meta property="og:type" content="website" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
