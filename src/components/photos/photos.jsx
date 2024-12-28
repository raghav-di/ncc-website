import React from 'react'
import './photos.css'

import pic1 from '../../allAssets/assets/photo/rdc (2).jpg'
import pic2 from '../../allAssets/assets/photo/aac (2).jpg'
import pic3 from '../../allAssets/assets/photo/catc (5).jpg'
import pic4 from '../../allAssets/assets/photo/scuba (2).jpg'
import pic5 from '../../allAssets/assets/photo/republic (6).jpg'
import pic6 from '../../allAssets/assets/photo/donation (4).jpg'
import pic7 from '../../allAssets/assets/photo/catchp.jpeg'
import pic8 from '../../allAssets/assets/photo/ssbclass (2).jpg'
import pic9 from '../../allAssets/assets/photo/womensday1.jpeg'
import pic10 from '../../allAssets/assets/photo/ebsb.png'
import pic11 from '../../allAssets/assets/photo/independencedaymait (4).jpg'
import pic12 from '../../allAssets/assets/photo/rdc (10).jpg'
import footer from '../../allAssets/assets/photo/footer.jpg'
import insta from '../../allAssets/assets/logo/instalogo.png'
import mail from '../../allAssets/assets/logo/maillogo.png'


export default function photos() {
  return (
    <div>
      <div className="container1">
        <h1 className="h1c1">PHOTO GALLARY</h1>
        <div className="sc">
            <img src={pic1} alt="" className="scimg" />
            <h3 className="sctxt">RDC</h3>
        </div>

        <div className="sc">
            <img src={pic2} alt="" className="scimg" />
            <h3 className="sctxt">AAC</h3>
        </div>

        <div className="sc">
            <img src={pic3} alt="" className="scimg" />
            <h3 className="sctxt">ADG VISIT</h3>
        </div>

        <div className="sc">
            <img src={pic4} alt="" className="scimg" />
            <h3 className="sctxt">SCUBA DIVING CAMP</h3>
        </div>

        <div className="sc">
            <img src={pic5} alt="" className="scimg" />
            <h3 className="sctxt">REPUBLIC DAY</h3>
        </div>

        <div className="sc">
            <img src={pic6} alt="" className="scimg" />
            <h3 className="sctxt">DONATION CAMP</h3>
        </div>

        <div className="sc">
            <img src={pic7} alt="" className="scimg" />
            <h3 className="sctxt">CATC</h3>
        </div>

        <div className="sc">
            <img src={pic8} alt="" className="scimg" />
            <h3 className="sctxt">SSB CLASS</h3>
        </div>

        <div className="sc">
            <img src={pic9} alt="" className="scimg" />
            <h3 className="sctxt">NATIONAL WOMEN'S DAY</h3>
        </div>

        <div className="sc">
            <img src={pic10} alt="" className="scimg" />
            <h3 className="sctxt">EBSB CAMP</h3>
        </div>

        <div className="sc">
            <img src={pic11} alt="" className="scimg" />
            <h3 className="sctxt">INDEPANDANCE DAY</h3>
        </div>

        <div className="sc">
            <img src={pic12} alt="" className="scimg" />
            <h3 className="sctxt">PM RALLY</h3>
        </div>

      <button>explore more...</button>
      </div>

      <div className="container3">
            <div><img src={footer} alt="" className="footer" /></div>
            <div className="footinfo">
                <div className='infodiv'>
                    <img src={insta} alt="" className="infopic" />
                    <p className='info'>@nccmait</p>
                </div>
                
                <div className='infodiv'>
                    <img src={mail} alt="" className='infopic'/>
                    <p className='info'> ncc.mait2021@gmail.com</p>
                </div>
                
            </div>
            <div className="footercc">
                <p className='cc'>© Copyright 2024 by NCC MAIT, All rights reserved. Various trademarks are held by their respective owners.</p>
            </div>
        </div>
        
    </div>
  )
}
