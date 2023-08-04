"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { titleAnimation } from "@/animations/titleAnimation";
import { elementGliding } from "@/animations/elementGliding";

function TeamSection() {
  return (
    <section
      className="team-section-container relative flex flex-col xl:flex-row-reverse xl:justify-between items-end w-full h-[590px] sm:h-[804px] xl:h-[643px] px-9 lg:px-32 mt-[80px] sm:mt-[100px] xl:mt-[160px] pt-12 xl:pb-[120px] xl:pt-[151px] "
      id="team"
    >
      <Image
        src="/tlight.svg"
        alt="green top"
        fill
        className="absolute top-0 left-0 z-0"
      />
      <Image
        src="/blight.svg"
        alt="green bottom"
        fill
        className="absolute bottom-0 right-0 z-0 "
      />
      <div className="first-container relative z-20  xl:w-[35%] flex xl:flex-col items-end ">
        <div className="first-left-container h-full w-12 xl:w-20 flex xl:hidden flex-col justify-between items-start  ">
          <div className="line-container relative w-[68px] xl:w-[138px] rotate-90 origin-left -translate-x-2 -translate-y-5">
            <hr className="w-[full] border-primary border-t-[1px]" />
            <Image
              src="/Rectangle 15.svg"
              alt="rectangle"
              width={7}
              height={7}
              className="absolute -bottom-[3px] -left-[2px] "
            />
          </div>
          <p className="-rotate-90 origin-bottom-left text-[10px] sm:text-xs xl:text-base translate-x-6 text-secondary w-[130px] xl:w-[209px] ">
            Landing pages & online shops optimized for higher conversion rate
          </p>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5, once: true }}
          className="first-right-container  "
        >
          <motion.div
            variants={titleAnimation}
            custom={1}
            className="big-text text-gold flex justify-end xl:justify-evenly items-center"
          >
            <p>
              <span className="font-montserrat text-[18px] xl:text-[46px] font-light underline ">
                нашият
              </span>{" "}
              {""}
              <span className="font-donpoligrafbum text-[20px] sm:text-[36px] xl:text-[33px] 2xl:text-[56px] font-bold xl:ml-2 ">
                ЕКИП{" "}
              </span>
            </p>
            <hr className="w-[30px] sm:w-[40px] xl:w-[58px] h-1 border-gold border-t-[7px] sm:border-t-[10px] xl:border-t-[13px] ml-5 xl:ml-5 " />
          </motion.div>
          <motion.p
            variants={titleAnimation}
            custom={2}
            className="text-secondary text-base sm:text-lg xl:text-[22px] 2xl:text-4xl w-full mt-3 xl:mt-10 text-end pr-6 xl:pr-12 "
          >
            5-те ⭐ на Джей Макс
          </motion.p>
          <p className="text-secondary text-base sm:text-lg xl:text-[22px] 2xl:text-4xl text-end"></p>
          <motion.p
            variants={titleAnimation}
            custom={3}
            className="font-montserrat text-[#EFF6F4] text-[10px] sm:text-sm xl:text-lg mt-3 xl:mt-16"
          >
            Ние сме 5 амбициозни предприемача, обединени от страстта си ком
            създаването на изключителни уеб решения
          </motion.p>
        </motion.div>
      </div>
      <div className="second-container xl:max-w-[700px] flex relative z-20 mt-10 xl:mt-0">
        <div className="left-container w-16 hidden xl:flex flex-col justify-between items-start  ">
          <div className="line-container relative w-[40%] xl:w-[138px] rotate-90 origin-left xl:mt-10">
            <hr className="w-[full] border-primary border-t-[1px]" />
            <Image
              src="/Rectangle 15.svg"
              alt="rectangle"
              width={7}
              height={7}
              className="absolute -bottom-[3px] -left-[2px] "
            />
          </div>
          <div className="-rotate-90 origin-bottom-left translate-x-16 text-secondary xl:w-[209px] ">
            Всеки един от нас специализира в конкретна област, да можем да
            гарантираме 200% удовлетвореност при изпьлнението на всеки проект.
          </div>
        </div>
        <div className="right-container right-container-ream flex flex-wrap justify-center items-end xl:w-[750px] gap-10 2xl:gap-20 ">
          <motion.div
            viewport={{ amount: 0.5, once: true }}
            initial="hidden"
            whileInView="visible"
            variants={elementGliding}
            custom={1}
            className="person-container flex flex-col items-center gap-2"
          >
            <motion.div
              variants={elementGliding}
              custom={2}
              className="frame w-[74px] h-[74px] rounded-full flex justify-center bg-black bg-opacity-60 backdrop-filter backdrop-blur-10 "
            >
              <Image
                src="/5.svg"
                alt="rectangle"
                width={50}
                height={50}
                className="object-contain "
              />
            </motion.div>
            <motion.p
              variants={elementGliding}
              custom={3}
              className="font-montserrat font-semibold text-xs sm:text-lg xl:text-[26px] text-[#EFF6F4] "
            >
              John Done
            </motion.p>
            <motion.p
              variants={elementGliding}
              custom={4}
              className="font-montserrat font-semibold text-secondary text-[10px] sm:text-base"
            >
              Marketer
            </motion.p>
          </motion.div>
          <motion.div
            viewport={{ amount: 0.5, once: true }}
            initial="hidden"
            whileInView="visible"
            variants={elementGliding}
            custom={1}
            className="person-container flex flex-col items-center gap-2"
          >
            <motion.div
              variants={elementGliding}
              custom={2}
              className="frame w-[74px] h-[74px] rounded-full flex justify-center bg-black bg-opacity-60 backdrop-filter backdrop-blur-10 "
            >
              <Image
                src="/teem/2.svg"
                alt="rectangle"
                width={50}
                height={50}
                className=" object-contain"
              />
            </motion.div>
            <motion.p
              variants={elementGliding}
              custom={3}
              className="font-montserrat font-semibold text-xs sm:text-lg xl:text-[26px] text-[#EFF6F4] "
            >
              Anna Wood
            </motion.p>
            <motion.p
              variants={elementGliding}
              custom={4}
              className="font-montserrat font-semibold text-secondary text-[10px] sm:text-base"
            >
              SEO Specialist
            </motion.p>
          </motion.div>
          <motion.div
            viewport={{ amount: 0.5, once: true }}
            initial="hidden"
            whileInView="visible"
            variants={elementGliding}
            custom={1}
            className="person-container flex flex-col items-center gap-2"
          >
            <motion.div variants={elementGliding}
              custom={2} className="frame w-[74px] h-[74px] rounded-full flex justify-center bg-black bg-opacity-60 backdrop-filter backdrop-blur-10 ">
              <Image
                src="/teem/3.svg"
                alt="rectangle"
                width={50}
                height={50}
                className="object-contain"
              />
            </motion.div>
            <motion.p variants={elementGliding}
              custom={3} className="font-montserrat font-semibold text-xs sm:text-lg xl:text-[26px] text-[#EFF6F4] ">
              Mike Green
            </motion.p>
            <motion.p variants={elementGliding}
              custom={4} className="font-montserrat font-semibold text-secondary text-[10px] sm:text-base">
              Preject Manager
            </motion.p>
          </motion.div>
          <motion.div initial="hidden"
            whileInView="visible"
            variants={elementGliding}
            custom={1} className="person-container flex flex-col items-center gap-2">
            <motion.div variants={elementGliding}
            custom={2} className="frame w-[74px] h-[74px] rounded-full flex justify-center bg-black bg-opacity-60 backdrop-filter backdrop-blur-10 ">
              <Image
                src="/teem/4.svg"
                alt="rectangle"
                width={50}
                height={50}
                className="object-contain "
              />
            </motion.div>
            <motion.p variants={elementGliding}
            custom={3} className="font-montserrat font-semibold text-xs sm:text-lg xl:text-[26px] text-[#EFF6F4] ">
              Anna Wood
            </motion.p>
            <motion.p variants={elementGliding}
            custom={4} className="font-montserrat font-semibold text-secondary text-[10px] sm:text-base">
              Frontend Developer
            </motion.p>
          </motion.div>
          <motion.div initial="hidden"
            whileInView="visible"
            variants={elementGliding}
            custom={1} className="person-container flex flex-col items-center gap-2">
            <motion.div variants={elementGliding}
            custom={2} className="frame w-[74px] h-[74px] rounded-full flex justify-center bg-black bg-opacity-60 backdrop-filter backdrop-blur-10 ">
              <Image
                src="/teem/5.1.svg"
                alt="rectangle"
                width={50}
                height={50}
                className="object-contain "
              />
            </motion.div>
            <motion.p variants={elementGliding}
            custom={3} className="font-montserrat font-semibold text-xs sm:text-lg xl:text-[26px] text-[#EFF6F4] ">
              John Done
            </motion.p>
            <motion.p variants={elementGliding}
            custom={4} className="font-montserrat font-semibold text-secondary text-[10px] sm:text-base">
              Designer
            </motion.p>
          </motion.div>
        </div>
      </div>
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
      <div className="w-full absolute left-0 top-9 overflow-hidden z-0 text-[410px] bg-text-team">
        TEAM
      </div>
    </section>
  );
}

export default TeamSection;
