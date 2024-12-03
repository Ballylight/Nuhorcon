"use client";
import React, { useEffect, useState } from "react";
import Logo from "./assets/images/logo.png";
import Link from "next/link";
import Image from "next/image";
import { isPageExempt } from "../addons/addons";




export default function Footer() {
    const [isClient, setIsClient] = useState(false);
    const exempt = isPageExempt();
  
    useEffect(() => {
      setIsClient(true);
    }, []);
  
    return (
      <>
        {!exempt && (
          <div className="bg-[#4C7064] w-full py-10">
            {/* Header Section */}
            <div className="flex justify-between items-center px-5 lg:px-20">
              {/* Logo Section */}
              <div className="flex items-center gap-2">
                <Image
                  src={Logo}
                  alt="footer_logo"
                  className="w-[40px] h-[40px]" // Adjust logo size
                />
                <h2 className="font-semibold text-white text-[18px]">Pngfitfam</h2>
              </div>
              {/* Navigation Links */}
              <div className="hidden md:flex gap-6 text-white">
                <a href="#" className="hover:underline">
                  Home
                </a>
                <a href="#" className="hover:underline">
                  About
                </a>
                <a href="#" className="hover:underline">
                  Team
                </a>
                <a href="#" className="hover:underline">
                  Process
                </a>
                <a href="#" className="hover:underline">
                  Pricing
                </a>
                <a href="#" className="hover:underline">
                  Blog
                </a>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </div>
              {/* "Go to Top" */}
              <div className="flex items-center text-white text-sm cursor-pointer">
                <span>Go to Top</span>
                {/* <MdOutlineArrowCircleUp size={20} /> */}
              </div>
            </div>
  
            {/* Footer Section */}
            <div className="flex flex-col md:flex-row justify-between items-center mt-10 px-5 lg:px-20">
              {/* Contact Details */}
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex items-center gap-2">
                  {/* <HiOutlineMail color="white" size={20} /> */}
                  <p className="text-white">hello@squareup.com</p>
                </div>
                <div className="flex items-center gap-2">
                  {/* <BsTelephone color="white" size={20} /> */}
                  <p className="text-white">+91 91813 23 2309</p>
                </div>
                <div className="flex items-center gap-2">
                  {/* <CiLocationOn color="white" size={20} /> */}
                  <p className="text-white">Somewhere in the World</p>
                </div>
              </div>
              {/* Footer Note */}
              <p className="text-white text-sm mt-5 md:mt-0">
                © 2023 Pngfitfam. All rights reserved.
              </p>
            </div>
          </div>
        )}
      </>
    );
  }
  