import { useSelector } from 'react-redux'

import { ApplicationState } from 'store'

import Header from 'components/header'
import Hero from 'components/hero'
import Footer from 'components/footer'
import About from 'components/about'
import Parallax from 'components/parallax'
import Lessons from 'components/lessons'
import Faq from 'components/faq'
import Contact from 'components/contact'
import Map from 'components/map'

const Home = () => {
  const navIsSticky = useSelector<ApplicationState>(
    ({ navSticky }) => navSticky
  )

  return (
    <>
      <main>
        <div className={`background ${navIsSticky ? 'nav-spacer' : ''}`}>
          <Header />
          <Hero />
        </div>
        <About />
        <Parallax background="bg4" />
        <Lessons />
        <Parallax background="bg2" />
        <Faq />
        <Parallax background="bg3" />
        <Contact />
        <Map />
        <Footer />
      </main>
      <style jsx global>{`
        @media only screen and (min-width: 1024px) {
          .nav-spacer {
            padding-top: 80px;
          }
        }
      `}</style>
      <style jsx>
        {`
          .background {
            background: url('/images/hero1200.jpg') top right no-repeat;
            background-size: cover;
          }

          @media only screen and (min-width: 1300px) {
            .background {
              background-image: url('/images/hero1920.jpg');
              background-position: center center;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
