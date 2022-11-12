import React, { useEffect, useState } from 'react'
// import Mapbox from './../components/Mapbox';
import Mapbox from './../components/Mapbox';
import Navbar from './../components/Navbar'
import Sidebar from '../components/Sidebar';
import { Grid } from '@mui/material';
import { flexbox } from '@mui/system';
import { getPlacesData } from '../api';

const Home = () => {

  const [places, setPlaces] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [type, setType] = useState("restaurants")
  const [rating, setRating] = useState("")


  const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });
  // const [bounds, setBounds] = useState(null);

  useEffect(() => {

    setIsLoading(true);

    getPlacesData(type, coordinates.lat, coordinates.lng)
      .then((data) => {
        console.log(data);
        setPlaces(data);
        setIsLoading(false);
      })

  }, [coordinates, type]);



  return (
    <div>
      {/* <Navbar/> */}
      <Grid container spacing={1} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}>

          <div className='sidebar_container'>
            <Sidebar
              places={places}
              isLoading={isLoading}
              type={type}
              setType={setType}
              rating={rating}
              setRating={setRating}
            />
          </div>
        </Grid>
        <Grid item xs={12} md={8}>

          <div className='map_container'>
            <Mapbox
              setCoordinates={setCoordinates}
              coordinates={coordinates}
              places={places}
            />
          </div>
        </Grid>

      </Grid>

    </div>


  )
}

export default Home