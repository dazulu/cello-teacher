import Logo from './logo'
import Navigation from './navigation'

const Header = () => {
  return (
    <>
      <div className="header__wrapper">
        <div className="header">
          <Logo />
          <Navigation />
        </div>
      </div>
      <style jsx>{`
        .header {
          height: 80px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: all 300ms ease;
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .header__sub {
          display: flex;
          justify-content: flex-end;
        }

        @media only screen and (min-width: 700px) {
          .header {
            padding: 0 20px * 2;
          }
        }

        @media only screen and (min-width: 1024px) {
          .sticky {
            box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);
            background: rgba(255, 255, 255, 0.97);
            position: fixed;
            animation: reveal 150ms ease;
            animation-fill-mode: forwards;
            width: 100%;
            z-index: 11;
            top: 0;

            .header {
              height: 53px;
            }
          }

          .nav-spacer {
            margin-top: 80px;
          }
        }

        @keyframes reveal {
          from {
            transform: translateY(-53px);
          }
          to {
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  )
}

export default Header
