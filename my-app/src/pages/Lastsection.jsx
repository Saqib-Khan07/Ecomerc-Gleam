import React from 'react'
import './Lastsection.css'
import Partner1 from './Images/partner1.png'
import Partner2 from './Images/partner2.png'
import Partner3 from './Images/partner3.png'
import Partner4 from './Images/partner4.png'
import Partner5 from './Images/partner5.png'
import Partner6 from './Images/partner6.png'
import Partner7 from './Images/partner7.png'
import Team1 from './Images/person1 (1).png'
import Team2 from './Images/person1 (2).png'
import Client from './Images/client.png'

function Lastsection() {
  return (
    <>
    <div className='Last'>
        <h3>OUR PARTNERS</h3>
        <div className='Hub'>
        <div className='imghub'>
            <img src={Partner1} alt="" />
            <img src={Partner2} alt="" />
            <img src={Partner3} alt="" />
            <img src={Partner4} alt="" />
            <img src={Partner5} alt="" />
            <img src={Partner6} alt="" />
            <img src={Partner7} alt="" />
        </div>
        <div className='imghub'>
            <img src={Partner1} alt="" />
            <img src={Partner2} alt="" />
            <img src={Partner3} alt="" />
            <img src={Partner4} alt="" />
            <img src={Partner5} alt="" />
            <img src={Partner6} alt="" />
            <img src={Partner7} alt="" />
        </div>
        </div>
    </div>

    <div className='Meet'>
      <h1>MEET THE TEAM</h1>
      <div className='Team'>
        <img src={Team1} alt="" />
        <img src={Team2} alt="" />
      </div>
    </div>
    <div className='Client'>
      <h1>OUR CLIENTS</h1>
      <div className='cliname'  data-aos="fade-right"  data-aos-duration='2000'>
        <img src={Client} alt="" />
      </div>
    </div>
    <div className='boss'>
    <div className='Bring'>
      <h1>LET'S BRING YOUR NEXT PROJECT TO <br/> LIFE, TOGETHER </h1>
      </div>
      <div className='speak'>
      <button>Speak to EcomGleam</button>
      </div>
    </div>
    </>
  )
}

export default Lastsection
