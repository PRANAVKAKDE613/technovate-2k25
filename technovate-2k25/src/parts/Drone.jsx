import React, { useEffect, useState } from "react";
import "./Drone.css";

const Drone = () => {
  const [drones, setDrones] = useState([]);

  useEffect(() => {
    const generateDrones = () => {
      let elements = [];
      for (let i = 0; i < 5; i++) { // ✅ Updated from 3 to 5 drones
        elements.push({
          id: i,
          left: Math.random() * 80 + "vw",
          top: Math.random() * 60 + 20 + "vh",
          animationDuration: Math.random() * 6 + 4 + "s",
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
          src="/drone.png" // Ensure `drone.png` is in the `public` folder
          alt="Flying Drone"
          className={`drone drone-${drone.id}`} // Add class for unique styling
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
