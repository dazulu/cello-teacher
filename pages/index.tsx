import dynamic from 'next/dynamic'

import Header from 'components/header'
import Hero from 'components/hero'
import Footer from 'components/footer'
import About from 'components/about'
import Parallax from 'components/parallax'

const Lessons = dynamic(() => import('components/lessons'))
const Faq = dynamic(() => import('components/faq'))
const Contact = dynamic(() => import('components/contact'))
const Map = dynamic(() => import('components/map'))

const Home = () => {
  return (
    <>
      <div>
        <div className="background">
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
      </div>
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
