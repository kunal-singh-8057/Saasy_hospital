import React from 'react'
import './Back.css'
import img11 from './Assets3/img11.png'
import img12 from './Assets3/img13.png'
import img13 from './Assets3/img18.png'

const Back1 = () => {
  return (
   <>
   <img src={img11} className='logo18'></img>
   <div className='div1'>
   <img src={img12} className='logodot'></img>
   </div>
   <h1 className='backhead'>What our customer Says</h1>
   <div className='pu'></div>
   <img src={img13} className='person'></img>
   <h3 className='personh'>Edward Newgate</h3>
   <h5 className='founder'>Founder Of Circle</h5>

   <p className='founderpara'>
   “Our dedicated patient engagement app and 
    web portal allow you to access information instantaneously (no tedeous form, long calls, 
        or administrative hassle) and securely”
   </p>
   </>
  )
}

export default Back1
