"use client";

import React, {useEffect, useRef, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination, Scrollbar} from "swiper";
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
    const [windowWidthState, setWindowWidthState] = useState(0);
    const slides = [
        {
            id: 0,
            imageBig: '/portfolio/slide-1-big.png',
            imageSmall: '/portfolio/slide-1-small.png',
        },
        {
            id: 1,
            imageBig: '/portfolio/slide-2-big.png',
            imageSmall: '/portfolio/slide-2-small.png',
        },
        {
            id: 2,
            imageBig: '/portfolio/slide-3-big.png',
            imageSmall: '/portfolio/slide-3-small.png',
        },
        {
            id: 3,
            imageBig: '/portfolio/slide-4-big.png',
            imageSmall: '/portfolio/slide-4-small.png',
        },
        {
            id: 4,
            imageBig: '/portfolio/slide-5-big.png',
            imageSmall: '/portfolio/slide-5-small.png',
        },
        {
            id: 5,
            imageBig: '/portfolio/slide-6-big.png',
            imageSmall: '/portfolio/slide-6-small.png',
        },
        {
            id: 6,
            imageBig: '/portfolio/slide-7-big.png',
            imageSmall: '/portfolio/slide-7-small.png',
        },
        {
            id: 7,
            imageBig: '/portfolio/slide-8-big.png',
            imageSmall: '/portfolio/slide-8-small.png',
        },
    ];

    // const [activeSlide, setActiveSlide] = useState(slides[0]);

    const breakpoints = {
        640: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        },
        1377: {
            slidesPerView: 4
        },
        1600: {
            slidesPerView: 5.5
        },
    };

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


    // const slideWidth = 260; // Ширина кожного слайда (в пікселях)
    // const containerWidth = windowWidthState; // Ширина контейнера слайдера (в пікселях)
    // const slidesPerView = Math.floor(containerWidth / slideWidth); // Розрахунок кількості видимих слайдів
    useEffect(() => {
        if (typeof window !== 'undefined') {
            // Code that references the window object
            // ...
            const windowWidth = window.innerWidth;
            setWindowWidthState(windowWidth)
        }
    }, [windowWidthState])

    const   handleChange = (swiper) => {
        console.log(swiper.realIndex);
        setActiveIndex(swiper.realIndex);
        setScrollValue((700 / slideCount) * swiper.realIndex);
        if (windowWidthState >= 1100) {
            setScrollValue((700 / slideCount) * swiper.realIndex);
        } else if(windowWidthState < 1100 && windowWidthState > 700) {
            setScrollValue((380 / slideCount) * swiper.realIndex);
        } else {
            setScrollValue((302 / slideCount) * swiper.realIndex);
        }
        // console.log(scrollValue);
    };
    // console.log(activeIndex);
    return (
        <>
            <div className="scrool swiper-scroll w-full flex justify-end items-center">
                <div className="line relative swiper-line">
                    <Image src="/Group 159.svg" alt="scroll" width={230} height={6} className="swiper-line-img"/>
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
                        <Image src="/arrow.svg" alt="scroll" className="custom-prev" onClick={goPrev}width={13} height={2}/>
                        <p className="text-2xl font-medium self-center swiper-count-number">
                            <span className="text-primary"> {activeIndex + 1}</span>/
                            {slideCount}
                        </p>
                        <Image src="/arrowr.svg" alt="arrow" className="custom-next" onClick={goNext} width={13} height={2}/>
                    </div>
                    <div className="wrap-pic-hand relative flex">
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
                // loop={true}
                mousewheel={true}
                spaceBetween={10}
                // slidesPerView={slidesPerView}
                initialSlide={1}
                centeredSlides={true}
                navigation={{
                    prevEl: '.custom-prev',
                    nextEl: '.custom-next',
                }}
                breakpoints={breakpoints}
                // pagination={{ clickable: true }}
                // scrollbar={{draggable: true}}
                scrollbar={{ hide: true }}
                onSwiper={(swiper) => setSlideCount(swiper.slides.length)}
                className="!h-[480px] !w-full portfolio-slider"
            >

                {slides.map((slide) => (
                    <SwiperSlide key={slide} className={`${
                        activeIndex === slide.id ? "active-slide " : "topslide "
                    } `}>
                        <Image
                            src={activeIndex === slide.id ? slide.imageBig : slide.imageSmall}
                            alt="slide"
                            width={activeIndex === slide.id ? 770 : 260}
                            height={480}
                            className="slide"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default MySwiper;
