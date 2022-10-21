import React from "react";
import { Route, Routes } from "react-router-dom";
import AddNewProduct from "../pages/stock/AddNewProduct";
import ProductPage from "../pages/stock/ProductPage";
import EditProduct from "../pages/stock/EditProduct";
import AdminProductPage from "../pages/stock/AdminProductPage";
import Reports from "../pages/stock/Reports";
import ImageTest from "../pages/stock/ImageTest";

export default function StockRouter() {
  return (
    <Routes>
      <Route path="/stock" element={<ProductPage />}>
        <Route path=":gender" element={<ProductPage />} />
      </Route>
      <Route path="/stock/admin/newProduct" element={<AddNewProduct />} />
      <Route path="/stock/admin/testImage" element={<ImageTest />} />
      <Route path="/stock/admin/editProduct" element={<EditProduct />}>
        <Route path=":productID" element={<EditProduct />} />
      </Route>
      <Route path="/stock/admin/ProductPage" element={<AdminProductPage />} />
      <Route path="/stock/admin/reports" element={<Reports />} />
    </Routes>
  );
}
