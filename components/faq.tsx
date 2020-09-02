interface Question {
  question: string
  answer: string
}

const questions: Question[] = [
  {
    question: 'What gear do you use to record audio?',
    answer: 'xxxx',
  },
  {
    question: 'What gear do you use to record video?',
    answer: 'xxx',
  },
  {
    question: 'What software do you use to create videos?',
    answer: 'xxx',
  },
  {
    question: 'What software do you use to edit audio?',
    answer: 'xxx',
  },
  {
    question: 'Where are you from?',
    answer: 'xxx',
  },
  {
    question: 'Where did you get your website?',
    answer: 'xxx',
  },
]

const faq = () => {
  return (
    <>
      <div id="faq" className="padding__wrapper">
        <div className="content__wrapper faq">
          <h2 className="faq__title">Frequently Asked Questions</h2>
          <div className="grid">
            {questions.map((q: Question) => (
              <div>
                <h3>{q.question}</h3>
                <p>{q.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .faq__title {
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