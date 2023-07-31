import Image from "next/image";
import DropDown from "./ui/DropDown";
import React from "react";

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
        <div className="first-container flex w-full flex-wrap">
          <div className="big-text w-1/3 flex justify-start">
            <p className="md:block flex">
              <span className="font-montserrat text-[18px]  xl:text-[46px] font-light underline mr-[10px]">
                често задавани
              </span>{" "}
              {""}
              <span className="font-donpoligrafbum text-[20px] sm:text-[36px] xl:text-[56px] font-bold gold-underline text-gold ">
                ВЪПРОСИ{" "}
              </span>
            </p>
            <hr className="w-[30px] sm:w-[81px] h-2 border-black border-t-[8px] sm:border-t-[18px] hidden xl:block translate-y-10 xl:ml-5 relative top-[-14px]" />
          </div>
          <div className="text-line-container xl:w-2/3 flex justify-start items-center w-full">
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
        <DropDown number={1} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}/>
        <DropDown number={2} description={'Distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.'} />
        <DropDown number={3} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}/>
        <DropDown number={4} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}/>
        <DropDown number={5} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}/>
      </div>
    </section>
  );
}

export default FaqSection;
