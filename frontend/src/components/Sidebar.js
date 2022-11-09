import React, { useState } from 'react'
import "./styles/Sidebar.css"
import  Typography  from '@mui/material/Typography';
import { CircularProgress, FormControl, InputLabel, MenuItem, Select, Grid } from '@mui/material';
import PlaceCards from './PlaceCards';

const Sidebar = () => {
  const [type,setType] = useState("restaurants")
  const [rating,setRating] = useState("")

  const places = [
    { name : "Agra"},
    { name : "Mathura"},
    { name : "Gwalior"},
    { name : "Delhi"},  
    { name : "Delhi"},  
    { name : "Delhi"},  
    { name : "Delhi"},  
    { name : "Delhi"},  
    { name : "Delhi"},  
    { name : "Delhi"},  
    { name : "Delhi"},  
    { name : "Delhi"},  
    { name : "Delhi"},  
    { name : "Delhi"},  
    { name : "Delhi"},  
    { name : "Delhi"},  
    { name : "Delhi"},  

  ];

  return (
    <div>
      <div className="sidebar">
        <div className="sidebar_container">
          <Typography variant='h4'>Restaurants, Hotels & Attractions around you</Typography>
          <FormControl className="sidebar_formcontrol">
            <InputLabel>Type</InputLabel>
            <Select value={type} onChange={(e) => setType(e.target.value)}>
              <MenuItem value="restaurants">Restaurants</MenuItem>
              <MenuItem value="hotels">Hotels</MenuItem>
              <MenuItem value="attractions">Attractions</MenuItem>
            </Select>
          </FormControl>

          <FormControl className="sidebar_formcontrol">
            <InputLabel>Rating</InputLabel>
            <Select value={rating} onChange={(e) => setRating(e.target.value)}>
              <MenuItem value={0}>All</MenuItem>
              <MenuItem value={3}>Above 3.0</MenuItem>
              <MenuItem value={4}>Above 4.0</MenuItem>
              <MenuItem value={4.5}>Above 4.5</MenuItem>
            </Select>
          </FormControl>

          <Grid container spacing={3} className="sidebar_list">
            {
              places?.map((place, i) => (
                <Grid item key={i} xs={12}>
                  <PlaceCards
                    place={place}
                
                  />
                </Grid>
              ))
            }
          </Grid>
        </div>
      </div>
    </div >
  )
}

export default Sidebar