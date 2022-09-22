import React from "react";
import { Route, Routes } from "react-router-dom";
import { AdminHome } from "../pages/admin/admin-home";
import { CustomerManagement } from "../pages/admin/customer-management";
import Billing from "../pages/customer-dashboard/billing";
import CustomerDashBoard from "../pages/customer-dashboard/dashboard";
import Orders from "../pages/customer-dashboard/orders";
import { Profile } from "../pages/customer-dashboard/profile";
import Settings from "../pages/customer-dashboard/settings";
import WishList from "../pages/customer-dashboard/wishlist";
import Login from "../pages/customer/login";
import SignUp from "../pages/customer/sign-up";
import { FileUpload } from "../pages/examples/file-upload";
import Home from "../pages/home";

export default function CustomerRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/customer/dashboard" element={<CustomerDashBoard />}>
        <Route path="me" element={<Profile />}></Route>
        <Route path="orders" element={<Orders />}></Route>
        <Route path="billing" element={<Billing />}></Route>
        <Route path="settings" element={<Settings />}></Route>
        <Route path="wishlist" element={<WishList />}></Route>
      </Route>
      <Route path="/customer/login" element={<Login />} />
      <Route path="/customer/sign-up" element={<SignUp />} />

      <Route path="/admin" element={<AdminHome />}>
        <Route path="customers" element={<CustomerManagement />} />
      </Route>
      <Route path="/example/file-upload" element={<FileUpload />} />
    </Routes>
  );
}
