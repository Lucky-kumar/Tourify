import React from 'react'
import './Login.css'
import GoogleIcon from '@mui/icons-material/Google';
// import CloudIcon from '@mui/icons-material/Cloud';
import people from './images/team-4423339.svg'
import image1 from './images/computer-6242945.svg'
import plane from './images/airplane-2434022.png' 
import cloud from './images/cloud-303182.svg'

const Login = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
      <img src={cloud} alt="" srcset="" className="cloud image" style={{left:"500px", top:"20px"}}/>
      <img src={cloud} alt="" srcset="" className="cloud image" style={{left:"350px", top:"-50px"}}/>
      <img src={cloud} alt="" srcset="" className="cloud image" style={{left:"950px"}}/>
      <img src={cloud} alt="" srcset="" className="cloud image" style={{left:"1350px", width:"100px"}}/>
      <img src={cloud} alt="" srcset="" className="cloud image" style={{left:"250px", width:"100px",top:"150px"}}/>
      <img src={cloud} alt="" srcset="" className="cloud image" style={{left:"100px", top:"10px" ,width:"200px"}}/>
        <img src={people} alt="" srcset="" className="people image" style={{}}/>
        <img src={image1} alt="" srcset="" className="image_1 image" style={{}}/>
        <img src={plane} alt="" srcset="" className="plane image" style={{}}/>
      <div >
      
        {/* <img src={image2} alt="" srcset="" className="image_2" style={{}}/> */}
      </div>
      <div className='form'>
      {/* <img src={plane} alt="" srcset="" className="plane" style={{}}/> */}
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
            <GoogleIcon className='icon' />
            </div>
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