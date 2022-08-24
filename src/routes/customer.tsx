import React from "react";
import { Route, Routes } from "react-router-dom";
import CustomerDashBoard from "../pages/customer-dashboard/dashboard";
import { Profile } from "../pages/customer-dashboard/profile";
import Home from "../pages/home";

export default function CustomerRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/customer/dashboard" element={<CustomerDashBoard />}>
        <Route path="me" element={<Profile />}></Route>
      </Route>
    </Routes>
  );
}
