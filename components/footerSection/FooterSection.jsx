import Image from "next/image";
import './style.css';

function FooterSection() {
  return (
    <section className="footer-section relative px-9 lg:px-32 pt-[50px] pb-[34px]">
      <Image
          src="/footer/Vector 19.svg"
          alt="rectangle"
          width={1645}
          height={210}
          className="bg-footer absolute bottom-0 right-0"
      />
      <div className="footer-container">
        <div className="text-center w-[100%] flex justify-center">
          <Image
            src="/logo-jmax.svg"
            alt="rectangle"
            width={67}
            height={100}
            className="logo"
          />
        </div>
        <div className="footer-navbar flex justify-center mt-[51px] relative">
          <ul className="flex absolute left-0">
            <li className="xl:mr-[35px]"><a className="font-montserrat text-[18px] text-primary" href="tel:+12346789">+1 234 67 89</a></li>
            <li><a className="font-montserrat text-[18px] text-primary" href="mailto:jmax@mail.com">jmax@mail.com</a></li>
          </ul>
          <ul className="flex">
            <li><a className="font-montserrat text-[22px] text-white" href="">Portfolio</a></li>
            <li className="xl:ml-[35px]"><a className="font-montserrat text-[22px] text-white" href="">Prices</a></li>
            <li className="xl:ml-[35px]"><a className="font-montserrat text-[22px] text-white" href="">Develop Process</a></li>
            <li className="xl:ml-[35px]"><a className="font-montserrat text-[22px] text-white" href="">F.A.Q.</a></li>
          </ul>
          <ul className="flex absolute right-0">
            <li className="footer-social"><a href="">
              <Image
          src="/footer/facebook.svg"
          alt="rectangle"
          width={24}
          height={24}
          className="footer-social-icon"
      />
            </a></li>
            <li className="xl:ml-[24px] footer-social"><a href="">
              <Image
          src="/footer/Instagram.svg"
          alt="rectangle"
          width={24}
          height={24}
          className="footer-social-icon"
      />
            </a></li>
            <li className="xl:ml-[24px] footer-social"><a href="">
              <Image
          src="/footer/LinkedIn.svg"
          alt="rectangle"
          width={24}
          height={24}
          className="footer-social-icon"
      />
            </a></li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default FooterSection;
