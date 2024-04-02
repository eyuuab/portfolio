import React from "react";
import Navbar from "../navbar/Navbar";
import "./project.css";
import Proj from "../project-prop/Proj";
import imgcheep from "../img/cheepdelala.jpg";
import imgcheep2 from "../img/project_img/cheepd.png";
import imgmovie from '../img/project_img/moviesite.png';
import imghand from '../img/project_img/handwritten.jpg';
import imghand2 from '../img/project_img/handwritten2.jpg'


function Project() {

  const imagelist = [imgcheep, imgcheep2, imgmovie, imghand, imghand2];

  return (
    <>
      <div className="body">
        <Navbar />
        <Proj heading="PROJECT." text="Some of my recent projects" />
      </div>
      <div className="project-container">
        <div class="card">
          <a href="/">
            <img class="rounded-top" src={imgmovie} alt="" />
          </a>
          <div class="content">
            <a href="/">
              <h5 class="title">House rating system</h5>
            </a>
            <p class="description">
              It is a house rating system called Cheep
              Della. it is build using pure java swing, which have great user
              interface(UI).
            </p>
            <a href="/" class="btn">
              Read more
              <svg
                class="arrow"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
