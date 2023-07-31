"use client";
import React, {useEffect, useState} from "react";
import Image from "next/image";
import Link from "next/link";
import './navBar.css'
import BurgerNavbar from "@/components/layout/BurgerNavBar";
const Navbar = () => {
  const [position, setPosition] = useState(0)
  const [visible, setVisible] = useState(true)
  useEffect(()=> {
    if (typeof window !== 'undefined') {
      const handleScroll = () => {

        let moving = window.scrollY;

        setVisible(position > moving);
        setPosition(moving)
      };
      window.addEventListener("scroll", handleScroll);
      return(() => {
        window.removeEventListener("scroll", handleScroll);
      })
    }

  })

  const cls = visible ? "visible-nav" : "hidden-nav";
  return (
    <div className={`${cls} w-full fixed z-[101] wrapper-nav-global md:h-[128px] h-[80px]`}>
      <nav className="navbar w-full flex justify-between bg-transparent z-50 fixed overflow-hidden lg:px-32">
        <div className="left-container left-container-custom flex items-center relative w-[43%] lg:w-[41%] border-b-[1px] border-b-primary relative z-10">
          <Image
            src="/Rectangle 15.svg"
            alt="rectangle"
            width={10}
            height={10}
            className="absolute -bottom-[5px] right-[23px] lg:right-28"
          />


          <Link href="tel:+1234567890" className="tel hover-nav text-white font-montserrat font-semibold hidden lg:block top-[5px] relative">
            +1 234 56 78 90
          </Link>
        </div>
        <div className="right-container right-container-header gap-2 flex justify-between relative w-[55%] lg:w-[58%] h-[80px] lg:h-[123px] border-b-[1px] border-b-primary relative z-10">
          <div className="logo-container w-1/2 h-14 lg:h-[82px] border-r border-l border-primary">
            <Image
              src="/logo-jmax.svg"
              alt="logo"
              width={54}
              height={80}
              className="m-auto lg:translate-y-1 translate-y-3 relative top-3 logo"
            />
          </div>
          <Link href="tel:+1234567890" className="mob-tel text-white w-1/2 font-montserrat lg:ml-9 mt-7 lg:mt-5 lg:font-semibold text-[10px] sm:text-lg block lg:hidden text-right whitespace-nowrap">
            +1 234 56 78 90
          </Link>
          <div className="buttons-container hidden lg:flex  justify-around items-center relative z-30">
            <Link href="#" className="relative z-0 px-[13px] header-btn top-[4px]">
              <hr className="nav-button h-24 -top-5 w-0 absolute z-0 border-primary border-t-[3px] rounded-sm " />
              <span className="header-btn__border absolute left-0 top-0">
                <Image
                    src="/call.svg"
                    alt="button"
                    width={24}
                    height={24}
                    className="absolute left-[39px] -top-[10px] icon"
                />
                <Image
                    src="/btn-border.svg"
                    alt="button"
                    width={200}
                    height={54}
                    className="w-full"
                />
              </span>
              <span className="header-btn__text font-montserrat">КОНСУЛТАЦИЯ</span>

            </Link>
            <Link href="#" className="relative z-0 px-[13px] header-btn top-[4px] -left-[4px] pr-0">
              <hr className="nav-button h-24 -top-5 w-0 absolute z-0 border-primary border-t-[3px] rounded-sm " />
              <span className="header-btn__border absolute left-0 top-0">
                <Image
                    src="/document.svg"
                    alt="button"
                    width={24}
                    height={24}
                    className="absolute left-[39px] -top-[10px] icon"
                />
                <Image
                    src="/btn-border.svg"
                    alt="button"
                    width={200}
                    height={54}
                    className="w-full"
                />
              </span>
              <span className="header-btn__text font-montserrat">БЕЗПЛАТЕН ОДИТ</span>

            </Link>
          </div>
          <Image
            src="/Rectangle 15.svg"
            alt="rectangle"
            width={10}
            height={10}
            className="absolute -bottom-[5px] right-20 lg:right-[43%]"
          />
        </div>
      </nav>
      <BurgerNavbar />
    </div>
  );
};

export default Navbar;
