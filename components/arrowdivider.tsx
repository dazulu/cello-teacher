interface Props {
  type: 'solid' | 'transparent'
}

const arrowdivider: React.FC<Props> = ({ type }) => {
  return (
    <>
      <div className="arrow__wrapper">
        {type === 'solid' ? (
          <div className="solid" />
        ) : (
          <div className="transparent">
            <div></div>
            <div></div>
          </div>
        )}
      </div>
      <style jsx>{`
        .arrow__wrapper {
          position: relative;
        }

        .solid {
          height: 20px;
          position: absolute;
          width: 100%;
          z-index: 1;
          top: 0;
          display: block;

          &:after {
            content: '';
            display: block;
            position: absolute;
            left: 50%;
            margin-left: -18px;
            width: 36px;
            height: 36px;
            transform: rotateZ(45deg);
            background: #fff;
            top: -18px;
          }
        }

        .transparent {
          height: 20px;
          left: 0;
          overflow: hidden;
          position: absolute;
          width: 100%;
          z-index: 5;
          bottom: 0px;
          display: block;

          > div {
            background: #fff;
            display: inline-block;
            height: 20px;
            position: absolute;
            top: 0;
            width: 50%;

            &:after {
              border-bottom: 20px solid #fff;
              content: '';
              position: absolute;
              top: 0;
            }

            &:first-child {
              left: -20px;

              &:after {
                right: -20px;
                border-right: 20px solid transparent;
              }
            }

            &:last-child {
              right: -20px;

              &:after {
                left: -20px;
                border-left: 20px solid transparent;
              }
            }
          }
        }
      `}</style>
    </>
  )
}

export default arrowdivider
