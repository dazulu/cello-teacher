import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import mapboxgl, { Map } from 'mapbox-gl'
import ArrowDivider from './arrowdivider'

type PlaceName = 'Hilprechtshausen' | 'Braunschweig'

type Point = { lng: number; lat: number }

interface Location {
  name: PlaceName
  coords: Point
}

type Locations = Location[]

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX!

const locations: Locations = [
  {
    name: 'Hilprechtshausen',
    coords: { lng: 9.947497640096344, lat: 51.90132430407462 },
  },
  {
    name: 'Braunschweig',
    coords: { lng: 10.544401671439914, lat: 52.275011265578826 },
  },
]

const LocationIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 297 297"
    aria-hidden="true"
    className="location-icon"
  >
    <path d="M148.5 0A148.6 148.6 0 00.1 148.5C0 230.4 66.7 297 148.5 297s148.4-66.6 148.4-148.5S230.3 0 148.5 0zm10.1 276.4v-61.3a10.1 10.1 0 00-20.2 0v61.3A128.5 128.5 0 0120.7 158.6h61.2a10.1 10.1 0 000-20.2H20.7c4.9-62.7 55-112.9 117.7-117.8v61.3a10.1 10.1 0 0020.2 0V20.6c62.7 4.9 112.8 55 117.7 117.8h-61.2a10.1 10.1 0 000 20.2h61.2c-4.9 62.7-55 112.9-117.7 117.8z" />
  </svg>
)

const map = () => {
  const [map, setMap] = useState<Map | null>(null)
  const [rendered, setRendered] = useState<boolean>(false)
  const [selectedLoc, setSelectedLoc] = useState<PlaceName>('Hilprechtshausen')

  const relocate = (location: Location) => {
    const { lng, lat } = location.coords
    setSelectedLoc(location.name)
    if (map) {
      map.flyTo({
        center: [lng, lat],
      })
    }
  }

  useEffect(() => {
    // Add mapbox css after render
    const tag = document.createElement('link')
    tag.rel = 'stylesheet'
    tag.href = 'https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css'
    document.getElementsByTagName('head')[0].appendChild(tag)

    if (!rendered) {
      setMap(
        new mapboxgl.Map({
          container: 'mapbox',
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [locations[0].coords.lng, locations[0].coords.lat],
          zoom: 14,
        })
      )
      setRendered(true)
    } else if (map) {
      // Add zoom controls
      map.addControl(new mapboxgl.NavigationControl())

      // Add custom markers
      locations.forEach((l: Location) => {
        new mapboxgl.Marker().setLngLat(l.coords).addTo(map)
      })
    }
  }, [rendered])

  return (
    <>
      <div id="map" className="map">
        <ArrowDivider type="solid" />
        <h2 className="title">Unterrichtsorte</h2>
        <div className="buttons">
          {locations.map((l: Location, index) => {
            return (
              <button
                key={index}
                className={`button ${selectedLoc === l.name ? 'selected' : ''}`}
                onClick={() => relocate(l)}
              >
                <LocationIcon />
                {l.name}
              </button>
            )
          })}
        </div>
        <div id="mapbox" className="mapbox"></div>
      </div>

      <style jsx global>{`
        .marker {
          background-image: url('/images/mapbox-icon.png');
          background-size: cover;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          cursor: pointer;
          z-index: 10;
        }

        .location-icon {
          fill: #2a87b5;
          width: 18px;
          display: inline;
          position: relative;
          top: 3px;
          margin-right: 7px;
        }
      `}</style>

      <style jsx>{`
        .map {
          height: 550px;
          position: relative;
          overflow: hidden;
        }

        .title {
          position: absolute;
          top: 70px;
          left: 0;
          width: 100%;
          text-align: center;
          pointer-events: none;
          z-index: 1;
        }

        .buttons {
          display: flex;
          position: absolute;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          bottom: 25px;
          z-index: 1;
          width: 100vw;
          overflow: hidden;
        }

        .button {
          background-color: #fff;
          border-radius: 8px;
          border: 3px solid #fff;
          cursor: pointer;
          padding: 10px 15px;
          font-size: 1rem;

          &:first-child {
            margin-bottom: 10px;
          }

          &.selected {
            border-color: #308fbd;
          }

          &:hover {
            background-color: #333;
            border-color: #333;
            color: #fff;
          }
        }

        .mapbox {
          width: 100%;
          height: 100%;
        }

        @media only screen and (min-width: 400px) {
          .buttons {
            display: block;
            bottom: 25px;
            transform: translateX(50vw);
            margin-left: -190px;
            width: auto;
          }

          .button {
            &:first-child {
              margin-right: 10px;
              margin-bottom: 0;
            }
          }
        }
      `}</style>
    </>
  )
}

export default React.memo(map)
