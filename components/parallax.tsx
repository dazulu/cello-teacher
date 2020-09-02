import ArrowDivider from './arrowdivider'

interface Props {
  background: 'bg1' | 'bg2'
}

const parallax: React.FC<Props> = ({ background }) => {
  const bgClassName = `parallax_${background}`

  return (
    <>
      <div className="parallax__wrapper">
        <ArrowDivider type="solid" />
        <div className={`parallax ${bgClassName}`} />
        <ArrowDivider type="transparent" />
      </div>
      <style jsx>
        {`
          .parallax__wrapper {
            position: relative;
          }

          .parallax_bg1 {
            background-image: url('/images/parallax1_800.jpg');
          }

          .parallax_bg2 {
            background-image: url('/images/parallax2_800.jpg');
          }

          .parallax {
            background-position: center center;
            background-repeat: no-repeat;
            background-size: cover;
            height: 250px;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          @media only screen and (min-width: 600px) {
            .parallax {
              height: 300px;
            }
          }

          @media only screen and (min-width: 700px) {
            .parallax {
              height: 400px;
            }
          }

          @media only screen and (min-width: 800px) {
            .parallax_bg1 {
              background-image: url('/images/parallax1_1024.jpg');
            }

            .parallax_bg2 {
              background-image: url('/images/parallax2_1200.jpg');
            }
          }

          @media only screen and (min-width: 1024px) {
            .parallax_bg1 {
              background-image: url('/images/parallax1_1280.jpg');
            }

            .parallax_bg2 {
              background-image: url('/images/parallax2_1600.jpg');
            }

            .parallax {
              height: 500px;
            }
          }

          @media only screen and (min-width: 1280px) {
            .parallax {
              background-attachment: fixed;
            }
          }
        `}
      </style>
    </>
  )
}

export default parallax
