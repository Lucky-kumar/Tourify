import React, { useState } from 'react'
import "./Register.css"
import GoogleIcon from '@mui/icons-material/Google';
import cloud from "../pages/images/cloud-303182.svg";
import image1 from "../pages/images/computer-6242945.svg"
import aeroplane from "../pages/images/airplane.png"
import people from "../pages/images/peoplee.webp"
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
const Register = () => {

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    contactNumber: "",
    address: ""
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newUser = {
      name: values.name,
      email: values.email,
      password: values.password,
      address: values.address,
      contact_number: values.contactNumber,
    }

    console.log(newUser)


    try {
      await axios.post("http://localhost:8000/api/users/register", newUser);
      navigate("/login")
    }
    catch (err) {
      console.log(err);
    }

  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };



  return (
    <div className='register_body'>
      <div className="page">
        <div className="images" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
          <img src={cloud} alt="" className="cloud image" style={{ left: "600px", top: "20px" }} />
          <img src={cloud} alt="" className="cloud image" style={{ left: "400px", top: "-50px" }} />
          <img src={cloud} alt="" className="cloud image" style={{ left: "950px" }} />
          <img src={cloud} alt="" className="cloud image" style={{ left: "1350px", width: "100px" }} />
          <img src={cloud} alt="" className="cloud image" style={{ left: "300px", width: "100px", top: "150px" }} />
          <img src={cloud} alt="" className="cloud image" style={{ top: "-18px", width: "200px" }} />
          <img src={people} alt="" className="people image" style={{}} />
          <img src={image1} alt="" className="image_1 image" style={{ left: "500px" }} />
          <img src={aeroplane} alt="" className="plane image" style={{ left: "50px" }} />
        </div>

        <div id="registration_container">

          <form action="" >
            <h1>Tourify</h1>
            <div className="form-body" id="form-body">
              <input name='name' className='inputBox' id="name" placeholder='Name' type="text" required onChange={onChange}
              />
              <span></span>
              <input name='email' className='inputBox' id="email" placeholder='Email' type="email" required onChange={onChange}
              />
              <span></span>
              <input name='password' className='inputBox' id="password" placeholder='Password' type="password" required onChange={onChange}
              />
              <span></span>
              <input name='confirmPassword' className='inputBox' id="confirmpassword" placeholder='Re-password' type="password" required onChange={onChange}
              />
              <span></span>
              <input name='contactNumber' className='inputBox' id="contact_number" placeholder='Contact Number' type="number" onChange={onChange}
                required />
              <span></span>
              <input name='address' className='inputBox' id="address" placeholder='Address' type="text" onChange={onChange}
                required />
              <span></span>
              <button className='bttn'
                onClick={handleSubmit}
              >
                Register</button>
              {/* <Link to={}> */}

              {/* </Link> */}

              <h4 className='google_option'>Or</h4>

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


          <Link to={'/Login'}>
            <div style={{ color: "blue", marginTop: "7px"}}><button className='switch_login'>Login Now</button></div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Register