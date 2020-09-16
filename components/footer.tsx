const footer = () => {
  return (
    <>
      <footer className="content__wrapper footer">
        <a href="/datenschutz" target="_blank">
          Datenschutz
        </a>
        -
        <a href="/datenschutz" target="_blank">
          Impressum
        </a>
      </footer>
      <style jsx>{`
        .footer {
          display: flex;
          padding-top: 20px;
          padding-bottom: 20px;
          justify-content: center;
          align-items: center;

          a {
            color: #333;
            padding: 0 10px;

            &:hover {
              text-decoration: none;
            }
          }
        }
      `}</style>
    </>
  )
}

export default footer
