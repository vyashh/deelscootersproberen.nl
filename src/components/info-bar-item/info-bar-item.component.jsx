import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

export default function InfoBarItem() {
  return (
    <div>
      <SwiperSlide className="info-bar__slider__item"></SwiperSlide>
      <SwiperSlide className="info-bar__slider__item">Slide 2</SwiperSlide>
      <SwiperSlide className="info-bar__slider__item">Slide 3</SwiperSlide>
      <SwiperSlide className="info-bar__slider__item">Slide 4</SwiperSlide>
    </div>
  );
}
