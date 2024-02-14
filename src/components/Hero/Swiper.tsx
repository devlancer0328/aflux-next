"use client";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import img01 from "@/images/hero/pexels01.jpg";

export default () => {
  return (
    <Swiper
      className="h-screen"
      modules={[Navigation, Pagination]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <img
          className="h-screen w-screen object-cover"
          src={img01.src}
          alt="img"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="h-screen w-screen object-cover"
          src={img01.src}
          alt="img"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="h-screen w-screen object-cover"
          src={img01.src}
          alt="img"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="h-screen w-screen object-cover"
          src={img01.src}
          alt="img"
        />
      </SwiperSlide>
    </Swiper>
  );
};
