import React, { useState } from "react";
import Modal from "../../base/Modal/Modal";
import logo from "../../../../../public/logo-transparent.svg";
import Image from "next/image";
import Input from "../../base/Input";
import useModal from "../../base/Modal/useModal";
import { jointWaitlist } from "@/services/waitlist";

type WaitlistModalProps = {
  isModalOpen: boolean;
  closeModal: VoidFunction;
};

type Message = {
  type: string;
  text: string;
};

const SendIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      aria-hidden="true"
      className="h-6 w-6 text-white"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
      ></path>
    </svg>
  );
};

const WaitlistModal = () => {
  const { isModalOpen, openModal, closeModal } = useModal();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState<Message>();

  const addToWaitList = async (e: any) => {
    e.preventDefault();
    const response: any = await jointWaitlist(email);
    if (response?.message === "success") {
      setEmail("");
      setMessage({
        type: "success",
        text: "You've been added to the waitlist, check your mail!",
      });
    } else {
      setMessage({
        type: "error",
        text: "Sorry could not add you to the waitlist",
      });
    }
  };
  return (
    <Modal isOpen={true} onClose={closeModal}>
      <div className="min-w-[450px]">
        <div className="max-w-sm flex flex-col items-center text-center mx-auto">
          <Image src={logo} alt="Logo" width={60} height={60} />
          <p className="font-light text-2xl">Join the waitlist </p>
          <p className="mt-4 mb-6 font-light text-xl max-w-[338px] mx-auto">
            {
              "Join the waitlist for exclusive benefits, early access, and exciting updates. Don't miss out—be among the first to know and secure your spot before others. Sign up now!"
            }
          </p>
          <form
            className="w-full md:w-[338px] mx-auto"
            onSubmit={addToWaitList}
          >
            <Input
              placeholder="Enter your email address"
              icon={SendIcon}
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            {message?.type && <p>{message?.text}</p>}
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default WaitlistModal;

// export const WaitListBtn = () =>{
//     return(
//         <button className="bg-gradient-to-r from-orange-500 to-red-600 text-white py-3.5 min-w-[70px] px-8 rounded-xl font-bold min-h-[64px] text-lg w-full md:w-fit">
//             Join the waitlist
//           </button>
//     )
// };
