"use client";
import React, {useEffect, useState} from "react";
import Image from "next/image";
import Link from "next/link";
import './navBar.css'
const BurgerNavbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const [windowWidthState, setWindowWidthState] = useState(0);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const windowWidth = window.innerWidth;
            setWindowWidthState(windowWidth)
            console.log('windowWidthState', windowWidthState)
        }
    }, [windowWidthState])

    const toggleMenu = () => {
        if (openMenu === false) {
            setOpenMenu(true)
        } else {
            setOpenMenu(false)
        }

    }

    return (
        <div className={`${openMenu ? 'show-menu-wrap' : 'w-0'} h-screen fixed top-0 left-0 z-[51]`}>
            <div className={`menu-container burger-wrap w-[102px] lg:border-r-[${openMenu ? '0' : '1px'}] border-r-primary relative top-[55px] left-[130px] fixed z-[90]`}>
                <button className="menu outline-0 btn-menu" onClick={toggleMenu}>
                    <svg className="burger-menu" width="38" height="26" viewBox="0 0 38 26" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path className="line line1" d="M30 2L6 2" stroke="#51C14F" stroke-width="4" stroke-linecap="round"/>
                        <path className="line line2" d="M36 13.1699H31M2 13.1699H19" stroke="#51C14F" stroke-width="4"
                              stroke-linecap="round"/>
                        <path className="line line3" d="M22 24L10 24" stroke="#51C14F" stroke-width="4" stroke-linecap="round"/>
                    </svg>
                </button>
            </div>
            <div className={`${openMenu ? 'open-menu' : 'close-menu'} duration-300 h-screen wrapper-burger-menu fixed overflow-hidden top-0 left-0 z-[51]`}>
                <nav className="burger-navbar w-full flex flex-col z-[101] justify-between h-full">
                    <ul className="flex font-montserrat font-bold flex-col">
                        <li><Link className="text-[24px] text-white" href="">Portfolio</Link></li>
                        <li className="mt-[35px] lg:mt-[20px] xl:mt-[35px]"><Link className="text-[24px] text-white" href="">Prices</Link></li>
                        <li className="mt-[35px] lg:mt-[20px] xl:mt-[35px]"><Link className="text-[24px] text-white" href="">Develop Process</Link></li>
                        <li className="mt-[35px] lg:mt-[20px] xl:mt-[35px]"><Link className="text-[24px] text-white" href="">F.A.Q.</Link></li>
                        <li className="mt-[35px] lg:mt-[20px] xl:mt-[35px]"><Link className="text-[24px] text-white" href="">Team</Link></li>
                    </ul>
                    <ul className="flex">
                        <li className="footer-social"><Link href="">
                            <Image
                                src="/footer/facebook.svg"
                                alt="rectangle"
                                width={24}
                                height={24}
                                className="footer-social-icon"
                            />
                        </Link></li>
                        <li className="ml-[44px] lg:ml-[24px] xl:ml-[24px] footer-social"><Link href="">
                            <Image
                                src="/footer/Instagram.svg"
                                alt="rectangle"
                                width={24}
                                height={24}
                                className="footer-social-icon"
                            />
                        </Link></li>
                        <li className="ml-[44px] lg:ml-[24px] xl:ml-[24px] footer-social"><Link href="">
                            <Image
                                src="/footer/LinkedIn.svg"
                                alt="rectangle"
                                width={24}
                                height={24}
                                className="footer-social-icon"
                            />
                        </Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default BurgerNavbar;
