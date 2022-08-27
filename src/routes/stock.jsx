import React from "react";
import { Route, Routes } from "react-router-dom";
import AddNewProduct from "../pages/stock/AddNewProduct";
import ProductPage from "../pages/stock/ProductPage";

export default function StockRouter() {
  return (
    <Routes>
      <Route path="/stock" element={<ProductPage />} />
      <Route path="/stock/admin/newProduct" element={<AddNewProduct />} />
    </Routes>
  );
}
