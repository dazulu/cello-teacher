import { useEffect } from 'react'

const contact = () => {
  const toggleFieldClass = (target: HTMLTextAreaElement | HTMLInputElement) => {
    if (target.value.length > 0) {
      target.classList.add('has--text')
    } else {
      target.classList.remove('has--text')
    }
  }

  const initLabelHandling = () => {
    const inputs = document.querySelectorAll('input')
    const textarea = document.querySelector('textarea')

    for (let i = 0; i < inputs.length; i++) {
      toggleFieldClass(inputs[i])
      inputs[i].addEventListener(
        'change',
        (event) => {
          if (event.currentTarget instanceof HTMLInputElement) {
            toggleFieldClass(event.currentTarget)
          }
        },
        {
          passive: true,
        }
      )
    }

    if (textarea) {
      toggleFieldClass(textarea)
      textarea.addEventListener(
        'change',
        (event) => {
          if (event.currentTarget instanceof HTMLTextAreaElement) {
            toggleFieldClass(event.currentTarget)
          }
        },
        {
          passive: true,
        }
      )
    }
  }

  useEffect(() => {
    initLabelHandling()
  })

  return (
    <>
      <div id="contact" className="padding__wrapper">
        <div className="content__wrapper contact">
          <h2 className="title">Kontakt</h2>

          <div className="section">
            <div className="text">
              <section>
                <address className="contact-details">
                  <p>
                    <strong>Christoph Siska</strong> | Cellist &amp;
                    Intrumentallehrer
                  </p>
                  <p>
                    <strong>Telefon: </strong>
                    <a href="tel:+4916092723100" rel="noopener noreferrer">
                      0160 92723100
                    </a>
                  </p>
                  <p>
                    <strong>Email: </strong>
                    <a href="mailto:jim@rock.com" rel="noopener noreferrer">
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
                      rel="noopener"
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

            <section className="form">
              <h3>Formular</h3>
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="blackhole"
              >
                <p>
                  <input type="hidden" name="form-name" value="contact" />
                </p>
                <div className="obfuscate">
                  <label>
                    If you want no reply:
                    <input name="blackhole" tabIndex={-1} autoComplete="off" />
                  </label>
                </div>

                <div>
                  <input name="name" type="text" required />
                  <label htmlFor="name">Name*</label>
                </div>
                <div>
                  <input name="email" type="email" required />
                  <label htmlFor="email">E-Mail*</label>
                </div>
                <div>
                  <input name="phone" type="tel" />
                  <label htmlFor="phone">Telefon*</label>
                </div>
                <div>
                  <textarea name="message" required></textarea>
                  <label htmlFor="message">Nachricht*</label>
                </div>
                <button className="button" type="submit">
                  Senden
                </button>
              </form>
              <p className="pflichtfeld">
                <strong>*</strong> Pflichtfeld
              </p>
            </section>
          </div>
        </div>
      </div>
      <style jsx>{`
        .title {
          text-align: center;
          margin-bottom: 40px;
        }

        .obfuscate {
          display: none !important;
        }

        .text {
          margin-bottom: 60px;
        }

        address {
          font-style: normal;
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

        form {
          max-width: 500px;
          position: relative;
          width: 100%;

          > div {
            position: relative;
          }
        }

        label {
          color: #fff;
          transition: all 150ms ease-out;
          pointer-events: none;
          position: absolute;
          left: 10px;
          top: 0;
          transform: translateY(19px);
          font-size: 1rem;
        }

        input {
          height: 60px;
        }

        textarea {
          height: 150px;
        }

        .button {
          color: #fff;
          cursor: pointer;
          font-size: 1.2em;
          border: 0;
          background: #386b80;
          background-size: 27px;
          padding: 15px;

          &:hover {
            background-color: darken(#386b80, 5%);
          }
        }

        input,
        textarea {
          background: #393939;
          border: none;
          color: #fff;
          margin-bottom: 20px;
          padding: 27px 15px 10px 15px;
        }

        input,
        textarea,
        button {
          display: block;
          font-size: 1.1rem;
          width: 100%;
        }

        .has--text,
        input:focus,
        textarea:focus {
          outline: none;

          + label {
            font-weight: 700;
            font-size: 0.8rem;
            transform: translateY(8px);
          }
        }

        .pflichtfeld {
          font-size: 0.9em;
          margin-top: 10px;
        }

        @media only screen and (min-width: 800px) {
          .section {
            display: flex;
          }

          .text {
            width: 50%;
            margin-right: 10%;
            margin-bottom: 0;
          }

          .form {
            top: -20px;
            position: relative;
            width: 40%;
          }
        }

        @media only screen and (min-width: 1024px) {
          .form {
            margin: 0 auto;
          }
        }
      `}</style>
    </>
  )
}

export default contact
