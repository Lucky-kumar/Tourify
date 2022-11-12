import { useControl } from 'react-map-gl'
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions"
import "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css"

const Directions = () => {
  const ctrl = new MapboxDirections({
    accessToken: process.env.REACT_APP_MAPBOX_ACCESS_TOKEN,
  })

  useControl(() => ctrl)
  return null;
}

export default Directions