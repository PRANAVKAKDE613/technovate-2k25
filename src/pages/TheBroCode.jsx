import React, { useEffect } from "react";
import "./sample.css";
import brocode from "./images/brocode.png";
import blobPages from "../images/blob1.svg";
function Sample() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <div className="container upperimage">
        <img className="topimg" src={brocode} alt="" />
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
      <div className="about0" >
        No RuleBook
      </div>
        <div className="container">
          <h3 className="about0">ABOUT :</h3>
        </div>
        <br></br>
        <div className="pcontainer">
          <p className="hawkpara">
          Bro Code is a technical event that tests the knowledge, aptitude, and coding skills of
          participants in a team of two. The event is divided in 3 rounds. Top performers of each round
          will qualify for the next rounds.
          </p>
        </div>
        <div>
          <div className="container about0">
            <span style={{ color: "FDC32D" }}>TEAM SIZE : 2 </span>
            <span className="notbold" style={{ color: "white" }}>
              Duo
            </span>
          </div>
          <div className="container about1">
            <span style={{ color: "FDC32D" }}>FEES : </span>
            <span className="notbold" style={{ color: "white" }}>
              50/- Per Team
            </span>
          </div>
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
              <span style={{ color: "#563380" }}> Rs 5000/-</span>
            </h6>
              <h6 className="notbold prizeh">
                <span style={{ color: "white" }}>2nd </span>
                <span style={{ color: "#563380" }}> Rs 3000/-</span>
              </h6>
              <h6 className="notbold prizeh">
                <span style={{ color: "white" }}>3rd </span>
                <span style={{ color: "#563380" }}> Rs 2000/-</span>
              </h6>
            </h6>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <br /><br /><br /><br />
        </div>
        <div>
          <h3 className="structure">STRUCTURE :</h3>
          <ul className="structureul">
            <li>
              Round 1:
              <ol className="abcde" type="i">
                <li>The questions will test the basic general knowledge about trending topics.</li>
                <li>The teams have to be quick and accurate in answering the questions.</li>
              </ol>
            </li>

            <li>
              Round 2:
              <ol className="abcde" type="i">
                <li>The teams will be given a set of tasks to be performed to get the desired result.</li>
                <li>Based on this, teams will be selected for the last round.</li>
              </ol>
            </li>

            <li>
              Round 3:
              <ol className="abcde" type="i">
                <li> This is the coding round with a twist.</li>
                <li>The teams will be given a problem statement to solve.</li>
                <li>They will have to use their coding skills to develop a solution.</li>
                <li>
                  The twist will be revealed on the spot and the teams will have to incorporate it into
                  their solution. The top three teams with the best solutions will be declared the
                  winners.
                </li>
              </ol>
            </li>
          </ul>
        </div>
        <div className="generalrules">
          <h3 className="generalrulesheading">GENERAL RULES :</h3>
          <ul className="structureul">
            <li>
            The use of mobile phones and the internet is strictly prohibited.
            </li>
            <li>
              The teams found using any unfair means will be immediately disqualified.
            </li>
            <li>
              The decision taken by the organisers will be final and binding.
            </li>
            <li>
              The teams must maintain decorum and not exhibit any offensive behaviour. The team
              will be disqualified if they exhibit any offensive demeanour
            </li>
          </ul>
        </div>
        <div className="container contact" style={{ color: "yellow" }}>
          <div className="container about0">
            <span style={{ color: "FDC32D" }}> CONTACT : </span>
            <span>
              <h6 className=" deskcont" style={{ color: "white" }}>
              Ishan Honmode : 77449 93653
              </h6>
              <h6 className="notbold deskcont" style={{ color: "white" }}>
                Pushkar Sarda : 86698 02202
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
