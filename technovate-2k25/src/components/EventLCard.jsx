import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./EventcardL.css";


const EventCard = ({ name, image, link, content }) => {

const [EventLCard, setEventLCard] = useState("EventLCard");

const hoverEffect = () => {
  setEventLCard("EventLCard EventLCardH");
}

const hoverEffectNo = () => {
  setEventLCard("EventLCard");
}

  return (
    <div 
      onMouseEnter={hoverEffect}
      onMouseLeave={hoverEffectNo}
      className={EventLCard}>
      <div className="image">
        <img src={image} alt="sharktank" />
      </div>

      <h4 className="eventHead">{name}</h4>
      <div className="content-btn">
        <p className="content-p">{content}</p>
        <NavLink to={link}>
          <div className="btn">Read more</div>
        </NavLink>
      </div>
    </div>
  );
};

export default EventCard;
