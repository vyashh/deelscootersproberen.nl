import React, { useContext, useEffect } from "react";
import { Context } from "../../services/store";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "../info-bar-item/info-bar-item.component";
import "./info-bar.styles.scss";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default function InfoBar() {
  const { service, active } = useContext(Context);
  const [currentService, setCurrentService] = service;

  // if (activeService === null) {
  //   return <
  // }

  return (
    <div className="info-bar">
      <Swiper
        className="info-bar__slider"
        navigation
        spaceBetween={50}
        pagination={{ clickable: true }}
        slidesPerView={1}
      >
        <SwiperSlide className="info-bar__slider__item">
          {currentService.price}
          {currentService.price_parking}
        </SwiperSlide>
        <SwiperSlide className="info-bar__slider__item">
          {currentService.service_name}
        </SwiperSlide>
        <SwiperSlide className="info-bar__slider__item">Slide 4</SwiperSlide>
      </Swiper>
    </div>
  );
}
