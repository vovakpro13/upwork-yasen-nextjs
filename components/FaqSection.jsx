"use client";

import Image from "next/image";
import DropDown from "./ui/DropDown";
import React from "react";
import { motion } from "framer-motion";
import { titleAnimation } from "@/animations/titleAnimation";

function FaqSection() {
  return (
    <section className="px-[16px] lg:px-32 faq-section relative" id="faq">
      <Image
        src="/Vector.svg"
        alt="vector"
        width={94}
        height={81}
        className="dots hidden xl:block absolute top-[-62px] right-[6%] z-10"
      />
      <div className="title-container ">
        <div className="first-container flex w-full flex-wrap justify-between">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5, once: true }}
            className="big-text w-1/3 flex justify-start"
          >
            <p className="md:block flex">
              <motion.span
                variants={titleAnimation}
                custom={1}
                className="font-montserrat text-[18px]  xl:text-[46px] font-light underline mr-[10px]"
              >
                често задавани
              </motion.span>{" "}
              {""}
              <motion.span
                variants={titleAnimation}
                custom={2}
                className="font-donpoligrafbum text-[20px] sm:text-[36px] xl:text-[56px] font-bold gold-underline text-gold "
              >
                ВЪПРОСИ{" "}
              </motion.span>
            </p>
            <hr className="w-[30px] sm:w-[81px] h-2 border-black border-t-[8px] sm:border-t-[18px] hidden xl:block translate-y-10 xl:ml-5 relative top-[-14px]" />
          </motion.div>
          <div className="text-line-container xl:w-[40%] flex justify-start items-center w-full">
            <p className="max-w-[80%] md:m-[unset] m-auto md:text-left text-center md:max-w-[259px] text-[16px]">
              и техните отговори
            </p>
            <div className="line-container line-container-faq md:relative absolute w-[40%] xl:w-[60%]">
              <Image
                src="/Rectangle 15.svg"
                alt="rectangle"
                width={7}
                height={7}
                className="absolute -bottom-1 -right-1"
              />
              <hr className="w-[full] border-primary border-t-[1px]   " />
              <Image
                src="/Rectangle 15.svg"
                alt="rectangle"
                width={7}
                height={7}
                className="absolute -bottom-1 -left-1"
              />
            </div>
          </div>
        </div>
        <div className="second-container"></div>
      </div>
      <div className="flex flex-col gap-4 xl:mt-[124px] faq-wrapper-drop">
        <DropDown
          number={1}
          description={
            "Кои са Jmax или с какво се занимаваме и как може да помогнем?"
          }
          contant={
            "✅ Наша основната цел е да предоставяме изцяло персонализирани дигитални решения.\n" +
            "✅ Наши клиенти са бизнеси, които искат да се развият до нови висоти и да максимизират продажбите си. Вие от тях ли сте?\n" +
            "✅ За да им помогнем ние използваме модерен уеб сайт дизайн, истински силен копирайтинг и убедително видео съдържание.\n" +
            "\n" +
            "🌟 А най-важното - ние се стремим да надминем всяко очакване и да превърнем идеята ти в реалност!\n" +
            "\n" +
            "🤝 Ако смяташ, че е време да направиш промяна и да привлечеш още повече клиенти, ние сме насреща.\n"
          }
        />
        <DropDown
          number={2}
          description={"Какво представлява безплатната Ви консултация ? "}
          contant={
            "Искаш да подобриш визията и ефективността на уеб сайта си? 👀 Имаме страхотно предложение за теб! 🔥\n" +
            "\n" +
            "Възползвай се от нашата безплатна консултация, където ще ти помогнем да откриеш най-добрата стратегия за твоят уеб сайт и ще ти дадем съвети как може да постигнеш по-добри резултати.\n" +
            "Ще направим зъдалбочен анализ на твоят съществуващ уеб сайт или идея и ще запишем безплатно видео, в което ще ти покажем какви са текущите проблеми.\n"
          }
        />
        <DropDown
          number={3}
          description={
            "Искам сайт, но повечето Ваши колеги ми дадоха срок от няколко месеца ?"
          }
          contant={
            "Не се притеснявайте, основната причина, поради която колегите ни работят бавно е, защото превъзлагат проектите на студенти без никакъв опит.\n" +
            "При нас, работата се извършва само и единствено от екипа на фирмата и във възможно най-кратки срокове. Ние работим почти 24/7, до приключване на проекта.\n"
          }
        />
        <DropDown
          number={4}
          description={
            "Каква аджеба е разликата между сайт от 500лв и от 5000лв ?"
          }
          contant={
            "Добър въпрос, ето и отговорът в кратко видео : https://www.instagram.com/p/CuW7AnpoQbF/\n"
          }
        />
        <DropDown
          number={5}
          description={"Издавате ли фактура ?"}
          contant={
            "Преди започване на работа подписваме договор за изработка и издаваме данъчна фактура с ДДС. В договора са описани, всички детайли по проекта, като обем работа, срокове, гаранция и други.\n"
          }
        />
      </div>
    </section>
  );
}

export default FaqSection;
