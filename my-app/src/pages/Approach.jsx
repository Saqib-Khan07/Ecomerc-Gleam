import React from 'react'
import './Approach.css'
import App1 from './Images/approach1.svg'
import App2 from './Images/approach2.svg'
import App3 from './Images/approach3.svg'
import App4 from './Images/approach4.svg'
import App5 from './Images/approach5.svg'

function Approach() {
  return (
    <div className='Approach' data-aos="fade-up" data-aos-duration='2000'>
        <h1>OUR APPROACH</h1>
        <div className='approach-1'>
          <div className='Rev'>
            <img src={App1} alt="" />
            <h3>Revenue <br /> first</h3>
            </div>
            <div className='Dedi'>
            <img src={App2} alt="" />
            <h3>Dedicated <br /> management</h3>
            </div>
            <div className='Qual'>
            <img src={App3} alt="" />
            <h3>Quality <br /> assurance</h3>
            </div>
        </div>
        <div className='approach-2'>
          <div className='On'>
            <img src={App4} alt="" />
            <h3>On-demand <br /> support</h3>
            </div>
            <div className='Auth'>
            <img src={App5} alt=""/>
            <h3>Authenticity</h3>
            </div>
        </div>
    </div>
  )
}

export default Approach
