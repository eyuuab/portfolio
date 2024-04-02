/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import './work.css'
import proj1 from '../img/cheepdelala.jpg'

import { NavLink } from 'react-router-dom'



function Work() {
  return (
    <div className='work-container'>
      <h1 className='project-heading'>Projects</h1>
      <div className='project-container'></div>
        <div className='project-card'>
          <img src= {proj1} alt='image'/>
          <h2 className='project-title'>Project Title</h2>
          <div className='pro-details'>
            <p>This is text</p>
            <div className='pro-btn'>
              <NavLink to ='url.com' className='btn'>View</NavLink>              
              <NavLink to ='url.com' className='btn'>Source</NavLink>

            </div>
          </div>
        </div>
    </div>
  )
}

export default Work
