import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../../../components/customer-dashboard/side-bar";
import { useAuth } from "../../../hooks/auth";

export default function CustomerDashBoard() {
  useAuth();
  return (
    <div className="w-screen h-screen bg-black flex flex-row">
      <SideBar />
      <div className="flex-grow bg-white pt-[5em] px-[4em] min-w-0 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
}
