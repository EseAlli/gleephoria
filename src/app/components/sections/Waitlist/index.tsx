import React from "react";

const Waitlist = () => {
  return (
    <section className="min-h-[500px]">
      <div className="container mx-auto px-4 flex justify-between">
        <div>
          <div className="w-20 h-1 bg-[#bc0a0a] ml-auto"></div>
          <p className="text-right text-lg font-light my-1">
            Join the waitlist
          </p>
          <div className="w-36 h-1 bg-[#bc0a0a] ml-auto"></div>
        </div>
        <div>
          <h3 className="text-3xl font-bold">
            Experience your world with
            <br />
            <span className="from-[#ed7020] to-[#bc0a0a] bg-clip-text bg-gradient-to-r text-transparent leading-relaxed">
              Gleephoria
            </span>
          </h3>
          <p className="max-w-[34rem] text-xl mt-4 mb-8">
            {
              "That's why we've created a dating platform that is designed to help you connect with individuals who share your interests, values, and lifestyle."
            }
          </p>
          <button className="bg-gradient-to-r from-orange-500 to-red-600 text-white py-3.5 min-w-[70px] px-8 rounded-xl font-bold hidden md:block min-h-[64px] text-lg">
            Join the waitlist
          </button>
        </div>
      </div>
    </section>
  );
};

export default Waitlist;
