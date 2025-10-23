import React from "react";
import Container from "../Layout/Container";
import footerLogo from "../../assets/footerLogo.png";
import { IoLogoInstagram } from "react-icons/io5";
import { FaDribbble } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaRegPaperPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#263238] py-[65px]">
      <Container>
        <div className="flex justify-between">
          <div className="w-[350px]">
            <div>
              <img src={footerLogo} alt="#footerLogo" />
              <p className="mt-[40px] font-primary text-[14px] text-[#F5F7FA] leading-[20px]">
                Copyright © 2025 Nexcent ltd.
              </p>
              <p className="mt-[8px] mb-[40px] font-primary text-[14px] text-[#F5F7FA] leading-[20px]">
                All rights reserved
              </p>
              <div className="flex space-x-[16px]">
                <div className="w-[32px] h-[32px] bg-[#42444A] rounded-full flex items-center justify-center text-white text-[18px]">
                  <IoLogoInstagram />
                </div>
                <div className="w-[32px] h-[32px] bg-[#42444A] rounded-full flex items-center justify-center text-white text-[18px]">
                  <FaDribbble />
                </div>
                <div className="w-[32px] h-[32px] bg-[#42444A] rounded-full flex items-center justify-center text-white text-[18px]">
                  <FaTwitter />
                </div>
                <div className="w-[32px] h-[32px] bg-[#42444A] rounded-full flex items-center justify-center text-white text-[18px]">
                  <FaYoutube />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[635px] flex justify-between">
            <div className="w-[160px]">
                <ul>
                    <li className="font-primary font-semibold text-[20px] text-[#fff] leading-[28px] mb-[24px]">Company</li>
                    <li className="font-primary text-[14px] text-[#fff] leading-[20px] mb-[12px]"><a href="#">About us</a></li>
                    <li  className="font-primary text-[14px] text-[#fff] leading-[20px] mb-[12px]"><a href="#">Blog</a></li>
                    <li  className="font-primary text-[14px] text-[#fff] leading-[20px] mb-[12px]"><a href="#">Contact us</a></li>
                    <li  className="font-primary text-[14px] text-[#fff] leading-[20px] mb-[12px]"><a href="#">Pricing</a></li>
                    <li  className="font-primary text-[14px] text-[#fff] leading-[20px] mb-[12px]"><a href="#">Testimonials</a></li>
                </ul>
            </div>
            <div className="w-[160px]">
                 <ul>
                    <li className="font-primary font-semibold text-[20px] text-[#fff] leading-[28px] mb-[24px]">Support</li>
                    <li className="font-primary text-[14px] text-[#fff] leading-[20px] mb-[12px]"><a href="#">Help center</a></li>
                    <li  className="font-primary text-[14px] text-[#fff] leading-[20px] mb-[12px]"><a href="#">Terms of service</a></li>
                    <li  className="font-primary text-[14px] text-[#fff] leading-[20px] mb-[12px]"><a href="#">Legal</a></li>
                    <li  className="font-primary text-[14px] text-[#fff] leading-[20px] mb-[12px]"><a href="#">Privacy policy</a></li>
                    <li  className="font-primary text-[14px] text-[#fff] leading-[20px] mb-[12px]"><a href="#">Status</a></li>
                </ul>
            </div>
            <div className="w-[255px]">
                <h4 className="font-primary font-semibold text-[20px] text-[#fff] leading-[28px] mb-[24px]">Stay up to date</h4>
                <div className="w-[255px] relative">
                    <input type="email" placeholder="your email address" className="w-full font-primary text-[14px] text-[#D9DBE1] leading-[20px] py-[10px] pl-[12px] bg-[#56585D] border-2 border-[#56585D] rounded-[8px]"/>
                    <div className="absolute top-[50%] right-[4%] translate-y-[-50%] outline-none focus:bg-none">
                        <FaRegPaperPlane size={18} color="#fff" />
                    </div>
                </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
