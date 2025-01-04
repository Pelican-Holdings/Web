"use client";

import React, { useEffect, useState } from "react";
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
import LoadingSpinner from "./LoadingSpinner";

interface RenderBulletProps {
  index: number;
  className: string;
}

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

const BigSlider = () => {
  const [slidesImageLoaded, setSlidesImageLoaded] = useState<boolean[]>(
    new Array(slidesData.length).fill(false)
  );

  const setSlideImageLoaded = (index: number, loaded: boolean) => {
    setSlidesImageLoaded((prevSlidesImageLoaded) =>
      prevSlidesImageLoaded.map((isLoaded, i) =>
        i === index ? loaded : isLoaded
      )
    );
  };

  const viewportWidth = useViewport();

  const isMobileView = viewportWidth <= 450;

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
        delay: 5000,
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
            style={{ width: "100vw", height: isMobileView ? "100vh" : "85vh" }}
            className="relative swiper-zoom-container"
          >
            <LoadingSpinner visible={!slidesImageLoaded[index]} />
            <Image
              src={slide.imageUrl}
              alt={`Slider ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="brightness-30 opacity-100"
              // loading="eager"
              loading="lazy"
              onLoadingComplete={() => setSlideImageLoaded(index, true)}
              // priority
            />
            {slidesImageLoaded[index] && (
              <div
                className={`padding-container text-main z-50 transition-opacity duration-500 content-container ${
                  slidesImageLoaded[index] && currentSlide === index
                    ? "animate-up"
                    : ""
                }`}
              >
                <h2 className="text-xl md:text-3xl font-semibold text-white uppercase">
                  {slide.title}
                </h2>
                <h2 className="text-5xl md:text-6xl font-bold text-white uppercase py-8">
                  {index === 0 && 
                    <>
                      Pelican<span className="text-secondary"> Holdings</span>
                    </>
                  }
                  {index === 1 && 
                    <>
                      Bitumen and
                      <span className="text-secondary"> Bituminous</span>
                      <br />
                      Products
                    </>
                  }
                  {index === 2 && 
                    <>
                      <span>Powering Industries with</span>
                      <br />
                      <span className="text-secondary">Efficiency</span>
                    </>
                  }
                  {index === 3 && 
                    <>
                      <span className="text-secondary">Streamlining </span><span>Supply Chain</span>
                      <br />
                      <span>Solutions</span>
                    </>
                  }
                  {index === 4 && 
                    <>
                      <span className="text-secondary">Connecting </span><span>Global Markets</span>
                      <br />
                      <span>Efficiently</span>
                    </>
                  }
                  {index === 5 && 
                    <>
                      <span className="text-secondary">Explore </span><span>the World with</span>
                      <br />
                      <span>Ease</span>
                    </>
                  }
                </h2>
                <p className="text-md text-lg text-white font-semibold px-6">
                  {slide.description}
                </p>
              </div>
            )}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BigSlider;
