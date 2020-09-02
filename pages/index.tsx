import Header from 'components/header'
import Hero from 'components/hero'
import Footer from 'components/footer'
import About from 'components/about'
import Parallax from 'components/parallax'
import Faq from 'components/faq'
// import Contact from 'components/contact'

const Home = () => {
  return (
    <>
      <div>
        <div className="background">
          <Header />
          <Hero />
        </div>
        <About />
        <Parallax background="bg1" />
        <Faq />
        <Parallax background="bg2" />
        {/* <Contact /> */}
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
