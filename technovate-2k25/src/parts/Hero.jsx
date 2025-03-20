import React from "react";
import "./Hero.css";
import Spline from "@splinetool/react-spline";
import logo from "../images/logo.png";

const Hero = ({ reference, scrollToSection, next }) => {
  return (
    <div className="Hero" ref={reference}>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="three-model">
        <Spline className="web" scene="https://prod.spline.design/n0rfOMHN2WlXuEvH/scene.splinecode" />
        <Spline className="mobile" scene="https://prod.spline.design/rhjMRp4UMh2kScw0/scene.splinecode" />
      </div>
      <div className="text-bg-r text-bg">
        <h1 className="hero-txt" data-text="TECHN">
          TECHN
        </h1>
        <h1 className="hero-txt" data-text="OVATE">
          OVATE
        </h1>
      </div>

      <div className="moto">
        <h3>
          Where <span>Technology</span> Meets Innovation
        </h3>
      </div>

      <div className="scroll-sec">
        <div className="arrow">
          <i class="bx bx-arrow-back"></i>
        </div>
        {/* <div className="text">Scroll</div> */}
      </div>
    </div>
  );
};

export default Hero;
