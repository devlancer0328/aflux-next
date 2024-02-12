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
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      breakpoints={{
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        // when window width is >= 800px
        800: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        // when window width is >= 1200px
        1200: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
      }}
    >
      <SwiperSlide>
        <img src={img01.src} alt="img" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img01.src} alt="img" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img01.src} alt="img" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img01.src} alt="img" />
      </SwiperSlide>
    </Swiper>
  );
};
