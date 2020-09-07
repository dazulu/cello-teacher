import { useEffect, useRef, useState } from 'react'
import FocusTrap from 'focus-trap-react'
import { useDispatch } from 'react-redux'
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'

import { Action } from 'store'

const datenschutz = () => {
  const dispatch = useDispatch()
  const [scrollPosition, setScrollPosition] = useState<number>(0)

  const closeRef = useRef<HTMLButtonElement>(null)
  const modalRef = useRef<HTMLDivElement>(null)

  const closeModal = () => {
    if (modalRef.current) {
      disableBodyScroll(modalRef.current)
      document.body.style.position = ''
      document.body.style.top = ''
      window.scrollTo(0, scrollPosition)
      document.querySelector('html')!.style.scrollBehavior = 'smooth'
      dispatch<Action>({ type: 'CLOSE_MODAL' })
    }
  }

  const onKeyDown = (event: React.KeyboardEvent) => {
    return event.keyCode === 27 && closeModal() // close on 'escape'
  }

  useEffect(() => {
    if (closeRef.current && modalRef.current) {
      closeRef.current.focus()
      disableBodyScroll(modalRef.current)

      document.querySelector('html')!.style.scrollBehavior = 'unset'
      const tmpScrollY = window.scrollY
      setScrollPosition(window.scrollY)
      document.body.style.position = 'fixed'
      document.body.style.top = `-${tmpScrollY}px`
    }

    return () => {
      clearAllBodyScrollLocks()
    }
  }, [])

  return (
    <>
      <aside
        className="modal-cover"
        role="dialog"
        aria-modal="true"
        aria-label="Impressum &amp; Datenschutz"
        onKeyDown={onKeyDown}
        tabIndex={-1}
      >
        <div className="modal" ref={modalRef}>
          <FocusTrap>
            <div className="modal__content">
              <button
                aria-label="Close"
                className="modal__close"
                onClick={closeModal}
                ref={closeRef}
              >
                <img src="/close.svg" role="presentation" />
              </button>
              <div className="modal__body">
                <h3>Impressum</h3>
                <address>
                  <p>Christoph Siska</p>
                  <p>
                    Hilprechtshausen 7
                    <br />
                    37581 Bad Gandersheim
                    <br />
                  </p>
                  <p>Telefon: 0160 92723100</p>
                  <p>Email: Christoph-Siska@web.de</p>
                </address>
                <h3>Datenschutz</h3>
                <p>Lorem ipsum delor sit amet</p>
              </div>
            </div>
          </FocusTrap>
        </div>
      </aside>
      <style jsx>{`
        .modal-cover {
          position: fixed;
          display: flex;
          align-items: center;
          justify-content: center;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 20;
          transform: translateZ(0);
          background-color: rgba(0, 0, 0, 0.8);
        }

        .modal__content {
          padding: 40px 30px 10px;

          p {
            font-size: 1rem;
            line-height: 1.6rem;
            margin-bottom: 10px;

            &:last-child {
              margin-bottom: 40px;
            }
          }
        }

        .modal {
          position: relative;
          width: 94%;
          background-color: #ffffff;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;

          box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.1);
          height: auto;
          max-width: 40rem;
          max-height: calc(100% - 1em);
        }

        .modal__close {
          position: absolute;
          top: 10px;
          right: 10px;
          padding: 0.5em;
          line-height: 1;
          border: 0;
          box-shadow: 0;
          background: none;
          cursor: pointer;
          width: 40px;
          height: 40px;
        }
      `}</style>
    </>
  )
}

export default datenschutz
