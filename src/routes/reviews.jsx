import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductPage from "../pages/stock/ProductPage";

export default function ReviewsRouter() {
  return (
    <Routes>
      <Route path="/reviews" element={<ProductPage />} />
    </Routes>
  );
}
