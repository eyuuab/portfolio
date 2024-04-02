import React from 'react'
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/contact_me/Contact';
// import upload from './server/ImageUpload';
import './index.css';
import { Route, Routes } from 'react-router-dom';

import Test from './test';


function App() {
  return (
   <>
      <Routes>
        {/* <Route path = "/" element = {<Test/>}/> */}


        <Route path = "/" element = {<Home/>}/>
        <Route path = "/project" element = {<Project/>}/>
        <Route path = "/about" element = {<About/>}/>
        <Route path = "/contact" element = {<Contact/>}/>
      
      </Routes>
   </>
  );
}

export default App;
