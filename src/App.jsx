import './App.css';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/home/home.jsx'
import About from './pages/about/about'
import Camps from './pages/camps/camps'
import Photos from './pages/photos/photos'
import New from './pages/new/New.jsx'
import Navbar from './pages/navbar/navbar.jsx';

// import Home from './components/home/home.jsx';
// import About from './components/about/about.jsx'
// import Camps from './components/camps/camps.jsx'
// import Photos from './components/photos/photos.jsx'
// import Allphotos from './components/Allphotos/Allphotos.jsx'

// import  ncclogo  from './allAssets/assets/logo/logo (1).png';
// import navopt from './allAssets/assets/logo/navbaroptlogo.png';

// import { useState } from 'react';


function App() {
  // const[homeBtn,setHomeBtn]=useState(true);
  // const[aboutBtn,setAboutBtn]=useState(false);
  // const[campsBtn,setCampsBtn]=useState(false);
  // const[photosBtn,setPhotosBtn]=useState(false);
  // const[allPhotoBtn,setAllPhotoBtn]=useState(false)
  return (
    <div id="App">

      <Navbar/>

      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/camps' element={<Camps/>}/>
          <Route path='/photos' element={<Photos/>}/>
        </Routes>
      </BrowserRouter>

      {/* <div className="home">
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
      <div className="allphotos">
        <Allphotos trigger={(allPhotosBtn)} setTrigger={setAllPhotosBtn}/>
      </div> */}
    </div>
  );
}

export default App;
