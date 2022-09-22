import React from "react";
import { Outlet } from "react-router-dom";
import AdminHeader from "../../../components/admin-header";
import { AdminSidebar } from "../admin-sidebar";

export function AdminHome() {
  return (
    <>
      <div className="w-screen h-screen flex flex-col">
        <AdminHeader />
        <div className="flex flex-grow flex-row">
          <AdminSidebar />
          <div className="flex-grow h-full overflow-y-auto px-3">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
