import React, { useState } from 'react'
import './Navbar.css'
import logo from './Images/Ecomgleam.svg'
import Gif from  './Images/GIF-Pic.gif'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope, faFile, faFileImage, faFolder, faHome, faPhone, faPhoneVolume} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


export default function Navbar() {
let [tab,settab]=useState(0)
let [menu,setmenu]=useState(false);

  return (
  <>
  <FontAwesomeIcon/>
  <div className="navbar">
    <div className='logo'><img src={logo} alt="" height={67} /></div>
    <div className='navbar-container'>
    <ul className='links-container'>
        <li><Link to={'/'} className={tab==0 ? 'active' :''} onClick={()=>settab(0)} >Home</Link></li>
        <li><Link to={'/About-us'} className={tab==1 ? 'active' : ''} onClick={()=>settab(1)}>About-us</Link></li>
        <li><a href="#Contact" className={tab==2 ? 'active' : ''} onClick={()=>settab(2)}>Contact-us</a></li>
        <li><a href="#Services" className={tab==3 ? 'active' : ''} onClick={()=>settab(3)}>Services</a></li>
        <li><Link href="#c" className={tab==4 ? 'active' : ''} onClick={()=>settab(4)}>Blogs</Link></li>
        <li><a href="#c" className={tab==5 ? 'active' : ''} onClick={()=>settab(5)}>Case Studies</a></li>
    </ul>
    <div className='contact'> <FontAwesomeIcon icon={faPhoneVolume}/>+1 (215) 305-8197</div>
      <button className='micon' onClick={()=>setmenu(!menu)}>
        <span>&#9776;</span> </button>
      <div className={`Menu ${menu ? 'activeMenu' : ''}`} onClick={()=>setmenu(!menu)}>
         <span>&times;</span>
          <p href="#" className={tab==0 ? 'active' :''} onClick={()=>settab(0)}> <FontAwesomeIcon icon={faHome}/>Home</p>
          <p  className={tab==1 ? 'active' :''} onClick={()=>settab(1)}> <FontAwesomeIcon icon={faFileImage}/> <Link to={'/About-us'}>About-us</Link></p>
          <p href="#" className={tab==2 ? 'active' :''} onClick={()=>settab(2)}> <FontAwesomeIcon icon={faPhoneVolume}/>Contact-us</p>
          <p href="#" className={tab==3 ? 'active' :''} onClick={()=>settab(3)}> <FontAwesomeIcon icon={faFolder}/>Services</p>
          <p href="#" className={tab==4 ? 'active' :''} onClick={()=>settab(4)}> <FontAwesomeIcon icon={faFolder}/>Blogs</p>
          <p href="#" className={tab==5 ? 'active' :''} onClick={()=>settab(5)}> <FontAwesomeIcon icon={faFolder}/>Case-Studies</p>
          <hr/>
          <div className='Menu-2'> <FontAwesomeIcon icon={faPhone}/>+1 (215) 305-8197</div>
          <div className='Menu-3'> <FontAwesomeIcon icon={faEnvelope}/>info@ecomgleam.com <br/>career@ecomgleam.com</div>
      </div>
    </div>
  </div>
  </>
  )
}
