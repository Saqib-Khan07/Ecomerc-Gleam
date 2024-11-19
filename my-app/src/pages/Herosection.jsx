import React from 'react'
import './Herosection.css'
import work from './Images/Work1.png'
import work1 from './Images/workM1.png'
import work2 from './Images/workM2.png'
import work3 from './Images/workM3.png'
import book1 from './Images/Booking1.png'
import book2 from './Images/Booking2.png'
import book3 from './Images/Booking3.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhoneVolume } from '@fortawesome/free-solid-svg-icons'



function Herosection() {
  return (
    <>
    <div className='image'>
    <img src={work} alt="" />
    </div>
    <div className='Hero'>
    <h2>OUR WORKING PROCESS</h2>
            <div className='Big-Hero1'  data-aos="fade-right"  data-aos-duration='2000'>
                <img src={work1} alt="" />
                <div className='Part1'>
                <h3>INSIGHTFUL CONSULTATION</h3>
                <p>We Delve into Your Business Goals And Challenges, Conducing Thorough Analysis To Uncover Key Insights</p>
                </div>
            </div>
            <div className='Big-Hero2' data-aos="fade-left"  data-aos-duration='2000'>
              <div className='Part2'>
                <h3>STRATEGIC CUSTOMIZATION AND EXECUTION</h3>
                <p>Crafting and Implementing Bespoke Strategies Aligned With Your Objectives, Optimizing For Efficiency And Growth.</p>
                </div>
                <img src={work2} alt="" />
            </div>
            <div className='Big-Hero3' data-aos="fade-right" data-aos-duration='2000'>
            <img src={work3} alt="" />
              <div className='Part3'>
                <h3>TRANSPARENT ACCOUNTABILITY</h3>
                <p>Vigilantly Monitoring Performance Metrics, Delivering Clear, Actionable Insights To Foster Transparency And Accountability. </p>
                </div>
            </div>
            <div className='Hero-2'>
              <h1>BOOK A TIME WITH US <br/>  OR DROP IN FOR A <br /> COFFEE</h1>
              <div className='Part4'>
                <img src={book1} alt="" />
                <p className='number'> <FontAwesomeIcon icon={faPhoneVolume}/> +1 (215) 305-8697</p>
                <p className='email'> <FontAwesomeIcon icon={faEnvelope}/>info@ecomgleam.com <br/>career@ecomgleam.com</p>
              </div>
              <div className='images'>
              <img src={book2} alt=""  className='img2'/>
              <img src={book3} alt="" className='img3' />
              </div>
            </div>
    </div>
    
    </>
  )
}

export default Herosection
