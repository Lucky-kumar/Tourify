import React from 'react'
import './Login.css'
import GoogleIcon from '@mui/icons-material/Google';
import CloudIcon from '@mui/icons-material/Cloud';

const Login = () => {
  return (
    <div >
    <div className='form'>
      <h1>Login</h1>
      <input type="text"
      placeholder="Email"
      required
      />
      <input type="password"
      placeholder="Password"
      required
      />
      {/* <Link to={}> */}
        <button className='btn'>Login</button>
        {/* </Link> */}
        <h5 style={{color:"grey"}}>Or</h5>
        <div style={{color:"red"} } className="google"><GoogleIcon/></div>
      </div>
      </div>
  )
}

export default Login