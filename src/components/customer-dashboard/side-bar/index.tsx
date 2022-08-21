import React from "react";

export default function SideBar() {
  return (
    <div className="w-[calc(20vw+10em)] max-w-[28em] bg-white flex flex-col items-center">
      <h1 className="font-bold pt-[5em] mb-2 text-lg">Hello</h1>
      <div className="px-10 mt-4 w-full">
        <SideBarItem title="Your profile">Me</SideBarItem>
        <SideBarItem title="Order History">Orders</SideBarItem>
        <SideBarItem title="Billing History and Management">
          Billing
        </SideBarItem>
        <SideBarItem title="Settings">Settings</SideBarItem>
        <SideBarItem title="Your Wishlist">Wishlist</SideBarItem>

        <SideBarItem
          title="Sign out from your account"
          className="mt-[5em]"
          red
        >
          Log out
        </SideBarItem>
      </div>
    </div>
  );
}

interface SideBarProps {
  children?: string;
  red?: boolean;
  className?: string;
  title?: string;
}

function SideBarItem({ children, red, className, title }: SideBarProps) {
  return (
    <div
      title={title ? title : ""}
      className={`w-full text-center ${
        red ? "bg-red-600 text-white" : "bg-gray-200"
      } mb-3 p-2 rounded hover:bg-red-300 cursor-pointer transition-[50ms] open-sans-font line-spacing-small text-sm ${
        className ? className : ""
      }`}
    >
      {children}
    </div>
  );
}
