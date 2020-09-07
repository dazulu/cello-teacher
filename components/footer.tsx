import { useDispatch } from 'react-redux'
import { Action } from 'store'

const footer = () => {
  const dispatch = useDispatch()
  const showModal = () => dispatch<Action>({ type: 'OPEN_MODAL' })

  return (
    <>
      <footer className="content__wrapper footer">
        <button onClick={showModal}>Datenschutz</button>-
        <button onClick={showModal}>Impressum</button>
      </footer>
      <style jsx>{`
        .footer {
          display: flex;
          padding-top: 20px;
          padding-bottom: 20px;
          justify-content: center;
          align-items: center;

          button {
            background: none;
            border: none;
            text-decoration: underline;
            cursor: pointer;

            &:hover {
              text-decoration: none;
            }
          }
        }
      `}</style>
    </>
  )
}

export default footer
