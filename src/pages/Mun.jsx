import React, { useEffect } from "react";
import "./sample.css";
import mun from "./images/mun.png";
import blobPages from "../images/blob1.svg";
import rulebook from "../RuleBook/Code_RC.pdf"
function Sample() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const handleRuleBook = ()=>{
    window.open(rulebook,"_blank")
  }

  return (
    <>
      <div className="container upperimage">
        <img className="topimg" src={mun} alt="" />
        <a
          href="https://konfhub.com/technovate2024#tickets"
          className="btn-register"
          target="_blank"
          rel="noreferrer"
        >
          <div className="register">Register Now</div>
        </a>
        <div className="blobpagest">
          <img src={blobPages} alt="" srcset="" />
        </div>
      </div>
      <div className="dashed-line"></div>

      {/* <div></div> */}
      <div className="containerleft">
      <div className="about0" onClick={handleRuleBook}>
        Show RuleBook
      </div>
        <div className="container">
          <h3 className="about0">ABOUT :
          </h3>
        </div>
        <br></br>
        <div className="pcontainer">
          <p className="hawkpara">
          A design challenge where teams must create a CAD model within a 1.5-hour time limit based on a given problem statement. Participants will have to use their creativity and engineering knowledge to come up with efficient designs that meet the given criteria.
          </p>
        </div>
        <div>
          <div className="container about0">
            <span style={{ color: "FDC32D" }}>TEAM SIZE : </span>
            <span className="notbold" style={{ color: "white" }}>
              1
            </span>
          </div>
          <div className="container about1">
            <span style={{ color: "FDC32D" }}>FEES : </span>
            <span className="notbold" style={{ color: "white" }}>
              50/- Per Person
            </span>
          </div>
          {<div className="container about2">
            <span style={{ color: "FDC32D" }}>TIME DURATION : </span>
            <span className="notbold" style={{ color: "white" }}>
              --
            </span>
          </div>}
          <div className="container about3">
            <span style={{ color: "FDC32D" }}>VENUE : </span>
            <span className="notbold" style={{ color: "white" }}>
            {" "}
            CAD LAB 202{" "}
            </span>
          </div>
          <div className="container about4">
            <span style={{ color: "FDC32D" }}>PRIZES : </span>
            <h6 className="prizeh">
              <h6 className="notbold prizeh">
                <span style={{ color: "white" }}>1st </span>
                <span style={{ color: "#563380" }}> Rs 5000</span>
              </h6>
              <h6 className="notbold prizeh">
                <span style={{ color: "white" }}>2nd </span>
                <span style={{ color: "#563380" }}> Rs 3000</span>
              </h6>
              <h6 className="notbold prizeh">
                <span style={{ color: "white" }}>3rd </span>
                <span style={{ color: "#563380" }}>Rs 2000</span>
              </h6>
            </h6>
          </div>
          <br></br>
          <br></br>
          <br></br>
        </div>
        {/* { <div>
          <h3 className="structure"></h3>
          <ul className="structureul">
            --
          </ul>
        </div>}
         */}
         <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />br*3
         
        <div className="container contact" style={{ color: "yellow" }}>
          <div className="container about0">
            <span style={{ color: "FDC32D" }}> CONTACT : </span>
            <span>
              <h6 className=" deskcont" style={{ color: "white" }}>
              9665159912
              </h6>
              {/* <h6 className="notbold deskcont" style={{ color: "white" }}>
                - --
              </h6> */}

            </span>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
      </div>
    </>
  );
}

export default Sample;
