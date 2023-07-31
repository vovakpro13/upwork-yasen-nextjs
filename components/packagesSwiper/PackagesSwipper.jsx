"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { useState } from "react";
import { Navigation, Pagination, Scrollbar } from "swiper";
import "./style.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const PackagesSwipper = () => {
  const [activeIndex, setActiveIndex] = useState(0); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9

  const handleChange = (swiper) => {
    console.log(swiper.realIndex);
    setActiveIndex(swiper.realIndex);
  };
  console.log(activeIndex);
  return (
    <>
      <div className="finger-packges-slider relative flex">
        <Image src="/flick-to-left 3.svg" alt="scroll" width={63} height={56} />
      </div>
      <div className="swiper-container swiper-container-packages !w-full flex justify-center">
        <Swiper
          // freeMode={true}
          mousewheel={true}
          spaceBetween={9}
          slidesPerView={1.25}
          slidesOffsetBefore={30}
          slidesOffsetAfter={30}
          onActiveIndexChange={handleChange}
          className="!w-[100!] !relative !z-30 "
          modules={[Navigation, Pagination, Scrollbar]}
        >
          <SwiperSlide className="font-montserrat !w-[full] xl:!w-[540px] !bg-white ">
            <div className="header relative w-full h-[220px] sm:h-[235px] xl:h-[266px] bg-[#F3F8F3] rounded-t-[30px] sm:rounded-t-[60px] flex flex-col items-center pt-[25px] xl:pt-7">
              <Image
                src="/icon-1f.svg"
                alt="line"
                width={95}
                height={100}
                className="relative z-10 w-[95px] icon-f"
              />
              <p className="shadoww text-[#DCEEE9] back-words absolute tracking-[15px] left-9 sm:left-20 top-20 sm:top-7 text-[45px] sm:text-[100px] font-bold z-0 ">
                УЛТРА
              </p>
              <p className="relative z-10 text-gold text-3xl sm:text-4xl xl:text-[46px] font-bold tracking-[15px] -top-6 ">
                УЛТРА
              </p>
              <p className="relative z-10 text-[#44937D] font-bold text-2xl xl:text-4xl">
                (€5000 - €10000)
              </p>
            </div>
            <div className="body min-h-fit sm:h-[830px] xl:h-[892px] w-full bg-[#F3F8F3] mt-[10px] rounded-br-[30px] sm:rounded-br[60px] px-[13px] xl:pl-[28px] pt-[35px] ">
              <div className="flex">
                <Image
                  src="/time.svg"
                  alt="line"
                  width={20}
                  height={20}
                  className=" "
                />
                <p className="ml-3">
                  {" "}
                  <span className="text-[10px] xl:text-base">
                    Срок:
                  </span>{" "}
                  <span className="text-[#44937D] text-sm font-bold ">
                   14 - 28 дни
                  </span>
                </p>
              </div>
              <table className="w-full text-[11px] sm:text-base xl:text-base font-montserrat font-medium mt-[25px]">
                <tbody>
                  <tr>
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
                  </tr>
                  <tr className="first-row">
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
                  </tr>
                  <tr className="first-row">
                    <td rowSpan={2}>
                      <Image
                        src="/Vector4242.svg"
                        alt="line"
                        width={20}
                        height={20}
                        className=" "
                      />
                    </td>
                    <td className="pl-5 !h-2">
                      дизайн създаден {" "}
                    </td>
                  </tr>
                  <tr className="-translate-y-3">
                    <td className="pl-5 ">от нулата</td>
                  </tr>
                  <tr className="first-row">
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
                  </tr>
                  <tr className="first-row">
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
                  </tr>
                  <tr className="first-row">
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
                  </tr>
                  <tr className="first-row">
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
                  </tr>
                  <tr className="first-row">
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
                  </tr>
                </tbody>
              </table>
              <p className="font-semibold text-[20px] mt-10 ">
                ЕКСТРИ:
              </p>
              <table className="w-full sm:text-[18px] text-[#44937D] font-montserrat font-medium mt-[20px]">
                <tbody>
                  <tr className="second-row">
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
                  </tr>
                  <tr className="second-row">
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
                  </tr>
                  <tr className="second-row">
                    <td>
                      <Image
                        src="/ads.svg"
                        alt="line"
                        width={36}
                        height={42}
                        className=" "
                      />
                    </td>
                    <td className="pl-5"> създаване на съдържание за социални мрежи</td>{" "}
                  </tr>
                  <tr className="second-row">
                    <td>
                      <Image
                        src="/ads.svg"
                        alt="line"
                        width={36}
                        height={42}
                        className=" "
                      />
                    </td>
                    <td className="pl-5"> конфигуриране на платена реклама в социални мрежи</td>{" "}
                  </tr>
                  <tr className="second-row">
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
                  </tr>
                  <tr className="second-row">
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
                  </tr>
                </tbody>
              </table>
            </div>
          </SwiperSlide>
          <SwiperSlide className="font-montserrat !w-[full] xl:!w-[540px] !bg-white ">
            <div className="header relative w-full h-[220px] sm:h-[235px] xl:h-[266px] bg-[#F3F8F3] rounded-t-[30px] sm:rounded-t-[60px] flex flex-col items-center pt-[25px] xl:pt-7">
              <Image
                src="/icon-2f.svg"
                alt="line"
                width={95}
                height={100}
                className="relative z-10 w-[95px] icon-f "
              />
              <p className="shadoww text-[#DCEEE9] back-words absolute tracking-[15px] left-9 sm:left-9 top-20 sm:top-7 text-[45px] sm:text-[100px] font-bold z-0 ">
                Премиум
              </p>
              <p className="relative z-10 text-gold text-3xl sm:text-4xl xl:text-[46px] font-bold tracking-[15px] -top-6 ">
                Премиум
              </p>
              <p className="relative z-10 text-[#44937D] font-bold text-2xl xl:text-4xl">
                (€2500 - €5000)
              </p>
            </div>
            <div className="body h-[475px] sm:h-[485px] xl:h-[509px] w-full bg-[#F3F8F3] mt-[10px] rounded-br-[30px] sm:rounded-br[60px] px-[13px] xl:pl-[28px] pt-[35px] ">
              <div className="flex">
                <Image
                  src="/time.svg"
                  alt="line"
                  width={20}
                  height={20}
                  className=" "
                />
                <p className="ml-3">
                  {" "}
                  <span className="text-[10px] xl:text-base">
                    Срок :
                  </span>{" "}
                  <span className="text-[#44937D] text-sm font-bold ">
                    7 - 14 дни
                  </span>
                </p>
              </div>
              <table className="w-full text-[11px] sm:text-base xl:text-base font-montserrat font-medium mt-[25px]">
                <tbody>
                  <tr>
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
                  </tr>
                  <tr className="first-row">
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
                  </tr>
                  <tr className="first-row">
                    <td rowSpan={2}>
                      <Image
                        src="/Vector4242.svg"
                        alt="line"
                        width={20}
                        height={20}
                        className=" "
                      />
                    </td>
                    <td className="pl-5 !h-2">
                      дизайн създаден {" "}
                    </td>
                  </tr>
                  <tr className="-translate-y-3">
                    <td className="pl-5 ">от нулата</td>
                  </tr>
                  <tr className="first-row">
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
                  </tr>
                  <tr className="first-row">
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
                  </tr>
                  <tr className="first-row">
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
                  </tr>
                  <tr className="first-row">
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
                  </tr>
                  <tr className="first-row">
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
                  </tr>
                </tbody>
              </table>
            </div>
          </SwiperSlide>
          <SwiperSlide className="font-montserrat !w-[full] xl:!w-[540px] !bg-white ">
            <div className="header relative w-full h-[220px] sm:h-[235px] xl:h-[266px] bg-[#F3F8F3] rounded-t-[30px] sm:rounded-t-[60px] flex flex-col items-center pt-[25px] xl:pt-7">
              <Image
                  src="/icon-3f.svg"
                  alt="line"
                  width={95}
                  height={100}
                  className="relative z-10 w-[95px] icon-f"
              />
              <p className="shadoww text-[#DCEEE9] back-words absolute tracking-[15px] top-20 sm:top-7 text-[45px] sm:text-[100px] font-bold z-0 ">
                Старт
              </p>
              <p className="relative z-10 text-gold text-3xl sm:text-4xl xl:text-[46px] font-bold tracking-[15px] -top-6 ">
                Старт
              </p>
              <p className="relative z-10 text-[#44937D] font-bold text-2xl xl:text-4xl">
                (€1500 - €2500)
              </p>
            </div>
            <div className="body h-[475px] sm:h-[485px] xl:h-[509px] w-full bg-[#F3F8F3] mt-[10px] rounded-br-[30px] sm:rounded-br[60px] px-[13px] xl:pl-[28px] pt-[35px] ">
              <div className="flex">
                <Image
                    src="/time.svg"
                    alt="line"
                    width={20}
                    height={20}
                    className=" "
                />
                <p className="ml-3">
                  {" "}
                  <span className="text-[10px] xl:text-base">
                    Срок :
                  </span>{" "}
                  <span className="text-[#44937D] text-sm font-bold ">
                    3 - 7 дни
                  </span>
                </p>
              </div>
              <table className="w-full text-[11px] sm:text-base xl:text-base font-montserrat font-medium mt-[25px]">
                <tbody>
                <tr>
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
                </tr>
                <tr className="first-row">
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
                </tr>
                <tr className="first-row">
                  <td rowSpan={2}>
                    <Image
                        src="/Vector4242.svg"
                        alt="line"
                        width={20}
                        height={20}
                        className=" "
                    />
                  </td>
                  <td className="pl-5 !h-2">
                    дизайн създаден от нулата{" "}
                  </td>
                </tr>
                <tr className="-translate-y-3">
                  <td className="pl-5 "></td>
                </tr>
                <tr className="first-row">
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
                </tr>
                <tr className="first-row">
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
                </tr>
                <tr className="first-row">
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
                </tr>

                </tbody>
              </table>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <p className="absolute z-0 top-[550px] -right-[510px] font-bold text-[#F8F8F8] xl:text-[266px] -rotate-90">
        FEATURES
      </p>
    </>
  );
};

export default PackagesSwipper;
