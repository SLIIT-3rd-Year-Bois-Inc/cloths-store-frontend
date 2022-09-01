import React, { useEffect, useState } from "react";
import { GrClose } from "react-icons/gr";

interface UserModalProps {
  onClose: () => any;
}

export default function UserModal({ onClose, ...rest }: UserModalProps) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  const self_close = () => {
    setShow(false);
    setTimeout(() => onClose && onClose(), 500);
  };

  return (
    <div className="fixed w-full h-full top-0  z-50" onClick={self_close}>
      <div
        className={`absolute top-0 w-[15em] shadow-lg backdrop-blur-sm bg-[#ffffff88] right-0 ${
          show ? "translate-x-0" : "translate-x-full"
        } transition-[500ms]`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full">
          <button
            onClick={self_close}
            className="p-2 bg-gray-200 hover:bg-gray-400 cursor-pointer"
          >
            <GrClose size={20} color="white" />
          </button>
        </div>
        <div className="w-full flex justify-center items-center">
          <img className="w-[5em] h-[5em] mb-6"></img>
        </div>
        <div className="flex flex-col">
          <button className="bg-white text-black px-1 py-2 line-spacing-main open-sans-font text-sm">
            Login
          </button>
          <button className="bg-black text-white px-1 py-2 line-spacing-main open-sans-font text-sm">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
