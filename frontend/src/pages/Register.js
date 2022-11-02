import React from 'react'
import "./Register.css"
import GoogleIcon from '@mui/icons-material/Google';
// import { building } from './images/building-2817474.svg'
// import {airlpane} from "./images/airlpane"

const Register = () => {
  return (
    <div className="page">
      <div id="registration_container">
       
        <form action="" >
        <h1>Tourify</h1>
          <div className="form-body" id="form-body">
            <input id="name" placeholder='Name' type="text" required />
            <span></span>
            <input id="email" placeholder='Email' type="email" required />
            <span></span>
            <input id="password" placeholder='password' type="password" required />
            <span></span>
            <input id="confirmpassword" placeholder='Re-password' type="passowrd" required />
            <span></span>
            <input id="contact_number" placeholder='Contact Number' type="number" required />
            <span></span>
            <input id="address" placeholder='Address' type="text" required />
            <span></span>
            <button className='btn'>
              Register</button>
            {/* <Link to={}> */}

            {/* </Link> */}

            <h4>Or</h4>

            <div style={{ color: "red", margin: "10px" }}
              className="google">
              <div className='title-google' >Login with Google</div>
              <GoogleIcon></GoogleIcon>

            </div>
          </div>
        </form>

        {/* <Link to={'/Login.js'}> */}
        <div className='change'>Login Now</div>
        {/* </Link> */}
      </div>
    </div>
  )
}

export default Register