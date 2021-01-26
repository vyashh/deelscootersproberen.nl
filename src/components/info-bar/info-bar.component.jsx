import React, { useContext } from "react";
import { Context } from "../../services/store";
import "./info-bar.styles.scss";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

export default function InfoBar() {
  const { service, active } = useContext(Context);
  const [currentService, setCurrentService] = service;
  const [currentActive, setCurrentActive] = active;

  // if (activeService === null) {
  //   return <
  // }

  const setCompanyStyling = () => {
    console.log(currentService.service_id);
    switch (currentService.service_id) {
      case "0":
        return "info-bar info-bar__company--felyx";
      case "1":
        return "info-bar info-bar__company--check";
      case "2":
        return "info-bar info-bar__company--go  ";
      default:
        break;
    }
  };

  return (
    <div className={setCompanyStyling()}>
      <i class="fas fa-times close" onClick={() => setCurrentActive(null)}></i>
      <div className="info-bar__slider__content">
        <i class="fas fa-tag info-bar__slider__content--icon"></i>
        <p className="info-bar__slider__content--price">
          €{currentService.price}
        </p>
        <p style={{ fontSize: "0.5em" }}>per minuut</p>
        <p
          className="info-bar__slider__content--parking-price"
          style={{ fontSize: "0.8em" }}
        >
          Parkeren: €{currentService.price_parking} per minuut
        </p>
      </div>
    </div>
  );
}
