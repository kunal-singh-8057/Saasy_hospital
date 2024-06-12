import React from 'react'
import imgnew from './Assets3/new.png'
import img17 from './Assets3/img17.png'
import img9 from './Assets3/img9.png'
import './Header.css'
const Header = () => {
  return (
    <>
      <div className='Header.css'>
      <div className='top'>
      <img src={imgnew} className='headlogo'></img>
      </div>
      <ul>
        <li>
          <a href='#'>Home</a>
          <a href='#'> Doctor</a>
          <a href='#'>Apps</a>
          <a href='#'>Testimonials</a>
          <a href='#'>About US</a>
        </li>
      </ul>

      <div className='leftlogo'>
      <img src={img17}></img>
      </div>

      <div className='backlogo'>
      <img src={img9}></img>

      <div className='headings'>
      <h1 className='h1'>
      Virtual healthcare 
      for you
      </h1>

      <p className='p'>
      Trafalgar provides progressive, and affordable 
      healthcare, accessible on mobile and online 
      for everyone
      </p>
      </div>

      <button className='btn1'>Consult Today</button>
      </div>

    
      </div>
    </>
  )
}

export default Header
