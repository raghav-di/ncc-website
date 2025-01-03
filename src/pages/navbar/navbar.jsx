import React from 'react'
import './navbar.css' 

import  ncclogo  from '../../allAssets/assets/logo/logo (1).png';
import navopt from '../../allAssets/assets/logo/navbaroptlogo.png';

import { Link } from 'react-router-dom';


export default function navbar() {
    // const[homeBtn,setHomeBtn]=useState(true);
    // const[aboutBtn,setAboutBtn]=useState(false);
    // const[campsBtn,setCampsBtn]=useState(false);
    // const[photosBtn,setPhotosBtn]=useState(false);
    // const[allPhotoBtn,setAllPhotoBtn]=useState(false)
  return (
    <div>
  <div className="navbar">
        <div className="ncclogo"><img src={ncclogo} alt="" className="ncclogopic" /></div>
      </div>  

      <div className="navbtndiv">
        <input name='navbtn' type="checkbox" id='navbtn' className='navbt'/>
        <label htmlFor="navbtn" id='navlabel'><img src={navopt} className='navoptpic' alt="" /></label>
        
        <div className="nav">
          <div className="navopt">
            <div className="hmopt">
              <div className='optbtn'><Link to='/home'><h4 className='opttxt'>Home</h4></Link></div>                
            </div>
            <div className="abtopt">
              <div className='optbtn'><Link to='/about'><h4 className='opttxt'>About</h4></Link></div>
            </div>
            <div className="cmpopt">
              <div className='optbtn'><Link to='/camps'><h4 className='opttxt'>Camps</h4></Link></div>
            </div>
            <div className="phtopt">
              <div className='optbtn'><Link to='/photos'><h4 className='opttxt'>Photos</h4></Link></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
