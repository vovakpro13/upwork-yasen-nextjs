"use client";

import React, {useEffect, useRef, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination, Scrollbar} from "swiper";
import Image from "next/image";
import Link from "next/link";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/mousewheel";
import "./swiper.css";
import "swiper/css";
const slides = [
    {
        id: 0,
        imageBig: '/portfolio/slide-1-big.png',
        imageSmall: '/portfolio/slide-1-small.png',
        infoFlag: '/portfolio/flag1.svg',
        infoTitle: 'UAI. Underwater acoustics international',
        infoDescription: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
        link: 'https://www.facebook.com/',
        technologies: 'HTML, CSS, NODE JS, React JS',
    },
    {
        id: 1,
        imageBig: '/portfolio/slide-2-big.png',
        imageSmall: '/portfolio/slide-2-small.png',
        infoFlag: '/portfolio/flag1.svg',
        infoTitle: 'Бира Батя Прошек',
        infoDescription: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
        link: 'https://www.facebook.com/',
        technologies: 'HTML, CSS, NODE JS, React JS',
    },
    {
        id: 2,
        imageBig: '/portfolio/slide-3-big.png',
        imageSmall: '/portfolio/slide-3-small.png',
        infoFlag: '/portfolio/flag2.svg',
        infoTitle: 'Loren Networks',
        infoDescription: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
        link: 'https://www.facebook.com/',
        technologies: 'HTML, CSS, NODE JS, React JS',
    },
    {
        id: 3,
        imageBig: '/portfolio/slide-4-big.png',
        imageSmall: '/portfolio/slide-4-small.png',
        infoFlag: '/portfolio/flag1.svg',
        infoTitle: 'Grand Royale',
        infoDescription: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
        link: 'https://www.facebook.com/',
        technologies: 'HTML, CSS, NODE JS, React JS',
    },
    {
        id: 4,
        imageBig: '/portfolio/slide-5-big.png',
        imageSmall: '/portfolio/slide-5-small.png',
        infoFlag: '/portfolio/flag1.svg',
        infoTitle: 'MyCopywriter.io',
        infoDescription: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
        link: 'https://www.facebook.com/',
        technologies: 'HTML, CSS, NODE JS, React JS',
    },
    {
        id: 5,
        imageBig: '/portfolio/slide-6-big.png',
        imageSmall: '/portfolio/slide-6-small.png',
        infoFlag: '/portfolio/flag1.svg',
        infoTitle: 'GD Media Ltd.',
        infoDescription: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
        link: 'https://www.facebook.com/',
        technologies: 'HTML, CSS, NODE JS, React JS',
    },
    {
        id: 6,
        imageBig: '/portfolio/slide-7-big.png',
        imageSmall: '/portfolio/slide-7-small.png',
        infoFlag: '/portfolio/flag1.svg',
        infoTitle: 'Conso4s',
        infoDescription: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
        link: 'https://www.facebook.com/',
        technologies: 'HTML, CSS, NODE JS, React JS',
    },
    {
        id: 7,
        imageBig: '/portfolio/slide-8-big.png',
        imageSmall: '/portfolio/slide-8-small.png',
        infoFlag: '/portfolio/flag1.svg',
        infoTitle: 'Beatclub',
        infoDescription: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
        link: 'https://www.facebook.com/',
        technologies: 'HTML, CSS, NODE JS, React JS',
    },
    {
        id: 8,
        imageBig: '/portfolio/slide-9-big.png',
        imageSmall: '/portfolio/slide-9-small.png',
        infoFlag: '/portfolio/flag1.svg',
        infoTitle: 'Camissafashion',
        infoDescription: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
        link: 'https://www.facebook.com/',
        technologies: 'HTML, CSS, NODE JS, React JS',
    },
];
const breakpoints = {
    640: {
        slidesPerView: 1.5
    },
    768: {
        slidesPerView: 2.5
    },
    1024: {
        slidesPerView: 3.5
    },
    1377: {
        slidesPerView: 4.5
    },
    1600: {
        slidesPerView: 5.5
    },
    1900: {
        slidesPerView: 6.5
    },
    2200: {
        slidesPerView: 7.5
    },
};
const MySwiper = () => {
    const [slideCount, setSlideCount] = useState(0); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9
    const [scrollValue, setScrollValue] = useState(2);
    const [activeIndex, setActiveIndex] = useState(0); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9
    const [windowWidthState, setWindowWidthState] = useState(0);

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
        if (typeof window !== 'undefined') {
            // Code that references the window object
            // ...
            const windowWidth = window.innerWidth;
            setWindowWidthState(windowWidth)
        }
    }, [windowWidthState])

    const   handleChange = (swiper) => {
        console.log('i', swiper.realIndex);
        setActiveIndex(swiper.realIndex);
        setScrollValue((700 / slideCount) * swiper.realIndex);
        if (windowWidthState >= 1100) {
            setScrollValue((700 / slideCount) * swiper.realIndex);
        } else if(windowWidthState < 1100 && windowWidthState > 700) {
            setScrollValue((380 / slideCount) * swiper.realIndex);
        } else {
            setScrollValue((302 / slideCount) * swiper.realIndex);
        }
    };
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
                mousewheel={true}
                spaceBetween={10}
                initialSlide={1}
                centeredSlides={true}
                navigation={{
                    prevEl: '.custom-prev',
                    nextEl: '.custom-next',
                }}
                breakpoints={breakpoints}
                scrollbar={{ hide: true }}
                onSwiper={(swiper) => setSlideCount(swiper.slides.length)}
                className="!h-[480px] !w-full portfolio-slider"
            >

                {slides.map((slide) => (
                    <SwiperSlide key={slide} className={`${
                        activeIndex === slide.id ? "active-slide " : "topslide "
                    } relative`}>
                        <img className="slide" src={slide.imageBig} alt="slide" width={activeIndex === slide.id ? 770 : 260} height={480} />
                        <div className={`${slide.id === 4 || slide.id === 5 || slide.id === 6 || slide.id === 8 ? 'technologies-white-text' : ''} block-technologies font-montserrat absolute top-[50px] left-[40px]`}>
                            <div className="block-technologies-title">Technologies</div>
                            <div className="block-technologies-desc">{slide.technologies}</div>
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
                                    <h3 className={activeIndex === slide.id ? 'text-[24px]' : 'text-[14px]'}>{slide.infoTitle}</h3>
                                </div>
                                <div className="info-description">
                                    {activeIndex === slide.id ? slide.infoDescription : `${slide.infoDescription.slice(0, 46)}...`}
                                </div>
                            </div>
                            {activeIndex === slide.id && <Link href={slide.link} type="submit"
                                                               className="w-full relative px-3 font-montserrat text-[26px] text-[#1E1E1E] focus:outline-none link-portfolio">
                                <Image
                                    src="/portfolio/btn.svg"
                                    alt="rectangle"
                                    width={150}
                                    height={60}
                                    className="link-portfolio-icon"
                                />
                            </Link>}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default MySwiper;
