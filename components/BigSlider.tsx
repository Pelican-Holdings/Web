"use client";

import {
  Autoplay,
  Navigation,
  Pagination,
  EffectFade,
  Zoom,
  Scrollbar,
  A11y,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import "swiper/css/zoom";

const BigSlider = () => {
  return (
    <Swiper
      //   style={{
      //     '--swiper-navigation-color': '#fff',
      //     '--swiper-pagination-color': '#fff',
      //   }}
      zoom={true}
      spaceBetween={0}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: false,
      }}
      navigation={true}
      //   effect="fade"
      modules={[Autoplay, Pagination, Navigation, Zoom, EffectFade]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div
          style={{ width: "100vw", height: "100vh" }}
          className="swiper-zoom-container"
        >
          <Image
            src="https://res.cloudinary.com/midefulness/image/upload/v1657441707/cld-sample-5.jpg"
            alt="Slider 1"
            layout="fill" // This makes the image fill its container
            objectFit="cover" // This scales and centers the image to cover the container
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          style={{ width: "100vw", height: "100vh" }}
          className="swiper-zoom-container"
        >
          <Image
            src="https://res.cloudinary.com/midefulness/image/upload/v1657441707/cld-sample-5.jpg"
            alt="Slider 1"
            layout="fill" // This makes the image fill its container
            objectFit="cover" // This scales and centers the image to cover the container
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          style={{ width: "100vw", height: "100vh" }}
          className="swiper-zoom-container"
        >
          <Image
            src="https://res.cloudinary.com/midefulness/image/upload/v1657441707/cld-sample-5.jpg"
            alt="Slider 1"
            layout="fill" // This makes the image fill its container
            objectFit="cover" // This scales and centers the image to cover the container
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          style={{ width: "100vw", height: "100vh" }}
          className="swiper-zoom-container"
        >
          <Image
            src="https://res.cloudinary.com/midefulness/image/upload/v1657441707/cld-sample-5.jpg"
            alt="Slider 1"
            layout="fill" // This makes the image fill its container
            objectFit="cover" // This scales and centers the image to cover the container
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default BigSlider;
