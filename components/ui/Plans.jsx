import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { elementGliding } from "@/animations/elementGliding";

const Plans = () => {
  return (
    <div className="flex w-full justify-center gap-5 relative px-[128px]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2, once: true }}
        variants={elementGliding}
        custom={1}
        className="font-montserrat w-full max-w-[540px] h-[985px] sm:h-[1075px] xl:h-[1168px] relative z-[1]"
      >
        <motion.div
          variants={elementGliding}
          custom={1}
          className="header relative w-full h-[220px] sm:h-[235px] xl:h-[266px] bg-[#F3F8F3] rounded-t-[30px] sm:rounded-t-[60px] flex flex-col items-center pt-[25px] xl:pt-7"
        >
          <Image
            src="/icon-1f.svg"
            alt="line"
            width={95}
            height={100}
            className="relative z-10 w-[95px] icon-f"
          />
          <p className="shadoww text-[#DCEEE9] back-words absolute tracking-[15px] left-9 sm:left-20 top-20 sm:top-7 text-[45px] sm:text-[55px] font-bold z-0 ">
            УЛТРА
          </p>
          <p className="relative z-10 text-gold text-3xl sm:text-4xl xl:text-[46px] font-bold tracking-[15px] -top-6 ">
            УЛТРА
          </p>
          <p className="relative z-10 text-[#44937D] font-bold text-2xl xl:text-4xl">
            (€5000 - €10000)
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2, once: true }}
          variants={elementGliding}
          custom={1}
          className="body min-h-fit sm:h-[830px] xl:h-[892px] w-full bg-[#F3F8F3] mt-[10px] rounded-br-[30px] sm:rounded-br[60px] px-[13px] xl:pl-[28px] pt-[35px]"
        >
          <motion.div variants={elementGliding} custom={3} className="flex">
            <Image
              src="/time.svg"
              alt="line"
              width={20}
              height={20}
              className=" "
            />
            <p className="ml-3">
              {" "}
              <span className="text-[10px] xl:text-base">Срок:</span>{" "}
              <span className="text-[#44937D] text-sm font-bold ">
                14 - 28 дни
              </span>
            </p>
          </motion.div>
          <table className="w-full text-[11px] sm:text-base xl:text-base font-montserrat font-medium mt-[25px]">
            <tbody>
              <motion.tr variants={elementGliding} custom={4}>
                <td>
                  <Image
                    src="/marketing.svg"
                    alt="line"
                    width={20}
                    height={20}
                    className=" "
                  />
                </td>
                <td className="pl-5">маркетинг анализ</td>
              </motion.tr>
              <motion.tr
                variants={elementGliding}
                custom={5}
                className="first-row"
              >
                <td>
                  <Image
                    src="/competetors.svg"
                    alt="line"
                    width={20}
                    height={20}
                    className=" "
                  />
                </td>
                <td className="pl-5">анализ на конкуренцията</td>
              </motion.tr>
              <motion.tr
                variants={elementGliding}
                custom={6}
                className="first-row"
              >
                <td rowSpan={2}>
                  <Image
                    src="/Vector4242.svg"
                    alt="line"
                    width={20}
                    height={20}
                    className=" "
                  />
                </td>
                <td className="pl-5 !h-2">дизайн създаден </td>
              </motion.tr>
              <motion.tr
                variants={elementGliding}
                custom={7}
                className="-translate-y-3"
              >
                <td className="pl-5 ">от нулата</td>
              </motion.tr>
              <motion.tr
                variants={elementGliding}
                custom={8}
                className="first-row"
              >
                <td>
                  <Image
                    src="/optm (2).svg"
                    alt="line"
                    width={20}
                    height={20}
                    className=" "
                  />
                </td>
                <td className="pl-5">
                  оптимизация на дизайна за повече продажби
                </td>
              </motion.tr>
              <motion.tr
                variants={elementGliding}
                custom={9}
                className="first-row"
              >
                <td>
                  <Image
                    src="/seo.svg"
                    alt="line"
                    width={20}
                    height={20}
                    className=" "
                  />
                </td>
                <td className="pl-5">SEO</td>
              </motion.tr>
              <motion.tr
                variants={elementGliding}
                custom={10}
                className="first-row"
              >
                <td>
                  <Image
                    src="/speed.svg"
                    alt="line"
                    width={20}
                    height={20}
                    className=" "
                  />
                </td>
                <td className="pl-5">оптимизация на скорост на зареждане</td>
              </motion.tr>
              <motion.tr
                variants={elementGliding}
                custom={11}
                className="first-row"
              >
                <td>
                  <Image
                    src="/anm.svg"
                    alt="line"
                    width={20}
                    height={20}
                    className=" "
                  />
                </td>
                <td className="pl-5">анимирани илюстрации</td>
              </motion.tr>
              <motion.tr
                variants={elementGliding}
                custom={12}
                className="first-row"
              >
                <td>
                  <Image
                    src="/copy.svg"
                    alt="line"
                    width={20}
                    height={20}
                    className=" "
                  />
                </td>
                <td className="pl-5">копирайтинг</td>
              </motion.tr>
            </tbody>
          </table>
          <motion.p
            variants={elementGliding}
            custom={13}
            className="font-semibold text-[20px] mt-10 "
          >
            ЕКСТРИ:
          </motion.p>
          <table className="w-full sm:text-[18px] text-[#44937D] font-montserrat font-medium mt-[20px]">
            <tbody>
              <motion.tr
                variants={elementGliding}
                custom={14}
                className="second-row"
              >
                <td className="w-11 ">
                  <Image
                    src="/video.svg"
                    alt="line"
                    width={36}
                    height={42}
                    className=" "
                  />
                </td>
                <td className="pl-5 text-left">видео презентация</td>{" "}
              </motion.tr>
              <motion.tr
                variants={elementGliding}
                custom={15}
                className="second-row"
              >
                <td>
                  <Image
                    src="/organic.svg"
                    alt="line"
                    width={36}
                    height={42}
                    className=" "
                  />
                </td>
                <td className="pl-5">
                  маркетингова стратегия и план за развитие на социални мрежи
                </td>{" "}
              </motion.tr>
              <motion.tr
                variants={elementGliding}
                custom={16}
                className="second-row"
              >
                <td>
                  <Image
                    src="/ads.svg"
                    alt="line"
                    width={36}
                    height={42}
                    className=" "
                  />
                </td>
                <td className="pl-5">
                  {" "}
                  създаване на съдържание за социални мрежи
                </td>{" "}
              </motion.tr>
              <motion.tr
                variants={elementGliding}
                custom={17}
                className="second-row"
              >
                <td>
                  <Image
                    src="/ads.svg"
                    alt="line"
                    width={36}
                    height={42}
                    className=" "
                  />
                </td>
                <td className="pl-5">
                  {" "}
                  конфигуриране на платена реклама в социални мрежи
                </td>{" "}
              </motion.tr>
              <motion.tr
                variants={elementGliding}
                custom={18}
                className="second-row"
              >
                <td>
                  <Image
                    src="/google.svg"
                    alt="line"
                    width={36}
                    height={42}
                    className=" "
                  />
                </td>
                <td className="pl-5"> пакет от имейли за реклама</td>{" "}
              </motion.tr>
              <motion.tr
                variants={elementGliding}
                custom={19}
                className="second-row"
              >
                <td>
                  <Image
                    src="/sales.svg"
                    alt="line"
                    width={36}
                    height={42}
                    className=" "
                  />
                </td>
                <td className="pl-5"> продажбено обучение за екипа Ви</td>{" "}
              </motion.tr>
            </tbody>
          </table>
        </motion.div>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2, once: true }}
        variants={elementGliding}
        custom={2}
        className="font-montserrat w-full max-w-[540px] !h-[985px] sm:!h-[1075px] xl:!h-[1168px] relative z-[1]"
      >
        <motion.div
          variants={elementGliding}
          custom={2}
          className="header relative w-full h-[220px] sm:h-[235px] xl:h-[266px] bg-[#F3F8F3] rounded-t-[30px] sm:rounded-t-[60px] flex flex-col items-center pt-[25px] xl:pt-7"
        >
          <Image
            src="/icon-2f.svg"
            alt="line"
            width={95}
            height={100}
            className="relative z-10 w-[95px] icon-f "
          />
          <p className="shadoww text-[#DCEEE9] back-words absolute tracking-[15px] left-9 sm:left-9 top-20 sm:top-7 text-[45px] sm:text-[55px] font-bold z-0 ">
            Премиум
          </p>
          <p className="relative z-10 text-gold text-3xl sm:text-4xl xl:text-[46px] font-bold tracking-[15px] -top-6 ">
            Премиум
          </p>
          <p className="relative z-10 text-[#44937D] font-bold text-2xl xl:text-4xl">
            (€2500 - €5000)
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2, once: true }}
          variants={elementGliding}
          custom={2}
          className="body h-[475px] sm:h-[485px] xl:h-[509px] w-full bg-[#F3F8F3] mt-[10px] rounded-br-[30px] sm:rounded-br[60px] px-[13px] xl:pl-[28px] pt-[35px]"
        >
          <motion.div variants={elementGliding} custom={3} className="flex">
            <Image
              src="/time.svg"
              alt="line"
              width={20}
              height={20}
              className=" "
            />
            <p className="ml-3">
              {" "}
              <span className="text-[10px] xl:text-base">Срок :</span>{" "}
              <span className="text-[#44937D] text-sm font-bold ">
                7 - 14 дни
              </span>
            </p>
          </motion.div>
          <table className="w-full text-[11px] sm:text-base xl:text-base font-montserrat font-medium mt-[25px]">
            <tbody>
              <motion.tr variants={elementGliding} custom={4}>
                <td>
                  <Image
                    src="/marketing.svg"
                    alt="line"
                    width={20}
                    height={20}
                    className=" "
                  />
                </td>
                <td className="pl-5">маркетинг анализ</td>
              </motion.tr>
              <motion.tr
                variants={elementGliding}
                custom={5}
                className="first-row"
              >
                <td>
                  <Image
                    src="/competetors.svg"
                    alt="line"
                    width={20}
                    height={20}
                    className=" "
                  />
                </td>
                <td className="pl-5">анализ на конкуренцията</td>
              </motion.tr>
              <motion.tr
                variants={elementGliding}
                custom={6}
                className="first-row"
              >
                <td rowSpan={2}>
                  <Image
                    src="/Vector4242.svg"
                    alt="line"
                    width={20}
                    height={20}
                    className=" "
                  />
                </td>
                <td className="pl-5 !h-2">дизайн създаден </td>
              </motion.tr>
              <motion.tr
                variants={elementGliding}
                custom={7}
                className="-translate-y-3"
              >
                <td className="pl-5 ">от нулата</td>
              </motion.tr>
              <motion.tr
                variants={elementGliding}
                custom={8}
                className="first-row"
              >
                <td>
                  <Image
                    src="/optm (2).svg"
                    alt="line"
                    width={20}
                    height={20}
                    className=" "
                  />
                </td>
                <td className="pl-5">
                  оптимизация на дизайна за повече продажби
                </td>
              </motion.tr>
              <motion.tr
                variants={elementGliding}
                custom={9}
                className="first-row"
              >
                <td>
                  <Image
                    src="/seo.svg"
                    alt="line"
                    width={20}
                    height={20}
                    className=" "
                  />
                </td>
                <td className="pl-5">SEO</td>
              </motion.tr>
              <motion.tr
                variants={elementGliding}
                custom={10}
                className="first-row"
              >
                <td>
                  <Image
                    src="/speed.svg"
                    alt="line"
                    width={20}
                    height={20}
                    className=" "
                  />
                </td>
                <td className="pl-5">оптимизация на скорост на зареждане</td>
              </motion.tr>
              <motion.tr
                variants={elementGliding}
                custom={11}
                className="first-row"
              >
                <td>
                  <Image
                    src="/anm.svg"
                    alt="line"
                    width={20}
                    height={20}
                    className=" "
                  />
                </td>
                <td className="pl-5">анимирани илюстрации</td>
              </motion.tr>
              <motion.tr
                variants={elementGliding}
                custom={12}
                className="first-row"
              >
                <td>
                  <Image
                    src="/copy.svg"
                    alt="line"
                    width={20}
                    height={20}
                    className=" "
                  />
                </td>
                <td className="pl-5">копирайтинг</td>
              </motion.tr>
            </tbody>
          </table>
        </motion.div>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2, once: true }}
        variants={elementGliding}
        custom={3}
        className="font-montserrat w-full max-w-[540px] !h-[985px] sm:!h-[1075px] xl:!h-[1168px] relative z-[1]"
      >
        <motion.div
          variants={elementGliding}
          custom={3}
          className="header relative w-full h-[220px] sm:h-[235px] xl:h-[266px] bg-[#F3F8F3] rounded-t-[30px] sm:rounded-t-[60px] flex flex-col items-center pt-[25px] xl:pt-7"
        >
          <Image
            src="/icon-3f.svg"
            alt="line"
            width={95}
            height={100}
            className="relative z-10 w-[95px] icon-f"
          />
          <p className="shadoww text-[#DCEEE9] back-words absolute tracking-[15px] top-20 sm:top-7 text-[45px] sm:text-[55px] font-bold z-0 ">
            Старт
          </p>
          <p className="relative z-10 text-gold text-3xl sm:text-4xl xl:text-[46px] font-bold tracking-[15px] -top-6 ">
            Старт
          </p>
          <p className="relative z-10 text-[#44937D] font-bold text-2xl xl:text-4xl">
            (€1500 - €2500)
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2, once: true }}
          variants={elementGliding}
          custom={3}
          className="body h-[475px] sm:h-[485px] xl:h-[509px] w-full bg-[#F3F8F3] mt-[10px] rounded-br-[30px] sm:rounded-br[60px] px-[13px] xl:pl-[28px] pt-[35px]"
        >
          <motion.div variants={elementGliding} custom={3} className="flex">
            <Image
              src="/time.svg"
              alt="line"
              width={20}
              height={20}
              className=" "
            />
            <p className="ml-3">
              {" "}
              <span className="text-[10px] xl:text-base">Срок :</span>{" "}
              <span className="text-[#44937D] text-sm font-bold ">
                3 - 7 дни
              </span>
            </p>
          </motion.div>
          <table className="w-full text-[11px] sm:text-base xl:text-base font-montserrat font-medium mt-[25px]">
            <tbody>
              <motion.tr variants={elementGliding} custom={4}>
                <td>
                  <Image
                    src="/marketing.svg"
                    alt="line"
                    width={20}
                    height={20}
                    className=" "
                  />
                </td>
                <td className="pl-5">маркетинг анализ</td>
              </motion.tr>
              <motion.tr
                variants={elementGliding}
                custom={5}
                className="first-row"
              >
                <td>
                  <Image
                    src="/competetors.svg"
                    alt="line"
                    width={20}
                    height={20}
                    className=" "
                  />
                </td>
                <td className="pl-5">анализ на конкуренцията</td>
              </motion.tr>
              <motion.tr
                variants={elementGliding}
                custom={6}
                className="first-row"
              >
                <td rowSpan={2}>
                  <Image
                    src="/Vector4242.svg"
                    alt="line"
                    width={20}
                    height={20}
                    className=" "
                  />
                </td>
                <td className="pl-5 !h-2">дизайн създаден от нулата </td>
              </motion.tr>
              <motion.tr
                variants={elementGliding}
                custom={7}
                className="-translate-y-3"
              >
                <td className="pl-5 "></td>
              </motion.tr>
              <motion.tr
                variants={elementGliding}
                custom={8}
                className="first-row"
              >
                <td>
                  <Image
                    src="/optm (2).svg"
                    alt="line"
                    width={20}
                    height={20}
                    className=" "
                  />
                </td>
                <td className="pl-5">
                  оптимизация на дизайна за повече продажби
                </td>
              </motion.tr>
              <motion.tr
                variants={elementGliding}
                custom={9}
                className="first-row"
              >
                <td>
                  <Image
                    src="/seo.svg"
                    alt="line"
                    width={20}
                    height={20}
                    className=" "
                  />
                </td>
                <td className="pl-5">SEO</td>
              </motion.tr>
              <motion.tr
                variants={elementGliding}
                custom={10}
                className="first-row"
              >
                <td>
                  <Image
                    src="/speed.svg"
                    alt="line"
                    width={20}
                    height={20}
                    className=" "
                  />
                </td>
                <td className="pl-5">оптимизация на скорост на зареждане</td>
              </motion.tr>
            </tbody>
          </table>
        </motion.div>
      </motion.div>
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
  );
};

export default Plans;
