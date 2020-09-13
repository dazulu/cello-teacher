import { useEffect, useRef, useState } from 'react'
import FocusTrap from 'focus-trap-react'
import { useDispatch } from 'react-redux'
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'

import { Action } from 'store'

const datenschutz = () => {
  const dispatch = useDispatch()
  const [scrollPosition, setScrollPosition] = useState<number>(0)

  const closeRef = useRef<HTMLButtonElement>(null)
  const modalRef = useRef<HTMLDivElement>(null)

  const closeModal = () => {
    if (modalRef.current) {
      disableBodyScroll(modalRef.current)
      document.body.style.position = ''
      document.body.style.top = ''
      window.scrollTo(0, scrollPosition)
      document.querySelector('html')!.style.scrollBehavior = 'smooth'
      dispatch<Action>({ type: 'CLOSE_MODAL' })
    }
  }

  const onKeyDown = (event: React.KeyboardEvent) => {
    return event.keyCode === 27 && closeModal() // close on 'escape'
  }

  useEffect(() => {
    if (closeRef.current && modalRef.current) {
      closeRef.current.focus()
      disableBodyScroll(modalRef.current)

      document.querySelector('html')!.style.scrollBehavior = 'unset'
      const tmpScrollY = window.scrollY
      setScrollPosition(window.scrollY)
      document.body.style.position = 'fixed'
      document.body.style.top = `-${tmpScrollY}px`
    }

    return () => {
      clearAllBodyScrollLocks()
    }
  }, [])

  return (
    <>
      <aside
        className="modal-cover"
        role="dialog"
        aria-modal="true"
        aria-label="Impressum &amp; Datenschutz"
        onKeyDown={onKeyDown}
        tabIndex={-1}
      >
        <div className="modal" ref={modalRef}>
          <FocusTrap>
            <div className="modal__content">
              <button
                aria-label="Close"
                className="modal__close"
                onClick={closeModal}
                ref={closeRef}
              >
                <img src="/close.svg" role="presentation" />
              </button>
              <div className="modal__body">
                <h3>Impressum</h3>
                <address>
                  <p>Christoph Siska</p>
                  <p>
                    Hilprechtshausen 7
                    <br />
                    37581 Bad Gandersheim
                    <br />
                  </p>
                  <p>Telefon: 0160 92723100</p>
                  <p>Email: Christoph-Siska@web.de</p>
                </address>

                <h3>Datenschutzerklärung</h3>
                <p>
                  <strong>Allgemeiner Hinweis und Pflichtinformationen</strong>
                </p>
                <p>
                  <strong>Benennung der verantwortlichen Stelle</strong>
                </p>
                <p>
                  Die verantwortliche Stelle für die Datenverarbeitung auf
                  dieser Website ist:
                </p>
                <p>
                  <span>Christoph Siska</span>
                  <br />
                  <span>Hilprechtshausen 7</span>
                  <br />
                  <span>37581</span> <span>Bad Gandersheim</span>
                </p>
                <p></p>
                <p>
                  Die verantwortliche Stelle entscheidet allein oder gemeinsam
                  mit anderen über die Zwecke und Mittel der Verarbeitung von
                  personenbezogenen Daten (z.B. Namen, Kontaktdaten o. Ä.).
                </p>

                <p>
                  <strong>
                    Widerruf Ihrer Einwilligung zur Datenverarbeitung
                  </strong>
                </p>
                <p>
                  Nur mit Ihrer ausdrücklichen Einwilligung sind einige Vorgänge
                  der Datenverarbeitung möglich. Ein Widerruf Ihrer bereits
                  erteilten Einwilligung ist jederzeit möglich. Für den Widerruf
                  genügt eine formlose Mitteilung per E-Mail. Die Rechtmäßigkeit
                  der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom
                  Widerruf unberührt.
                </p>

                <p>
                  <strong>
                    Recht auf Beschwerde bei der zuständigen Aufsichtsbehörde
                  </strong>
                </p>
                <p>
                  Als Betroffener steht Ihnen im Falle eines
                  datenschutzrechtlichen Verstoßes ein Beschwerderecht bei der
                  zuständigen Aufsichtsbehörde zu. Zuständige Aufsichtsbehörde
                  bezüglich datenschutzrechtlicher Fragen ist der
                  Landesdatenschutzbeauftragte des Bundeslandes, in dem sich der
                  Sitz unseres Unternehmens befindet. Der folgende Link stellt
                  eine Liste der Datenschutzbeauftragten sowie deren
                  Kontaktdaten bereit:{' '}
                  <a
                    href="https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html"
                    target="_blank"
                  >
                    https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html
                  </a>
                  .
                </p>

                <p>
                  <strong>Recht auf Datenübertragbarkeit</strong>
                </p>
                <p>
                  Ihnen steht das Recht zu, Daten, die wir auf Grundlage Ihrer
                  Einwilligung oder in Erfüllung eines Vertrags automatisiert
                  verarbeiten, an sich oder an Dritte aushändigen zu lassen. Die
                  Bereitstellung erfolgt in einem maschinenlesbaren Format.
                  Sofern Sie die direkte Übertragung der Daten an einen anderen
                  Verantwortlichen verlangen, erfolgt dies nur, soweit es
                  technisch machbar ist.
                </p>

                <p>
                  <strong>
                    Recht auf Auskunft, Berichtigung, Sperrung, Löschung
                  </strong>
                </p>
                <p>
                  Sie haben jederzeit im Rahmen der geltenden gesetzlichen
                  Bestimmungen das Recht auf unentgeltliche Auskunft über Ihre
                  gespeicherten personenbezogenen Daten, Herkunft der Daten,
                  deren Empfänger und den Zweck der Datenverarbeitung und ggf.
                  ein Recht auf Berichtigung, Sperrung oder Löschung dieser
                  Daten. Diesbezüglich und auch zu weiteren Fragen zum Thema
                  personenbezogene Daten können Sie sich jederzeit über die im
                  Impressum aufgeführten Kontaktmöglichkeiten an uns wenden.
                </p>

                <p>
                  <strong>SSL- bzw. TLS-Verschlüsselung</strong>
                </p>
                <p>
                  Aus Sicherheitsgründen und zum Schutz der Übertragung
                  vertraulicher Inhalte, die Sie an uns als Seitenbetreiber
                  senden, nutzt unsere Website eine SSL-bzw.
                  TLS-Verschlüsselung. Damit sind Daten, die Sie über diese
                  Website übermitteln, für Dritte nicht mitlesbar. Sie erkennen
                  eine verschlüsselte Verbindung an der „https://“ Adresszeile
                  Ihres Browsers und am Schloss-Symbol in der Browserzeile.
                </p>

                <p>
                  <strong>Kontaktformular</strong>
                </p>
                <p>
                  Per Kontaktformular übermittelte Daten werden einschließlich
                  Ihrer Kontaktdaten gespeichert, um Ihre Anfrage bearbeiten zu
                  können oder um für Anschlussfragen bereitzustehen. Eine
                  Weitergabe dieser Daten findet ohne Ihre Einwilligung nicht
                  statt.
                </p>
                <p>
                  Die Verarbeitung der in das Kontaktformular eingegebenen Daten
                  erfolgt ausschließlich auf Grundlage Ihrer Einwilligung (Art.
                  6 Abs. 1 lit. a DSGVO). Ein Widerruf Ihrer bereits erteilten
                  Einwilligung ist jederzeit möglich. Für den Widerruf genügt
                  eine formlose Mitteilung per E-Mail. Die Rechtmäßigkeit der
                  bis zum Widerruf erfolgten Datenverarbeitungsvorgänge bleibt
                  vom Widerruf unberührt.
                </p>
                <p>
                  Über das Kontaktformular übermittelte Daten verbleiben bei
                  uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung
                  zur Speicherung widerrufen oder keine Notwendigkeit der
                  Datenspeicherung mehr besteht. Zwingende gesetzliche
                  Bestimmungen - insbesondere Aufbewahrungsfristen - bleiben
                  unberührt.
                </p>

                <p>
                  <strong>Google Web Fonts</strong>
                </p>
                <p>
                  Unsere Website verwendet Web Fonts von Google. Anbieter ist
                  die Google Inc., 1600 Amphitheatre Parkway, Mountain View, CA
                  94043, USA.
                </p>
                <p>
                  Durch den Einsatz dieser Web Fonts wird es möglich Ihnen die
                  von uns gewünschte Darstellung unserer Website zu
                  präsentieren, unabhängig davon welche Schriften Ihnen lokal
                  zur Verfügung stehen. Dies erfolgt über den Abruf der Google
                  Web Fonts von einem Server von Google in den USA und der damit
                  verbundenen Weitergabe Ihre Daten an Google. Dabei handelt es
                  sich um Ihre IP-Adresse und welche Seite Sie bei uns besucht
                  haben. Der Einsatz von Google Web Fonts erfolgt auf Grundlage
                  von Art. 6 Abs. 1 lit. f DSGVO. Als Betreiber dieser Website
                  haben wir ein berechtigtes Interesse an der optimalen
                  Darstellung und Übertragung unseres Webauftritts.
                </p>
                <p>
                  Das Unternehmen Google ist für das us-europäische
                  Datenschutzübereinkommen "Privacy Shield" zertifiziert. Dieses
                  Datenschutzübereinkommen soll die Einhaltung des in der EU
                  geltenden Datenschutzniveaus gewährleisten.
                </p>
                <p>
                  Einzelheiten über Google Web Fonts finden Sie unter:{' '}
                  <a href="https://www.google.com/fonts#AboutPlace:about">
                    https://www.google.com/fonts#AboutPlace:about
                  </a>{' '}
                  und weitere Informationen in den Datenschutzbestimmungen von
                  Google:{' '}
                  <a href="https://policies.google.com/privacy/partners?hl=de">
                    https://policies.google.com/privacy/partners?hl=de
                  </a>
                </p>
                <p>
                  <small>
                    Quelle: Datenschutz-Konfigurator von{' '}
                    <a
                      href="http://www.mein-datenschutzbeauftragter.de"
                      target="_blank"
                    >
                      mein-datenschutzbeauftragter.de
                    </a>
                  </small>
                </p>
              </div>
            </div>
          </FocusTrap>
        </div>
      </aside>
      <style jsx>{`
        .modal-cover {
          position: fixed;
          display: flex;
          align-items: center;
          justify-content: center;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 20;
          transform: translateZ(0);
          background-color: rgba(0, 0, 0, 0.8);
        }

        .modal__content {
          padding: 40px 30px 10px;

          p {
            font-size: 1rem;
            line-height: 1.6rem;
            margin-bottom: 10px;

            &:last-child {
              margin-bottom: 40px;
            }
          }
        }

        .modal {
          position: relative;
          width: 94%;
          background-color: #ffffff;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;

          box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.1);
          height: auto;
          max-width: 40rem;
          max-height: calc(100% - 1em);
        }

        .modal__close {
          position: absolute;
          top: 10px;
          right: 10px;
          padding: 0.5em;
          line-height: 1;
          border: 0;
          box-shadow: 0;
          background: none;
          cursor: pointer;
          width: 40px;
          height: 40px;
        }
      `}</style>
    </>
  )
}

export default datenschutz
