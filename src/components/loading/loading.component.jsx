import React from "react";
import "./loading.styles.scss";
import loadingAnimation from "../../assets/img/loading.svg";

export default function Loading() {
  return (
    <div className="loading">
      <img
        className="loading__animation"
        src={loadingAnimation}
        alt="loading animation"
      />
    </div>
  );
}
