import React from "react";
import { Route, Routes } from "react-router-dom";
import DeliveryDetails from "../components/order/delivery-details";
import OrderComplete from "../components/order/order-complete";
import ProductDetails from "../components/product-details/product-details";

export default function OrderRouter() {
  return (
    <Routes>
      <Route path="/product" element={<ProductDetails />}>
        <Route path=":productID" element={<ProductDetails />} />
      </Route>
      <Route path="/order/details" element={<DeliveryDetails />} />
      <Route path="/order/order-success" element={<OrderComplete />} />
    </Routes>
  );
}
