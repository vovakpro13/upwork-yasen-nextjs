"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Wolf from "./ui/Wolf";
import AnimatedWaves from "./ui/AnimatedWaves";
import AnimatedLink from "./AnimatedLink";
import { titleAnimation } from "@/animations/titleAnimation";
import "./components.css";

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
      <div className="top-container-wrapper w-full h-screen-top-section relative flex flex-col-reverse xl:flex-row justify-end font-poppins text-white px-[16px] lg:px-32">
        <div className="left-container relative xl:w-6/12 flex flex-col justify-between left-container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3, once: true }}
            className="text-container text-container-custom relative flex flex-col justify-between xl:mt-0 z-50 pt-2.5"
          >
            <motion.p
              variants={titleAnimation}
              custom={1}
              className="text-primary font-semibold font-montserrat left-container-text-top"
            >
              Ние създаваме от нулата
            </motion.p>
            <div className="big-text-container font-donpoligrafbum h-fit flex flex-col justify-between text-gold  font-bold text-[15px] sm:text-xl lg:text-2xl xl:text-4xl mt-8">
              <h1 className="title-h1">
                <motion.span
                  variants={titleAnimation}
                  custom={2}
                  className="block"
                >
                  ЛЕНДИНГ СТРАНИЦИ
                </motion.span>
                <motion.span
                  variants={titleAnimation}
                  custom={3}
                  className="translate-x-9 sm:translate-x-14 lg:translate-x-[140px] block"
                >
                  ОНЛАЙН МАГАЗИНИ
                </motion.span>
                <motion.span
                  variants={titleAnimation}
                  custom={4}
                  className="lg:translate-x-[31px] block"
                >
                  УЕБ САЙТОВЕ
                </motion.span>
              </h1>
            </div>
            <motion.p
              variants={titleAnimation}
              custom={5}
              className="font-montserrat mt-8 xl:leading-[50px] text-primary sm:text-[16px] lg:text-[36px] text-caption xl:font-light max-w-xs sm:max-w-md lg:max-w-[570px] xl:max-w-[620px] title-text"
            >
              И ще работим с Вас, до момента, в който сайта Ви започне да прави
              пари!
            </motion.p>
          </motion.div>
          <div className="buttons-container relative w-full h-[40px] sm:h-[55px] xl:w-72 flex lg:hidden justify-between items-center z-30 ">
            <AnimatedLink
              classname="relative z-0 px-[13px] header-btn top-[4px] transition-all duration-100"
              href="#"
            >
              <hr className="nav-button h-24 -top-5 w-0 absolute z-0 border-primary border-t-[3px] rounded-sm " />
              <span className="header-btn__border absolute left-0 top-0">
                <Image
                  src="/call.svg"
                  width={24}
                  height={24}
                  alt="button"
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
              <span className="header-btn__text font-montserrat">
                КОНСУЛТАЦИЯ
              </span>
            </AnimatedLink>
            <AnimatedLink
              classname="relative z-0 px-[13px] header-btn top-[4px] transition-all duration-100"
              href="#form-section"
            >
              <hr className="nav-button h-24 -top-5 w-0 absolute z-0 border-primary border-t-[3px] rounded-sm " />
              <span className="header-btn__border absolute left-0 top-0">
                <Image
                  src="/document.svg"
                  width={24}
                  height={24}
                  alt="button"
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
              <span className="header-btn__text font-montserrat">
                БЕЗПЛАТЕН ОДИТ
              </span>
            </AnimatedLink>
          </div>
        </div>

        <div className="right-container right-container-custom relative xl:-top-24 z-10 h-2/6 xl:h-5/6 flex items-center w-full xl:translate-y-8 xl:w-6/12 cursor-pointer">
          <div className="wolf-container w-full h-full -translate-y-5 lg:-top-10 flex items-center xl:items-start justify-center overflow-hidden">
            <Wolf />
          </div>
        </div>

        <AnimatedWaves />
      </div>
      <Image
        src="/Vector 18.svg"
        alt="vector"
        width={1667}
        height={566}
        className="green-light absolute  -bottom-11 lg:-bottom-40 xl:-bottom-[430px] -left-1 z-0 select-none"
      />
      <Image
        src="/Vector 19.png"
        alt="greenlight"
        width={1098}
        height={593}
        className="green-light absolute top-0 right-0 z-0 select-none"
      />
      <Image
        src="/vline.svg"
        alt="vline"
        width={10}
        height={950}
        className="vline absolute -bottom-[1150px] xl:-bottom-[1020px] right-[57%] -translate-x-11 sm:-translate-x-8 xl:-translate-x-32 z-0 select-none"
      />
      <Image
        src="/Vector.svg"
        alt="vector"
        width={94}
        height={81}
        className="dots hidden xl:block absolute bottom-0 left-[21%] z-10 select-none"
      />
    </section>
  );
};

export default HeadSection;
