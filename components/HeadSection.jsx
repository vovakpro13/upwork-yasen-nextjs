"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Wolf from "./ui/Wolf";
import AnimatedWaves from "./ui/AnimatedWaves";
import './components.css'
const HeadSection = () => {
  return (
    <section className="section-wrapper bg-[#121212] relative">
      <div className="scroll absolute -bottom-5 sm:-bottom-5 lg:-bottom-[18px] scroll-action">
        <Image
            src="Rectangle 1105.svg"
            alt="scroll"
            width={70}
            height={96}
            className="scroll-icon"
        />
        <Image
            src="Group 156.svg"
            alt="arrow"
            width={22}
            height={33}
            className="relative arrow -top-[77px] left-[23px] animate-bounce-arrow h-12"
        />
      </div>
      <div className="top-container-wrapper w-full h-screen-top-section relative flex flex-col-reverse xl:flex-row justify-end font-poppins text-white px-9 lg:px-32">

        <div className="left-container relative xl:w-6/12 flex flex-col justify-between left-container-custom">
          <div className="text-container text-container-custom relative flex flex-col justify-between xl:mt-0 z-50 pt-2.5">
            <p className="text-primary font-semibold font-montserrat left-container-text-top">
              Development
            </p>
            <div className="big-text-container font-donpoligrafbum h-fit flex flex-col justify-between text-gold  font-bold text-[15px] sm:text-xl lg:text-2xl xl:text-4xl mt-8">
              <h1 className="title-h1">
                <span className="block">landing pages</span>
                <span className="translate-x-9 sm:translate-x-14 lg:translate-x-[140px] block">
                online shops
                </span>
              <span className="lg:translate-x-[31px] block">websites</span></h1>
            </div>
            <p className="font-montserrat mt-8 xl:leading-[50px] text-primary sm:text-[16px] lg:text-[36px] text-caption xl:font-light max-w-xs sm:max-w-md lg:max-w-[570px] xl:max-w-[620px] title-text">
              We work with you until the site starts selling!
            </p>
          </div>
          <div className="buttons-container relative w-full h-[40px] sm:h-[55px] xl:w-72 flex lg:hidden justify-between items-center z-30 ">
              <Link href="#" className="relative z-0 px-[13px] header-btn top-[4px]">
                  <hr className="nav-button h-24 -top-5 w-0 absolute z-0 border-primary border-t-[3px] rounded-sm " />
                  <span className="header-btn__border absolute left-0 top-0">
                <Image
                    src="/call.svg"
                    alt="button"
                    width={24}
                    height={24}
                    className="absolute left-[39px] -top-[10px] icon"
                />
                <Image
                    src="/btn-border.svg"
                    alt="button"
                    width={200}
                    height={54}
                    className="w-full"
                />
              </span>
                  <span className="header-btn__text font-montserrat">Get a consultation</span>

              </Link>
              <Link href="#" className="relative z-0 px-[13px] header-btn top-[4px] -left-[4px] pr-0">
                  <hr className="nav-button h-24 -top-5 w-0 absolute z-0 border-primary border-t-[3px] rounded-sm " />
                  <span className="header-btn__border absolute left-0 top-0">
                <Image
                    src="/document.svg"
                    alt="button"
                    width={24}
                    height={24}
                    className="absolute left-[39px] -top-[10px] icon"
                />
                <Image
                    src="/btn-border.svg"
                    alt="button"
                    width={200}
                    height={54}
                    className="w-full"
                />
              </span>
                  <span className="header-btn__text font-montserrat">order a free audit</span>

              </Link>
          </div>
        </div>

        <div className="right-container right-container-custom relative xl:-top-24 z-10 h-2/6 xl:h-5/6 flex items-center w-full xl:translate-y-8 xl:w-6/12">
          <div className="wolf-container w-full h-full -translate-y-5 lg:-top-10 flex items-center xl:items-start justify-center overflow-hidden">
            <Wolf/>
            {/* <iframe
              title="Clay Wolf"
              allowFullScreen
              src="https://v.creators3d.com/index.html?load=%2Fviews%2Fproduction%2Fitem%2F20230612%2F2947770043234443%2F2947770043234443.glb&autorotate=true&json-data=1686549707993&decrypt=1&tv=147"
              width={920}
              height={850}
              className=" relative  h-[135%] sm:h-[140%] xl:h-[150%] xl:max-h-[950px] top-5 xl:top-40 2xl:top-52 xl:-right-24 z-50"
            >
              {" "}
            </iframe>{" "} */}
          </div>
        </div>

        <AnimatedWaves />
      </div>
      <Image
        src="/Vector 18.svg"
        alt="vector"
        width={1667}
        height={566}
        className="green-light absolute  -bottom-11 lg:-bottom-40 xl:-bottom-[430px] -left-1 z-0"
      />
      <Image
        src="/Vector 19.png"
        alt="greenlight"
        width={1098}
        height={593}
        className="green-light absolute top-0 right-0 z-0"
      />
      <Image
        src="/vline.svg"
        alt="vline"
        width={10}
        height={950}
        className="vline absolute -bottom-[1150px] xl:-bottom-[1020px] right-[57%] -translate-x-11 sm:-translate-x-8 xl:-translate-x-32 z-0"
      />
      <Image
          src="/Vector.svg"
          alt="vector"
          width={94}
          height={81}
          className="dots hidden xl:block absolute bottom-0 left-[21%] z-10"
      />
    </section>
  );
};

export default HeadSection;
