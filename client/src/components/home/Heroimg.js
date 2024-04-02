import React, { useEffect } from 'react';
import Typed from 'typed.js';
import IntroImg from '../img/select5.jpg';
import { Link } from 'react-router-dom';

import './Heroimg.css';

function Heroimg() {
  useEffect(() => {
    const typed = new Typed(".auto-type", { 
      strings: ["Web developer", "Aspiring ML Engineer"],
      typeSpeed: 80,
      backSpeed: 80,
      loop: true
    });


    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className='hero'>
      <div className='mask'>
        <img className='into-img' src={IntroImg} alt="IntroImg" />
      </div>
      <div className='content'>
        <p>Welcome !</p>
        <h1>I'm <span className='auto-type'></span></h1>
        <div>
          <Link to="https://drive.google.com/file/d/1DAPeJ8tcVa9fksUEzVffCJ6XzmuE0k4r/view?usp=sharing" className="btn">Resume</Link>
          <Link to="https://www.linkedin.com/in/eyobed-abreham-30577a262/" className="btn btn-light">Linkedin</Link>
        </div>
      </div>
    </div>
  );
}

export default Heroimg;