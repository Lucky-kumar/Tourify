import { Button, InputLabel } from '@mui/material'
import { borderBottom } from '@mui/system'
import React, { useContext } from 'react'

import "./Profile.css"
import {useNavigate} from "react-router-dom"
import { AuthContext } from './../context/AuthContext';
const Profile = () => {

  const navigate = useNavigate();

  const { loading, error, dispatch } = useContext(AuthContext);

  if (loading) return "Loading...";

  if (error) console.log(error);

  const handleLogout = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGOUT" });
    try {
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className='profile_body'>
      <div className='user_profile'>

        <div className='content'>
          <div className='info'>
            <InputLabel className='profile_labels'>Name</InputLabel>
            <div className=''></div>
          </div>

          <div className='info'>
            <InputLabel className='profile_labels'>Address</InputLabel>
            <div></div>
          </div>

          <div className='info'>
            <InputLabel className='profile_labels'>Contact Number</InputLabel>
            <div></div>
          </div>

          <div className='info'>
            <InputLabel className='profile_labels'>Email Id</InputLabel>
            <div></div>
          </div>

          <div className='info'>
            <InputLabel className='profile_labels'>Location</InputLabel>
            <div></div>
          </div>

          <div className='info'>
            <InputLabel className='profile_labels'>Address</InputLabel>
            <div></div>
          </div>
          <hr style={{ width: "90%", borderTop: "2px solid gray", borderBottom: "0px" }} />
          <div className='info'>
            <InputLabel className='profile_labels'>Pins</InputLabel>
            <div></div>
          </div>
          <div>
            <Button className='LogOut' styles={{ marginTop: "20px", marginBottom: "20px" }} onClick={handleLogout}>Log Out</Button></div>
        </div>
      </div>
    </div>
  )
}

export default Profile