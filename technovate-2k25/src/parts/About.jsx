import React from "react";
import "./About.css";
import aboutImage from "../images/abtimg.png";
import blob from "../images/blob1.svg";

function About() {
  return (
    <div className="about">
      <img className="blob" src={blob} alt="" srcset="" />
      <div className="content">
        <div className="textSection">
          <div className="mainHead">About us</div>
          <div className="paraSectoin">
            <div className="abtimg">
              <img className="imageHai" src={aboutImage} alt="" srcset="" />
            </div>
            Technovate, the esteemed annual technical extravaganza of PCCOER in
            Pune, serves as a dynamic platform for budding engineers to exhibit
            their skills and exchange avant-garde ideas. Through a series of
            stimulating competitions and exhibitions, it cultivates creativity,
            fosters innovation, and encourages the pursuit of technical
            excellence.
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
