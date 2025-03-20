import React, { useEffect } from "react";
import "./sample.css";
import ipl from "./images/ipl.png";
import blobPages from "../images/blob1.svg";

function Sample() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <div className="container upperimage">
        <img className="topimg" src={ipl} alt="" />
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
        <div className="container">
          <h3 className="about0">ABOUT :</h3>
        </div>
        <br></br>
        <div className="pcontainer">
          <p className="hawkpara">
          The cricbid is based on the real auction of the IPL which is conducted every year before the IPL The basic idea of the auction is to buy the players by bargaining between the team owners in a defined amount of money.
          </p>
        </div>
        <div>
          <div className="container about0">
            <span style={{ color: "FDC32D" }}>TEAM SIZE : </span>
            <span className="notbold" style={{ color: "white" }}>
              Solo
            </span>
          </div>
          <div className="container about1">
            <span style={{ color: "FDC32D" }}>FEES : </span>
            <span className="notbold" style={{ color: "white" }}>
              150/- Per Team
            </span>
          </div>
          <div className="container about2">
            <span style={{ color: "FDC32D" }}>TIME DURATION : </span>
            <span className="notbold" style={{ color: "white" }}>
              --
            </span>
          </div>
          <div className="container about3">
            <span style={{ color: "FDC32D" }}>VENUE : </span>
            <span className="notbold" style={{ color: "white" }}>
            {" "}
              --{" "}
            </span>
          </div>
          <div className="container about4">
            <span style={{ color: "FDC32D" }}>PRIZES : </span>
            <span className="notbold">
              <span style={{ color: "white" }}>Winner </span>
              <span style={{ color: "#563380" }}> Rs 2000 /-</span>
            </span>
            <h6 className="prizeh">
              <h6 className="notbold prizeh">
                <span style={{ color: "white" }}>	Runner-Up </span>
                <span style={{ color: "#563380" }}> Rs 1000 /-</span>
              </h6>
            </h6>
          </div>
          <br></br>
          <br></br>
          <br></br>
        </div>
        <div>
          <h3 className="structure">STRUCTURE :</h3>
          <ul className="structureul">
          <li>
                Quiz Round :
              <ol className="abcde" type="i">
                <li>In this Quiz round the teams have been given a question paper of 15 questions which are to be solved into time limit of 20 minutes. The questions are MCQ's which are related with the IPL or the events which are happened in IPL.</li>
              </ol>
            </li>

            <li>
                Auction Round :
              <ol className="abcde" type="i">
                <li>
                    After the quiz round the main round of auction will be held. The auction will as same as the IPL auction which is held every year before IPL. In this auction each team will be given a budget of 100 crore to buy the player. The team have to buy the team of 11 players with 3 extra player that is total 14 players. The teams have to buy all the 14 players in the given budget. Suppose, If any team will not be able to buy the players in the given budget then the team will be considered as disqualified team. The Top 10 teams will qualify for the Final Round which is the Auction Round.
                </li>
              </ol>
            </li>

          </ul>
        </div>
        <div className="generalrules">
          <h3 className="generalrulesheading">GENERAL RULES :</h3>
          <ul className="structureul">
            <li>
                Registrations open to college students only. Each participant team must be enrolled to an accredited college or university.
            </li>
            <li>
                Minimum 2 and maximum 4 members should be in one team.
            </li>
            <li>
                Each team will be provided with some virtual money which can be considered as an individual team budget.
            </li>
            <li>
                Teams will have to bid for players and buy them.
            </li>
            <li>
                At any moment of the game, teams crossing the stipulated budget stand to be disqualified.
            </li>
            <li>
                Players are categorized, so by the end of the auction the structure of the team should look like : 5 BATSMEN, 4 BOWLER, 1 ALL-ROUNDER, 1 LEGEND ( of any category ), 1 WICKETKEEPER.
            </li>
            <li>
                Teams not satisfying the mandatory structure in above will be disqualified.
            </li>
            <li>
                Unsold players to be put up for auction on team’s request or on demand.
            </li>
            <li>
                The players list will be provided at the time of auction and the grades of player will be revealed only on the auction table.
            </li>
            <li>
                Teams are expected to maintain discipline and only members should go for the bid strictly.
            </li>
            <li>
                Bring your college ID Cards and Receipt on event day.
            </li>
            <li>
                All participants will be awarded with “Participation Certificates”.
            </li>
          </ul>
        </div>
        <div className="container contact" style={{ color: "yellow" }}>
          <div className="container about0">
            <span style={{ color: "FDC32D" }}> CONTACT : </span>
            <span>
              <h6 className=" deskcont" style={{ color: "white" }}>
              - --
              </h6>
              <h6 className="notbold deskcont" style={{ color: "white" }}>
                - --
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
