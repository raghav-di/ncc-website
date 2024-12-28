import React from 'react'
import './navbar.css' 

import  ncclogo  from '../../allAssets/assets/logo/logo (1).png';
import navopt from '../../allAssets/assets/logo/navbaroptlogo.png';

export default function navbar() {
  return (
    <div>
        <div className="navbar">
            <div className="ncclogo"><img src={ncclogo} alt="" className="ncclogopic" /></div>
            <div className="navbtndiv"><button className="navbtn"><img src={navopt} className='navoptpic' alt="" /></button></div>
        </div>
    </div>
  )
}
