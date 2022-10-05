import React from "react";
import { FiCopy } from "react-icons/fi";
import { useAuth } from "../../../hooks/auth";

export default function Orders() {
  useAuth();
  return (
    <>
      <h1 className="font-bold text-2xl mb-4">Your Orders</h1>
      <div className="w-full flex-grow max-w-[60em]">
        <Order />
        <Order />
        <Order />
        <Order />
      </div>
    </>
  );
}

interface OrderProps {
  name: string;
  date: Date;
  image: string;
  state: string;
  id: string;
}

function Order() {
  return (
    <div className="w-full bg-white shadow-lg mb-2 border-2 border-gray-300 rounded-md">
      <div className="p-6">
        <div className="flex flex-row justify-center px-2 mb-2">
          <div className="font-bold mr-2">Awaiting Delivery</div>
          <div className="flex-grow"></div>
          <div>
            <div className="line-clamp-1">Order date: {"Aug 12, 2022"}</div>
            <div className="flex flex-row items-center">
              <span className="line-clamp-1">Order ID:{93909349304930} </span>
              <span
                className="text-blue-600 hover:text-black px-2 cursor-pointer"
                title="Copy Order ID"
              >
                <FiCopy />
              </span>
            </div>
          </div>
          <a className="block h-fit cursor-pointer flex-shrink rounded bg-black text-white hover:bg-white hover:text-black p-2 text-sm shadow-md ml-2 line-clamp-1">
            Order Details
          </a>
        </div>
        <div className="flex flex-row">
          <div className="h-[9em] w-[9em] mr-2 flex-shrink-0">
            <img
              src="https://ae01.alicdn.com/kf/Hb048b9e7d1fb4fafb26619b84c2ad217V.jpg_220x220.jpg"
              className="w-full h-full object-contain"
            ></img>
          </div>
          <div className="flex flex-col">
            <div className="w-full mb-1 cursor-pointer hover:text-red-500">
              KZ ZSN Pro In Ear Earphones 1BA+1DD Hybrid Technology Hifi Bass
              Earbuds Monitor Metal Headphones Sport Noise Cancelling Headset
            </div>
            <div className="text-gray-500 mb-2">ZSN pro purple No mic</div>
            <div>US $13.69x1</div>
          </div>
        </div>
      </div>
    </div>
  );
}
