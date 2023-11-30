"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import logo from "../../../../../public/logo_text.svg";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import WaitListBtn from "../../fragments/waitlist/WaitListBtn";

const Nav = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const handleNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const handleResize = () => {
    console.log("running");
    if (window.innerWidth < 768) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
  };

  useEffect(() => {
    document.addEventListener("resize", handleResize, false);
    return () => document.removeEventListener("resize", handleResize);
  }, []);
  return (
    <nav className="bg-white flex justify-between p-4 md:p-8 items-center relative">
      <Image
        src={logo}
        alt="gleephoria"
        fill
        className="!h-4 !static !w-4 lg:!h-8 lg:!w-8 scale-[5.5] translate-x-8 md:pl-2"
      />

      <div className="md:basis-2/3 flex md:w-full justify-between item-center md:text-lg lg:px-10">
        {!showNavbar && (
          <HiOutlineMenuAlt3
            color="#e30b17"
            className="md:hidden"
            onClick={handleNavbar}
          />
        )}
        <ul
          className={`hidden flex-col md:flex-row gap-5 lg:gap-10 h-screen md:h-fit bg-white absolute right-0 min-w-[180px] md:min-w-none px-4 md:px-0 py-4 md:py-0 md:relative items-center self-center ${
            showNavbar && "!flex"
          }`}
        >
          <li className="md:hidden self-end">
            <IoMdClose onClick={handleNavbar} />
          </li>
          <li>
            <Link href="/">About us</Link>
          </li>
          <li>
            <Link href="/">Contact</Link>
          </li>
        </ul>
        <WaitListBtn className="!rounded-full hidden md:block" />
      </div>
    </nav>
  );
};

export default Nav;
