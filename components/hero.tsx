import ArrowDivider from './arrowdivider'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const hero = () => {
  return (
    <>
      <div>
        <div className="content__wrapper intro">
          <div>
            <h2 className="heading">
              <span className="pre">Some Text</span> <br />
              Goes Here
            </h2>
            <AnchorLink href="#about" offset="30">
              <button className="button">Find Out More</button>
            </AnchorLink>

            <AnchorLink href="#lessons" offset="30">
              <button className="button">View Pricing</button>
            </AnchorLink>
          </div>
          <img
            className="cutout"
            src="/images/christoph.png"
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

        .heading {
          margin: -70% 0 40px 0;
          font-size: 4rem;
          color: #fff;
          letter-spacing: -3px;
          line-height: 3rem;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.55);
          z-index: 1;
          position: relative;
        }

        .pre {
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
          max-width: 200vw;
          width: 680px;
        }

        @media only screen and (min-width: 768px) {
          .heading {
            font-size: 5.2rem;
            line-height: 3.3rem;
            margin-top: 0;
          }

          .pre {
            font-size: 2.8rem;
          }

          .cutout {
            right: -110px;
            bottom: -90px;
          }
        }

        @media only screen and (min-width: 1024px) {
          .cutout {
            right: 40px;
            bottom: -110px;
            width: 700px;
          }
        }

        @media only screen and (min-width: 1024px) {
          .intro {
            height: 75vh;
          }
        }
      `}</style>
    </>
  )
}

export default hero
