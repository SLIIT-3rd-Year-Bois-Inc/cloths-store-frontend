import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductPage from "../pages/stock/ProductPage";

export default function StockRouter() {
  return (
    <Routes>
      <Route path="/stock" element={<ProductPage />} />
    </Routes>
  );
}
