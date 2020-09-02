const logo = () => {
  return (
    <>
      <div className="logo">Christoph Siska</div>
      <style jsx>{`
        .logo {
          padding-right: 10px;
          max-width: 280px;
          width: 100%;
          z-index: 11;
        }

        @media only screen and (min-width: 1024px) {
          .sticky {
            .logo {
              filter: brightness(30%);
            }
          }
        }
      `}</style>
    </>
  )
}

export default logo
