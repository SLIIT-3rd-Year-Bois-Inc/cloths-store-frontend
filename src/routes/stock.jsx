import React from "react";
import { Route, Routes } from "react-router-dom";
import AddNewProduct from "../pages/stock/AddNewProduct";
import ProductPage from "../pages/stock/ProductPage";
import EditProduct from "../pages/stock/EditProduct";
import AdminProductPage from "../pages/stock/AdminProductPage";
import ImageTest from "../pages/stock/ImageTest";

export default function StockRouter() {
  return (
    <Routes>
      <Route path="/stock" element={<ProductPage />} />
      <Route path="/stock/admin/newProduct" element={<AddNewProduct />} />
      <Route path="/stock/admin/testImage" element={<ImageTest />} />
      <Route path="/stock/admin/editProduct" element={<EditProduct />}>
        <Route path=":productID" element={<EditProduct />} />
      </Route>
      <Route path="/stock/admin/ProductPage" element={<AdminProductPage />} />
    </Routes>
  );
}
