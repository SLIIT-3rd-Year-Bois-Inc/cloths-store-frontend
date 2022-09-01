import { Dropdown } from "flowbite-react";
import React from "react";

export default function WishList() {
  return (
    <>
      <h1 className="font-bold text-2xl mb-4">Wish List</h1>
      <div className="w-full flex-grow">
        <WishFunctionBar />
        <div className="flex w-full">
          <WishProduct />
        </div>
      </div>
    </>
  );
}

function WishProduct() {
  return (
    <div className="flex flex-col p-8 w-full shadow-lg">
      <div className="flex flex-row">
        <div className="h-[9em] w-[9em] mr-2 flex-shrink-0 inline-block">
          <img
            src="https://ae01.alicdn.com/kf/Hb048b9e7d1fb4fafb26619b84c2ad217V.jpg_220x220.jpg"
            className="w-full h-full object-contain"
          ></img>
        </div>
        <div className="flex flex-col">
          <div className="flex-grow mb-1 cursor-pointer hover:text-red-500">
            KZ ZSN Pro In Ear Earphones 1BA+1DD Hybrid Technology Hifi Bass
            Earbuds Monitor Metal Headphones Sport Noise Cancelling Headset
          </div>
          <div className="flex-grow"></div>
          <div className="ml-2">
            <button className="bg-black text-white py-2 px-4 mr-2 rounded">
              Buy Now
            </button>
            <button className="bg-red-600 text-white py-2 px-4 rounded">
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function WishFunctionBar() {
  return (
    <div className="w-full px-4">
      <div className="inline-block">
        <Dropdown label="Category">
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
      </div>
    </div>
  );
}
