import { Button, InputLabel } from '@mui/material'
import React from 'react'
import "./Profile.css"

const Profile = () => {
  return (
    <div className='profile_body'>
      <div className='user_profile'>
        <ul >
          <div className='profile_Data'>
            <li> Name</li>
          </div>
          <div className='content'>
          
          {/* <li>Address</li>
          <li>Contact Number </li>
          <li>Location</li>
          <li>Permium Staus </li>
          <li>
            <button>Log Out</button>
            </li> */}

          <InputLabel className='info'>Address</InputLabel>
          <InputLabel className='info'>Contact Number</InputLabel>
          <InputLabel className='info'>Email Id</InputLabel>
          <InputLabel className='info'>Location</InputLabel>
          <InputLabel className='info'>Address</InputLabel>

          <Button className='LogOut'>Log Out</Button>
          </div>

        </ul>

      </div>
    </div>
  )
}

export default Profile