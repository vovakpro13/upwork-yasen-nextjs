"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import BottomSwiper from "./bottomSwipper/BottomSwipper";
import { titleAnimation } from "@/animations/titleAnimation";

function ThirdSection() {
  return (
    <section className="pb-[90px] third-section" id="process">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.5, once: true }}
        className="w-full px-[16px] lg:px-32 lg:px-[133px] mb-10 experience-wrap"
      >
        <div className="title-container-third w-full font-donpoligrafbum text-sm sm:text-xl lg:text-[35px] xl:text-[45px] xl:leading-[65px] lg:leading-[55px] sm:leading-[45px] leading-[32px] font-bold text-right">
          <motion.h2 variants={titleAnimation} custom={1} className="w-full">
            <span className="text-gold gold-underline">Ние създаваме </span>{" "}
            <span className="no-underline text-black">не просто сайт,</span>
          </motion.h2>
          <div className="relative w-full ">
            <Image
              src="/Vector.svg"
              alt="vector"
              width={30}
              height={26}
              className="dots absolute bottom-0 sm:-bottom-3 -left-9 sm:w-[68px] lg:-left-32 "
            />
            <motion.h2
              variants={titleAnimation}
              custom={2}
              className=" text-gold gold-underline"
            >
              а инструмент за увеличаване{" "}
            </motion.h2>
          </div>
          <motion.h2 variants={titleAnimation} custom={3} className="w-full">
            {" "}
            <span>на продажбите на</span>{" "}
            <span className="text-gold gold-underline">бизнеса Ви</span>{" "}
          </motion.h2>
        </div>
        <motion.div
          variants={titleAnimation}
          custom={4}
          className="info-container relative h-[106px] sm:h-[152px] xl:h-[210px] w-full font-montserrat flex flex-col justify-between items-end border-r-[1px] border-primary mt-5 xl:mt-[60px] pr-3 sm:pr-6 "
        >
          <p className="info-container-text w-[80%]  text-end font-semibold xl:font-normal xl:leading-[52px] sm:text-[22px] xl:text-[46px] ">
            Това, което ни отличава от конкуренцията е персонализиран подход към
            всеки клиент.”
          </p>
          <p className="text-end text-end-custom font-medium ">
            Вижте нашият процес на работа
          </p>
          <Image
            src="/Rectangle 15.svg"
            alt="rectangle"
            width={8}
            height={8}
            className="absolute top-0 -right-1 "
          />
          <Image
            src="/Rectangle 15.svg"
            alt="rectangle"
            width={8}
            height={8}
            className="absolute bottom-0 -right-1 "
          />
        </motion.div>
      </motion.div>
      <BottomSwiper />
    </section>
  );
}

export default ThirdSection;
