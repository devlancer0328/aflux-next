"use client";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import img01 from "@/images/hero/pexels01.jpg";
import img02 from "@/images/hero/pexels02.jpg";
import img03 from "@/images/hero/pexels03.jpg";

export default () => {
  return (
    <Swiper
      className="h-screen"
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      autoplay={{
        delay: 3500,
        disableOnInteraction: true,
      }}
      direction="vertical"
      effect="slide"
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
          src={img02.src}
          alt="img"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="h-screen w-screen object-cover"
          src={img03.src}
          alt="img"
        />
      </SwiperSlide>
    </Swiper>
  );
};
