import React from "react";

export default function HomeProduct({
  title,
  price,
  image,
  sold,
}: {
  title: string;
  price: number;
  image: string;
  sold: number;
}) {
  return (
    <div className="w-[275px] h-[350px] bg-gray-50 flex flex-col pr-6 flex-shrink-0">
      <div className="w-full flex-grow relative">
        <img
          className="w-full h-full object-cover top-0 right-0 z-10 absolute"
          src={image}
        ></img>
        <div className="flex justify-center items-center text-[0.8em] z-20 absolute w-full pt-[0.3em] px-[0.5em]">
          <div className="px-1 text-white font-semibold bg-red-500">HOT</div>
          <div className="flex-grow"></div>
          <div className="font-semibold text-white text-border-1">
            {sold ?? "N/A"} Sold
          </div>
        </div>
      </div>
      <div className="w-full text-center font-sans">
        {title} <br></br>
        {price} Rs
      </div>
    </div>
  );
}
