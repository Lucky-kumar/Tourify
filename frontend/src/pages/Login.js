import React from 'react'
import './Login.css'
import GoogleIcon from '@mui/icons-material/Google';

const Login = () => {
  return (
    <div className='form'>
      <h1>Login</h1>
      <input type="text"
      placeholder="Email"
      onFocus={()=>{
        
      }}
      />
      <input type="password"
      placeholder="Password"
      />
      {/* <Link to={}> */}
        <button className='btn'>Login</button>
        {/* </Link> */}
        <h3 style={{color:"grey"}}>Or</h3>
        <div style={{color:"red"}}><GoogleIcon/></div>
      </div>
  )
}

export default Login