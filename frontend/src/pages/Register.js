import React from 'react'
import "./Register.css"
import GoogleIcon from '@mui/icons-material/Google';
import cloud from "../pages/images/cloud-303182.svg";
import image1 from "../pages/images/computer-6242945.svg"
import aeroplane from "../pages/images/airplane.png"
import people from "../pages/images/peoplee.webp"

const Register = () => {
  return (
    <div className="page">
      <div className="images" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
      <img src={cloud} alt="" className="cloud image" style={{left:"600px", top:"20px"}}/>
      <img src={cloud} alt=""  className="cloud image" style={{left:"400px", top:"-50px"}}/>
      <img src={cloud} alt=""  className="cloud image" style={{left:"950px"}}/>
      <img src={cloud} alt=""  className="cloud image" style={{left:"1350px", width:"100px"}}/>
      <img src={cloud} alt=""  className="cloud image" style={{left:"300px", width:"100px",top:"150px"}}/>
      <img src={cloud} alt="" className="cloud image" style={{ top:"-18px" ,width:"200px"}}/>
        <img src={people} alt=""  className="people image" style={{}}/>
        <img src={image1} alt=""  className="image_1 image" style={{left:"500px"}}/>
        <img src={aeroplane} alt=""  className="plane image" style={{left: "50px"}}/>
        </div>

      <div id="registration_container">
       
        <form action="" >
        <h1>Tourify</h1>
          <div className="form-body" id="form-body">
            <input className='inputBox' id="name" placeholder='Name' type="text" required />
            <span></span>
            <input className='inputBox' id="email" placeholder='Email' type="email" required />
            <span></span>
            <input className='inputBox' id="password" placeholder='password' type="password" required />
            <span></span>
            <input className='inputBox' id="confirmpassword" placeholder='Re-password' type="passowrd" required />
            <span></span>
            <input className='inputBox' id="contact_number" placeholder='Contact Number' type="text" required />
            <span></span>
            <input className='inputBox' id="address" placeholder='Address' type="text" required />
            <span></span>
            <button className='bttn'>
              Register</button>
            {/* <Link to={}> */}

            {/* </Link> */}

            <h4>Or</h4>

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
            
          </div>
        </form>

        {/* <Link to={'/Login.js'}> */}
        <div style={{color:"blue", marginTop:"7px"}}>Login Now</div>
        {/* </Link> */}
      </div>
    </div>
  )
}

export default Register