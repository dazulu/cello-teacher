const contactInfo = () => {
  return (
    <>
      <div className="text">
        <section>
          <address className="contact-details">
            <p>
              <strong>Christoph Siska</strong> | Cellist &amp; Intrumentallehrer
            </p>
            <p>
              <strong>Telefon: </strong>
              <a href="tel:+4916092723100" rel="noopener noreferrer">
                0160 92723100
              </a>
            </p>
            <p>
              <strong>Email: </strong>
              <a href="mailto:Christoph-Siska@web.de" rel="noopener noreferrer">
                Christoph-Siska@web.de
              </a>
            </p>
          </address>
        </section>
        <section>
          <h3>Unterrichtsorte</h3>
          <address>
            <p>
              Hilprechtshausen 7
              <br />
              37581 Bad Gandersheim
              <br />
              <span className="direction">
                (6 km nordwestlich von Bad Gandersheim)
              </span>
            </p>
          </address>
          <address>
            <p>
              <a
                href="http://www.musikschule-musikuss-braunschweig.de/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Musikschule Musikuß
              </a>
              <br />
              Karlstraße 35
              <br /> 38106 Braunschweig
            </p>
          </address>
        </section>
      </div>
      <style jsx>{`
        .text {
          margin-bottom: 60px;
        }

        .contact-details {
          p:not(:last-child) {
            margin-bottom: 10px;
          }
        }

        .direction {
          display: block;
          font-size: 1rem;
        }

        @media only screen and (min-width: 800px) {
          .text {
            width: 50%;
            margin-right: 10%;
            margin-bottom: 0;
          }
        }
      `}</style>
    </>
  )
}

export default contactInfo
