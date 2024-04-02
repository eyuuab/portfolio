import React from 'react';
import Navbar from './navbar/Navbar';
import About from '../components/contact_me/Contact';
import Heroimg from './home/Heroimg';
import Footer from './footer/Footer';
import Project from './Project';

function Home() {
  return (
    <div className="container">
      <Navbar />
      <Heroimg />
      {/* <About />
      <Project />
      <Footer /> */}
    </div>
  );
}

export default Home;