import React from "react";
import appStore from "../../../../public/app_store-btn.svg";
import playStore from "../../../../public/play_store-btn.svg";
import appPreview from "../../../../public/app_preview.svg";
import Image from "next/image";

const Header = () => {
  return (
    <header className="container mx-auto px-4 w-full flex flex-col items-center justify-center min-h-screen py-16 lg:py-24">
      <h1 className="text-netural-800 text-2xl md:text-[38px] max-w-xl font-bold text-center !leading-[3.625rem]">
        Unlock the Magic of Love at{" "}
        <span className="text-orange-500">Glephoria</span>: Where Connections
        Spark and Hearts Soar!
      </h1>
      <div className="grid gap-3.5 justify-items-center">
        <p>Coming Soon</p>
        <div className="flex gap-2.5 items-center">
          <Image
            src={appStore}
            alt="download from app store"
            width={120}
            height={120}
          />
          <Image
            src={playStore}
            alt="download from play store"
            width={120}
            height={120}
          />
        </div>
      </div>
      <div className="mt-14">
        <Image src={appPreview} alt="Gleephoria App" width={850} height={850} />
        <div className="max-w-2xl ml-auto my-8 flex flex-col gap-6 items-end">
          <div className="border-2 border-red-700 w-72"></div>
          <p className="text-center font-light md:text-xl !leading-relaxed text-neutral-400">
            {
              "At Gleephoria, we believe that finding your soulmate is a journey worth taking. That's why we've created a dating platform that is designed to help you connect with individuals who share your interests, values, and lifestyle."
            }
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
