import Link from 'next/link'

const footer = () => {
  return (
    <>
      <footer className="content__wrapper footer">
        <p>
          <Link href="/">
            <a rel="noreferrer">Datenschutz</a>
          </Link>
        </p>
        -
        <p>
          <Link href="/">
            <a rel="noreferrer">Impressum</a>
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
            font-size: 16px;
            margin: 0 15px;
          }
        }
      `}</style>
    </>
  )
}

export default footer
