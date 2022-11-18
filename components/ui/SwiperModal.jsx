import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import ZoomKobe from "./ZoomKobe";
import { EffectCards } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules

export default (props) => {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {ZoomKobe.map((item, index) => {
          return (
            <SwiperSlide>
              <div key={index} className='fillS'>
                <img
                  src={item.image}
                  alt={item.modal}
                  className="w-full h-full object-cover"
                />
                <p>color: {item.color}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};
