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
import "./styles/Mapbox.css"
import { color } from '@mui/system';


const TOKEN = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;


const Mapbox = ({setCoordinates, coordinates}) => {
  const email = "test@se.com"
  const [pins, setPins] = useState([]);
  const [currentPlaceId, setCurrentPlaceId] = useState(null)
  const [newPlace, setNewPlace] = useState(null)
  const [title, setTitle] = useState(null);
  const [desc, setDesc] = useState(null);
  const [star, setStar] = useState(0);
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

      } catch (err) {
        console.log(err);
      }
    };
    getPins()
  }, [])

  const handleMarkerClick = (id) => {
    setCurrentPlaceId(id)
  };

  const handleRightClick = (e) => {
    console.log(e)
    const lng = e.lngLat.lng;
    const lat = e.lngLat.lat;
    setNewPlace({
      lat,
      lng,
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPin = {
      email,
      title,
      desc,
      rating: star,
      lat: newPlace.lat,
      lng: newPlace.lng,
    };

    try {
      const res = await axios.post("/pins", newPin);
      setPins([...pins, res.data]);
      setNewPlace(null);
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <Map
      initialViewState={viewport}
      style={{ width: "70w", height: "100vh" }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken={TOKEN}
      onViewportChange={nextViewport => setViewport(nextViewport)}
      onContextMenu={handleRightClick}
      onMove={(e) => {
        console.log(e.viewState.latitude);
        setCoordinates({lat: e.viewState.latitude, lng: e.viewState.longitude})
      }}
    >
      {pins.map(p => (
        <>

          <Marker
            latitude={p.lat}
            longitude={p.lng}
            offsetLeft={-viewport.zoom * 2.5}
            offsetTop={-viewport.zoom * 5}
            style={{ borderRadius: "8px" }}
          >
            <RoomIcon style={{ fontSize: viewport.zoom * 5, cursor: "pointer" }}
              onClick={() => handleMarkerClick(p._id)}
            />

          </Marker>
          {p._id === currentPlaceId &&
            <Popup  className ="PopCard"longitude={p.lng} latitude={p.lat}
              anchor="bottom"
              closeButton={true}
              closeOnClick={false}
              onClose={() => setCurrentPlaceId(null)}
            >
              <div className="card" style={{backgroundColor :"transparent",width:"150px" }}>
                <label style={{ color: "tomato", fontWeight:"bold",fontSize:"16px" , borderBottom:"none"}} >Place</label>
                <p className="place" style={{ color: "grey",fontSize:"15px",fontWeight:"bold"}} >{p.title}</p>
                <label style={{ color: "tomato",fontWeight:"bold",fontSize:"16px",borderBottom:"none"}} >Review</label>
                <p className="desc" style={{color: "black",fontSize:"15px"}} >{p.desc}</p>
                <label style={{ color: "tomato",fontWeight:"bold",fontSize:"16px",borderBottom:"none"}}>Rating</label>
                <Rating
                  name="read-only"
                  value={p.rating}
                  style={{ fontWeight: "bold", marginLeft: "0.5em" }}
                  readOnly
                />

                <span className="date" style={{textAlign:"center", color:"grey"}} >{format(p.createdAt)}</span>
              </div>
            </Popup>
          }
        </>
      ))}

      {newPlace && (
        <Popup
          longitude={newPlace.lng}
          latitude={newPlace.lat}
          anchor="bottom"
          closeButton={true}
          closeOnClick={false}
          onClose={() => setNewPlace(null)}
        >
          <div>
            <form className='pin_form' onSubmit={handleSubmit}>
              <label style ={{borderBottom:"none"}}>Title</label>
              <input
                placeholder="Enter a title"
                autoFocus
                onChange={(e) => setTitle(e.target.value)}
              />
              <label style ={{borderBottom:"none"}}>Description</label>
              <textarea
                placeholder="Say us something about this place."
                onChange={(e) => setDesc(e.target.value)}
              />
              <label style ={{borderBottom:"none"}}>Rating</label>
              <select onChange={(e) => setStar(e.target.value)}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              <button type="submit" className="submitButton">
                Add Pin
              </button>
            </form>
          </div>
        </Popup>
      )}
      <Geocoder />
      <FullscreenControl style={{ marginRight: 40 }} position="bottom-right" />
      <GeolocateControl style={{ marginLeft: 40 }} position="top-left" />
      <NavigationControl style={{ marginLeft: 40 }} position="top-left" />
    </Map>)
}

export default Mapbox