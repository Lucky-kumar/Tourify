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
      <Navbar/>
      <Grid container spacing={1} style={{ width: '100%' }}>
      <Grid item xs={12} md={4}>

        <div className='sidebar_container'>
          <Sidebar />
        </div>
        </Grid>
        <Grid item xs={12} md={8}>

        <div className='map_container'>
          <Mapbox />
        </div>
        </Grid>

      </Grid>

    </div>


  )
}

export default Home