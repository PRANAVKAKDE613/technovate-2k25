import React, { useEffect } from "react";
import "./sample.css";
import hirefire from "./images/ipl.png";
import blobPages from "../images/blob1.svg";
// import rulebook from "../RuleBook/ipl.pdf";
function Sample() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
const handleRuleBook = ()=>{
  // window.open(rulebook,"_blank")
}
  return (
    <>
      <div className="container upperimage">
        <img className="topimg" src={hirefire} alt="" />
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

        <br></br>
        <div className="about0" onClick={handleRuleBook}>
        Show RuleBook
      </div>
        <div className="pcontainer">
          <p className="hawkpara">
          
          </p>
        </div>
        <div>
          <div className="container about0">
            <span style={{ color: "FDC32D" }}>TEAM SIZE : </span>
            <span className="notbold" style={{ color: "white" }}>
            {" "}
              2-4 Person{" "}
            </span>
          </div>
          <div className="container about1">
            <span style={{ color: "FDC32D" }}>FEES : </span>
            <span className="notbold" style={{ color: "white" }}>
              50/- Per Team
            </span>
          </div>
          {/* <div className="container about2">
            <span style={{ color: "FDC32D" }}>TIME DURATION : </span>
            <span className="notbold" style={{ color: "white" }}>
              {" "}
              --{" "}
            </span>
          </div> */}
          {/* <div className="container about3">
            <span style={{ color: "FDC32D" }}>VENUE : </span>
            <span className="notbold" style={{ color: "white" }}>
                {" "}
              --{" "}
            </span>
          </div> */}
          <div className="container about4">
            <span style={{ color: "FDC32D" }}>PRIZES : </span>
            <h6 className="prizeh">
              <h6 className="notbold prizeh">
                <span style={{ color: "white" }}>1st </span>
                <span style={{ color: "#563380" }}> Rs 1000/-</span>
              </h6>
              <h6 className="notbold prizeh">
                <span style={{ color: "white" }}>2nd </span>
                <span style={{ color: "#563380" }}> Rs 500/-</span>
              </h6>
            </h6>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <br /><br /><br /><br />
        </div>
        <div>
          <ul className="structureul">
          </ul>
        </div>
        <div className="generalrules">
            <br /><br /><br /><br /><br /><br /><br /><br />
          <h3 className="generalrulesheading">GENERAL RULES :</h3>
          <ul className="structureul">
            <li>
            In this Quiz round the teams have been given a question paper of 15 questions which are to be solved into time limit of 15 minutes.
            </li>
            <li>
            The questions are MCQ's which are related with the IPL or the events which are happened in IPL
            </li>
            <li>
            In this auction each team will be given a budget of 80 crore to buy the player. The team have to buy the team of 11 players with 3 extra player that is total 14 players.
            </li>
            <li>
            The teams have to buy all the 14 players in the given budget. Suppose, If any team will not be able to buy the players in the given budget then the team will be considered as disqualified team.
            </li>
            <li>
            The Top 10 teams will qualify for the Final Round which is the Auction Round. 
            </li>
          </ul>
        </div>
        <div className="container contact" style={{ color: "yellow" }}>
          <div className="container about0">
            <span style={{ color: "FDC32D" }}> CONTACT : </span>
            <span>
              <h6 className=" deskcont" style={{ color: "white" }}>
              {" "}
              9561465973{" "}
              </h6>
              <h6 className="notbold deskcont" style={{ color: "white" }}>
              {" "}
              9422925605{" "}
              </h6>
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
