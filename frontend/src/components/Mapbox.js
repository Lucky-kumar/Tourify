import Map, { FullscreenControl, GeolocateControl, NavigationControl, Source, Layer, Marker, Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import Geocoder from './Geocoder';
import RoomIcon from '@mui/icons-material/Room';
import { useState } from 'react';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import "../App.css"


const TOKEN = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;


const Mapbox = () => {
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    longitude: 78.182831,
    latitude: 26.218287,
    zoom: 10

  })
  return (
    <Map
      initialViewState={viewport}
      style={{ width: "100vw", height: "100vh" }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken={TOKEN}
      onViewportChange={nextViewport => setViewport(nextViewport)}
    >
      <Marker
        latitude={26.218287}
        longitude={78.182831}
        offsetLeft={-20}
        offsetTop={-10}
      >
        <RoomIcon style={{ fontSize: viewport.zoom * 5 }} />

      </Marker>
      <Popup longitude={78.182831} latitude={26.218287}
        anchor="bottom"
        closeButton={true}
        closeOnClick={false}
        style={{borderRadius:"10px"  }}
      >
        <div className="card" style={{backgroundColor:"lightblue", marginTop:"2px" }}>
          <label style={{color: "red" , fontSize:"18px", marginLeft:"0.4em"}}>Place</label>
          <h4 className="place" style={{color: "Black" , fontSize:"20px", marginLeft:"-8em", backgroundColor:"transparent"}}>Gwalior</h4>
          <label style={{color: "red" , fontSize:"18px", marginLeft:"0.4em"}}>Review</label>
          <p className="desc" style={{fontSize:"20px", marginLeft:"0.3em" ,color:"black" , fontWeight:"bold"}}>Good Place</p>
          <label style={{color: "red" , fontSize:"18px", marginLeft:"0.4em" }}>Rating</label>
          <Rating style={{fontWeight:"bold" , marginLeft:"0.5em" }}
            name="simple-controlled"
            value={4}
          />

          <span className="date" style={{marginLeft:"0.5em"}}>created 2 mins ago</span>
        </div>
      </Popup>
      <Geocoder />
      <FullscreenControl style={{ marginRight: 40 }} position="bottom-right" />
      <GeolocateControl style={{ marginLeft: 40 }} position="top-left" />
      <NavigationControl style={{ marginLeft: 40 }} position="top-left" />
    </Map>)
}

export default Mapbox