import React from 'react'
import img3 from './Assets3/img3.png'
import img4 from './Assets3/img4.png'
import img5 from './Assets3/img5.png'
import img6 from './Assets3/img6.png'
import img7 from './Assets3/img7.png'
import img8 from './Assets3/img8.png'
import './Service.css'

const Service = () => {
  return (
   <>
    <div className='head'>
    <h1>Our  Service</h1>
    <div className='dash'></div>
    <p className='para2'>
    We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health
    </p>
    </div>

    <div className='setcard'>
    <div className='card1'>
    <img src={img3}></img>
    <br></br>
    <h1>Search doctor</h1>
    <br></br>
    <p className='para3'>Choose your doctor from thousands of specalist,genral and trusted hospital</p>
    </div>

    <div className='card1'>
    <img src={img4}></img>
    <br></br>
    <h1>Online Pharmacy</h1>
    <br></br>
    <p className='para3'>Buy  your medicines with our mobile application with a simple delivery system</p>
    </div>


    <div className='card1'>
    <img src={img5}></img>
    <br></br>
    <h1 className='hu'>Consultation</h1>
    <br></br>
    <p className='para3'>Free consultation with our trusted doctors and get the best recomendations</p>
    </div>
    </div>

<div className='setcard2'>
<div className='card1'>
    <img src={img6}></img>
    <br></br>
    <h1>Details info</h1>
    <br></br>
    <p className='para3'>Free consultation with our trusted doctors and get the best recomendations</p>
    </div>

    <div className='card1'>
    <img src={img7}></img>
    <br></br>
    <br></br>
    <h1 className='hu'>Emergency care</h1>
    <br></br>
    <p className='para3'>You can get 24/7 urgent care for yourself or your children and your lovely family</p>
    </div>

    <div className='card1'>
    <img src={img8}></img>
    <br></br>
    <h1>Tracking</h1>
    <br></br>
    <p className='para3'>Track and save your medical history and health data </p>
    </div>
</div>

<div>
<button className='btn2'>Learn more</button>
</div>
   </>
  )
}

export default Service
