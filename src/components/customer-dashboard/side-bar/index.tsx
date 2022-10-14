import React, { useEffect, useState } from "react";
import { AiOutlineRight } from "react-icons/ai";
import { Portal } from "react-portal";
import { useMutation } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import { useInfoMessage } from "../../../hooks/info-message";
import { CustomerAPI } from "../../../pages/customer/api";
import { CustomerLoadingOverlay } from "../../customer-loading-overlay";
import { InfoMessage } from "../../info-message";
import SideBarItem from "../sidebar-item";

export default function SideBar() {
  const navigate = useNavigate();
  const [infoMessage, hideMessage] = useInfoMessage(
    InfoMessage.logged_out,
    true
  );

  const sign_out = useMutation(CustomerAPI.signOut, {
    onSuccess: () => {
      hideMessage(false);

      setTimeout(() => {
        navigate("/");
        sign_out.reset();
      }, 1000);
    },
    onError: () => {
      setTimeout(() => sign_out.reset(), 1000);
    },
  });

  const [hide, setHide] = useState(false);

  return (
    <div
      className={` ${
        !hide ? "w-[calc(15vw+10em)] max-w-[28em]" : "w-0"
      } overflow-hidden transition-all bg-white flex flex-col items-center flex-shrink-0`}
    >
      <div className="w-[calc(15vw+10em)] max-w-[28em]">
        <h1 className="font-bold pt-[5em] mb-2 text-lg text-center">Hello</h1>
        <div className="px-10 mt-4 w-full flex flex-col">
          <SideBarItem title="Your profile" to="./me">
            Me
          </SideBarItem>
          <SideBarItem title="Order History" to="./orders">
            Orders
          </SideBarItem>
          <SideBarItem title="Billing Management" to="./billing">
            Billing
          </SideBarItem>
          <SideBarItem title="Settings" to="./settings">
            Settings
          </SideBarItem>
          <SideBarItem title="Your Wishlist" to="./wishlist">
            Wishlist
          </SideBarItem>

          <SideBarItem
            to={""}
            title="Sign out from your account"
            className="mt-[5em]"
            onClick={() => sign_out.mutate()}
            red
          >
            Log out
          </SideBarItem>
          {sign_out.isSuccess ||
            sign_out.isLoading ||
            (sign_out.isError && (
              <CustomerLoadingOverlay>Loading</CustomerLoadingOverlay>
            ))}
        </div>
        <Portal>
          <button
            className={`fixed left-0 top-1/2 py-[40px] px-[1px] border-2 rounded-tr-xl rounded-br-xl bg-black`}
            onClick={() => {
              setHide((prev) => !prev);
            }}
          >
            <AiOutlineRight
              size={15}
              color={"white"}
              className={`${!hide ? "rotate-180" : ""}`}
            />
          </button>
        </Portal>

        {infoMessage}
      </div>
    </div>
  );
}
