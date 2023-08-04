"use client";

import Image from "next/image";
import MySwiper from "./topSwipper/Swiper";
import { motion } from "framer-motion";
import { titleAnimation } from "@/animations/titleAnimation";

const SecondSection = () => {
  return (
    <div className="font-montserrat w-full portfolio-title-wrap" id="portfolio">
      <section className="px-[16px] lg:px-32 pt-16 xl:pt-40 xl:flex xl:justify-between">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5, once: true }}
          className="left-container w-full xl:w-4/12"
        >
          <p className="flex gap-3 lg:gap-4">
            {" "}
            <motion.span
              variants={titleAnimation}
              custom={1}
              className="underline font-light portfolio-title-our relative"
            >
              нашето
            </motion.span>{" "}
            <motion.span
              variants={titleAnimation}
              custom={2}
              className="text-gold font-donpoligrafbum portfolio-title-text"
            >
              ПОРТ
            </motion.span>
            <motion.span
              variants={titleAnimation}
              custom={2}
              className="font-bold relative portfolio-title-tire"
            >
              {" "}
              _
            </motion.span>
          </p>
          <motion.p
            variants={titleAnimation}
            custom={3}
            className="text-gold gold-underline font-donpoligrafbum w-40 translate-x-40 lg:translate-x-44 -translate-y-5 lg:-translate-y-10 portfolio-title-text folio"
          >
            ФОЛИО
          </motion.p>
        </motion.div>
        <div className="right-container w-full xl:w-7/12 flex">
          <div className="portfolio-title-desc-icon">
            <Image
              src="/portfolio-icon.png"
              alt="logo"
              width={140}
              height={180}
            />
          </div>
          <p className=" underline font-semibold portfolio-title-desc w-full xl:max-w-4xl ">
            Тук нашите конкуренти слагат ‘скрийншоти’ на фейк ревюта от ‘доволни
            клиенти’.{" "}
            <span className="green-underline text-[#44937D] ">
              Вместо това, Ви приканваме да се свържете по телефона, с който и
              да е от нашите клиенти и лично да ги попитате дали сме надминали
              очакванията им.
            </span>{" "}
            Телефоните им са публични, на всеки един от съответните сайтове.{" "}
          </p>
        </div>
      </section>
      <div className="relative z-10">
        {/* <AnimatedWaves /> */}
        <MySwiper />
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
      </div>
    </div>
  );
};

export default SecondSection;
