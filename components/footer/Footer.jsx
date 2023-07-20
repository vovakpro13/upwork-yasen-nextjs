import './style.css';
import Link from "next/link";

function Footer() {
  return (
    <footer className="footer relative px-[16px] lg:px-32 py-[10px]">
      <div className="footer-container">
        <div className="footer-navbar flex justify-center">
            <ul className="flex">
                <li className="footer-nav-item"><Link className="font-montserrat text-[14px] text-[#7D7D7D]" href="">Privacy Policy</Link></li>
                <li className="footer-nav-item md:ml-[53px] ml-[39px]"><Link className="font-montserrat text-[12px] md:text-[14px] text-[#7D7D7D]" href="">2023 J MAX</Link></li>
                <li className="footer-nav-item md:ml-[53px] ml-[39px]"><Link className="font-montserrat text-[12px] md:text-[14px] text-[#7D7D7D]" href="">Terms of use</Link></li>
            </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
