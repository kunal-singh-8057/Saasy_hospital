import React from 'react'
import img9 from './Assets3/img9.png'
import img10 from './Assets3/img10.png'
import './More.css'

const More = () => {
  return (
   <>
   <img src={img9}></img>
  <div className='ha'>
  <h1>Leading healthcare providers</h1>
  <div className='psu'></div>
  <p className='para5'>
  Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride 
  in the solutions we deliver
  </p>
  <div>
<button className='btn3'>Learn more</button>
</div>

<div className='sec'>
<img src={img10} className='img10'></img>
<h1 className='download'>Download our mobile apps</h1>
<div className='psa'></div>
<p className='para6'>
Our dedicated patient engagement app and 
web portal allow you to access information instantaneously (no tedeous form, long calls, 
or administrative hassle) and securely
</p>
<button className='btn4'>Download ↓</button>
  </div>
  </div>
   </>
  )
}

export default More
