import React from 'react'
import './Check.css'
import img15 from './Assets3/img12.png'
import img16 from './Assets3/img14.png'
import img17 from './Assets3/img15.png'

const Check = () => {
  return (
   <>
    <h1 className='check'>Check out our latest article</h1>
    <div className='line'></div>

    <div className='set3'>
    
    <div className='card5'>
        <img src={img15}></img>
        <h1  className='cardhead1'>Disease detection, check up in the laboratory</h1>
        <p  className='cardpara1'>
        In this case, the role of the health laboratory is very important to do
        a disease detection...
        </p>
       <button className='btn5'>Read more →</button>
    </div>

    <div className='card5'>
        <img src={img16}></img>
        <h1  className='cardhead1'>Herbal medicines that are safe for consumption</h1>
        <p  className='cardpara1'>
        Herbal medicine is very widely used at this time because of its very good for your health..
        </p>
        <button className='btn5'>Read more →</button>
    </div>

    <div className='card5'>
        <img src={img17}></img>
        <h1  className='cardhead1'>Natural care for healthy facial skin</h1>
        <p  className='cardpara1'>
        A healthy lifestyle should start from now and also for your skin health.
        There are some...
        </p>
        <button className='btn5'>Read more →</button>
    </div>
    </div>
    <button className='btn6'>View More</button>
   </>
  )
}

export default Check
