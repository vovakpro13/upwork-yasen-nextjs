import Image from "next/image";
import './style.css';

function Footer() {
  return (
    <footer className="footer relative px-9 lg:px-32 py-[10px]">
      <div className="footer-container">
        <div className="footer-navbar flex justify-center">
            <ul className="flex">
                <li className="footer-nav-item"><a className="font-montserrat text-[14px] text-[#7D7D7D]" href="">Privacy Policy</a></li>
                <li className="footer-nav-item md:ml-[53px] ml-[39px]"><a className="font-montserrat text-[12px] md:text-[14px] text-[#7D7D7D]" href="">2023 J MAX</a></li>
                <li className="footer-nav-item md:ml-[53px] ml-[39px]"><a className="font-montserrat text-[12px] md:text-[14px] text-[#7D7D7D]" href="">Terms of use</a></li>
            </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
