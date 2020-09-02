import { useEffect, useState } from 'react'
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'

const burgerbutton = () => {
  const [resizeThrottle, setResizeThrottle] = useState<boolean>(false)

  const toggleMenu = () => {
    if (
      !document.querySelector('.menu__button')!.classList.contains('is--open')
    ) {
      disableBodyScroll(document.querySelector('#nav')!)
    } else {
      clearAllBodyScrollLocks()
    }

    document.querySelector('.menu__button')!.classList.toggle('is--open')
    document.querySelector('.nav')!.classList.toggle('nav--open')
  }

  useEffect(() => {
    const onResize = () => {
      console.log('onResize')
      if (!resizeThrottle) {
        setResizeThrottle(true)

        if (window.innerWidth >= 1024) {
          document.querySelector('.menu__button')!.classList.remove('is--open')
          document.querySelector('.nav')!.classList.remove('nav--open')
          clearAllBodyScrollLocks()
        }

        setTimeout(() => {
          setResizeThrottle(false)
        }, 100)
      }
    }

    window.addEventListener('resize', onResize)
  })

  return (
    <>
      <button
        onClick={toggleMenu}
        className="menu__button"
        aria-label="Toggle Menu"
      >
        <div className="button__line"></div>
        <div className="button__line"></div>
        <div className="button__line"></div>
      </button>
      <style jsx>{`
        .menu__button {
          cursor: pointer;
          background: none;
          border: 0;
          color: #fff;
          display: block;
          font-size: 18px;
          font-weight: 700;
          letter-spacing: -1px;
          position: relative;
          z-index: 11;
          padding: 6px;
          transition: all 0.4s ease;
          outline: 0;
          transform-origin: center center;
        }

        .button__line {
          background: #fff;
          height: 3px;
          border-radius: 3px;
          clear: both;
          float: right;
          transition: all 0.3s ease;
          margin: 3px 0;

          &:nth-child(1) {
            width: 25px;
          }

          &:nth-child(2) {
            width: 22px;
          }

          &:nth-child(3) {
            width: 27px;
          }
        }

        .menu__button {
          &.is--open {
            .button__line {
              &:nth-child(1) {
                width: 27px;
                transform-origin: top right;
                transform: rotateZ(-45deg);
              }

              &:nth-child(2) {
                width: 0;
                opacity: 0;
              }

              &:nth-child(3) {
                width: 27px;
                transform-origin: bottom right;
                transform: rotateZ(45deg);
              }
            }
          }
        }

        .no-touchy-action {
          touch-action: none;
        }

        @media only screen and (min-width: 1024px) {
          .menu__button {
            display: none;
          }
        }
      `}</style>
    </>
  )
}

export default burgerbutton
