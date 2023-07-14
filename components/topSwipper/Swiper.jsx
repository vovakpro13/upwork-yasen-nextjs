"use client";

import React, {useEffect, useState} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper";
import Image from "next/image";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/mousewheel";
import "./swiper.css";
import "swiper/css";

const MySwiper = () => {
  const [slideCount, setSlideCount] = useState(0); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9
  const [scrollValue, setScrollValue] = useState(2);
  const [activeIndex, setActiveIndex] = useState(0); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9
  const [windowWidthState, setWindowWidthState] = useState(''); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9
  // console.log(slideCount);
  // console.log(scrollValue);
  //   const handleSlideChange = (swiper) => {

  // setActiveIndex(swiper.activeIndex);
  //   };

  const windowWidth = window.innerWidth;
  useEffect(() => {
    setWindowWidthState(windowWidth)
  }, [windowWidthState])
  console.log('windowWidth', windowWidthState)
  const handleChange = (swiper) => {
    console.log(swiper.realIndex);
    setActiveIndex(swiper.realIndex);
    setScrollValue((700 / slideCount) * swiper.realIndex);
    if(windowWidthState >= 1100) {
      setScrollValue((700 / slideCount) * swiper.realIndex);
    } else {
      setScrollValue((380 / slideCount) * swiper.realIndex);
    }
    // console.log(scrollValue);
  };
  console.log(activeIndex);
  return (
    <>
      <div className="scrool swiper-scroll w-full flex justify-end items-center">
        <div className="line relative swiper-line">
          <Image src="/Group 159.svg" alt="scroll" width={230} height={6} className="swiper-line-img" />
          <Image
            src="/Group 160.svg"
            alt="circle"
            width={27}
            height={27}
            className={`absolute bottom-0 transition-all duration-500 ease-in-out swiper-circle`}
            style={{
              transform: `translateX(${scrollValue + 220 / slideCount}px)`,
            }}
          />
        </div>
        <div className="swiper-control-wrap flex">
          <div className="swiper-count flex ml-5 gap-3">
            <Image src="/arrow.svg" alt="scroll" width={13} height={2} />
            <p className="text-2xl font-medium">
              <span className="text-primary"> {activeIndex + 1}</span>/
              {slideCount}
            </p>
            <Image src="/arrowr.svg" alt="arrow" width={13} height={2} />
          </div>
          <div className=" relative flex">
            <Image
                src="flick-to-left 3.svg"
                alt="scroll"
                width={63}
                height={56}
                className="finger"
            />
          </div>
        </div>
      </div>
      <Swiper
        onActiveIndexChange={handleChange}
        modules={[Navigation, Pagination, Scrollbar]}
        loop={true}
        mousewheel={true}
        spaceBetween={20}
        slidesPerView={3}
        navigation
        // pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => setSlideCount(swiper.slides.length)}
        className="!h-[450px] !w-full "
      >
        <SwiperSlide
          className={`${
            activeIndex == 0 ? "active-slide " : "topslide "
          } bg-red-700 `}
        >
          <Image
              src="/portfolio/slide-1-big.png"
              alt="slide"
              width={100}
              height={100}
              className="slide"
          />
        </SwiperSlide>
        <SwiperSlide
          className={`${
            activeIndex == 1 ? "active-slide " : "topslide "
          } bg-red-700 `}
        >
          Slide
        </SwiperSlide>
        <SwiperSlide
          className={`${
            activeIndex == 2 ? "active-slide " : "topslide "
          } bg-red-700 `}
        >
          Slide
        </SwiperSlide>
        <SwiperSlide
          className={`${
            activeIndex == 3 ? "active-slide " : "topslide "
          } bg-red-700 `}
        >
          Slide
        </SwiperSlide>
        <SwiperSlide
          className={`${
            activeIndex == 4 ? "active-slide " : "topslide "
          } bg-red-700 `}
        >
          Slide
        </SwiperSlide>
        <SwiperSlide
          className={`${
            activeIndex == 5 ? "active-slide " : "topslide "
          } bg-red-700 `}
        >
          Slide
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default MySwiper;
