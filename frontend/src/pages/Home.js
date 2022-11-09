import React from 'react'
// import Mapbox from './../components/Mapbox';
import Mapbox from './../components/Mapbox';
import Navbar from './../components/Navbar'
import Sidebar from '../components/Sidebar';

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Mapbox/>
      <Sidebar/>
    </div>


  )
}

export default Home