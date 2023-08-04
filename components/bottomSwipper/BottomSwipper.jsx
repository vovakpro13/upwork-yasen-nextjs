"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { elementGliding } from "@/animations/elementGliding";
import "./bottomSwiper.css";
import "swiper/css";

const BottomSwiper = () => {
  const [activeIndex, setActiveIndex] = useState(0); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9
  const breakpoints = {
    320: {
      slidesPerView: 1.2,
      slidesOffsetBefore: 30,
      initialSlide: 0,
      spaceBetween: 11,
    },
    640: {
      slidesPerView: 1.5,
    },
    768: {
      slidesPerView: 2.5,
    },
    1024: {
      slidesPerView: 2.5,
      slidesOffsetBefore: 100,
    },
    1377: {
      slidesPerView: 3.5,
    },
    1600: {
      slidesPerView: 3.5,
    },
    1920: {
      slidesPerView: 4.5,
    },
    2200: {
      slidesPerView: 5.5,
    },
  };
  const handleChange = (swiper) => {
    console.log(swiper.realIndex);
    setActiveIndex(swiper.realIndex);
  };
  console.log(activeIndex);
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.5, once: true }}
    >
      <motion.div
        variants={elementGliding}
        custom={1}
        className="finger-bottom-slider relative flex 33"
      >
        <Image
          src="/flick-to-left 3.svg"
          alt="scroll"
          width={63}
          height={56}
          className="finger relative animate-handRotate"
        />
      </motion.div>
      <Swiper
        // loop={true}
        freeMode={true}
        mousewheel={true}
        spaceBetween={24}
        slidesPerView={4}
        // centeredSlides={true}
        // slidesOffsetBefore={100}
        slidesOffsetAfter={100}
        breakpoints={breakpoints}
        onActiveIndexChange={handleChange}
        className="!w-full !flex !justify-between swiper-bottom"
      >
        <SwiperSlide className="!bg-white">
          <motion.div variants={elementGliding} custom={2}>
            <Image
              src="/Group 85.svg"
              alt="icon"
              width={80}
              height={80}
              className="mt-6 slide-icon"
            />
            <Image
              src="/Vector 8 (1).svg"
              alt="line"
              width={202}
              height={2}
              className="w-1/2 "
            />
          </motion.div>

          <motion.p
            variants={elementGliding}
            custom={3}
            className="items-baseline flex gap-4 mt-6 "
          >
            <span className="font-montserrat font-semibold text-2xl">01.</span>
            <span className="font-donpoligrafbum text-primary font-bold text-xl slide-title">
              Въпросник
            </span>
          </motion.p>
          <motion.p
            variants={elementGliding}
            custom={4}
            className="font-montserrat text-lg font-[500] mt-6 leading-7 slide-description"
          >
            Попълвате нашият въпросник, за да разберем повече за бизнеса Ви и
            каква е целта на сайта, който ще изработим.
            <span className="underline font-bold">
              {" "}
              Тук са засегнати теми, като това какви са{" "}
            </span>{" "}
            Вашите идеални клиенти и какво точно ви
            <span className="underline"> отличава от конкуренцията.</span>
          </motion.p>
        </SwiperSlide>
        <SwiperSlide className="!bg-white">
          <motion.div variants={elementGliding} custom={2}>
            <Image
              src="/Group 86.svg"
              alt="icon"
              width={80}
              height={80}
              className="mt-6 slide-icon"
            />
            <Image
              src="/Vector 8 (1).svg"
              alt="line"
              width={202}
              height={2}
              className="w-1/2 "
            />
          </motion.div>

          <motion.p
            variants={elementGliding}
            custom={3}
            className="items-baseline flex gap-4 mt-6 "
          >
            <span className="font-montserrat font-semibold text-2xl">02.</span>
            <span className="font-donpoligrafbum text-primary font-bold text-xl slide-title">
              Блок схема
            </span>
          </motion.p>
          <motion.p
            variants={elementGliding}
            custom={4}
            className="font-montserrat text-lg font-[500] mt-6 leading-7 slide-description"
          >
            На база въпросника, правим анализ на конкуренти сайтове и след това
            създаваме гръбнака на Вашият уебсайт.
            <span className="underline font-bold">
              {" "}
              Това е блок схема,{" "}
            </span>{" "}
            която има за цел да опрдели позиционирането на всички нужни секции и
            бутони и да направи сайта ви оптимизиран
            <span className="underline">, за продаване.</span>
          </motion.p>
        </SwiperSlide>
        <SwiperSlide className="!bg-white">
          <motion.div variants={elementGliding} custom={2}>
            <Image
              src="/Group 87.svg"
              alt="icon"
              width={80}
              height={80}
              className="mt-6 slide-icon"
            />
            <Image
              src="/Vector 8 (1).svg"
              alt="line"
              width={202}
              height={2}
              className="w-1/2 "
            />
          </motion.div>

          <motion.p
            variants={elementGliding}
            custom={3}
            className="items-baseline flex gap-4 mt-6 "
          >
            <span className="font-montserrat font-semibold text-2xl">03.</span>
            <span className="font-donpoligrafbum text-primary font-bold text-xl slide-title">
              Копирайтинг
            </span>
          </motion.p>
          <motion.p
            variants={elementGliding}
            custom={4}
            className="text-lg font-[500] mt-6 leading-7 slide-description font-montserrat"
          >
            Създаване съдържание за Вашият сайт, което не просто звучи добре, а
            и насочва потенциалните клиенти към покупка. НЕ използваме изкуствен
            интелект и всичко се създава ръчно, за целите на проекта.
          </motion.p>
        </SwiperSlide>
        <SwiperSlide className="!bg-white">
          <motion.div variants={elementGliding} custom={2}>
            <Image
              src="/Group 87 (1).svg"
              alt="icon"
              width={80}
              height={80}
              className="mt-6 slide-icon"
            />
            <Image
              src="/Vector 8 (1).svg"
              alt="line"
              width={202}
              height={2}
              className="w-1/2 "
            />
          </motion.div>

          <motion.p
            variants={elementGliding}
            custom={3}
            className="items-baseline flex gap-4 mt-6 "
          >
            <span className="font-montserrat font-semibold text-2xl">04.</span>
            <span className="font-donpoligrafbum text-primary font-bold text-xl slide-title">
              Дизайн
            </span>
          </motion.p>
          <motion.p
            variants={elementGliding}
            custom={4}
            className="text-lg font-[500] mt-6 leading-7 slide-description font-montserrat"
          >
            На база Вашите предпочитания за цветове, шрифтове и форми ,
            създаваме layout дизайн, без да използваме готови шаблони. Дизайнът
            включва различни екрани - за широк екран, таблет и телефон.
          </motion.p>
        </SwiperSlide>
        <SwiperSlide className="!bg-white">
          <motion.div variants={elementGliding} custom={2}>
            <Image
              src="/Group 87 (2).svg"
              alt="icon"
              width={80}
              height={80}
              className="mt-6 slide-icon"
            />
            <Image
              src="/Vector 8 (1).svg"
              alt="line"
              width={202}
              height={2}
              className="w-1/2 "
            />
          </motion.div>

          <motion.p
            variants={elementGliding}
            custom={3}
            className="items-baseline flex gap-4 mt-6 "
          >
            <span className="font-montserrat font-semibold text-2xl">05.</span>
            <span className="font-donpoligrafbum text-primary font-bold text-xl slide-title">
              Видео & Снимки
            </span>
          </motion.p>
          <motion.p
            variants={elementGliding}
            custom={3}
            className="text-lg font-[500] mt-6 leading-7 slide-description font-montserrat"
          >
            Записваме и обработваме креативно видео съдържание и снимки, които
            ще отличат сайта Ви от конкуренцията.
          </motion.p>
        </SwiperSlide>
        <SwiperSlide className="!bg-white">
          <motion.div variants={elementGliding} custom={2}>
            <Image
              src="/icon-6.svg"
              alt="icon"
              width={80}
              height={80}
              className="mt-6 slide-icon"
            />
            <Image
              src="/Vector 8 (1).svg"
              alt="line"
              width={202}
              height={2}
              className="w-1/2 "
            />
          </motion.div>

          <motion.p
            variants={elementGliding}
            custom={3}
            className="items-baseline flex gap-4 mt-6 "
          >
            <span className="font-montserrat font-semibold text-2xl">06.</span>
            <span className="font-donpoligrafbum text-primary font-bold text-xl slide-title">
              Програмиране
            </span>
          </motion.p>
          <motion.p
            variants={elementGliding}
            custom={4}
            className="text-lg font-[500] mt-6 leading-7 slide-description font-montserrat"
          >
            Пишем на ръка код, за всички нужни функционалности и анимации в
            сайта Ви. Можем да създадем буквално, всичко, за което си помислите.
          </motion.p>
        </SwiperSlide>
        <SwiperSlide className="!bg-white">
          <motion.div variants={elementGliding} custom={2}>
            <Image
              src="/icon-7.svg"
              alt="icon"
              width={80}
              height={80}
              className="mt-6 slide-icon"
            />
            <Image
              src="/Vector 8 (1).svg"
              alt="line"
              width={202}
              height={2}
              className="w-1/2 "
            />
          </motion.div>

          <motion.p
            variants={elementGliding}
            custom={3}
            className="items-baseline flex gap-4 mt-6 "
          >
            <span className="font-montserrat font-semibold text-2xl">07.</span>
            <span className="font-donpoligrafbum text-primary font-bold text-xl slide-title">
              SEO & Speed
            </span>
          </motion.p>
          <motion.p
            variants={elementGliding}
            custom={4}
            className="text-lg font-[500] mt-6 leading-7 slide-description font-montserrat"
          >
            Оптимизираме сайта и съдържанието му за търсещи машини и
            гарантираме, за ще има скорост на зареждане от поне 90 единици (от
            100), спрямо измерването на Google.
          </motion.p>
        </SwiperSlide>
        <SwiperSlide className="!bg-white">
          <motion.div variants={elementGliding} custom={2}>
            <Image
              src="/icon-8.svg"
              alt="icon"
              width={80}
              height={80}
              className="mt-6 slide-icon"
            />
            <Image
              src="/Vector 8 (1).svg"
              alt="line"
              width={202}
              height={2}
              className="w-1/2 "
            />
          </motion.div>

          <motion.p
            variants={elementGliding}
            custom={3}
            className="items-baseline flex gap-4 mt-6 "
          >
            <span className="font-montserrat font-semibold text-2xl">08.</span>
            <span className="font-donpoligrafbum text-primary font-bold text-xl slide-title">
              Social Media & Ads
            </span>
          </motion.p>
          <motion.p
            variants={elementGliding}
            custom={4}
            className="text-lg font-[500] mt-6 leading-7 slide-description font-montserrat"
          >
            Съдействаме при създаване на профили и съдържание за социални мрежи,
            чрез органичен трафик и при нужда конфигурираме платени реклами и
            план за развитие.
          </motion.p>
        </SwiperSlide>
        <SwiperSlide className="!bg-white">
          <motion.div variants={elementGliding} custom={2}>
            <Image
              src="/icon-8.svg"
              alt="icon"
              width={80}
              height={80}
              className="mt-6 slide-icon"
            />
            <Image
              src="/Vector 8 (1).svg"
              alt="line"
              width={202}
              height={2}
              className="w-1/2 "
            />
          </motion.div>

          <motion.p
            variants={elementGliding}
            custom={3}
            className="items-baseline flex gap-4 mt-6 "
          >
            <span className="font-montserrat font-semibold text-2xl">09.</span>
            <span className="font-donpoligrafbum text-primary font-bold text-xl slide-title">
              Последваща оптимизация и поддръжка
            </span>
          </motion.p>
          <motion.p
            variants={elementGliding}
            custom={4}
            className="text-lg font-[500] mt-6 leading-7 slide-description font-montserrat"
          >
            Поддържаме сайта Ви в добро състояние, като при нужда оптимизираме
            дизайна и/или съдържанието, на база анализ на потребителското
            поведение.
          </motion.p>
        </SwiperSlide>
      </Swiper>
    </motion.div>
  );
};

export default BottomSwiper;
