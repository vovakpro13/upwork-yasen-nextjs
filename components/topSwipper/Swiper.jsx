"use client";

import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper";
import Image from "next/image";
import AnimatedLink from "../AnimatedLink";
import SwiperImage from "./SwiperImage";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/mousewheel";
import "./swiper.css";
import "swiper/css";
const slides = [
  {
    id: 0,
    imageBig: "/portfolio/slide-1-big.png",
    imageSmall: "/portfolio/slide-1-small.png",
    infoFlag: "/portfolio/flag1.svg",
    infoTitle: "UAI. Underwater acoustics international",
    infoDescription: "Водещ Американски бранд за подводни изследвания",
    link: "https://uaisolutions.com/",
    technologies: "PHP, Javascript, Figma, Photoshop",
  },
  {
    id: 1,
    imageBig: "/portfolio/slide-2-big.png",
    imageSmall: "/portfolio/slide-2-small.png",
    infoFlag: "/portfolio/flag2.svg",
    infoTitle: "Бира Батя Прошек",
    infoDescription: "Българска крафт бира с история, презентационен сайт.",
    link: "https://proshek-beer.com/",
    technologies: "Photoshop, Wordpress",
  },
  {
    id: 2,
    imageBig: "/portfolio/slide-3-big.png",
    imageSmall: "/portfolio/slide-3-small.png",
    infoFlag: "/portfolio/flag2.svg",
    infoTitle: "Loren Networks",
    infoDescription: "Българска Internet of Things компания",
    link: "https://lorennetworks.com/",
    technologies: "Figma, Lottie, Wordpress",
  },
  {
    id: 3,
    imageBig: "/portfolio/slide-4-big.png",
    imageSmall: "/portfolio/slide-4-small.png",
    infoFlag: "/portfolio/flag2.svg",
    infoTitle: "Grand Royale",
    infoDescription:
      "Български СПА хотел в подножието на Пирин планина, презентационен сайт.",
    link: "https://grandroyale.bg/",
    technologies: "Wordpress, Photoshop",
  },
  {
    id: 4,
    imageBig: "/portfolio/slide-5-big.png",
    imageSmall: "/portfolio/slide-5-small.png",
    infoFlag: "/portfolio/flag2.svg",
    infoTitle: "MyCopywriter.io",
    infoDescription:
      "Личната страница на Диян, български фрииланс копирайтър от екипа на Джей Макс",
    link: "https://mycopywriter.io/",
    technologies: "Figma, Lottie, Wordpress",
  },
  {
    id: 5,
    imageBig: "/portfolio/slide-6-big.png",
    imageSmall: "/portfolio/slide-6-small.png",
    infoFlag: "/portfolio/flag2.svg",
    infoTitle: "GD Media Ltd.",
    infoDescription:
      "Портфолио от проекти на Георги, видеграф и монтажист от екипа на Джей Макс",
    link: "https://www.gdmotion.com/",
    technologies: "DaVinci Resolve, Photoshop, Illustrator",
  },
  {
    id: 6,
    imageBig: "/portfolio/slide-7-big.png",
    imageSmall: "/portfolio/slide-7-small.png",
    infoFlag: "/portfolio/flag1.svg",
    infoTitle: "Conso4s",
    infoDescription: "Софтуерна компания от Англия",
    link: "https://conso4s.com/",
    technologies: "Figma, Divi",
  },
  {
    id: 7,
    imageBig: "/portfolio/slide-8-big.png",
    imageSmall: "/portfolio/slide-8-small.png",
    infoFlag: "/portfolio/flag1.svg",
    infoTitle: "Beatclub",
    infoDescription: "Пилотен NFT проект на Timbaland",
    link: "https://beatclub.com/",
    technologies: "nextJS, Figma",
  },
  {
    id: 8,
    imageBig: "/portfolio/slide-9-big.png",
    imageSmall: "/portfolio/slide-9-small.png",
    infoFlag: "/portfolio/flag2.svg",
    infoTitle: "Camissafashion",
    infoDescription:
      "Премиум български бранд , производител на висококачествени ризи, за европейския пазар.",
    link: "https://camissafashion.com/ ",
    technologies: "Figma, WooCommerce, DaVinci Resolve, Stripe",
  },
];
const breakpoints = {
  320: {
    slidesPerView: 1.15,
    slidesOffsetBefore: 10,
    initialSlide: 0,
  },
  540: {
    slidesPerView: 1.15,
    slidesOffsetBefore: 5,
  },
  768: {
    slidesPerView: 2.5,
  },
  1024: {
    slidesPerView: 3.5,
  },
  1360: {
    slidesPerView: 3.5,
    slidesOffsetBefore: 100,
    slidesOffsetAfter: 130,
  },
  1400: {
    slidesPerView: 4.5,
    slidesOffsetBefore: 100,
    slidesOffsetAfter: 170,
  },
  1515: {
    slidesPerView: 4.5,
    slidesOffsetBefore: 140,
    slidesOffsetAfter: 100,
  },
  1600: {
    slidesPerView: 6.5,
    initialSlide: 3,
    slidesOffsetBefore: 140,
    slidesOffsetAfter: 100,
  },
  1900: {
    slidesPerView: 6.5,
    initialSlide: 4,
    slidesOffsetBefore: 300,
    slidesOffsetAfter: 100,
  },
  2200: {
    slidesPerView: 6.5,
    initialSlide: 4,
    slidesOffsetBefore: 400,
    slidesOffsetAfter: 100,
  },
  2350: {
    slidesPerView: 6.5,
    initialSlide: 4,
    slidesOffsetBefore: 600,
    slidesOffsetAfter: 100,
  },
};
const MySwiper = () => {
  const [slideCount, setSlideCount] = useState(0); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9
  const [scrollValue, setScrollValue] = useState(2);
  const [activeIndex, setActiveIndex] = useState(0); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9
  const [windowWidthState, setWindowWidthState] = useState(0);
  // const [isLoading, setIsLoading] = useState(true);
  // const [activeSlide, setActiveSlide] = useState(slides[0]);

  const swiperRef = useRef(null);

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Code that references the window object
      // ...
      const windowWidth = window.innerWidth;
      setWindowWidthState(windowWidth);
    }
  }, [windowWidthState]);

  const handleChange = (swiper) => {
    console.log("i", swiper.realIndex);
    setActiveIndex(swiper.realIndex);
    setScrollValue((700 / slideCount) * swiper.realIndex);
    if (windowWidthState >= 1100) {
      setScrollValue((700 / slideCount) * swiper.realIndex);
    } else if (windowWidthState < 1100 && windowWidthState > 700) {
      setScrollValue((380 / slideCount) * swiper.realIndex);
    } else {
      setScrollValue((302 / slideCount) * swiper.realIndex);
    }
  };
  return (
    <>
      <div className="scrool swiper-scroll w-full flex justify-end items-center">
        <div className="line relative swiper-line">
          <Image
            src="/Group 159.svg"
            alt="scroll"
            width={230}
            height={6}
            className="swiper-line-img"
          />
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
        <div className="swiper-control-wrap flex relative">
          <div className="swiper-count flex ml-5 gap-3">
            <Image
              src="/arrow.svg"
              alt="scroll"
              className="custom-prev cursor-pointer"
              onClick={goPrev}
              width={13}
              height={2}
            />
            <p className="text-2xl font-medium self-center swiper-count-number">
              <span className="text-primary"> {activeIndex + 1}</span>/
              {slideCount}
            </p>
            <Image
              src="/arrowr.svg"
              alt="arrow"
              className="custom-next cursor-pointer"
              onClick={goNext}
              width={13}
              height={2}
            />
          </div>
          <div className="wrap-pic-hand relative flex">
            <Image
              src="flick-to-left 3.svg"
              alt="scroll"
              width={63}
              height={56}
              className="finger animate-handRotate"
            />
          </div>
        </div>
      </div>
      <Swiper
        onActiveIndexChange={handleChange}
        modules={[Navigation, Pagination, Scrollbar]}
        mousewheel={true}
        spaceBetween={10}
        initialSlide={2}
        centeredSlides={true}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        breakpoints={breakpoints}
        scrollbar={{ hide: true }}
        onSwiper={(swiper) => setSlideCount(swiper.slides.length)}
        className="!h-[480px] !w-full portfolio-slider"
      >
        {slides.map((slide) => (
          <SwiperSlide
            key={slide}
            className={`${
              activeIndex === slide.id ? "active-slide " : "topslide "
            } relative`}
          >
            <SwiperImage
              source={slide.imageBig}
              text="slide"
              slide={slide}
              index={activeIndex}
              classname="slide transition-transform"
              width={activeIndex === slide.id ? 770 : 260}
              height={480}
            />
            <div
              className={`${
                slide.id === 4 ||
                slide.id === 5 ||
                slide.id === 6 ||
                slide.id === 8
                  ? "technologies-white-text"
                  : ""
              } block-technologies font-montserrat absolute top-[50px] left-[40px]`}
            >
              <div className="block-technologies-title">Технологии:</div>
              <div className="block-technologies-desc">
                {slide.technologies}
              </div>
            </div>
            <div className="info-block absolute bottom-0 flex items-center">
              <div className="info-wrap-text">
                <div className="info-title font-montserrat flex">
                  <Image
                    src={slide.infoFlag}
                    alt="slide"
                    width={28}
                    height={20}
                    className="flag"
                  />
                  <h3
                    className={
                      activeIndex === slide.id
                        ? "text-[14px] lg:text-[24px]"
                        : "text-[14px]"
                    }
                  >
                    {slide.infoTitle}
                  </h3>
                </div>
                <div className="info-description">
                  {activeIndex === slide.id
                    ? slide.infoDescription
                    : `${slide.infoDescription.slice(0, 46)}...`}
                </div>
              </div>
              {activeIndex === slide.id && (
                <AnimatedLink
                  href={slide.link}
                  classname="w-full relative px-3 font-montserrat text-[26px] text-[#1E1E1E] focus:outline-none link-portfolio transition-all duration-100"
                >
                  <Image
                    src="/portfolio/btn.svg"
                    alt="rectangle"
                    width={150}
                    height={60}
                    className="link-portfolio-icon"
                  />
                </AnimatedLink>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default MySwiper;
