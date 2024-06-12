import React from 'react'
import img21 from './Assets3/img13.png'
import img22 from './Assets3/fotlogo.png'
import './Footer.css'

const Footer = () => {
  return (
   <>
   <div className='back4'>
   <img src={img21} className='doot'></img>
   <img src={img22} className='footlogo'></img>
   <p className='fotpara'>
   Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online 
   for everyone
   </p>

  <div className='navm1'>
<ul>
<h1>Company</h1>
    <li>
        <a href='#'>About</a>
        <br></br>
        <a href='#'>Testimonial</a>
        <br></br>
        <a href='#'>Find Doctor</a>
        <br></br>
        <a href='#'>Apps</a>
    </li>
</ul>
  </div>

<ul className='region'>
  <h1 className='regionhead'>Region</h1>
    <li className='regionlist'>
        <a href='#'>Idonasia</a>
        <br></br>
        <a href='#'>Singapur</a>
        <br></br>
        <a href='#'>Hong kong</a>
        <br></br>
        <a href='#'>Canada</a>
    </li>
</ul>

<ul className='Help'>
  <h1 className='helphead'>Help</h1>
    <li className='helplist'>
        <a href='#'>Help Center</a>
        <br></br>
        <a href='#'>Contact Support</a>
        <br></br>
        <a href='#'>Instruction</a>
        <br></br>
        <a href='#'>How it works</a>
    </li>
</ul>

   </div>
   </>
  )
}

export default Footer
