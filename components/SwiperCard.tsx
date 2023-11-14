"use client";

import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/effect-cards";

import {
  Autoplay,
  EffectCards,
  Pagination,
  EffectFade,
  Zoom,
  Scrollbar,
  A11y,
} from "swiper/modules";
import { slidesCardData } from "@/constants";

const useViewport = () => {
  const [width, setWidth] = useState<number>(0);
  useEffect(() => {
    const updateWidth = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", updateWidth);

    updateWidth();

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  return width;
};

export default function SwiperCard() {
  const viewportWidth = useViewport();

  const isMobileView = viewportWidth <= 450;
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  return (
    <>
      <Swiper
        effect={"cards"}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        grabCursor={true}
        modules={[EffectCards, Autoplay]}
        style={{ height: "320px", width: "240px" }}
      >
        {slidesCardData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div>
              <Image
                src={slide.imageUrl}
                alt={`Slider ${index + 1}`}
                layout="fill"
                objectFit="cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
