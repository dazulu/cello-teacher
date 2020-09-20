import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="de">
        <Head>
          <meta
            name="description"
            content="Cello lernen muss nicht schwer sein. Lernen Sie Cello im Einzelunterricht oder in Gruppen ab 5 Jahren. Perfekt für Einwohner in der Nähe von Heckenbeck, Bad Gandersheim, Kreiensen und Einbeck."
          />
          <meta
            property="og:title"
            content="Cellolehrer Christoph Siska | Cello Unterricht in der Nähe von Bad Gandersheim, Einbeck, Heckenbeck, Kreiensen
            "
          />
          <meta
            property="og:image"
            content="https://www.cellospielart.de/images/og-image.jpg"
          />
          <meta
            property="og:description"
            content="Cello lernen muss nicht schwer sein. Lernen Sie Cello im Einzelunterricht oder in Gruppen ab 5 Jahren. Perfekt für Einwohner in der Nähe von Heckenbeck, Bad Gandersheim, Kreiensen und Einbeck."
          />
          <meta property="og:url" content="https://www.cellospielart.de" />
          <meta property="og:type" content="website" />

          <meta name="twitter:card" content="summary_large_image" />

          <meta
            name="twitter:description"
            content="Cello lernen muss nicht schwer sein. Lernen Sie Cello im Einzelunterricht oder in Gruppen ab 5 Jahren."
          />

          <meta
            name="twitter:title"
            content="Cellolehrer Christoph Siska | Cello Unterricht"
          />

          <meta
            name="twitter:image"
            content="https://www.cellospielart.de/images/og-image.jpg"
          />

          <meta name="twitter:alt" content="Cellolehrer Christoph Siska" />

          <link rel="icon" href="/favicon.png" />

          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />

          <link
            rel="preconnect"
            href="https://api.mapbox.com"
            crossOrigin="anonymous"
          />

          <link
            rel="preload"
            as="style"
            href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300;700&display=swap"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
