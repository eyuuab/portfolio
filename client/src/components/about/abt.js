import React, {useState} from 'react';
import './abt.css';
import IntroImg from '../img/select5.jpg';
import Img from '../img/crop photo.png';

function Abt() {
  return (
    <div className='hero'>

      <section className='home'>
        <div className='bg'>
          <img src={IntroImg} alt=""/>
        </div>
        <div className='home-image'>
          <img src={Img} alt='' />
        </div>
        <div className='home-content'>
          <h1>Hi, I'm Eyobed Abreham</h1>
          <p>
            I am a computer science student at Addis Ababa University. My passion lies in the field of web and app
            development. I find it incredibly intriguing. I've gained several years of experience through working on
            various fantastic projects.
          </p>
          <div className='home-footer'>
            <div className='home-project'></div>
            <h3>15+</h3>
          <h5 style={{color:'grey'}} >projects completed</h5>
          <div className='btn-box'>
            <a href='#'>See More</a>
          </div>
        
          </div>
        </div>
       
      </section>
    </div>
  );
}

export default Abt;