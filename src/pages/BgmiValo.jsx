import React, { useEffect } from "react";
import "./sample.css";
import bgmi from "./images/bgmi.png";
import blobPages from "../images/blob1.svg";
import rulebook from "../RuleBook/Valorant.pdf"

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
        <img className="topimg" src={bgmi} alt="" />
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
        <div className="about0" onClick={handleRuleBook}>
        Show RuleBook
      </div>
      </div>
     
    </>
  );
}

export default Sample;
