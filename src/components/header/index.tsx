import React, { useEffect, useRef, useState } from "react";
import { FiUser, FiShoppingBag, FiMenu } from "react-icons/fi";
import { Portal } from "react-portal";
import { Link, LinkProps } from "react-router-dom";
import UserModal from "../home-user-modal";

interface MenuItemProps extends LinkProps {
  children: string;
  light?: boolean;
}

const MenuItem = ({ children, light, ...rest }: MenuItemProps) => {
  return (
    <Link
      {...rest}
      className={`px-4 mx-1 py-1 mako-font rounded-2xl cursor-pointer drop-shadow-sm ${
        light ? "text-white" : ""
      }`}
    >
      {children}
    </Link>
  );
};

export interface UserModalState {
  show: boolean;
  mouse_over_modal: boolean;
}

export default function Header({ homeStyle }: { homeStyle?: boolean }) {
  const [bg, setBg] = useState(!homeStyle);
  const ref = useRef<HTMLDivElement>(null);
  const icon_size = 37;

  const [userModal, setUserModal] = useState<UserModalState>({
    show: false,
    mouse_over_modal: false,
  });

  const close_user_modal = () => {
    setUserModal((prev) => {
      return { ...prev, show: !prev.show };
    });
  };

  useEffect(() => {
    if (homeStyle) {
      const on_scroll = () => {
        let elem = ref.current;
        let b = elem && window.scrollY > elem.getBoundingClientRect().height;
        setBg(b ? true : false);
      };

      window.addEventListener("scroll", on_scroll);

      return () => {
        window.removeEventListener("scroll", on_scroll);
      };
    }
  }, []);

  return (
    <div
      ref={ref}
      className={`w-full ${
        bg ? "bg-[#ffffffb7] backdrop-blur-sm shadow-md" : ""
      } ${homeStyle ? "fixed" : "sticky"} top-0 z-50 transition-all`}
    >
      <div className="h-[85px] flex flex-row w-full justify-center items-center px-4">
        <div
          className={`p-4 cursor-pointer transition-all rounded-full ${
            bg ? "hover:bg-[#ffffff9a]" : "hover:bg-[#0000009a]"
          }`}
        >
          <FiMenu
            size={icon_size}
            className="stroke-1"
            color={`${bg ? "" : "white"}`}
          />
        </div>
        <Link
          className={`galada-font flex-grow font-bold text-[42px] text-center ${
            bg ? "" : "text-white"
          }`}
          to="/"
        >
          Cloths
        </Link>
        <div className="flex flex-row">
          <button
            className={`p-4 cursor-pointer transition-all rounded-full ${
              bg ? "hover:bg-[#ffffff9a]" : "hover:bg-[#0000009a]"
            }`}
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
          </button>
          <div
            className={`p-4 cursor-pointer transition-all rounded-full ${
              bg ? "hover:bg-[#ffffff9a]" : "hover:bg-[#0000009a]"
            }`}
          >
            <FiShoppingBag
              size={icon_size}
              className="stroke-1"
              color={`${bg ? "" : "white"}`}
            />
          </div>
        </div>
      </div>

      <div className="flex w-full pb-2 justify-center items-center">
        <MenuItem light={!bg} to="/stock/W">
          Women
        </MenuItem>
        <MenuItem light={!bg} to="/stock/M">
          Men
        </MenuItem>
        <MenuItem light={!bg} to="/stock/K">
          Kids
        </MenuItem>
        <MenuItem light={!bg} to="">
          New
        </MenuItem>
        <MenuItem light={!bg} to="">
          Sale
        </MenuItem>
        <MenuItem light={!bg} to="">
          Browse
        </MenuItem>
      </div>
      {userModal.show && (
        <Portal>
          <UserModal onClose={close_user_modal} />
        </Portal>
      )}
    </div>
  );
}
