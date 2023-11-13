"use client";

import { useState } from "react";
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
import "swiper/css/effect-fade";
import { slidesData } from "@/constants";

interface RenderBulletProps {
  index: number;
  className: string;
}

const BigSlider = () => {
  const pagination = {
    clickable: true,
    dynamicBullets: true,
    renderBullet: ({ index, className }: RenderBulletProps) => {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const handleSlideChange = (swiper: any) => {
    setCurrentSlide(swiper.realIndex);
  };

  return (
    <Swiper
      //   style={{
      //     '--swiper-navigation-color': '#fff',
      //     '--swiper-pagination-color': '#fff',
      //   }}
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      // zoom={true}
      loop={true}
      spaceBetween={0}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      navigation={false}
      effect="fade"
      modules={[Autoplay, Pagination, Navigation, Zoom, EffectFade]}
      className="mySwiper"
      onSlideChangeTransitionStart={handleSlideChange}
    >
      {slidesData.map((slide, index) => (
        <SwiperSlide key={index}>
          <div
            style={{ width: "100vw", height: "80vh" }}
            className="relative swiper-zoom-container"
          >
            <Image
              src={slide.imageUrl}
              alt={`Slider ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="brightness-50 opacity-100"
            />
            <div
              className={`padding-container text-main z-50 transition-opacity duration-500 ${
                currentSlide === index ? "slider-transition" : ""
              }`}
            >
              <h2 className="text-3xl font-semibold text-white uppercase">
                {slide.title}
              </h2>
              <h2 className="text-6xl font-bold text-white uppercase py-8">
                {index % 2 === 0 ? (
                  <>
                    Pelican<span className="text-secondary"> Holdings</span>
                  </>
                ) : (
                  <>
                    Bitumen and
                    <span className="text-secondary"> Bituminous</span>
                    <br />
                    Products
                  </>
                )}
              </h2>
              <p className="text-lg text-white font-semibold px-6">
                {slide.description}
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BigSlider;
