import { useEffect } from 'react'
import mapboxgl from 'mapbox-gl'
import ArrowDivider from './arrowdivider'

const map = () => {
  const initMap = () => {
    mapboxgl.accessToken =
      'pk.eyJ1IjoibWFwYm94Y2VsbG8iLCJhIjoiY2tlbGw3OGVzMGkxdDJzbXF2OWJqeXFlOCJ9.sVXb3RDQsBp2pfgXtIiDIQ'

    const map = new mapboxgl.Map({
      container: 'mapbox',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [9.947497640096344, 51.90132430407462],
      zoom: 14,
    })

    new mapboxgl.Marker()
      .setLngLat({ lng: 9.947497640096344, lat: 51.90132430407462 })
      .addTo(map)
    map.addControl(new mapboxgl.NavigationControl())
  }

  useEffect(() => {
    initMap()
  })

  return (
    <>
      <div className="map">
        <ArrowDivider type="solid" />
        <h2 className="title">Location</h2>
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
      `}</style>
      <style jsx>{`
        .map {
          height: 450px;
          position: relative;
          overflow: hidden;
        }

        .title {
          position: absolute;
          top: 50px;
          transform: translateX(50vw);
          margin-left: -80px;
          pointer-events: none;
          width: 160px;
          z-index: 1;
        }

        .mapbox {
          width: 100%;
          height: 100%;
        }
      `}</style>
    </>
  )
}

export default map
