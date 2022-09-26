import React from "react";
import { Outlet } from "react-router-dom";
import CustomerDashHeader from "../../../components/customer-dash-header";
import SideBar from "../../../components/customer-dashboard/side-bar";
import Footer from "../../../components/footer";
import { useAuth } from "../../../hooks/auth";

export default function CustomerDashBoard() {
  useAuth();
  return (
    <>
      <CustomerDashHeader />
      <div className="w-screen h-screen bg-black flex flex-col">
        <div className="flex flex-row flex-grow h-[calc(100vh-10em)] w-full">
          <SideBar />
          <div className="flex-grow bg-white pt-[5em] px-[4em] min-w-0 overflow-y-auto">
            <Outlet />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
