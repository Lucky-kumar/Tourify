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

          <InputLabel>Address</InputLabel>
          <InputLabel>Contact Number</InputLabel>
          <InputLabel>Email Id</InputLabel>
          <InputLabel>Location</InputLabel>
          <InputLabel>Address</InputLabel>

          <Button className='LogOut'>Log Out</Button>
          </div>

        </ul>

      </div>
    </div>
  )
}

export default Profile