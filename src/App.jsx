import './App.css';

import Home from './components/home/home.jsx';
import About from './components/about/about.jsx'
import Camps from './components/camps/camps.jsx'
import Photos from './components/photos/photos.jsx'

import  ncclogo  from './allAssets/assets/logo/logo (1).png';
import navopt from './allAssets/assets/logo/navbaroptlogo.png';


function App() {
  return (
    <div className="App">
      <div className="navbar">
        <div className="ncclogo"><img src={ncclogo} alt="" className="ncclogopic" /></div>
        <div className="navbtndiv"><button className="navbtn"><img src={navopt} className='navoptpic' alt="" /></button></div>
      </div>
      {/* <div className="home">
        <Home/>
      </div> */}
      {/* <div className="about">
        <About/>
      </div> */}
      {/* <div className="camps">
        <Camps/>
      </div> */}
      <div className="photos">
        <Photos/>
      </div>
    </div>
  );
}

export default App;
