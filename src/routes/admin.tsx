import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminAddCustomer from "../pages/admin/admin-add-customer";
import { AdminHome } from "../pages/admin/admin-home";
import { CustomerManagement } from "../pages/admin/customer-management";

export default function AdminRouter() {
  return (
    <Routes>
      <Route path="/admin" element={<AdminHome />}>
        <Route path="customers" element={<CustomerManagement />} />
        <Route path="customers/add" element={<AdminAddCustomer />} />
      </Route>
    </Routes>
  );
}
