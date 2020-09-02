const about = () => {
  return (
    <>
      <div id="about" className="padding__wrapper">
        <div className="content__wrapper about">
          <div className="text">
            <h2>About Christoph</h2>
            <p>
              Hey there! I'm Adrian Payne. Born and raised in Ireland but now
              living in the beautiful city of Hamburg, Germany.
            </p>
            <p>
              I've always had an interest in singing and musical theatre though
              never actually got around to doing all that much with it up until
              now. I recently started taking singing lessons and want to share
              the results with you as I go along. Maybe one day I can quit the
              day job and do this full time! Right? Right??
            </p>
          </div>

          <div className="video">
            <div className="embed-container">
              <iframe
                src="https://www.youtube.com/embed/kBYbkUJE53A"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
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
