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
          <h2 className="title">Contact</h2>

          <div className="section">
            <div className="text">
              <p>
                Christoph Siska
                <br />
                Hilprechtshausen 7<br />
                37581 Bad Gandersheim
              </p>
              <p>Telefon 0160 92723100</p>
              <p>Christoph-Siska@web.de</p>
            </div>

            <div className="form">
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
                  <label htmlFor="email">Email*</label>
                </div>
                <div>
                  <input name="phone" type="tel" />
                  <label htmlFor="phone">Phone</label>
                </div>
                <div>
                  <textarea name="message" required></textarea>
                  <label htmlFor="message">Message*</label>
                </div>
                <button className="button" type="submit">
                  Send
                </button>
              </form>
            </div>
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

        form {
          max-width: 500px;
          margin: 0 auto;
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
          font-size: 1.2em;
          border: 0;
          background: darken(#47cf73, 15%);
          background-size: 27px;
          padding: 15px;

          &:hover {
            background-color: darken(#47cf73, 20%);
          }
        }

        input,
        textarea {
          background: #35495e;
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
      `}</style>
    </>
  )
}

export default contact
