import React from 'react'
import './error404.css'
import Robot from './images/robot.png'

const error404 = ()  =>
{
  return (
    <div className='Not_Found_body '> 
      <div className='Not_Found'></div>
      <h1 className='Error_404'>404</h1>
      <img src={Robot} alt="" className='robot' />
      <h4 className='Opps'>OOPS !! Page Not Found </h4>
      <p className='Msg'> Sorry, the page you're looking for doesn't exist.</p>
      <a href="./" className='return'>Home Page</a>
    </div>
  )
}

export default  error404