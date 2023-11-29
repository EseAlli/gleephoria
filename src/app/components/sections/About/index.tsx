import Image from "next/image";
import React from "react";
import connectImage from "../../../../../public/connect.svg";

const About = () => {
  return (
    <section className="bg-grey min-h-[800px] flex items-center">
      <div className="container mx-auto px-2 flex flex-col md:flex-row items-center justify-center md:gap-16 lg:gap-24">
        <div className="max-w-fit ml-auto">
          <p className="font-light"> About us</p>
          <h2 className="md:text-2xl lg:text-3xl font-bold my-2">
            Connect with your
            <br />
            <span className="from-[#ed7020] to-[#bc0a0a] bg-clip-text bg-gradient-to-r text-transparent">
              Soul-Mate
            </span>
          </h2>
          <p className=" max-w-lg text-lg md:text-xl">
            {
              "At Gleephoria, we believe that finding your soulmate is a journey worth taking. That's why we've created a dating platform that is designed to help you connect with individuals who share your interests, values, and lifestyle."
            }
          </p>
        </div>
        <div className="justify-self-end">
          <Image src={connectImage} alt="connect on gleephoria" />
        </div>
      </div>
    </section>
  );
};

export default About;
