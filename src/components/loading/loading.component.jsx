import React from "react";
import "./loading.styles.scss";
import loadingAnimation from "../../assets/img/loading.svg";

export default function Loading() {
  return (
    <div className="jumbotron vertical-center">
      <div className="container">
        <img
          className="loading__animation"
          src={loadingAnimation}
          alt="loading animation"
        />
      </div>
    </div>
  );
}
