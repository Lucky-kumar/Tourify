import React, { useContext } from 'react'
import "./styles/Navbar.css"
import { AuthContext } from './../context/AuthContext';
import { useNavigate } from 'react-router-dom';
<link href="https://fonts.googleapis.com/css2?family=Archivo+Narrow:ital@1&family=Dancing+Script:wght@600&family=Lobster&display=swap" rel="stylesheet"></link>

const Navbar = () => {

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
    <div>
      <nav>

        <div className="navbar">
          <ul>
            <div className="first" style={{ fontFamily: 'Lobster' }}>
              <li >Tourify </li>
            </div>
            <div className='sec'>
              <li><a href='#'>Home</a></li>
              <li><a href='#'>Profile</a></li>
              <li>
                <button onClick={handleLogout}>Log Out</button>
              </li>
            </div>

          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar