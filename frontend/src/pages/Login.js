import React from 'react'
import './Login.css'
import GoogleIcon from '@mui/icons-material/Google';
// import CloudIcon from '@mui/icons-material/Cloud';
import people from './team-4423339.svg'

const Login = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
      <div >
        <img src={people} alt="" srcset="" className="people" style={{}}/>
      </div>
      <div className='form'>
        <h1>Tourify</h1>
        <form action="/login" method="post">
          <input type="text"
            name="email"
            placeholder="Email"
            required
          />
          <input type="password"
            name="password"
            placeholder="Password"
            required
          />
          {/* <Link to={}> */}
          <button type="submit" className='btn'>Login</button>
          {/* </Link> */}
          <h5
            style={{
              color: "grey",
              margin: "10px",
              backgroundColor: "transparent"
            }}>Or</h5>
          <div style={{
            color: "red",
            margin: "10px"
          }}
            className="google">
            <div style={{
              color: "white",
              backgroundColor: "transparent",
              width: "100%", textAlign: "center"
            }}>Login with Google</div>
            <GoogleIcon className='icon' /></div>
        </form>
        {/* <Link to={`/register`}> */}
        <div style={{
          backgroundColor: "transparent",
          margin: "10px",
          padding: "10px",
          color: "blue"
        }}>Register now</div>
        {/* </Link> */}
      </div>

    </div>
  )
}

export default Login