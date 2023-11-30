import React from "react";
import Image from "next/image";
import whyUs from "../../../../../public/why_us.svg";

const WhyUs = () => {
  return (
    <section className="min-h-[700px]">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-0">
        <div className="self-start">
          <p className="font-ligh">Why Us</p>
          <h3 className="text-3xl font-bold mt-2 mb-6 leading-relaxed">
            What makes us
            <br />
            <span className="from-[#ed7020] to-[#bc0a0a] bg-clip-text bg-gradient-to-r text-transparent">
              different?
            </span>
          </h3>
          <p className="max-w-md text-xl">
            At Gleephoria, we believe that finding your soulmate is a journey
            worth taking at Gleephoria, we believe that finding your soulmate is
            a journey worth taking
          </p>
        </div>
        <div className="mt-8 md:mt-0">
          <Image
            src={whyUs}
            alt="Why Us?"
            height={550}
            width={550}
            className="md:max-w-xs xl:max-w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
