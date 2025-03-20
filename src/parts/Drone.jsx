import React, { useEffect, useState } from "react";
import "./Drone.css";

const Drone = () => {
  const [drones, setDrones] = useState([]);

  useEffect(() => {
    const generateDrones = () => {
      let elements = [];
      const numDrones = 3; // 3 drones moving across the whole screen

      for (let i = 0; i < numDrones; i++) {
        elements.push({
          id: i,
          left: Math.random() * 80 + "vw", // Start anywhere horizontally
          top: Math.random() * 80 + "vh", // Start anywhere vertically
          animation: `flyDrone${i + 1} ${Math.random() * 20 + 10}s linear infinite alternate`, // Increased duration
          delay: Math.random() * 3 + "s",
        });
      }
      setDrones(elements);
    };

    generateDrones();
  }, []);

  return (
    <div className="drone-container">
      {drones.map((drone) => (
        <img
          key={drone.id}
          src="/drone.png"
          alt="Flying Drone"
          className="drone"
          style={{
            left: drone.left,
            top: drone.top,
            animation: drone.animation,
            animationDelay: drone.delay,
          }}
        />
      ))}
    </div>
  );
};

export default Drone;
