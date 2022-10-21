import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css"
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import { useControl } from 'react-map-gl';


const Geocoder = () => {

    const ctrl = new MapboxGeocoder({
        accessToken: process.env.REACT_APP_MAPBOX_ACCESS_TOKEN,
    })

    useControl(() => ctrl);

    return null;
}

export default Geocoder