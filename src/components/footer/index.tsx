import React from "react";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  const icon_size = 40;
  return (
    <>
      <div className="w-full bg-black flex flex-row text-white h-[18em]">
        <div className="flex flex-col items-center min-w-[15em] h-full pt-4">
          <div className="font-bold">Keep in touch</div>
          <div className="flex flex-row">
            <Link to="">
              <FiFacebook
                className="p-2 cursor-pointer hover:brightness-50"
                size={icon_size}
              />
            </Link>
            <Link to="">
              <FiTwitter
                className="p-2 cursor-pointer hover:brightness-50"
                size={icon_size}
              />
            </Link>
            <Link to="">
              <FiInstagram
                className="p-2 cursor-pointer hover:brightness-50"
                size={icon_size}
              />
            </Link>
            <Link to="">
              <FaWhatsapp
                className="p-2 cursor-pointer hover:brightness-50"
                size={icon_size}
              />
            </Link>
          </div>
        </div>
        <div className="flex flex-col py-4 mr-4">
          <Link to="" className="pb-3 px-2 font-bold">
            Customer Care
          </Link>
          <Link to="" className="pb-3 px-2 text-sm hover:font-semibold">
            Contact Us
          </Link>
          <Link to="" className="pb-3 px-2 text-sm hover:font-semibold">
            FAQs
          </Link>
          <Link to="" className="pb-3 px-2 text-sm hover:font-semibold">
            Terms of Service
          </Link>
          <Link to="" className="pb-3 px-2 text-sm hover:font-semibold">
            Privacy Policy
          </Link>
        </div>
        <div className="flex flex-col py-4">
          <Link to="" className="pb-3 px-2 font-bold">
            My Account
          </Link>
          <Link to="" className="pb-3 px-2 text-sm hover:font-semibold">
            Sign In/Register
          </Link>
          <Link to="" className="pb-3 px-2 text-sm hover:font-semibold">
            My Wishlist
          </Link>
          <Link to="" className="pb-3 px-2 text-sm hover:font-semibold">
            My Cart
          </Link>
        </div>
      </div>
      <div className="w-full text-center font-semibold text-sm py-2 bg-black text-white">
        Copyright © 2022 Cloths, Inc.
      </div>
    </>
  );
}
