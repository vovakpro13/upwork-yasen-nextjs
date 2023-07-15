"use client";

import Image from "next/image";
import AnimatedWaves from "./ui/AnimatedWaves";
import MySwiper from "./topSwipper/Swiper";
import { motion, useScroll } from "framer-motion";

const SecondSection = () => {
  const { scrollYProgress } = useScroll();

  const squareVariants = {
    visible: { opacity: 1, scale: 4, transition: { duration: 1 } },
    hidden: { opacity: 0, scale: 0 },
  };
  return (
    <div className="font-montserrat w-full portfolio-title-wrap">
      <section className="px-9 lg:px-32 pt-16 xl:pt-40 xl:flex xl:justify-between">
        <div className="left-container w-full xl:w-4/12">
          <p className="flex gap-3 lg:gap-4">
            {" "}
            <motion.span
              className="underline font-light portfolio-title-our relative"
              initial={{ x: "-100px" }}
              whileInView={{ x: "0px" }}
              transition={{ duration: 2 }}
              // style={{ transform: `translateX(${transformX})` }}
            >
              our
            </motion.span>{" "}
            <motion.span
              className="text-gold font-donpoligrafbum portfolio-title-text"
              initial={{ y: "-100px", opacity: 0 }}
              whileInView={{ y: "0px", opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Port
            </motion.span>
            <span className="font-bold relative portfolio-title-tire">
              {" "}
              _
            </span>
          </p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="text-gold gold-underline font-donpoligrafbum w-40 translate-x-40 lg:translate-x-44 -translate-y-5 lg:-translate-y-10 portfolio-title-text folio"
          >
            Folio
          </motion.p>
        </div>
        <div className="right-container w-full xl:w-7/12 flex">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="portfolio-title-desc-icon"
          >
            <Image
              src="/portfolio-icon.png"
              alt="logo"
              width={140}
              height={180}
            />
          </motion.div>
          <motion.p
            initial={{ x: "100px", opacity: 0 }}
            whileInView={{ x: "0px", opacity: 1 }}
            transition={{ duration: 1 }}
            className=" underline font-semibold portfolio-title-desc w-full xl:max-w-4xl "
          >
            Here our competetors put fake client reviews.{" "}
            <span className="green-underline text-[#44937D] ">
              Instead of doing this, we encourage you to call ANY of our previous clients over the phone and ask them did we completed the project successfully.
            </span> Their websites are all listed in the portfolio section.{" "}
          </motion.p>
        </div>
      </section>
      <div className="relative z-10">
        {/* <AnimatedWaves /> */}
        <MySwiper />
      </div>
    </div>
  );
};

export default SecondSection;
