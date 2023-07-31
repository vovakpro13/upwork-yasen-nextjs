"use client";

import Image from "next/image";
import MySwiper from "./topSwipper/Swiper";

const SecondSection = () => {
  return (
    <div className="font-montserrat w-full portfolio-title-wrap" id="portfolio">
      <section className="px-[16px] lg:px-32 pt-16 xl:pt-40 xl:flex xl:justify-between">
        <div className="left-container w-full xl:w-4/12">
          <p className="flex gap-3 lg:gap-4">
            {" "}
            <span
              className="underline font-light portfolio-title-our relative"
            >
             нашето
            </span>{" "}
            <span
              className="text-gold font-donpoligrafbum portfolio-title-text"
            >
              ПОРТ
            </span>
            <span className="font-bold relative portfolio-title-tire">
              {" "}
              _
            </span>
          </p>
          <p
            className="text-gold gold-underline font-donpoligrafbum w-40 translate-x-40 lg:translate-x-44 -translate-y-5 lg:-translate-y-10 portfolio-title-text folio"
          >
            ФОЛИО
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
            Тук нашите конкуренти слагат ‘скрийншоти’ на
            фейк ревюта от ‘доволни клиенти’.{" "}
            <span className="green-underline text-[#44937D] ">
               Вместо това,
            Ви приканваме да се свържете по телефона,
            с който и да е от нашите клиенти и лично да ги
            попитате дали сме надминали очакванията им.
            </span> Телефоните им са публични, на всеки един от
            съответните сайтове.{" "}
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
