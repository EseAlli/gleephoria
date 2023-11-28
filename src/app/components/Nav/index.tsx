import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../../../public/logo_text.svg";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const Nav = () => {
  return (
    <nav className="bg-white flex justify-between p-4 md:p-8 items-center">
      <Image
        src={logo}
        alt="gleephoria"
        fill
        className="!h-4 !static !w-4 lg:!h-8 lg:!w-8 scale-[5.5] translate-x-8 md:pl-2"
      />

      <div className="md:basis-2/3 flex w-full justify-between item-center md:text-lg lg:px-10">
        <HiOutlineMenuAlt3 color="#e30b17" className="md:hidden" />
        <ul className="hidden md:flex lg:gap-10 items-center">
          <li>
            <Link href="/">About us</Link>
          </li>
          <li>
            <Link href="/">Contact</Link>
          </li>
        </ul>
        <button className="bg-gradient-to-r from-orange-500 to-red-600 text-white py-3.5 min-w-[50px] px-8 rounded-full font-bold">
          Join the waitlist
        </button>
      </div>
    </nav>
  );
};

export default Nav;
