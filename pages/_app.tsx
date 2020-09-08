import Head from 'next/head'
import { AppProps } from 'next/app'
import { Provider } from 'react-redux'

import { useStore } from '../store'

import 'styles/reset.scss'
import 'styles/globals.scss'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const store = useStore(pageProps.initialReduxState)

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
