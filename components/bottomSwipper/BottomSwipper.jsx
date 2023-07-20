"use client";

import {Swiper, SwiperSlide} from "swiper/react";
import Image from "next/image";
import {useState} from "react";
import "./bottomSwiper.css";
import "swiper/css";

const BottomSwiper = () => {
    const [activeIndex, setActiveIndex] = useState(0); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9
    const breakpoints = {
        320: {
            slidesPerView: 1.2
        },
        640: {
            slidesPerView: 1.5
        },
        768: {
            slidesPerView: 2.5
        },
        1024: {
            slidesPerView: 2.5
        },
        1377: {
            slidesPerView: 4.5
        },
        1600: {
            slidesPerView: 4.5
        },
        1920: {
            slidesPerView: 4.5
        },
        2200: {
            slidesPerView: 5.5
        },
    };
    const handleChange = (swiper) => {
        console.log(swiper.realIndex);
        setActiveIndex(swiper.realIndex);
    };
    console.log(activeIndex);
    return (
        <>
            <div className="finger-bottom-slider relative flex 33">
                <Image src="/flick-to-left 3.svg" alt="scroll" width={63} height={56} className="finger relative"/>
            </div>
            <Swiper
                // loop={true}
                freeMode={true}
                mousewheel={true}
                spaceBetween={24}
                slidesPerView={4}
                // centeredSlides={true}
                // slidesOffsetBefore={100}
                slidesOffsetAfter={100}

                breakpoints={breakpoints}
                onActiveIndexChange={handleChange}
                className="!w-full !flex !justify-between swiper-bottom"
            >
                <SwiperSlide className="!bg-white">
                    <Image
                        src="/Group 85.svg"
                        alt="icon"
                        width={80}
                        height={80}
                        className="mt-6 slide-icon"
                    />
                    <Image
                        src="/Vector 8 (1).svg"
                        alt="line"
                        width={202}
                        height={2}
                        className="w-1/2 "
                    />

                    <p className="items-baseline flex gap-4 mt-6 ">
                        <span className="font-montserrat font-semibold text-2xl">01.</span>
                        <span className="font-donpoligrafbum text-primary font-bold text-xl slide-title">
              QUESTIONNAIRE 
            </span>
                    </p>
                    <p className="font-montserrat text-lg font-[500] mt-6 leading-7 slide-description">
                        It is a long established
                        <span className="underline font-bold"> fact that a reader will be distracted </span> by the readable content of a page when looking at its layout.
                        <span className="underline"> The point of using Lorem Ipsum</span>
                    </p>
                </SwiperSlide>
                <SwiperSlide className="!bg-white">
                    <Image
                        src="/Group 86.svg"
                        alt="icon"
                        width={80}
                        height={80}
                        className="mt-6 slide-icon"
                    />
                    <Image
                        src="/Vector 8 (1).svg"
                        alt="line"
                        width={202}
                        height={2}
                        className="w-1/2 "
                    />

                    <p className="items-baseline flex gap-4 mt-6 ">
                        <span className="font-montserrat font-semibold text-2xl">02.</span>
                        <span className="font-donpoligrafbum text-primary font-bold text-xl slide-title">
              wireframe 
            </span>
                    </p>
                    <p className="font-montserrat text-lg font-[500] mt-6 leading-7 slide-description">
                        It is a long established
                        <span className="underline font-bold"> fact that a reader will be distracted </span> by the readable content of a page when looking at its layout.
                        <span className="underline"> The point of using Lorem Ipsum</span>
                    </p>
                </SwiperSlide>
                <SwiperSlide className="!bg-white">
                    <Image
                        src="/Group 87.svg"
                        alt="icon"
                        width={80}
                        height={80}
                        className="mt-6 slide-icon"
                    />
                    <Image
                        src="/Vector 8 (1).svg"
                        alt="line"
                        width={202}
                        height={2}
                        className="w-1/2 "
                    />

                    <p className="items-baseline flex gap-4 mt-6 ">
                        <span className="font-montserrat font-semibold text-2xl">03.</span>
                        <span className="font-donpoligrafbum text-primary font-bold text-xl slide-title">
              copywriting 
            </span>
                    </p>
                    <p className="text-lg font-[500] mt-6 leading-7 slide-description font-montserrat">
                        <p className="text-primary text-xl mb-2 -mt-2 font-semibold">No AI</p> It is a long
                        <span className="underline font-bold"> established fact that a reader will be distracted </span> by the readable content of
                        {/*<span className="underline">The point of using Lorem Ipsum</span>*/}
                    </p>
                </SwiperSlide>
                <SwiperSlide className="!bg-white">
                    <Image
                        src="/Group 87 (1).svg"
                        alt="icon"
                        width={80}
                        height={80}
                        className="mt-6 slide-icon"
                    />
                    <Image
                        src="/Vector 8 (1).svg"
                        alt="line"
                        width={202}
                        height={2}
                        className="w-1/2 "
                    />

                    <p className="items-baseline flex gap-4 mt-6 ">
                        <span className="font-montserrat font-semibold text-2xl">04.</span>
                        <span className="font-donpoligrafbum text-primary font-bold text-xl slide-title">
              FIGMA DESIGN
            </span>
                    </p>
                    <p className="text-lg font-[500] mt-6 leading-7 slide-description font-montserrat">
                        <p className="text-primary text-xl mb-2 -mt-2 font-semibold">From scratch optimized for CRO</p> It is a long
                        <span className="underline font-bold"> established fact that a reader will be distracted </span> by the readable content of
                        {/*<span className="underline">The point of using Lorem Ipsum</span>*/}
                    </p>
                </SwiperSlide>
                <SwiperSlide className="!bg-white">
                    <Image
                        src="/Group 87 (2).svg"
                        alt="icon"
                        width={80}
                        height={80}
                        className="mt-6 slide-icon"
                    />
                    <Image
                        src="/Vector 8 (1).svg"
                        alt="line"
                        width={202}
                        height={2}
                        className="w-1/2 "
                    />

                    <p className="items-baseline flex gap-4 mt-6 ">
                        <span className="font-montserrat font-semibold text-2xl">05.</span>
                        <span className="font-donpoligrafbum text-primary font-bold text-xl slide-title">
              VIDEO
            </span>
                    </p>
                    <p className="text-lg font-[500] mt-6 leading-7 slide-description font-montserrat">
                        <p className="text-primary text-xl mb-2 -mt-2 font-semibold">With/without tutor</p> It is a long
                        <span className="underline font-bold"> established fact that a reader will be distracted </span> by the readable content of
                        {/*<span className="underline">The point of using Lorem Ipsum</span>*/}
                    </p>
                </SwiperSlide>
                <SwiperSlide className="!bg-white">
                    <Image
                        src="/icon-6.svg"
                        alt="icon"
                        width={80}
                        height={80}
                        className="mt-6 slide-icon"
                    />
                    <Image
                        src="/Vector 8 (1).svg"
                        alt="line"
                        width={202}
                        height={2}
                        className="w-1/2 "
                    />

                    <p className="items-baseline flex gap-4 mt-6 ">
                        <span className="font-montserrat font-semibold text-2xl">06.</span>
                        <span className="font-donpoligrafbum text-primary font-bold text-xl slide-title">
              DEVELOPMENT
            </span>
                    </p>
                    <p className="text-lg font-[500] mt-6 leading-7 slide-description font-montserrat">
                        <p className="text-primary text-xl mb-2 -mt-2 font-semibold">Cms or not CMS</p> It is a long
                        <span className="underline font-bold"> established fact that a reader will be distracted </span> by the readable content of
                        {/*<span className="underline">The point of using Lorem Ipsum</span>*/}
                    </p>
                </SwiperSlide>
                <SwiperSlide className="!bg-white">
                    <Image
                        src="/icon-7.svg"
                        alt="icon"
                        width={80}
                        height={80}
                        className="mt-6 slide-icon"
                    />
                    <Image
                        src="/Vector 8 (1).svg"
                        alt="line"
                        width={202}
                        height={2}
                        className="w-1/2 "
                    />

                    <p className="items-baseline flex gap-4 mt-6 ">
                        <span className="font-montserrat font-semibold text-2xl">07.</span>
                        <span className="font-donpoligrafbum text-primary font-bold text-xl slide-title">
              SEO and SPEED
            </span>
                    </p>
                    <p className="text-lg font-[500] mt-6 leading-7 slide-description font-montserrat">
                        <p className="text-primary text-xl mb-2 -mt-2 font-semibold"></p> It is a long
                        <span className="underline font-bold"> established fact that a reader will be distracted </span> by the readable content of
                        {/*<span className="underline">The point of using Lorem Ipsum</span>*/}
                    </p>
                </SwiperSlide>
                <SwiperSlide className="!bg-white">
                    <Image
                        src="/icon-8.svg"
                        alt="icon"
                        width={80}
                        height={80}
                        className="mt-6 slide-icon"
                    />
                    <Image
                        src="/Vector 8 (1).svg"
                        alt="line"
                        width={202}
                        height={2}
                        className="w-1/2 "
                    />

                    <p className="items-baseline flex gap-4 mt-6 ">
                        <span className="font-montserrat font-semibold text-2xl">08.</span>
                        <span className="font-donpoligrafbum text-primary font-bold text-xl slide-title">
              social growind and ads
            </span>
                    </p>
                    <p className="text-lg font-[500] mt-6 leading-7 slide-description font-montserrat">
                        <p className="text-primary text-xl mb-2 -mt-2 font-semibold">Further improve CRO</p> It is a long
                        <span className="underline font-bold"> established fact that a reader will be distracted </span> by the readable content of
                        {/*<span className="underline">The point of using Lorem Ipsum</span>*/}
                    </p>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default BottomSwiper;
