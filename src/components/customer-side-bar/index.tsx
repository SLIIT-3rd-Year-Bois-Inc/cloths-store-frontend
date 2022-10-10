import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

interface CustomerSideBarProps {
  onClickClose?: () => void;
}

export default function CustomerSideBar({
  onClickClose,
}: CustomerSideBarProps) {
  return (
    <div className="flex text-white flex-col justify-center items-center w-screen backdrop-blur-lg z-[90] h-screen fixed left-0 top-0 bg-[#00000088]">
      <Link
        to=""
        className="text-xl p-4 border-2 rounded-3xl bg-[#ffffff23] border-white mb-4 text-center min-w-[300px] hover:bg-[#00000075] cursor-pointer"
      >
        Browse Products
      </Link>
      <Link
        to="/customer/login"
        className="text-xl p-4 border-2 rounded-3xl bg-[#ffffff23] border-white mb-4 text-center min-w-[300px] hover:bg-[#00000075] cursor-pointer"
      >
        Login as a Customer
      </Link>
      <Link
        to=""
        className="text-xl p-4 border-2 rounded-3xl bg-[#ffffff23] border-white mb-4 text-center min-w-[300px] hover:bg-[#00000075] cursor-pointer"
      >
        FAQs
      </Link>
      <button
        className="flex flex-row p-4 justify-center items-center border-2 rounded-3xl bg-[#f7353523] hover:bg-[#00000075] border-white text-center min-w-[250px]"
        onClick={() => {
          onClickClose && onClickClose();
        }}
      >
        Close <AiOutlineClose className="ml-2 fill-white" color="white" />
      </button>
    </div>
  );
}
