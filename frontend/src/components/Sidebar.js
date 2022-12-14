import React, { useState } from 'react'
import "./styles/Sidebar.css"
import Typography from '@mui/material/Typography';
import { CircularProgress, FormControl, InputLabel, MenuItem, Select, Grid } from '@mui/material';
import PlaceCards from './PlaceCards';
<link href="https://fonts.googleapis.com/css2?family=Archivo+Narrow:ital@1&family=Dancing+Script:wght@600&family=Lobster&display=swap" rel="stylesheet"></link>

const Sidebar = ({ places, isLoading ,type, setType, rating, setRating}) => {


  return (
    <div>
      <div className="sidebar">
        <div className="sidebar_container">
          <Typography variant='h4' className='title' style={{ fontFamily: 'Lobster' }} >Restaurants, Hotels & Attractions around you</Typography>

            {isLoading ? (
              <div className="loading">
                <CircularProgress size="5rem" />
              </div>
            ) : (<>

                <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-evenly", alignItems: "center" }}>

              <FormControl className="sidebar_formcontrol" >
                <InputLabel className='heading' style={{ marginTop: "10px", textAlign: "center", color: "white", borderBottom:"none" }}>Type</InputLabel>
                <Select value={type} onChange={(e) => setType(e.target.value)} style={{ padding: "5px 20px", color: "white", backgroundColor:"rgba(246, 240, 240, 0.24)" }} className="sidebar_select">
                  <MenuItem className="menuvaule" value="restaurants">Restaurants</MenuItem>
                  <MenuItem className="menuvaule" value="hotels">Hotels</MenuItem>
                  <MenuItem className="menuvaule" value="attractions">Attractions</MenuItem>
                </Select>
              </FormControl>

              <FormControl className="sidebar_formcontrol">
                <InputLabel className='heading' style={{ margin: "10px auto", color: "white",borderBottom:"none" }}>Rating</InputLabel>
                <Select value={rating} onChange={(e) => setRating(e.target.value)} style={{ padding: "5px 20px", color: "white", backgroundColor:"rgba(246, 240, 240, 0.24)"}} className="sidebar_select">
                  <MenuItem className="menuvaule" value={0}>All</MenuItem>
                  <MenuItem className="menuvaule" value={3}>Above 3.0</MenuItem>
                  <MenuItem className="menuvaule" value={4}>Above 4.0</MenuItem>
                  <MenuItem className="menuvaule" value={4.5}>Above 4.5</MenuItem>
                </Select>
              </FormControl>
              
              <div style={{marginTop:"20px"}}>
              <Grid container spacing={0} className="sidebar_list">
                {
                  places?.map((place, i) => (
                    <Grid item key={i} xs={12} style={{marginBottom:"20px"}}>
                      <PlaceCards
                        place={place}

                      />
                    </Grid>
                  ))
                }
              </Grid>
              </div>
              </div>
            </>)}

        </div>
      </div>
    </div >
  )
}

export default Sidebar