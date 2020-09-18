import { FormEvent, useEffect, useState } from 'react'

import { useFormFields } from 'lib/formHooks'
import ContactInfo from 'components/contactInfo'

type SubmitStatus = 'SUCCESS' | 'ERROR' | 'FRESH'

const contact = () => {
  const [dirty, setDirty] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('FRESH')

  const [fields, handleFieldChange] = useFormFields({
    name: '',
    email: '',
    phone: '',
    message: '',
    agreed: false,
  })

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

  const validateForm = () => {
    return (
      fields.email.length > 0 &&
      fields.name.length > 0 &&
      fields.message.length > 0 &&
      fields.agreed
    )
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (loading) return

    setLoading(true)
    setDirty(true)

    if (!validateForm()) {
      setLoading(false)
      return
    } else {
      const data: Record<string, any> = { 'form-name': 'contact', ...fields }

      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: Object.keys(data)
          .map(
            (key) =>
              encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
          )
          .join('&'),
      })
        .then(() => {
          if (window && window.fathom) {
            window.fathom.trackGoal('EDNSSZYL', 0)
          }
          setSubmitStatus('SUCCESS')
          setLoading(false)
        })
        .catch(() => {
          setLoading(false)
          setSubmitStatus('ERROR')
        })
    }
  }

  const nameError = !fields.name && dirty
  const emailError = !fields.email && dirty
  const messageError = !fields.message && dirty
  const agreeError = !fields.agreed && dirty

  return (
    <>
      <div id="contact" className="padding__wrapper">
        <div className="content__wrapper contact">
          <h2 className="title">Kontakt</h2>

          <div className="section">
            <ContactInfo />

            <section className="form">
              <h3>Formular</h3>

              {(submitStatus === 'FRESH' || submitStatus === 'ERROR') && (
                <form onSubmit={handleSubmit} data-netlify-honeypot="blackhole">
                  <input type="hidden" name="form-name" value="contact" />
                  <fieldset>
                    <div className="obfuscate">
                      <label>
                        If you want no reply type in here:
                        <input
                          name="blackhole"
                          tabIndex={-1}
                          autoComplete="off"
                        />
                      </label>
                    </div>

                    <div className="animate-label">
                      <input
                        name="name"
                        type="text"
                        value={fields.name}
                        onChange={handleFieldChange}
                        className={nameError ? 'field-error' : ''}
                      />
                      <label htmlFor="name">Name (Pflichtfeld)</label>
                      {nameError && (
                        <p className="error-message" role="alert">
                          Bitte schreiben Sie noch Ihren Namen.
                        </p>
                      )}
                    </div>
                    <div className="animate-label">
                      <input
                        name="email"
                        type="email"
                        value={fields.email}
                        onChange={handleFieldChange}
                        className={emailError ? 'field-error' : ''}
                      />
                      <label htmlFor="email">
                        E-Mail Adresse (Pflichtfeld)
                      </label>
                      {emailError && (
                        <p className="error-message" role="alert">
                          Bitte schreiben Sie noch Ihre E-Mail Adresse.
                        </p>
                      )}
                    </div>
                    <div className="animate-label">
                      <input
                        name="phone"
                        type="tel"
                        value={fields.phone}
                        onChange={handleFieldChange}
                      />
                      <label htmlFor="phone">Telefonnummer</label>
                    </div>
                    <div className="animate-label">
                      <textarea
                        name="message"
                        onChange={handleFieldChange}
                        className={messageError ? 'field-error' : ''}
                      ></textarea>
                      <label htmlFor="message">Nachricht (Pflichtfeld)</label>
                      {messageError && (
                        <p className="error-message" role="alert">
                          Bitte schreiben Sie noch Ihre Nachricht.
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="checkbox-label">
                        <input
                          className="checkbox"
                          type="checkbox"
                          name="agreed"
                          checked={fields.agreed}
                          onChange={handleFieldChange}
                        />
                        <span
                          className={`checkbox-simulated ${
                            agreeError ? 'field-error' : ''
                          }`}
                        />
                        <span className="checkbox-text">
                          Ich stimme dem{' '}
                          <a
                            href="/datenschutz"
                            className="privacy-link"
                            target="_blank"
                          >
                            Datenschutz
                          </a>{' '}
                          zu (Pflichtfeld)
                        </span>
                      </label>
                      {agreeError && (
                        <p
                          className="error-message error-message--checkbox"
                          role="alert"
                        >
                          Bitte stimmen Sie dem Datenschutz zu
                        </p>
                      )}
                    </div>
                    <button className="button" type="submit" disabled={loading}>
                      Senden
                    </button>
                  </fieldset>
                </form>
              )}
              {submitStatus === 'SUCCESS' && (
                <p className="submitted submitted--success" role="alert">
                  Danke, Ihre Nachricht wurde erfolgreich versendet.
                </p>
              )}
              {submitStatus === 'ERROR' && (
                <p className="submitted submitted--error" role="alert">
                  Leider ging etwas schief, Ihre Nachricht wurde nicht gesendet.
                  Bitte versuchen Sie es erneut oder schicken Sie eine E-Mail
                  direkt an Christoph-Siska@web.de
                </p>
              )}
            </section>
          </div>
        </div>
      </div>
      <style jsx global>
        {`
          .field-error {
            outline-color: red !important;
          }
        `}
      </style>
      <style jsx>{`
        .title {
          text-align: center;
          margin-bottom: 40px;
        }

        .obfuscate {
          display: none !important;
        }

        form {
          max-width: 500px;
          position: relative;
          width: 100%;
        }

        fieldset {
          border: 0;
          margin: 0;
          padding: 0;

          > div {
            position: relative;
          }
        }

        .animate-label {
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

          input,
          textarea {
            background: #393939;
            border: none;
            outline: 3px solid transparent;
            color: #fff;
            margin-bottom: 20px;
            padding: 27px 15px 10px 15px;
            display: block;
            width: 100%;
            font-size: 1.1rem;
          }
        }

        .checkbox-label {
          display: flex;
          align-items: center;
          flex-direction: row;
          height: 50px;
          font-size: 1.1rem;
          width: 100%;
        }

        .checkbox-text {
          user-select: none;
        }

        .checkbox {
          visibility: hidden;
          position: absolute;

          &:invalid {
            + .checkbox-simulated {
              border: 1px solid firebrick;
            }
          }

          &:checked + .checkbox-simulated {
            position: relative;

            &:after {
              background-color: #393939;
              content: '';
              position: absolute;
              top: 2px;
              left: 2px;
              height: 24px;
              width: 24px;
            }
          }
        }

        .checkbox-simulated {
          width: 30px;
          height: 30px;
          border: 1px solid #000;
          margin-right: 10px;
        }

        .checkbox-simulated.field-error {
          border: 3px solid red;
        }

        .error-message {
          color: firebrick;
          font-size: 0.9rem;
          margin-bottom: 0;
          position: relative;
          top: -18px;
        }

        .error-message--checkbox {
          top: -10px;
        }

        .button {
          color: #fff;
          cursor: pointer;
          font-size: 1.2em;
          border: 0;
          background: #386b80;
          background-size: 27px;
          margin-top: 20px;
          padding: 15px;
          width: 100%;

          &:hover {
            background-color: darken(#386b80, 5%);
          }
        }

        .button:disabled {
          background: #c1c1c1;
          cursor: not-allowed;
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

        .submitted {
          color: #fff;
          padding: 20px;
        }

        .submitted--success {
          background-color: #8dac35;
        }

        .submitted--error {
          background-color: #ac3535;
          font-size: 1.1rem;
          line-height: 1.7rem;
          margin-top: 20px;
        }

        .privacy-link {
          display: inline;
          color: #2d6db0;
          background: none;
          padding: 0;
          border: none;
          text-decoration: underline;
          cursor: pointer;

          &:hover {
            text-decoration: none;
          }
        }

        @media only screen and (min-width: 800px) {
          .section {
            display: flex;
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
