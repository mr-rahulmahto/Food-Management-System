import React from 'react'
import './Navbar.css'
import { asset } from '../../assets/asset'
const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={asset.logoAdmin} alt="" className="log" />
        <img src={asset.profile_image} alt="" className="profile" />
        
      
    </div>
  )
}

export default Navbar
