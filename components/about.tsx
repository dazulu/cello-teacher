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

          <div className="video">
            <div className="embed-container">Photo</div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .about__wrapper {
          background: #fff;
          padding-top: 40px;
          padding-bottom: 60px;
        }

        .text {
          margin-bottom: 40px;
        }

        .embed-container {
          position: relative;
          padding-bottom: 56.25%;
          height: 0;
          overflow: hidden;
          max-width: 100%;
        }

        .embed-container iframe,
        .embed-container object,
        .embed-container embed {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
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

          .video {
            position: relative;
            margin-top: 2%;
            flex: 1;
          }
        }
      `}</style>
    </>
  )
}

export default about
