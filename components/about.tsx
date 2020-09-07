const about = () => {
  return (
    <>
      <div id="about" className="padding__wrapper">
        <div className="content__wrapper about">
          <section className="text">
            <h2>Der Cellolehrer</h2>
            <p>
              Christoph Siska, Jahrgang 1964, Diplom-Kulturwissenschaftler
              (Schwerpunkt Musik). Neben seiner Tätigkeit als Instrumentallehrer
              arbeitet er in verschiedenen Musikprojekten mit Kindern und
              Erwachsenen.
            </p>
            <p>
              Quer durch alle musikalischen Stilrichtungen erprobt er die „Viel
              Sait”igkeit seines Instrumentes und gibt diese Spielfreude an
              seine Schüler und sein Publikum weiter.
            </p>
            <h4>Performance</h4>
            <ul>
              <li>Duo Rosshaar - Gefiddel auf acht Saiten</li>
              <li>
                Duo Eckert &amp; Siska - Querflöte oder wahlweise Klarinette und
                Cello
              </li>
            </ul>
          </section>

          <div className="image">
            <picture>
              <source
                srcSet="/images/playing_large.avif"
                media="(min-width: 800px)"
                type="image/avif"
              />
              <source
                srcSet="/images/playing_large.webp"
                media="(min-width: 800px)"
                type="image/webp"
              />
              <source
                srcSet="/images/playing_large.jpg"
                media="(min-width: 800px)"
                type="image/jpeg"
              />
              <source srcSet="/images/playing_small.avif" type="image/avif" />
              <source srcSet="/images/playing_small.webp" type="image/webp" />
              <img
                src="/images/playing_small.jpg"
                alt="Christoph performing cello"
                loading="lazy"
              />
            </picture>
          </div>
        </div>
      </div>
      <style jsx>{`
        .about__wrapper {
          background: #fff;
          padding-top: 40px;
          padding-bottom: 60px;
        }

        h2 {
          margin-bottom: 20px;
        }

        .text {
          margin-bottom: 40px;
        }

        @media only screen and (max-width: 800px) {
          .image {
            img {
              display: block;
              width: 60vw;
              margin: 0 auto;
            }
          }
        }

        @media only screen and (min-width: 800px) {
          .about {
            display: flex;
          }

          .text {
            flex: 1.3;
            margin-right: 20px;
            margin-bottom: 0;
          }

          .image {
            flex: 1;

            img {
              margin-left: auto;
              margin-right: 0;
              max-width: 400px;
            }
          }
        }
      `}</style>
    </>
  )
}

export default about
