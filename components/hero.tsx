import { useEffect } from 'react'
import ArrowDivider from './arrowdivider'
import AnchorLink from 'react-anchor-link-smooth-scroll'

type Extensions = 'webp' | 'png'

const hero = () => {
  const loadImage = (ext: Extensions) => {
    const cutoutImage = document.querySelector('.cutout') as HTMLImageElement
    const highResImage = `/images/christoph-cutout.${ext}`
    const imageLoader = new Image()

    imageLoader.onload = () => {
      cutoutImage.src = highResImage
      cutoutImage.classList.add('cutout--loaded')
    }

    imageLoader.src = highResImage
  }

  useEffect(() => {
    new Promise((resolve, reject) => {
      const img = new Image()
      img.onload = () => {
        resolve()
      }
      img.onerror = () => {
        reject()
      }
      img.src = '/images/test.webp'
    })
      .then(() => loadImage('webp'))
      .catch(() => loadImage('png'))
  })

  return (
    <>
      <div>
        <div className="content__wrapper intro">
          <div className="content">
            <h2 className="title">
              Cello lernen <span className="sub">muss nicht schwer sein</span>
            </h2>

            <AnchorLink href="#about" offset="30">
              <button className="button">Über mich</button>
            </AnchorLink>

            <AnchorLink href="#lessons" offset="30">
              <button className="button">Cello Unterricht</button>
            </AnchorLink>
          </div>
          <img
            className="cutout"
            src="/images/placeholder-cutout.png"
            alt="Christoph Siska"
          />
        </div>
        <ArrowDivider type="transparent" />
      </div>
      <style jsx>{`
        .intro {
          display: flex;
          align-items: center;
          height: 80vh;
          position: relative;
          overflow: hidden;
        }

        .title {
          margin: -70% 0 40px 0;
          font-size: 3.7rem;
          color: #fff;
          letter-spacing: -3px;
          line-height: 3rem;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.55);
          z-index: 1;
          position: relative;
        }

        .sub {
          display: block;
          font-size: 2rem;
        }

        .button {
          border: none;
          position: relative;
          cursor: pointer;
          margin-right: 10px;
          padding: 15px;
          color: #000;
          background: #fff;
          border: 2px solid transparent;
          font-size: 18px;
          z-index: 1;

          &:hover {
            color: #fff;
            background: #000;
            border: 2px solid #fff;
          }
        }

        .cutout {
          position: absolute;
          right: -160px;
          bottom: -300px;
          filter: saturate(150%);
          opacity: 0;
          transform: translateY(40px);
          transition: transform 600ms ease-out, opacity 600ms ease-out;
          max-width: 200vw;
          width: 680px;
        }

        .cutout--loaded {
          opacity: 1;
          transform: translateY(0);
        }

        @media only screen and (min-width: 500px) {
          .title {
            font-size: 4.2rem;
          }

          .sub {
            font-size: 2.2rem;
          }
        }

        @media only screen and (min-width: 768px) {
          .title {
            font-size: 4.6rem;
            line-height: 3.3rem;
            margin-top: 0;
          }

          .sub {
            font-size: 2.6rem;
          }

          .cutout {
            right: -110px;
            bottom: -90px;
          }

          .intro {
            height: 68vh;
            min-height: 600px;
          }

          .content {
            margin-top: 100px;
          }
        }

        @media only screen and (min-width: 1024px) {
          .cutout {
            right: 40px;
            bottom: -110px;
            width: 700px;
          }
        }
      `}</style>
    </>
  )
}

export default hero
