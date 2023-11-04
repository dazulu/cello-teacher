import AnchorLink from 'react-anchor-link-smooth-scroll'

const lessons = () => {
  return (
    <>
      <div>
        <div id="lessons" className="padding__wrapper">
          <div className="content__wrapper">
            <section>
              <h2 className="title">Cello spielen</h2>
              <div className="text-grid">
                <p>
                  Schon Kinder ab 5 Jahren können das Cellospiel bei mir
                  erlernen und natürlich auch Erwachsene jeden Alters. Wie sagt
                  der Kölner: Jeder Jeck ist anders. Das gilt naturgemäß auch
                  für alle Schülerinnen und Schüler. Langjährige Erfahrung und
                  regelmäßige Weiterbildung erlauben es mir auf jeden Schüler
                  individuell einzugehen und mit ihm die für ihn ideale Lernform
                  zu finden. Im Unterricht werden musiktheoretische Grundlagen,
                  Kompositions- und Improvisationstechniken vermittelt.
                </p>
                <p>
                  Ich gehe, wann immer es möglich ist, auf die musikalischen
                  Wünsche meiner Schüler ein. Zu jeder musikalischen
                  Grundausbildung gehört das Ensemblespiel selbsverständlich
                  dazu. Zweimal im Jahr haben meine Schüler hierzu die
                  Gelegenheit im Rahmen unserer Musikußfeste.
                </p>
              </div>
            </section>
            <section>
              <h3 className="subtitle">Angebote</h3>
              <div className="options">
                <div className="option">
                  <p className="type">Cello einzeln</p>
                  <p className="duration">45 Minuten pro Woche</p>
                  <p className="price">
                    105 €* <span>monatlich</span>
                  </p>
                  <AnchorLink href="#contact" offset="30">
                    <button className="button">Kontakt</button>
                  </AnchorLink>
                </div>
                <div className="option">
                  <p className="type">Cello einzeln</p>
                  <p className="duration">30 Minuten pro Woche</p>
                  <p className="price">
                    75 €* <span>monatlich</span>
                  </p>
                  <AnchorLink href="#contact" offset="30">
                    <button className="button">Kontakt</button>
                  </AnchorLink>
                </div>
                <div className="option">
                  <p className="type">Cello zu zweit</p>
                  <p className="duration">45 Minuten pro Woche</p>
                  <p className="price">
                    65 €* <span>monatlich pro Person</span>
                  </p>
                  <AnchorLink href="#contact" offset="30">
                    <button className="button">Kontakt</button>
                  </AnchorLink>
                </div>
              </div>
              <p className="note">
                *Preise gelten für Unterrichtsort Hilprechtshausen. Preise für
                Braunschweig auf Anfrage.
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

        .subtitle {
          text-align: center;
          font-size: 2.2rem;
          margin-bottom: 0;
        }

        .options {
          margin-top: 2rem;
          margin-bottom: 4rem;
        }

        .option {
          border-top: 5px solid;
          padding: 1.3rem;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04),
            0 2px 6px rgba(0, 0, 0, 0.04), 0 4px 8px rgba(0, 0, 0, 0.04),
            0 6px 10px rgba(0, 0, 0, 0.04), 0 6px 12px rgba(0, 0, 0, 0.04),
            0 8px 14px rgba(0, 0, 0, 0.04);

          text-align: center;
          position: relative;
          margin-bottom: 3rem;

          &:nth-child(1) {
            border-color: #739d35;
          }

          &:nth-child(2) {
            border-color: #356a9d;
          }

          &:nth-child(3) {
            border-color: #9d3535;
          }
        }

        .type {
          font-size: 1.6rem;
          margin-top: 5px;
          margin-bottom: 20px;
          font-weight: 700;
        }

        .duration {
          margin-top: 0;
          margin-bottom: 20px;
        }

        .price {
          font-size: 1.7rem;
          margin-bottom: 4rem;
          font-weight: 700;

          span {
            font-size: 1rem;
            font-weight: 700;
            display: block;
          }
        }

        .note {
          font-size: 1.1rem;
        }

        .button {
          background-color: #222;
          color: #fff;
          cursor: pointer;
          font-size: 1.2rem;
          text-align: center;
          border: 0;
          padding: 15px;
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;

          &:hover {
            background-color: #555;
          }
        }

        .blockflute {
          background: rgba(80, 80, 150, 0.04);
          border-left: 5px solid silver;
          border-radius: 5px;
          font-size: 1rem;
          line-height: 1.6rem;
          padding: 10px 15px;
          margin-top: 2rem;
        }

        @media only screen and (min-width: 550px) {
          .options {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
            grid-gap: 2rem;
          }

          .option {
            margin-bottom: 0;
          }
        }

        @media only screen and (min-width: 1000px) {
          .text-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(430px, 1fr));
            grid-gap: 0 2rem;
          }
        }
      `}</style>
    </>
  )
}

export default lessons
