"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { useState } from "react";
import "./bottomSwiper.css";
import "swiper/css";

const BottomSwiper = () => {
  const [activeIndex, setActiveIndex] = useState(0); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9
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
          slidesPerView: 5
      },
  };
  const handleChange = (swiper) => {
    console.log(swiper.realIndex);
    setActiveIndex(swiper.realIndex);
  };
  console.log(activeIndex);
  return (
    <>
      <div className="finger-packges-slider relative flex">
        <Image src="/flick-to-left 3.svg" alt="scroll" width={63} height={56} className="finger"/>
      </div>
      <Swiper
        // loop={true}
        freeMode={true}
        mousewheel={true}
        spaceBetween={10}
        slidesPerView={1}
        breakpoints={breakpoints}
        onActiveIndexChange={handleChange}
        className="!w-full !flex !justify-between swiper-bottom"
      >
        <SwiperSlide className="!h-96 px-6 !bg-white">
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

          <p className="flex gap-4 mt-6 ">
            <span className="font-montserrat font-semibold text-2xl">01.</span>
            <span className="font-donpoligrafbum text-primary font-bold text-xl slide-title">
              QUESTIONNAIRE{" "}
            </span>
          </p>
          <p className="text-lg font-semibold mt-6 leading-7 w-96 slide-description">
            It is a long established{" "}
            <span className="underline font-bold">
              fact that a reader will be distracted
            </span>{" "}
            by the readable content of a page when looking at its layout.
            <span className="underline">The point of using Lorem Ipsum</span>
          </p>
        </SwiperSlide>
        <SwiperSlide className="!h-96 px-6 !bg-white">
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

          <p className="flex gap-4 mt-6 ">
            <span className="font-montserrat font-semibold text-2xl">02.</span>
            <span className="font-donpoligrafbum text-primary font-bold text-xl slide-title">
              wireframe{" "}
            </span>
          </p>
          <p className="text-lg font-semibold mt-6 leading-7 w-96 slide-description">
            It is a long established{" "}
            <span className="underline font-bold">
              fact that a reader will be distracted
            </span>{" "}
            by the readable content of a page when looking at its layout.
            <span className="underline">The point of using Lorem Ipsum</span>
          </p>
        </SwiperSlide>
        <SwiperSlide className="!h-96 px-6 !bg-white">
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

          <p className="flex gap-4 mt-6 ">
            <span className="font-montserrat font-semibold text-2xl">03.</span>
            <span className="font-donpoligrafbum text-primary font-bold text-xl slide-title">
              copywriting{" "}
            </span>
          </p>
          <p className="text-lg font-semibold mt-6 leading-7 w-96 slide-description">
            <p className="text-primary text-xl mb-2 -mt-2">No AI</p>
            It is a long established{" "}
            <span className="underline font-bold">
              fact that a reader will be distracted
            </span>{" "}
            by the readable content of a page when looking at its layout.
            <span className="underline">The point of using Lorem Ipsum</span>
          </p>
        </SwiperSlide>
        <SwiperSlide className="!h-96 px-6 !bg-white">
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

          <p className="flex gap-4 mt-6 ">
            <span className="font-montserrat font-semibold text-2xl">04.</span>
            <span className="font-donpoligrafbum text-primary font-bold text-xl slide-title">
              FIGMA DESIGN{" "}
            </span>
          </p>
          <p className="text-lg font-semibold mt-6 leading-7 w-96 slide-description">
            <p className="text-primary text-xl mb-2 -mt-2">From scratch optimized for CRO</p>
            It is a long established{" "}
            <span className="underline font-bold">
              fact that a reader will be distracted
            </span>{" "}
            by the readable content of a page when looking at its layout.
            <span className="underline">The point of using Lorem Ipsum</span>
          </p>
        </SwiperSlide>
        <SwiperSlide className="!h-96 px-6 !bg-white">
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

          <p className="flex gap-4 mt-6 ">
            <span className="font-montserrat font-semibold text-2xl">05.</span>
            <span className="font-donpoligrafbum text-primary font-bold text-xl slide-title">
              VIDEO{" "}
            </span>
          </p>
          <p className="text-lg font-semibold mt-6 leading-7 w-96 slide-description">
            <p className="text-primary text-xl mb-2 -mt-2">With/without tutor</p>
            It is a long established{" "}
            <span className="underline font-bold">
              fact that a reader will be distracted
            </span>{" "}
            by the readable content of a page when looking at its layout.
            <span className="underline">The point of using Lorem Ipsum</span>
          </p>
        </SwiperSlide>
        <SwiperSlide className="!h-96 px-6 !bg-white">
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

          <p className="flex gap-4 mt-6 ">
            <span className="font-montserrat font-semibold text-2xl">06.</span>
            <span className="font-donpoligrafbum text-primary font-bold text-xl slide-title">
              development{" "}
            </span>
          </p>
          <p className="text-lg font-semibold mt-6 leading-7 w-96 slide-description">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.{" "}
            The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
          </p>
        </SwiperSlide>
        <SwiperSlide className="!h-96 px-6 !bg-white">
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

          <p className="flex gap-4 mt-6 ">
            <span className="font-montserrat font-semibold text-2xl">07.</span>
            <span className="font-donpoligrafbum text-primary font-bold text-xl slide-title">
              SEO & SPEED{" "}
            </span>
          </p>
          <p className="text-lg font-semibold mt-6 leading-7 w-96 slide-description">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using
            Content here, content here', making it look like readable English.
          </p>
        </SwiperSlide>
        <SwiperSlide className="!h-96 px-6 !bg-white">
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

          <p className="flex gap-4 mt-6 ">
            <span className="font-montserrat font-semibold text-2xl">08.</span>
            <span className="font-donpoligrafbum text-primary font-bold text-xl slide-title">
              SOCIAL MEDIA GOOGLE ADS FB ADS IG ADS
TIK TOK{" "}
            </span>
          </p>
          <p className="text-lg font-semibold mt-6 leading-7 w-96 slide-description">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
            Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
          </p>
        </SwiperSlide>
        <SwiperSlide className="!h-96 px-6 !bg-white">
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

          <p className="flex gap-4 mt-6 ">
            <span className="font-montserrat font-semibold text-2xl">09.</span>
            <span className="font-donpoligrafbum text-primary font-bold text-xl slide-title">
              FURTHER IMPROVEMENT & OPTIMIZATION
            </span>
          </p>
          <p className="text-lg font-semibold mt-6 leading-7 w-96 slide-description">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
            Distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
          </p>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default BottomSwiper;
