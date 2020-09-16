interface Question {
  question: string
  answer: string[]
}

const questions: Question[] = [
  {
    question: 'Gibt es Probestunden?',
    answer: [
      'Die erste Schnupperstunde ist kostenfrei. Dann gibt es drei Probestunden, die normal bezahlt werden. In dieser Probezeit kann man wöchentlich kündigen.',
    ],
  },
  {
    question: 'In welchem Alter kann man Cello spielen lernen?',
    answer: [
      'Ich arbeite mit Kindern ab 5 Jahre. Nach oben hin sind keine Grenzen gesetzt.',
    ],
  },
  {
    question: 'Muss ich ein eigenes Cello mitbringen?',
    answer: [
      'Das ist nicht notwendig. Ich habe einige Celli bereit stehen, die ich für 20,- € monatlich verleihe. Es gibt auch Extragrößen für Kinder.',
    ],
  },
  {
    question: 'Wo und wann kann der Unterricht stattfinden?',
    answer: [
      'Ich unterrichte von Dienstag bis Donnerstag in Braunschweig und am Freitag in Hilprechtshausen bei Bad Gandersheim. Einen Termin können wir jederzeit vereinbaren.',
    ],
  },
  {
    question: 'Kann ich mit anderen zusammen in einer Gruppe spielen?',
    answer: [
      'Ob in der 2er-Gruppe oder im Einzelunterricht- das häufige Zusammenspiel mit dem anderen Schüler oder mit dem Lehrer gehört zu meinem Unterrichtskonzept.',
      'Dann gibt es einmal im Jahr die Projektphase, in der der Einzelunterricht vorübergehend durch Ensemblespiel ersetzt wird.',
    ],
  },
  {
    question: 'Macht es was, wenn ich keine Noten lesen kann?',
    answer: [
      'Nein, Noten lesen ist nur eine von vielen Fähigeiten, die man zum Cello spielen braucht, und man kann es gut schrittweise lernen. Zeitweise ist es sogar besser, das Noten lesen hinten anzustellen, weil man sich so intensiver um einen schönen Celloton und um eine flüssige Spielweise bemühen kann.',
    ],
  },
]

const faq = () => {
  return (
    <>
      <div id="faq" className="padding__wrapper">
        <section className="content__wrapper faq">
          <h2 className="title">Häufige Fragen</h2>
          <div className="grid">
            {questions.map((q: Question, i) => (
              <div key={i}>
                <h3>{q.question}</h3>
                {q.answer.map((a, j) => (
                  <p key={j}>{a}</p>
                ))}
              </div>
            ))}
          </div>
        </section>
      </div>
      <style jsx>{`
        .title {
          text-align: center;
          margin-bottom: 40px;
        }

        ul {
          padding-left: 20px;
        }

        .grid li {
          word-wrap: break-word;
          font-size: 1.2rem;
          line-height: 1.7rem;
          margin-bottom: 3px;
        }

        @media only screen and (min-width: 640px) {
          .grid {
            display: grid;
            grid-gap: 4%;
            grid-template-columns: repeat(2, 48%);
          }
        }

        @media only screen and (min-width: 1200px) {
          .grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>
    </>
  )
}

export default faq
