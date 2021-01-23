import React from "react";
import "./welcome-bar.styles.scss";
import scooter from "../../assets/img/vyash.svg";

export default function WelcomeBar() {
  return (
    <div className="welcome-bar">
      <div className="welcome-bar__banner">
        <h2>Touren door je eigen stad?</h2>
        <p>Probeer een deelscooter!</p>
      </div>
      <div className="welcome-bar__scooter">
        <img src={scooter} alt="" srcset="" />
      </div>
    </div>
  );
}
