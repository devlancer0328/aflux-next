"use client";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "@/components/Hero/swiper.scss";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import img01 from "@/images/hero/pexels-hero-01.jpg";
import img02 from "@/images/hero/pexels-hero-02.jpg";
import img03 from "@/images/hero/pexels-hero-03.jpg";

export default () => {
  return (
    <Swiper
      className="relative h-screen"
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
          className="h-screen w-screen object-cover select-none"
          src={img01.src}
          alt="img"
        />
        <div className="absolute bottom-[10vw] left-[10vw] z-1">
          <h1 className="text-white text-7xl mb-5 w-[800px] leading-tight">
            Wyjątkowe połączenie 10 składników
          </h1>
          <p className="text-white text-xl mb-5 w-[600px] font-extralight">
            Dzięki naszemu produktowi Twoja skóra zyska nowy blask, a
            samopoczucie zmieni się nie do poznania.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="h-screen w-screen object-cover select-none"
          src={img02.src}
          alt="img"
        />
        <div className="absolute bottom-[10vw] left-[10vw] z-1">
          <h1 className="text-white text-7xl mb-5 w-[800px] leading-tight">
            Niesamowite efekty
          </h1>
          <p className="text-white text-xl mb-5 w-[600px] font-extralight">
            Stosując nasze kosmetyki efekty zauważysz już po 4 dniach od
            rozpoczęcia kuracji.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="h-screen w-screen object-cover select-none"
          src={img03.src}
          alt="img"
        />
        <div className="absolute bottom-[10vw] left-[10vw] z-1">
          <h1 className="text-white text-7xl mb-5 w-[800px] leading-tight">
            Produkty dla każdego, niezależnie od wieku
          </h1>
          <p className="text-white text-xl mb-5 w-[600px] font-extralight">
            Produkty dopasowane dla każdego.
          </p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
