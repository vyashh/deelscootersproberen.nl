import React from "react";
import "./welcome-bar.styles.scss";
import scooter from "../../assets/img/vyash.svg";
import { useSpring, animated } from "react-spring";

export default function WelcomeBar() {
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 500 },
  });

  return (
    <div className="welcome-bar">
      <animated.div style={fadeIn} className="welcome-bar__banner">
        <h2>Touren door je eigen stad?</h2>
        <p>Probeer een deelscooter!</p>
      </animated.div>
      <div className="welcome-bar__scooter">
        <img src={scooter} alt="" srcset="" />
      </div>
    </div>
  );
}
