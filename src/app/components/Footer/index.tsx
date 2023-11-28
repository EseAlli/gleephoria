import Link from "next/link";
import React from "react";
import linkedin from "../../../../public/ic_linkedin.svg";
import whatsapp from "../../../../public/ic_whatsapp.svg";
import facebook from "../../../../public/ic_facebook.svg";
import twitter from "../../../../public/ic_twitter.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="absolute bottom-0 w-full bg-grey py-14 max-h-96">
      <div className="flex flex-col items-center gap-y-6 justify-center container mx-auto">
        <div className="flex items-center gap-5">
          <a href="/">
            <Image src={twitter} alt="twitter" height={30} width={30} />
          </a>
          <a href="/">
            <Image src={whatsapp} alt="whatsapp" height={30} width={30} />
          </a>
          <a href="/">
            <Image src={facebook} alt="facebook" height={30} width={31} />
          </a>
          <a href="/">
            <Image src={linkedin} alt="linkedin" height={30} width={30} />
          </a>
        </div>
        <div className="text-lg">
          <Link href="/" className="border-r-2 border-r-black px-1.5">
            Home
          </Link>
          <Link href="/" className="border-r-2 border-r-black px-1.5">
            FAQs
          </Link>
          <Link href="/" className="border-r-2 border-r-black px-1.5">
            About
          </Link>
          <Link href="/" className="px-1.5">
            Contact
          </Link>
        </div>
        <p className="text-center">
          &copy;2023 Gleephoria. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
