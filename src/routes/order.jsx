import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductDetails from "../components/product-details/product-details";

export default function OrderRouter() {
  return (
    <Routes>
      <Route path="/product" element={<ProductDetails />}>
        <Route path=":productID" element={<ProductDetails />} />
      </Route>
    </Routes>
  );
}
