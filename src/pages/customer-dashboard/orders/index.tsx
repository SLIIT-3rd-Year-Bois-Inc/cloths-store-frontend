import React from "react";
import { FiCopy } from "react-icons/fi";

export default function Orders() {
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
    <div className="w-full bg-white p-8 shadow-lg mb-2">
      <div className="flex flex-row justify-center px-1 mb-2">
        <div className="font-bold">Awaiting Delivery</div>
        <div className="flex-grow"></div>
        <div>
          <div>Order date: {"Aug 12, 2022"}</div>
          <div className="flex flex-row items-center">
            Order ID:{93909349304930}{" "}
            <span
              className="text-blue-600 hover:text-black px-2 cursor-pointer"
              title="Copy Order ID"
            >
              <FiCopy />
            </span>
          </div>
        </div>
        <div>
          <a className="block rounded bg-black text-white hover:bg-white hover:text-black px-10 py-3 text-sm shadow-md ml-2">
            Order Details
          </a>
        </div>
      </div>
      <div className="flex flex-row">
        <img
          src="https://ae01.alicdn.com/kf/Hb048b9e7d1fb4fafb26619b84c2ad217V.jpg_220x220.jpg"
          className="w-[9em] mr-2"
        ></img>
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
  );
}
