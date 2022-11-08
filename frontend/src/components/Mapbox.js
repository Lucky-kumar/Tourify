import Map, { FullscreenControl, GeolocateControl, NavigationControl, Source, Layer, Marker, Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import Geocoder from './Geocoder';
import RoomIcon from '@mui/icons-material/Room';
import { useEffect, useState } from 'react';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import "../App.css"
import axios from 'axios'
import { format } from "timeago.js"


const TOKEN = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;


const Mapbox = () => {
  const [pins, setPins] = useState([]);
  const [currentPlaceId, setCurrentPlaceId] = useState(null)
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    longitude: 78.169894,
    latitude: 26.249354,
    zoom: 14

  })


  useEffect(() => {
    const getPins = async () => {
      try {
        const res = await axios.get("/pins");
        setPins(res.data);
        console.log(res.data)

      } catch (err) {
        console.log(err);
      }
    };
    getPins()
  }, [])

  const handleMarkerClick = (id) => {
    setCurrentPlaceId(id)
  };


  return (
    <Map
      initialViewState={viewport}
      style={{ width: "100vw", height: "100vh" }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken={TOKEN}
      onViewportChange={nextViewport => setViewport(nextViewport)}
    >
      {pins.map(p => (
        <>

          <Marker
            latitude={p.lat}
            longitude={p.lng}
            offsetLeft={-20}
            offsetTop={-10}
            style={{ borderRadius: "8px" }}
          >
            <RoomIcon style={{ fontSize: viewport.zoom * 5, cursor: "pointer" }}
              onClick={() => handleMarkerClick(p._id)}
            />

          </Marker>
          {p._id === currentPlaceId &&
            <Popup longitude={p.lng} latitude={p.lat}
              anchor="bottom"
              closeButton={true}
              closeOnClick={false}
              onClose={() => setCurrentPlaceId(null)}
            >
              <div className="card" style={{ marginTop: "2px" }}>
                <label style={{ color: "red", fontSize: "18px", marginLeft: "0.4em" }} >Place</label>
                <h4 className="place" style={{ color: "Black", fontSize: "20px", backgroundColor: "transparent" }} >{p.title}</h4>
                <label style={{ color: "red", fontSize: "18px", marginLeft: "0.4em" }} >Review</label>
                <p className="desc" style={{ fontSize: "20px", marginLeft: "0.3em", color: "black", fontWeight: "bold" }} >{p.desc}</p>
                <label style={{ color: "red", fontSize: "18px", marginLeft: "0.5em" }}>Rating</label>
                <Rating
                  name="simple-controlled"
                  value={p.rating}
                  style={{ fontWeight: "bold", marginLeft: "0.5em" }}
                />

                <span className="date" style={{ marginLeft: "0.5em" }} >{format(p.createdAt)}</span>
              </div>
            </Popup>
          }
        </>
      ))}
      <Geocoder />
      <FullscreenControl style={{ marginRight: 40 }} position="bottom-right" />
      <GeolocateControl style={{ marginLeft: 40 }} position="top-left" />
      <NavigationControl style={{ marginLeft: 40 }} position="top-left" />
    </Map>)
}

export default Mapbox