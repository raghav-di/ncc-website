import './App.css';

import Home from './components/home/home.jsx';
import About from './components/about/about.jsx'
import Camps from './components/camps/camps.jsx'
import Photos from './components/photos/photos.jsx'
import Allphotos from './components/Allphotos/Allphotos.jsx'

import  ncclogo  from './allAssets/assets/logo/logo (1).png';
import navopt from './allAssets/assets/logo/navbaroptlogo.png';

import { useState } from 'react';


function App() {
  const[homeBtn,setHomeBtn]=useState(true);
  const[aboutBtn,setAboutBtn]=useState(false);
  const[campsBtn,setCampsBtn]=useState(false);
  const[photosBtn,setPhotosBtn]=useState(false);
  return (
    <div id="App">
      <div className="navbar">
        <div className="ncclogo"><img src={ncclogo} alt="" className="ncclogopic" /></div>
      </div>  

      <div className="navbtndiv">
        <input name='navbtn' type="checkbox" id='navbtn' className='navbt'/>
        <label htmlFor="navbtn" id='navlabel'><img src={navopt} className='navoptpic' alt="" /></label>

        <div className="nav">
          <div className="navopt">
            <div className="hmopt">
              <button onClick={()=>(setHomeBtn(true),setAboutBtn(false),setCampsBtn(false),setPhotosBtn(false))}><h4 className='opttxt'>Home</h4></button>                
            </div>
            <div className="abtopt">
              <button onClick={()=>(setHomeBtn(false),setAboutBtn(true),setCampsBtn(false),setPhotosBtn(false))}><h4 className='opttxt'>About</h4></button>
            </div>
            <div className="cmpopt">
              <button onClick={()=>(setHomeBtn(false),setAboutBtn(false),setCampsBtn(true),setPhotosBtn(false))}><h4 className='opttxt'>Camps</h4></button>
            </div>
            <div className="phtopt">
              <button onClick={()=>(setHomeBtn(false),setAboutBtn(false),setCampsBtn(false),setPhotosBtn(true))}><h4 className='opttxt'>Photos</h4></button>
            </div>
          </div>
        </div>
      </div>

      <div className="home">
        <Home trigger={(homeBtn)} setTrigger={setHomeBtn}/>
      </div>
      <div className="about">
        <About trigger={(aboutBtn)} setTrigger={setAboutBtn}/>
      </div>
      <div className="camps">
        <Camps trigger={(campsBtn)} setTrigger={setCampsBtn}/>
      </div>
      <div className="photos">
        <Photos trigger={(photosBtn)} setTrigger={setPhotosBtn}/>
      </div>
      {/* <div className="allphotos">
        <Allphotos/>
      </div> */}
    </div>
  );
}

export default App;
