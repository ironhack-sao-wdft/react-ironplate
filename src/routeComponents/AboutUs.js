import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <div>
      <div className="general-text d-flex flex-column">
        <h1 className="mb-5">
          <b>About Us</b>
        </h1>
        <div className="d-flex flex-column flex-wrap">
          <h4 className="mt-1 text-center">
            <b>
              This web application was made using MERN and Styled Components.
            </b>
          </h4>
          <div className="d-flex about-bg-orange">
            <div className="m-5">
              <h2>
                <b>Felipe Freitas</b>
              </h2>
              <div className="text-center">
                <a href="https://www.linkedin.com/in/affreitas/">
                  <i className="fab fa-linkedin ml-2 mr-2 about-icons"></i>
                </a>
                <a href="https://github.com/sincopeiro">
                  <i className="fab fa-github-square ml-2 mr-2 about-icons"></i>
                </a>
              </div>
            </div>
            <div className="m-5">
              <h2>
                <b>Leonard Kim Her</b>
              </h2>
              <div className="text-center">
                <a href="https://linkedin.com/in/leonardkimher">
                  <i className="fab fa-linkedin ml-2 mr-2 about-icons"></i>
                </a>
                <a href="https://github.com/LBWKH">
                  <i className="fab fa-github-square ml-2 mr-2 about-icons"></i>
                </a>
              </div>
            </div>
            <div className="m-5">
              <h2>
                <b>Matheus Ciappina</b>
              </h2>
              <div className="text-center">
                <a href="https://www.linkedin.com/in/matheusciappina/">
                  <i className="fab fa-linkedin ml-2 mr-2 about-icons"></i>
                </a>
                <a href="https://github.com/mciappina">
                  <i className="fab fa-github-square ml-2 mr-2 about-icons"></i>
                </a>
              </div>
            </div>
          </div>
          <h5 className="mt-1 text-center">
            OddMarket is an e-commerce mockup project for educational purposes
            developed for the 3rd project of Ironhack's Web Development
            Bootcamp, hence the use of all of its resources do not constitute or
            mean any copyright infringement. <br /> All credits for the images
            utilized are given to the proper authors Matty Benedetto, aka
            @unnecessaryinventions, and Katerina Kamprani, aka the author of The
            Unfomcortable.
          </h5>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
