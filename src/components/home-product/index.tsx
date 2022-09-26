import React from "react";
import { Link } from "react-router-dom";

export default function HomeProduct({
  title,
  price,
  image,
  sold,
  link,
}: {
  title: string;
  price: number;
  image: string;
  sold: number;
  link: string;
}) {
  return (
    <Link
      to={link}
      className="w-[275px] min-h-[350px] transition-all group bg-gray-50 flex flex-col pr-6 flex-shrink-0"
    >
      <div className="w-full flex flex-grow relative">
        <div className="flex-grow overflow-hidden">
          <img
            className="w-full h-full object-cover group-hover:scale-105 transition-all"
            src={image}
          ></img>
        </div>
        <div className="flex justify-center items-center text-[0.8em] z-20 absolute top-0 right-0 w-full pt-[0.3em] px-[0.5em]">
          <div className="px-1 text-white font-semibold bg-red-500">HOT</div>
          <div className="flex-grow"></div>
          <div className="font-semibold text-white text-border-1">
            {sold ?? "N/A"} Sold
          </div>
        </div>
      </div>
      <div className="w-full text-center font-sans flex-shrink-0 flex-grow">
        <span className="line-clamp-2">{title}</span>
        {price} Rs
      </div>
    </Link>
  );
}
