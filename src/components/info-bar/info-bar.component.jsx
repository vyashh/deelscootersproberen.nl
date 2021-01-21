import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import "./info-bar.styles.scss";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default class InfoBar extends Component {
  render() {
    return (
      <div className="info-bar">
        <Swiper
          className="info-bar__slider"
          navigation
          spaceBetween={50}
          pagination={{ clickable: true }}
          slidesPerView={1}
        >
          <SwiperSlide className="info-bar__slider__item">Slide 1</SwiperSlide>
          <SwiperSlide className="info-bar__slider__item">Slide 2</SwiperSlide>
          <SwiperSlide className="info-bar__slider__item">Slide 3</SwiperSlide>
          <SwiperSlide className="info-bar__slider__item">Slide 4</SwiperSlide>
        </Swiper>
      </div>
    );
  }
}
