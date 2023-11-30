import React from "react";
import useModal from "../../base/Modal/useModal";

const Waitlist = () => {
  const { openModal } = useModal();
  return (
    <section className="min-h-[600px] flex items-center">
      <div className="container mx-auto flex flex-col md:flex-row justify-between px-6 md:px-0">
        <div className="my-4 md:my-0">
          <div className="w-20 h-1 bg-[#bc0a0a] md:ml-auto"></div>
          <p className="text-left md:text-right text-lg font-light my-1">
            Join the waitlist
          </p>
          <div className="w-36 h-1 bg-[#bc0a0a] md:ml-auto"></div>
        </div>
        <div className="md:max-w-sm xl:max-w-none">
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
          <button
            className="bg-gradient-to-r from-orange-500 to-red-600 text-white py-3.5 min-w-[70px] px-8 rounded-xl font-bold min-h-[64px] text-lg w-full md:w-fit"
            onClick={openModal}
          >
            Join the waitlist
          </button>
        </div>
      </div>
    </section>
  );
};

export default Waitlist;
