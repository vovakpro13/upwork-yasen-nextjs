"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { titleAnimation } from "@/animations/titleAnimation";

function GuaranteeSection() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.5, once: true }}
      className="guarantee-section-wrapper w-full h-[253px] sm:h-[376px] xl:h-[575px] flex flex-col justify-start items-center bg-[#F3F8F3] px-[16px] lg:px-32 mb-[50px] mt-[50px] sm:mt[78px] xl:mt-[140px] pt-[27px] xl:pt-[65px] relative"
    >
      <div className="relative z-10 w-full flex justify-center">
        <Image
          src="/blackdots.svg"
          alt="dots"
          width={94}
          height={81}
          className="absolute left-0 top-0 sm:[68px] xl:[94px] guarantee-section-decor"
        />
        <Image
          src="/start.png"
          alt="badge"
          width={148}
          height={220}
          className="w-[55px] sm:w-[80px] xl:w-[173px] top-badge"
        />
      </div>
      <motion.p
        variants={titleAnimation}
        custom={1}
        className="text-[54px] sm:text-[100px] xl:text-[236px] text-[#DEEBE7] font-bold relative bottom-4 sm:bottom-10 xl:bottom-40 z-0"
      >
        GUARANTEE
      </motion.p>
      <p className="guarantee-desc relative bottom-20 sm:bottom-40 xl:bottom-96 text-center max-w-[1380px] text-xs sm:text-[22px] xl:text-4xl leading-[22px] sm:leading-[26.82px] xl:leading-[54px] ">
        <motion.span variants={titleAnimation} custom={2}>
          При закупуване на пакет{" "}
          <motion.span
            variants={titleAnimation}
            custom={3}
            className="text-primary"
          >
            {" "}
            ПРЕМИУМ и УЛТРА
          </motion.span>{" "}
          , ние се ангажираме с писмена гаранция,{" "}
          <motion.span
            variants={titleAnimation}
            custom={4}
            className="underline"
          >
            ча ще работим с Вас,
          </motion.span>{" "}
          до момента, в който сайть Ви не възвърне инвестицията по изработката
          му,{" "}
          <motion.span
            variants={titleAnimation}
            custom={5}
            className="underline"
          >
            под формата на продажби.
          </motion.span>
        </motion.span>
      </p>
      <div className="w-full absolute left-0 top-9 overflow-hidden z-0">
        <div className="waves h-[550px] w-[3200px] relative z-0">
          <Image
            src="/wawes.webp"
            alt="wave"
            width={5690}
            height={550}
            className="absolute w-[5690px] max-h-[550px] z-0"
          />
        </div>
      </div>{" "}
    </motion.div>
  );
}

export default GuaranteeSection;
