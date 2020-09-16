import Head from 'next/head'
import { useEffect } from 'react'
import { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import * as Fathom from 'fathom-client'
import { useRouter } from 'next/router'

import { useStore } from '../store'

import 'styles/reset.scss'
import 'styles/globals.scss'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter()
  const store = useStore(pageProps.initialReduxState)

  useEffect(() => {
    Fathom.load('NWNZTTVY', { url: 'https://bison.streamclocks.com/script.js' })

    function onRouteChangeComplete() {
      Fathom.trackPageview()
    }

    // Record a pageview when route changes
    router.events.on('routeChangeComplete', onRouteChangeComplete)

    // Unassign event listener
    return () => {
      router.events.off('routeChangeComplete', onRouteChangeComplete)
    }
  }, [])

  return (
    <>
      <Provider store={store}>
        <Head>
          <title>
            Cello Unterricht in Bad Gandersheim, Einbeck, Heckenbeck |
            Cellolehrer Christoph Siska
          </title>
        </Head>
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

export default MyApp
