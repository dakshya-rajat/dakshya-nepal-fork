import React, { useRef, useEffect, useState } from "react"
import mapboxgl from "mapbox-gl"

mapboxgl.accessToken =
  "pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA"

const MapBox = () => {
  const mapContainerRef = useRef(null)

  const [lng, setLng] = useState(85.3435)
  const [lat, setLat] = useState(27.658)
  const [zoom, setZoom] = useState(11)

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/dark-v10",
      center: [lng, lat],
      zoom: zoom,
    })

    map.on("load", function () {
      /* Image: An image is loaded and added to the map. */
      map.loadImage("https://i.imgur.com/OKbJCxG.png", function (error, image) {
        if (error) throw error
        map.addImage("custom-marker", image)
        /* Style layer: A style layer ties together the source and image and specifies how they are displayed on the map. */
        map.addLayer({
          id: "markers",
          type: "symbol",
          /* Source: A data source specifies the geographic coordinate where the image marker gets placed. */
          source: {
            type: "geojson",
            data: {
              type: "FeatureCollection",
              features: [
                {
                  type: "Feature",
                  properties: {},
                  geometry: {
                    type: "Point",
                    coordinates: [85.342624, 27.673546],
                  },
                },
              ],
            },
          },
          layout: {
            "icon-image": "custom-marker",
          },
        })
      })
    })

    map.on(
      "move",
      () => {
        setLng(map.getCenter().lng.toFixed(4))
        setLat(map.getCenter().lat.toFixed(4))
        setZoom(map.getZoom().toFixed(2))
      },
      [lng, lat, zoom]
    )

    return () => map.remove()
  })

  return (
    <div>
      <div className="map-container" ref={mapContainerRef} />
    </div>
  )
}

export default MapBox
