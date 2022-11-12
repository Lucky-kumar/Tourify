import { Button, InputLabel } from '@mui/material'
import { borderBottom } from '@mui/system'
import React from 'react'
import "./Profile.css"

const Profile = () => {
  return (
    <div className='profile_body'>
      <div className='user_profile'>
        
          <div className='content'>
          <div className='info'>
          <InputLabel className='profile_labels'>Name</InputLabel>
          </div>
          
          <div className='info'>
          <InputLabel className='profile_labels'>Address</InputLabel>
          </div>
          
          <div className='info'>
          <InputLabel className='profile_labels'>Contact Number</InputLabel>
          </div>
          
          <div className='info'>
          <InputLabel className='profile_labels'>Email Id</InputLabel>
          </div>
          
          <div className='info'>
          <InputLabel className='profile_labels'>Location</InputLabel>
          </div>
          
          <div className='info'>
          <InputLabel className='profile_labels'>Address</InputLabel>
          </div>
          <hr style={{width:"90%", borderTop:"2px solid gray",borderBottom:"0px"}}/>
          <div className='info'>
          <InputLabel className='profile_labels'>Pins</InputLabel>
          </div>
          <Button className='LogOut'>Log Out</Button>
          </div>

        

      </div>
    </div>
  )
}

export default Profile