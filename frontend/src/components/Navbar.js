import React, { useContext } from 'react'
import "./styles/Navbar.css"
import { AuthContext } from './../context/AuthContext';
import { useNavigate,Link } from 'react-router-dom';

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
              <li><Link to={`/home`}>Home</Link></li>
              <li><Link to={`/profile`}>Profile</Link></li>
              <li>
                <button className="navbar_button" onClick={handleLogout}>Log Out</button>
              </li>
            </div>

          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar