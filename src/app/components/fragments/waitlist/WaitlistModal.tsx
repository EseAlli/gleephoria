import React, { useState } from "react";
import Modal from "../../base/Modal/Modal";
import logo from "../../../../../public/logo-transparent.svg";
import Image from "next/image";
import Input from "../../base/Input";
import useModal from "../../base/Modal/useModal";
import { joinWaitlist, sendEmail } from "@/services/waitlist";

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
      strokeWidth="1.5"
      stroke="currentColor"
      aria-hidden="true"
      className="h-6 w-6 text-white"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
      ></path>
    </svg>
  );
};

const LoadingIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="300"
      height="300"
      fill="none"
      stroke="#ffffff"
      viewBox="0 0 24 24"
    >
      <path
        className="styles_pathStyle___IqOu"
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
      ></path>
    </svg>
  );
};

const WaitlistModal = (props: WaitlistModalProps) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState<Message>();
  const [loading, setLoading] = useState(false);

  const addToWaitList = async (e: any) => {
    setLoading(true);
    e.preventDefault();
    const response: any = await joinWaitlist(email);
    if (response?.message === "success") {
      setEmail("");
      setLoading(false);
      setMessage({
        type: "success",
        text: "You've been added to the waitlist, check your mail!",
      });
      const res: any = await sendEmail(email);
      console.log(res);
    } else {
      setLoading(false);
      setMessage({
        type: "error",
        text: "Sorry could not add you to the waitlist",
      });
    }
  };
  return (
    <Modal isOpen={props.isModalOpen} onClose={props.closeModal}>
      <div className="sm:min-w-[450px]">
        <div className="max-w-sm flex flex-col items-center text-center mx-auto">
          <Image src={logo} alt="Logo" width={60} height={60} />
          <p className="font-light text-2xl">Join the waitlist </p>
          <p className="mt-4 mb-6 font-light text-sm sm:text-xl max-w-[338px] mx-auto">
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
              icon={loading ? LoadingIcon : SendIcon}
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            {message?.type && <p className="text-sm my-1">{message?.text}</p>}
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default WaitlistModal;
