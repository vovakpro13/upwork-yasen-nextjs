import Image from "next/image";
import BottomSwiper from "./bottomSwipper/BottomSwipper"
function ThirdSection() {
  return (
    <section className="pb-[90px] third-section" id="process">
      <div className="w-full px-[16px] lg:px-32 lg:px-[133px] mb-10 experience-wrap">
        <div className="title-container-third w-full font-donpoligrafbum text-sm sm:text-xl lg:text-[35px] xl:text-[45px] xl:leading-[65px] lg:leading-[55px] sm:leading-[45px] leading-[32px] font-bold text-right">
          <h2 className="w-full">
            <span className="text-gold gold-underline">Ние създаваме </span>{" "}
            <span className="no-underline text-black">не просто сайт,</span>
          </h2>
          <div className="relative w-full ">
            <Image
              src="/Vector.svg"
              alt="vector"
              width={30}
              height={26}
              className="dots absolute bottom-0 sm:-bottom-3 -left-9 sm:w-[68px] lg:-left-32 "
            />
            <h2 className=" text-gold gold-underline">а инструмент за увеличаване </h2>
          </div>
          <h2 className="w-full">
            {" "}
            <span>на продажбите на</span>{" "}
            <span className="text-gold gold-underline">бизнеса Ви</span>{" "}
          </h2>
        </div>
        <div className="info-container relative h-[106px] sm:h-[152px] xl:h-[210px] w-full font-montserrat flex flex-col justify-between items-end border-r-[1px] border-primary mt-5 xl:mt-[60px] pr-3 sm:pr-6 ">
          <p className="info-container-text w-[80%]  text-end font-semibold xl:font-normal xl:leading-[52px] sm:text-[22px] xl:text-[46px] ">
            Това, което ни отличава от конкуренцията е персонализиран подход към всеки клиент.”
          </p>
          <p className="text-end text-end-custom font-medium ">
            Вижте нашият процес  на работа
          </p>
          <Image
            src="/Rectangle 15.svg"
            alt="rectangle"
            width={8}
            height={8}
            className="absolute top-0 -right-1 "
          />
          <Image
            src="/Rectangle 15.svg"
            alt="rectangle"
            width={8}
            height={8}
            className="absolute bottom-0 -right-1 "
          />
        </div>
      </div>
        <BottomSwiper/>
    </section>
  );
}

export default ThirdSection;
