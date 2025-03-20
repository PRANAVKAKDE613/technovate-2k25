import React, { useEffect, useState } from "react";
import "./Drone.css";

const Drone = () => {
  const [drones, setDrones] = useState([]);

  useEffect(() => {
    const generateDrones = () => {
      let elements = [];
      for (let i = 0; i < 3; i++) { // ✅ Now there are 3 drones
        elements.push({
          id: i,
          left: Math.random() * 80 + "vw", // Random horizontal position
          top: Math.random() * 60 + 20 + "vh", // Random vertical position
          animationDuration: Math.random() * 6 + 4 + "s", // Random animation speed
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
          src="/drone.png" // Ensure drone.png is in the `public` folder
          alt="Flying Drone"
          className="drone"
          style={{
            left: drone.left,
            top: drone.top,
            animationDuration: drone.animationDuration,
          }}
        />
      ))}
    </div>
  );
};

export default Drone;
