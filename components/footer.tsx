import Link from 'next/link'

const footer = () => {
  return (
    <>
      <footer className="content__wrapper footer">
        <p>
          <Link href="/">
            <a rel="noreferrer nofollow">Datenschutz</a>
          </Link>
        </p>
        -
        <p>
          <Link href="/">
            <a rel="noreferrer nofollow">Impressum</a>
          </Link>
        </p>
      </footer>
      <style jsx>{`
        .footer {
          display: flex;
          padding-top: 20px;
          padding-bottom: 20px;
          justify-content: center;
          align-items: center;

          p {
            font-size: 0.8em;
            margin: 0 5px;

            a {
              color: initial;
            }
          }
        }
      `}</style>
    </>
  )
}

export default footer
