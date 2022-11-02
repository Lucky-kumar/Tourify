import React from 'react'
import "./Register.css"
import GoogleIcon from '@mui/icons-material/Google';
import people from './images/team-4423339.svg'
import image1 from './images/computer-6242945.svg'
import plane from './images/airplane-2434022.png' 
import cloud from './images/cloud-303182.svg'
import building from './images/building-2817474.svg'
import car from './images/car-35502.svg'

const Register = () => {
  return (
    <div className="page">
      <div className="images" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
      <img src={cloud} alt="" srcset="" className="cloud image" style={{left:"500px", top:"20px"}}/>
      <img src={cloud} alt="" srcset="" className="cloud image" style={{left:"350px", top:"-50px"}}/>
      <img src={cloud} alt="" srcset="" className="cloud image" style={{left:"950px"}}/>
      <img src={cloud} alt="" srcset="" className="cloud image" style={{left:"1350px", width:"100px"}}/>
      <img src={cloud} alt="" srcset="" className="cloud image" style={{left:"250px", width:"100px",top:"150px"}}/>
      <img src={cloud} alt="" srcset="" className="cloud image" style={{left:"100px", top:"10px" ,width:"200px"}}/>
        <img src={people} alt="" srcset="" className="people image" style={{width:"400px"}}/>
        <img src={image1} alt="" srcset="" className="image_1 image" style={{left:"500px"}}/>
        <img src={plane} alt="" srcset="" className="plane image" style={{left: "50px"}}/>
        </div>
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
              {/* <GoogleIcon></GoogleIcon> */}

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