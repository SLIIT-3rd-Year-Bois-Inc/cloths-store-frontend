import React from "react";
import { Outlet } from "react-router-dom";
import CustomerDashHeader from "../../../components/customer/dashboard-header";
import SideBar from "../../../components/customer-dashboard/side-bar";
import Footer from "../../../components/footer";
import { useAuth } from "../../../hooks/auth";

export default function CustomerDashBoard() {
  useAuth();
  return (
    <>
      <CustomerDashHeader />
      <div className="flex h-screen w-full">
        <SideBar />
        <div className="flex-grow m-4 rounded-2xl border-4 border-dashed border-gray-500 pt-[3em] px-[3em] min-w-0 overflow-y-auto">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
}
