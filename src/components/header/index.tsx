import React, { useEffect, useRef, useState } from "react";
import { FiUser, FiShoppingBag, FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";

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
  const icon_size = 37;

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
      className={`w-full ${
        bg ? "bg-[#ffffffb7] backdrop-blur-sm shadow-md" : ""
      } fixed top-0 z-50 transition-all`}
    >
      <div className="h-[85px] flex flex-row w-full justify-center items-center px-4">
        <div className="p-4 cursor-pointer">
          <FiMenu
            size={icon_size}
            className="stroke-1"
            color={`${bg ? "" : "white"}`}
          />
        </div>
        <div
          className={`galada-font flex-grow font-bold text-[42px] text-center ${
            bg ? "" : "text-white"
          }`}
        >
          Cloths
        </div>
        <div className="flex flex-row">
          <div className="p-4 cursor-pointer">
            <FiUser
              size={icon_size}
              className="stroke-1"
              color={`${bg ? "" : "white"}`}
            />
          </div>
          <div className="p-4 cursor-pointer">
            <FiShoppingBag
              size={icon_size}
              className="stroke-1"
              color={`${bg ? "" : "white"}`}
            />
          </div>
        </div>
      </div>

      <div className="flex w-full justify-center items-center">
        <Link to="/stock" state={{ from: "Women" }}>
          <MenuItem light={!bg}>Women</MenuItem>
        </Link>
        <Link to="/stock" state={{ from: "Men" }}>
          <MenuItem light={!bg}>Men</MenuItem>
        </Link>
        <Link to="/stock" state={{ from: "kids" }}>
          <MenuItem light={!bg}>Kids</MenuItem>
        </Link>
        <MenuItem light={!bg}>New</MenuItem>
        <MenuItem light={!bg}>Sale</MenuItem>
        <MenuItem light={!bg}>Browse</MenuItem>
      </div>
    </div>
  );
}
