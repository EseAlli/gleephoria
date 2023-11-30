import React, { useState } from "react";
import WaitlistModal from "./WaitlistModal";

const WaitListBtn = (props: { className?: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <button
        className={`bg-gradient-to-r from-orange-500 to-red-600 text-white py-3.5 min-w-[70px] px-8 rounded-xl font-bold min-h-[64px] text-lg w-full md:w-fit ${props?.className}`}
        onClick={handleModal}
      >
        Join the waitlist
      </button>
      <WaitlistModal isModalOpen={isOpen} closeModal={handleModal} />
    </>
  );
};

export default WaitListBtn;
