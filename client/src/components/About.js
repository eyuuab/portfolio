import React from 'react';
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';
// import Proj from '../components/project/Proj';
import Abt from './about/abt'


function About() {
  return (
    <div>
      <Navbar />
      <Abt/>
    </div>
  );
}

export default About;
{/* <Navbar />
      <Proj heading="ABOUT." text="I'm a Full stack web developer " />
      <Footer/> */}