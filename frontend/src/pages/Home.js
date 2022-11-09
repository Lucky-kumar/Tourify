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
      <div className='sidebar_container'>
        <Sidebar />
      </div>
      <div className='map_container'>
        <Mapbox />
      </div>

    </div>


  )
}

export default Home