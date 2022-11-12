import { Button, InputLabel } from '@mui/material'
import React, { useContext } from 'react'
import Navbar from './../components/Navbar'
import "./Profile.css"
import { useNavigate } from "react-router-dom"
import { AuthContext } from './../context/AuthContext';
import useFetch from '../hooks/UseFetch'


const Profile = () => {
  const navigate = useNavigate();


const { user, dispatch } = useContext(AuthContext)


  const { data, loading, error } = useFetch(`http://localhost:8000/api/users/${user}`)

  if (loading) {
    return "Loading..."
  }

  if (error) {
    console.log(error);
  }
  // const {} = useContext(AuthContext);
  const handleLogout = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGOUT" });
    try {
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  }

  return (<>

    <Navbar />
    <div className='profile_body'>
      <div className='user_profile'>

        <div className='content'>
          <div className='info'>
            <InputLabel className='profile_labels'>Name</InputLabel>
            <div className='profile_data'>{data.name}</div>
          </div>

          <div className='info'>
            <InputLabel className='profile_labels'>Contact Number</InputLabel>
            <div className='profile_data'>{data.contact_number}</div>
          </div>

          <div className='info'>
            <InputLabel className='profile_labels'>Email Id</InputLabel>
            <div className='profile_data'>{data.email}</div>
          </div>

          {/* <div className='info'>
            <InputLabel className='profile_labels'>Location</InputLabel>
            <div></div>
          </div> */}

          <div className='info'>
            <InputLabel className='profile_labels'>Address</InputLabel>
            <div className='profile_data'>{data.address}</div>
          </div>

          {/* <div className='info'>
            <InputLabel className='profile_labels'>Premium Status</InputLabel>
            <div>{data.premium_status}</div>
          </div> */}

          <hr style={{ width: "90%", borderTop: "2px solid gray", borderBottom: "0px" }} />

          <div className='info'>
            <InputLabel className='profile_labels'>Pins</InputLabel>
            <div className='profile_data'></div>
          </div>
        <div> */}

          <Button className='LogOut' styles={{ marginTop: "20px", marginBottom: "20px" }} onClick={handleLogout}>Log Out</Button></div>
      </div>
    </div>
  </>
  )
}

export default Profile