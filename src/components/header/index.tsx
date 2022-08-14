import React, { useEffect, useRef, useState } from "react";
import { FiUser, FiShoppingBag, FiMenu } from "react-icons/fi";

const MenuItem = ({
  children,
  light,
}: {
  children: string;
  light?: boolean;
}) => {
  return (
    <div
      className={`px-4 mx-1 py-1 mako-font rounded-2xl cursor-pointer drop-shadow-sm ${
        light ? "text-white" : ""
      }`}
    >
      {children}
    </div>
  );
};

export default function Header() {
  const [bg, setBg] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      let elem = ref.current;
      let b = elem && window.scrollY > elem.getBoundingClientRect().height;
      setBg(b ? true : false);
    });
  }, []);

  return (
    <div
      ref={ref}
      className={`h-[9em] w-full ${
        bg ? "bg-[#ffffffb7] backdrop-blur-sm shadow-md" : ""
      } fixed top-0 z-50 transition-all`}
    >
      <div className="h-[100px] flex flex-row w-full justify-center items-center px-4">
        <div className="p-4">
          <FiMenu
            size={40}
            className="stroke-1"
            color={`${bg ? "" : "white"}`}
          />
        </div>
        <div
          className={`galada-font flex-grow font-bold text-[48px] text-center ${
            bg ? "" : "text-white"
          }`}
        >
          Cloths
        </div>
        <div className="flex flex-row">
          <div className="p-4">
            <FiUser
              size={40}
              className="stroke-1"
              color={`${bg ? "" : "white"}`}
            />
          </div>
          <div className="p-4">
            <FiShoppingBag
              size={40}
              className="stroke-1"
              color={`${bg ? "" : "white"}`}
            />
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center items-center">
        <MenuItem light={!bg}>Women</MenuItem>
        <MenuItem light={!bg}>Men</MenuItem>
        <MenuItem light={!bg}>Kids</MenuItem>
        <MenuItem light={!bg}>New</MenuItem>
        <MenuItem light={!bg}>Sale</MenuItem>
        <MenuItem light={!bg}>Browse</MenuItem>
      </div>
    </div>
  );
}
