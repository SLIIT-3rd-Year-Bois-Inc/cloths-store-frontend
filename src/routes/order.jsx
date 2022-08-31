import React from "react";
import { Route, Routes } from "react-router-dom";
import Test from "../components/product-details/product-details";

export default function OrderRouter() {
  return (
    <Routes>
      <Route path="/product" element={<Test />} />
    </Routes>
  );
}
