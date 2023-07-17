"use client";

import Image from "next/image";
import MySwiper from "./topSwipper/Swiper";

const SecondSection = () => {
  return (
    <div className="font-montserrat w-full portfolio-title-wrap">
      <section className="px-9 lg:px-32 pt-16 xl:pt-40 xl:flex xl:justify-between">
        <div className="left-container w-full xl:w-4/12">
          <p className="flex gap-3 lg:gap-4">
            {" "}
            <span
              className="underline font-light portfolio-title-our relative"
            >
              our
            </span>{" "}
            <span
              className="text-gold font-donpoligrafbum portfolio-title-text"
            >
              Port
            </span>
            <span className="font-bold relative portfolio-title-tire">
              {" "}
              _
            </span>
          </p>
          <p
            className="text-gold gold-underline font-donpoligrafbum w-40 translate-x-40 lg:translate-x-44 -translate-y-5 lg:-translate-y-10 portfolio-title-text folio"
          >
            Folio
          </p>
        </div>
        <div className="right-container w-full xl:w-7/12 flex">
          <div
            className="portfolio-title-desc-icon"
          >
            <Image
              src="/portfolio-icon.png"
              alt="logo"
              width={140}
              height={180}
            />
          </div>
          <p
            className=" underline font-semibold portfolio-title-desc w-full xl:max-w-4xl "
          >
            Here our competetors put fake client reviews.{" "}
            <span className="green-underline text-[#44937D] ">
              Instead of doing this, we encourage you to call ANY of our previous clients over the phone and ask them did we completed the project successfully.
            </span> Their websites are all listed in the portfolio section.{" "}
          </p>
        </div>
      </section>
      <div className="relative z-10">
        {/* <AnimatedWaves /> */}
        <MySwiper />
      </div>
    </div>
  );
};

export default SecondSection;
