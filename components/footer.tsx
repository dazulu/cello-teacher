import Link from 'next/link'

const footer = () => {
  return (
    <>
      <div className="content__wrapper footer">
        <p>
          <Link href="/">
            <a>Datenschutz</a>
          </Link>
        </p>
        -
        <p>
          <Link href="/">
            <a>Impressum</a>
          </Link>
        </p>
      </div>
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
