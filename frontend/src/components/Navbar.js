import React from 'react'
import "./styles/Navbar.css"
<link href="https://fonts.googleapis.com/css2?family=Archivo+Narrow:ital@1&family=Dancing+Script:wght@600&family=Lobster&display=swap" rel="stylesheet"></link>

const Navbar = () => {
  return (
    <div>
      <nav>

        <div className="navbar">
          <ul>
            <div className="first" style={{fontFamily: 'Lobster'}}>
              <li >Tourify </li>
            </div>
            <div className='sec'>
              <li><a href='#'>Home</a></li>
              <li><a href='#'>About Us</a></li>
              <li><a href='#'>Contact Us</a></li>
              <li><a href='#'>Profile</a></li>
              <li>
                <button>Log Out</button>
              </li>
            </div>

          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar