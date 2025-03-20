import React from "react";
import "./Events.css";
import SharkTank from "../images/Events/solveX.jpg";
import Tth from "../images/Events/tth.png";
import brocode from "../images/Events/brocode.png";
import hireFire from "../images/Events/iplAuction.jpg";
import rcCar from "../images/Events/error404.jpg";
// import techSangam from "../images/Events/techsangam.png";
// import catiaWars from "../images/Events/catiaWars.png";
import mun from "../images/Events/cad-o-create.jpg";
import bgmi from "../images/Events/bgmi.png";
import auction from "../images/Events/rc-car.jpg";
import EventLCard from "../components/EventLCard";

const Events = ({ reference }) => {
  return (
    <div className="Events" ref={reference}>
      <div className="heading">
        <div>Events</div>
      </div>
      <div className="cards">     
        <EventLCard
          name={"Geek it out"}
          image={Tth}
          content={
            "Showcase your coding, problem-solving, and debating skills in this thrilling 3-round competition! "
          }
          link={"/techtreasurehunt"}
        />
        <EventLCard
          name={"Bro Code"}
          image={brocode}
          content={
            "A thrilling coding battle for teams of two! "
          }
          
          link={"/thebrocode"}
        />
        <EventLCard
          name={"Battle Of the Bids"}
          image={hireFire}
          content={
            "Quiz, strategize, bid, build, compete: Dive into the ultimate IPL challenge."
          }
          link={"/hireorfire"}
        />
          <EventLCard
          name={"Valorant"}
          image={bgmi}
          content={
            "Play, compete, strategize, challenge, entertain: Dive into the world of games."
          }
          link={"/bgmivalo"}
        />
        <EventLCard
          name={"SolveX"}
          image={SharkTank}
          content={
            "Ideate, analyze, create, innovate, present: Dive into the world of problem-solving."
          }
          link={"/sharktank"}
        />
        <EventLCard
          name={"ERROR 404"}
          image={rcCar}
          content={
            "Debug, solve, excel—feel the thrill of fixing code under pressure! Speed demons, race in Fast & Furious!"
          }
          link={"/fastnfurious"}
        />
        {/* <EventLCard
          name={"Bridging Minds"}
          image={techSangam}
          content={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          }
          link={"/techsangam"}
        />
        <EventLCard
          name={"PUBG domination"}
          image={catiaWars}
          content={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          }
          link={"/catiawars"}
        /> */}
        <EventLCard
          name={"Cad-O Create "}
          image={mun}
          content={
            "Design, innovate, model, create, deliver: Craft efficient CAD solutions in just 1.5 hours!"
          }
          link={"/mun"}
        />
      
        <EventLCard
          name={"RC Challenge"}
          image={auction}
          content={
            "Race, maneuver, overcome, accelerate, conquer: Master the track with your RC skills!"
          }
          link={"/sharktank"}
        />
        <EventLCard
          name={"Electrothon"}
          image={auction}
          content={
            "An exciting electronics marathon with four stages and a points-based system!Test your electronics skills—debug, design, and compete!"
          }
          link={"/"}
        />
        <EventLCard
          name={"Autoexpo"}
          image={auction}
          content={
            " Get ready for AUTOEXPO, a dynamic event celebrating innovation in the automobile industry!"
          }
          link={"/"}
        />
      </div>
    </div>
  );
};

export default Events;
