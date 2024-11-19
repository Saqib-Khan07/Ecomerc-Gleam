import React, { useEffect } from 'react'
import './Mainsection.css'
import 'aos/dist/aos.css'
import Aos from 'aos'
import Gif from  './Images/GIF-Pic.gif'
import service1 from './Images/Services1.svg'
import service2 from './Images/Services2.svg'
import service3 from './Images/Services3.svg'
import service4 from './Images/Services4.svg'
import   video  from './Images/Services video.mp4' 
import  review  from './Images/review img.png'

function Mainsection() {

    useEffect(()=>{
        Aos.init();
    },[])
  return (
    <>
    <div className='Hero-Section'  data-aos='fade-right' data-aos-offset='300' data-aos-duration='2000'>
    <div className='Hero-1'>
      <h1>ALL-IN-ONE TEAM FOR SEAMLESS ECOMMERCE MANAGEMENT</h1>
      <p>EcomGleam offers efficient ecommerce solutions to optimize performance and drive growth. Collaborate with us to leverage expert stratigies and cutting-edge technology tailored for your online success.</p>
      <div className='Hero-butt'>
      <button>Let's chat</button>
      <button>our story</button>
    </div>
    </div>
    <div className='Hero-GIF'>
      <img src={Gif} alt="" />
    </div>
     </div>
    <div className='main-section'>
        <h1>Ecommerce Management Services</h1>
        <div className='card-section'  data-aos='fade-up' data-aos-duration='3000' >
            <div className='card-1'>
                <img src={service1} alt="Management Services"/>
                <p>Amazon Full Account Management Services</p>
                <button>Explore Services</button>
            </div>
            <div className='card-2'>
                <img src={service2} alt="Management Services"/>
                <p>Online Arbitrage & Retail Services</p>
                <button>Explore Services</button>
            </div>
            <div className='card-3'>
                <img src={service3} alt="Management Services"/>
                <p>Amazon Wholesale FBA Services</p>
                <button>Explore Services</button>
            </div>
            <div className='card-4'>
                <img src={service4} alt="Management Services"/>
                <p>3PL and Warehousing Services</p>
                <button>Explore Services</button>
            </div>
        </div>
        <div className='video'>
            <video src={video} autoPlay muted loop></video>
        </div>
    </div>
    <div className='Main-2'>
        <img src={review} alt="review img"/>
        <div className='Main-pb'>
            <p>READY TO GROW YOUR REVENUE?</p>
            <button>Speak to Ecomgleam</button>
        </div>
</div>
<div className='Head'>
    <h2>HEAR FROM OUR CLIENTS</h2>
</div>
</>
  )
}

export default Mainsection
