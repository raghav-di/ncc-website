import React from 'react'
import './home.css'

import hometoppic from '../../allAssets/assets/photo/hometoppic.png';
import seniorcllg from '../../allAssets/assets/photo/seniorcol.png';
import pledge from '../../allAssets/assets/photo/pledge.png';
import aac from '../../allAssets/assets/photo/aac (4).jpg';
import tschp from '../../allAssets/assets/photo/tschp1.jpeg';
import ebsb from '../../allAssets/assets/photo/ebsb.png';
import rdc from '../../allAssets/assets/photo/rdc (1).jpg';
import catc from '../../allAssets/assets/photo/catc.png';
import sdrank from '../../allAssets/assets/photo/rank24.jpg';
import swrank from '../../allAssets/assets/photo/SWRANK 24.jpg'
import galpic from '../../allAssets/assets/photo/photogal.png'
import footer from '../../allAssets/assets/photo/footer.jpg'
import insta from '../../allAssets/assets/logo/instalogo.png'
import mail from '../../allAssets/assets/logo/maillogo.png'


export default function Navbar() {
  return(
    <div id='homebody'>

        homebody.............
        <div className="hometop"><img src={hometoppic} alt="" id="hometoppic" /></div>

        <div id="homeintro1">
            <h1 className='hih1'>ONCE A CADET</h1>
            <h1 className='hih1'>ALWAYS A CADET</h1>
            <div className="collgpicdiv"><img className='collgpic' src={seniorcllg} alt="" /></div>
            <p className='hip'>National Cadet Corps (NCC) is a name which is self sufficient for development of one's personality, character, comradeship, discipline, a secular outlook, the spirit of adventure and ideals of selfless service amongst young citizens. A person should find himself lucky to be a part of this esteemed organisation.</p>
            <p className="hip">The phrase "once a cadet, always a cadet" is often used to convey the idea that the values, discipline, leadership, a sense of service in young people and lessons learned during one's time as a cadet in NCC training program have a lasting impact and influence on a person throughout their life.</p>
            <p className="hip">It suggests that the experiences and training received as a cadet continue to shape an individual's character and behavior, even after they have completed their training and moved on to other roles or responsibilities.</p>
            <p className="hip">Essentially, it emphasizes the enduring nature of the lessons and values instilled during one's time as a cadet. </p>
        </div>

        <div id="homeintro2">
            <h1 className="hih1ls">AIM OF NCC</h1>
            <div id="aims">
                <div id="aim1" className='aim'>
                    <div className="cover">
                        <h6 className="aimtxt">To Develop Character and Leadership</h6>                    
                    </div>
                </div>
                <div id="aim2" className='aim'>
                    <div className="cover">
                        <h6 className="aimtxt">To Create a Human Resource of Organized, Trained and Motivated Youth.</h6>
                    </div>
                </div>
                <div id="aim3" className='aim'>
                    <div className="cover">
                        <h6 className="aimtxt">To Provide a Suitable Environment to Motivate the Youth to join the Armed Forces.</h6>
                    </div>
                </div>
            </div>
        </div>

        <div id="homeintro3">
            <h1 className='hih1'>OUR PLEDGE</h1>
            <div className="collgpicdiv"><img className='pledgegpic' src={pledge} alt="" /></div>
            <p className='hip'>"WE THE CADETS OF THE NATIONAL CADET CORPS,DO SOLOEMNLY PLEDGE THAT WE SHALL ALWAYS UPHOLD THE UNITY OF INDIA.WE RESOLVE TO BE DISCIPLINED AND RESPONSIBLE CITIZEN OF OUR NATION.WE SHALL UNDERTAKE POSITIVE COMMUNITY SERVICE IN THE SPIRIT OF SELFLESSNESS AND CONCERN FOR OUR FELLOW BEINGS."</p>
            
        </div>

        <div id="homeintro4">
            <h1 className="hih1ls">CAMPS</h1>
            <div> <img src={aac} alt="" className="campimg" /></div>
            <div> <img src={tschp} alt="" className="campimg" /></div>
            <div><img src={ebsb} alt="" className="campimg" /></div>
            <div><img src={rdc} alt="" className="campimg" /></div>
            <div><img src={catc} alt="" className="campimg" /></div>
        </div>

        <div id="homeintro5">
            <h1 className="hih1">SD RANK PANEL - 24</h1>
            <div> <img src={sdrank} alt="" className="rankpannelpic" /></div>
            <h1 className="hih1">SW RANK PANEL - 24</h1>
            <div><img src={swrank} alt="" className="rankpannelpic" /></div>

        </div>

        <div id="homeintro6">
            <h1 className="hih1">PHOTO GALLERY</h1>
            <div> <img src={galpic} alt="" className="galpic" /></div>
        </div>

        <div id="homeintro7">
            <button className='photogalbtn' ></button>
        </div>

        <div id="homeintro8">
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
