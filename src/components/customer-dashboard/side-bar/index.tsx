import React from "react";
import { useMutation } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import { CustomerAPI } from "../../../pages/customer/api";
import { CustomerLoadingOverlay } from "../../customer-loading-overlay";
import SideBarItem from "../sidebar-item";

export default function SideBar() {
  const navigate = useNavigate();

  const sign_out = useMutation(CustomerAPI.signOut, {
    onSuccess: () => {
      setTimeout(() => {
        navigate("/");
        sign_out.reset();
      }, 1000);
    },
    onError: () => {
      setTimeout(() => sign_out.reset(), 1000);
    },
  });

  return (
    <div className="w-[calc(15vw+10em)] max-w-[28em] bg-white flex flex-col items-center flex-shrink-0">
      <h1 className="font-bold pt-[5em] mb-2 text-lg">Hello</h1>
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
    </div>
  );
}
