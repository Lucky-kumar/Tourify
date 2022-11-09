import React from 'react'
// import Mapbox from './../components/Mapbox';
import Mapbox from './../components/Mapbox';
import Navbar from './../components/Navbar'
import Sidebar from '../components/Sidebar';
import { Grid } from '@mui/material';
import { flexbox } from '@mui/system';

const Home = () => {
  return (
    <div>
      {/* <Navbar/> */}
          <Sidebar />
          <Mapbox />

    </div>


  )
}

export default Home