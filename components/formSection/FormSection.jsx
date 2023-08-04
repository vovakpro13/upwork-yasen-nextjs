"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import "./style.css";
import Link from "next/link";
import { motion } from "framer-motion";
import { titleAnimation } from "@/animations/titleAnimation";
import { elementGliding } from "@/animations/elementGliding";
import AnimatedButton from "../AnimatedButton";

function FormSection() {
  useEffect(() => {
    const forms = document.querySelectorAll(".needs-validation");
    const result = document.getElementById("result");
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms).forEach(function (form) {
      form.addEventListener(
        "submit",
        function (event) {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();

            form.querySelectorAll(":invalid")[0].focus();
          } else {
            /*
             * Form Submission using fetch()
             */

            const formData = new FormData(form);
            event.preventDefault();
            event.stopPropagation();
            const object = {};
            formData.forEach((value, key) => {
              object[key] = value;
            });
            const json = JSON.stringify(object);
            result.innerHTML = "Please wait...";

            fetch("https://api.web3forms.com/submit", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
              },
              body: json,
            })
              .then(async (response) => {
                let json = await response.json();
                if (response.status === 200) {
                  result.innerHTML = json.message;
                  result.classList.remove("text-gray-500");
                  result.classList.add("text-green-500");
                } else {
                  console.log(response);
                  result.innerHTML = json.message;
                  result.classList.remove("text-gray-500");
                  result.classList.add("text-red-500");
                }
              })
              .catch((error) => {
                console.log(error);
                result.innerHTML = "Something went wrong!";
              })
              .then(function () {
                form.reset();
                form.classList.remove("was-validated");
                setTimeout(() => {
                  result.style.display = "none";
                }, 5000);
              });
          }
          form.classList.add("was-validated");
        },
        false
      );
    });
  }, []);

  return (
    <section
      id="form-section"
      className="form-section px-[16px] lg:px-32 lg:pt-[143px] lg:pb-[160px]"
    >
      <div className="form-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5, once: true }}
          className="left-section relative xl:pb-[145px]"
        >
          <motion.h2
            variants={titleAnimation}
            custom={1}
            className="form-title text-gold font-donpoligrafbum"
          >
            <span className="font-montserrat form-title-do gold-underline">
              СВЬРЖЕТЕ СЕ{" "}
            </span>{" "}
            с нас -
          </motion.h2>
          <motion.div
            variants={titleAnimation}
            custom={2}
            className="form-caption font-montserrat text-[56px] xl:text-[56px] xl:max-w-[600px] text-right"
          >
            {" "}
            за безплатен видео одит на Вашият уебсайт или идея
          </motion.div>
          <motion.div
            variants={titleAnimation}
            custom={3}
            className="form-questions relative font-montserrat xl:text-[36px] text-gold xl:max-w-[366px] xl:mt-[33px] xl:ml-[143px] xl:leading-[43px]"
          >
            Ще Ви отговорим
            <Link href="/" className="gold-underline">
              в рамките на деня.
            </Link>
            <Image
              src="/left-line-form.svg"
              alt="rectangle"
              width={133}
              height={10}
              className="left-line-form absolute top-1/2 left-[-91%]"
            />
          </motion.div>
          <Image
            src="/blackdots.svg"
            alt="rectangle"
            width={94}
            height={81}
            className="absolute xl:right-[37%] bottom-0 form-dots-pic"
          />
        </motion.div>
        <div className="right-section relative">
          <Image
            src="/form-line-right.svg"
            alt="rectangle"
            width={133}
            height={10}
            className="left-line-form absolute top-[18px] right-[-133px] xl:inline hidden"
          />
          <motion.form
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5, once: true }}
            action="https://api.web3forms.com/submit"
            method="POST"
            id="form"
            className="needs-validation"
            noValidate
          >
            <input
              type="hidden"
              name="access_key"
              value="YOUR_ACCESS_KEY_HERE"
            />
            <input
              type="hidden"
              name="subject"
              value="New Submission from Web3Forms"
            />
            <div className="mb-[41px] relative">
              <motion.input
                variants={elementGliding}
                custom={1}
                type="text"
                name="name"
                id="first_name"
                placeholder="Име"
                required
                className="w-full px-3 py-2 placeholder-gray-300 border-b-[1px] border-[#1E1E1E] focus:outline-none form-item font-montserrat"
              />
              <div className="empty-feedback invalid-feedback text-red-400 text-sm mt-1 absolute">
                Please provide your name.
              </div>
            </div>
            <div className="mb-[41px] relative">
              <motion.input
                variants={elementGliding}
                custom={2}
                type="text"
                name="phone"
                id="phone"
                placeholder="Телефон"
                required
                className="w-full px-3 py-2 placeholder-gray-300 border-b-[1px] border-[#1E1E1E] focus:outline-none form-item font-montserrat"
              />

              <div className="empty-feedback invalid-feedback text-red-400 text-sm mt-1 absolute">
                Please provide your phone number.
              </div>
            </div>
            <div className="mb-[41px] relative">
              <motion.input
                variants={elementGliding}
                custom={3}
                type="email"
                name="email"
                id="email"
                placeholder="Имейл"
                required
                className="w-full px-3 py-2 placeholder-gray-300 border-b-[1px] border-[#1E1E1E] focus:outline-none form-item font-montserrat"
              />
              <div className="empty-feedback text-red-400 text-sm mt-1 absolute">
                Please provide your email address.
              </div>
              <div className="invalid-feedback text-red-400 text-sm mt-1 absolute">
                Please provide a valid email address.
              </div>
            </div>

            <div className="flex gap-10 xl:mb-[95px] space-x-4 pt-[10px] form-radio-wrap">
              <div className="">
                <input
                  className="item-radio"
                  type="radio"
                  id="test1"
                  name="radio-group"
                  checked
                />
                <label className="font-montserrat text-[18px]" htmlFor="test1">
                  {"I don't have a website"}
                </label>
              </div>
              <div className="xl:ml-[41px] form-radio">
                <input
                  className="item-radio"
                  type="radio"
                  id="test2"
                  name="radio-group"
                />
                <label className="font-montserrat text-[18px]" htmlFor="test2">
                  I have a website and want to order a review
                </label>
              </div>
            </div>
            <div className="flex gap-10 mb-6 justify-between form-send-agree-wrap">
              <div className="flex items-center">
                <input className="item-checkbox" type="checkbox" id="one" />
                <label className="label-checkbox font-montserrat" htmlFor="one">
                  <span className="relative"></span> I agree to the rules of
                  personal data processing
                </label>
              </div>
              <AnimatedButton
                type="submit"
                classname="w-full relative px-3 font-montserrat text-[26px] text-[#1E1E1E] focus:outline-none btn-send transition-all duration-100"
              >
                Изпрати
                <Image
                  src="/footer/icon-send.svg"
                  alt="rectangle"
                  width={24}
                  height={24}
                  className="absolute top-0 btn-send-icon"
                />
              </AnimatedButton>
            </div>
            <p className="text-base text-center text-gray-400" id="result"></p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default FormSection;
