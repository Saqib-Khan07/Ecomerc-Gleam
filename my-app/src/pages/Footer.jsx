import React from 'react'
import './Footer.css'
import foot from './Images/footer logo.svg'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faInstagram, faLinkedin, faTiktok, faXTwitter, faYoutube} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faLocation, faLocationPin, faLocationPinLock, faMapLocation, faPhoneVolume } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'


function Footer() {
  return (
    <div className='footer'>
        <div className='icons'>
          <div className='photo'>
            <img src={foot} alt="" />
            </div>
            <span> <FontAwesomeIcon icon={faInstagram}/></span>
            <span><FontAwesomeIcon icon={faLinkedin}/></span>
            <span><FontAwesomeIcon icon={faTiktok}/></span>
            <span><FontAwesomeIcon icon={faXTwitter}/></span>
            <span><FontAwesomeIcon icon={faYoutube}/></span>
        </div>
        <div className='Quik-link'>
          <h4>Quick Link</h4>
          <p>Home</p>
          <p> <Link to={'/About-us'}>About-us</Link></p>
          <p>Contact-us</p>
        </div>
        <div className='Our-services'>
          <h4>Our Services</h4>
          <p> <Link to={'/Amzmanage'}>Amazon Full Account Management Services</Link></p>
          <p> <Link to={'/Onlineretail'}>Online Arbitrage & Retail Services</Link></p>
          <p><Link to={'/AmazonFba'}>Amazon Wholesale FBA Services</Link></p>
          <p> <Link to={'/Threepl'}>3PL and Warehouse Services</Link></p>
        </div>
        <div className='Location'>
          <p> <FontAwesomeIcon icon={faPhoneVolume}/>+1 (215) 305 819</p>
          <p> <FontAwesomeIcon icon={faEnvelope}/>info@ecomgleam.com <br/>career@ecomgleam.com</p>
          <p> <FontAwesomeIcon icon={faLocationPin}/>USA Office <br/>59CO BALCONES DR BTE 14447 <br/>AUSTIN, TX 78731, United States</p>
          <p> <FontAwesomeIcon icon={faLocationPin}/> UAE Office <br/>Bussiness Combo Sharjah Fuolishing <br/> City Free Zone, Sharjah, United Arab <br/> Emirates</p>
        </div>
    </div>
  )
}

export default Footer
