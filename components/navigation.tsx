import { useDispatch, useSelector } from 'react-redux'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { clearAllBodyScrollLocks } from 'body-scroll-lock'

import { ApplicationState } from 'store'
import BurgerButton from './burgerbutton'

const navigation = () => {
  const dispatch = useDispatch()
  const navisOpen = useSelector(({ showNav }: ApplicationState) => showNav)

  const closeNav = () => {
    dispatch({ type: 'CLOSE_NAV_MENU' })
    clearAllBodyScrollLocks()
  }
  return (
    <>
      <div>
        <nav id="nav" role="navigation">
          <ul className={`nav ${navisOpen ? 'nav--open' : ''}`}>
            <li className="nav__item">
              <AnchorLink
                href="#about"
                offset="30"
                className="nav__link"
                onClick={closeNav}
              >
                About
              </AnchorLink>
            </li>
            <li className="nav__item">
              <AnchorLink
                href="#lessons"
                offset="30"
                className="nav__link"
                onClick={closeNav}
              >
                Lessons
              </AnchorLink>
            </li>
            <li className="nav__item">
              <AnchorLink
                href="#faq"
                offset="30"
                className="nav__link"
                onClick={closeNav}
              >
                FAQ
              </AnchorLink>
            </li>
            <li className="nav__item">
              <AnchorLink
                href="#contact"
                offset="30"
                className="nav__link"
                onClick={closeNav}
              >
                Contact
              </AnchorLink>
            </li>
            <li className="nav__item">
              <AnchorLink
                href="#map"
                offset="30"
                className="nav__link"
                onClick={closeNav}
              >
                Location
              </AnchorLink>
            </li>
          </ul>
        </nav>
        <BurgerButton />
      </div>
      <style jsx global>{`
        .nav__link {
          align-items: center;
          color: #fff !important;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          text-transform: uppercase;
          text-decoration: none;
          height: 100%;
          font-size: 4.2vh;
        }

        @media only screen and (min-width: 1024px) {
          .nav__link {
            height: 30px;
            font-size: 16px;
          }

          .sticky {
            .navigation {
              position: relative;
            }

            .nav__link {
              color: #333 !important;
            }
          }
        }
      `}</style>
      <style jsx>{`
        .nav {
          background: rgba(0, 0, 0, 0.88);
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, 1) 50%,
            rgba(0, 0, 0, 1) 100%
          ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
          filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00000000', endColorstr='#000000',GradientType=0 ); /* IE6-9 */
          display: flex;
          justify-content: center;
          flex-direction: column;
          width: 100%;
          overflow: hidden;
          z-index: 10;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          list-style-type: none;
          padding: 0;
          margin: 0;
          pointer-events: none;
          opacity: 0;
          transform-origin: bottom center;
          transform: translateY(100%);
          transition: all 400ms ease;
        }

        .nav--open {
          border-bottom: 10px solid #e46663;
          transform: translateY(0);
          pointer-events: auto;
          opacity: 1;

          .nav__item {
            transform: translateY(3vh);
          }
        }

        .nav__item {
          max-height: 13vh;
          flex: 1;
          transition-delay: 500ms;
          transform: translateY(15vh);
          transition: all 1s ease;
        }

        @media only screen and (min-width: 1024px) {
          .nav {
            opacity: 1;
            transform: scale(1);
            transition: none;
            display: flex;
            background: none;
            flex-direction: row;
            position: relative;
            top: auto;
            left: auto;
            height: auto;
            width: auto;
            pointer-events: auto;
            border: 0;
          }

          .nav__item {
            margin: 0 12px;
            flex: 0 1 auto;
            transform: translateY(0) !important;
            transition: none;

            &:last-child {
              margin-right: 0;
            }
          }
        }
      `}</style>
    </>
  )
}

export default navigation
