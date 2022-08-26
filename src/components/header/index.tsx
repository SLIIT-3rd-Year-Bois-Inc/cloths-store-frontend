import React, { useEffect, useRef, useState } from "react";
import { FiUser, FiShoppingBag, FiMenu } from "react-icons/fi";
import { Portal } from "react-portal";
import { Link } from "react-router-dom";
import UserModal from "../home-user-modal";

interface MenuItemProps {
  children: string;
  light?: boolean;
}

const MenuItem = ({ children, light }: MenuItemProps) => {
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

export interface UserModalState {
  show: boolean;
}

export default function Header() {
  const [bg, setBg] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const icon_size = 37;

  const [userModal, setUserModal] = useState<UserModalState>({ show: false });

  const close_user_modal = () => {
    setUserModal((prev) => {
      return { ...prev, show: !prev.show };
    });
  };

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
          <div
            className="p-4 cursor-pointer"
            onClick={() =>
              setUserModal((prev) => {
                return { ...prev, show: true };
              })
            }
          >
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
      {userModal.show && (
        <Portal>
          <UserModal onClose={close_user_modal} />
        </Portal>
      )}
    </div>
  );
}
