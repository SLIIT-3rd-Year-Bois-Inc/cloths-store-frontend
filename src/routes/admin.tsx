import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminAddCustomer from "../pages/admin/admin-add-customer";
import AdminCustomerStats from "../pages/admin/admin-customer-stats";
import { AdminHome } from "../pages/admin/admin-home";
import { CustomerManagement } from "../pages/admin/customer-management";
import AddNewProduct from "../pages/stock/AddNewProduct";
import AdminProductPage from "../pages/stock/AdminProductPage";
import EditProduct from "../pages/stock/EditProduct";
import Reports from "../pages/stock/Reports";

export default function AdminRouter() {
  return (
    <Routes>
      <Route path="/admin" element={<AdminHome />}>
        <Route path="customers" element={<CustomerManagement />} />
        <Route path="customers/add" element={<AdminAddCustomer />} />
        <Route path="customers/statistics" element={<AdminCustomerStats />} />
        <Route path="stocks" element={<AdminProductPage />} />
        <Route path="stocks/add" element={<AddNewProduct />} />
        <Route path="stocks/edit" element={<EditProduct />} />
        <Route path="stocks/reports" element={<Reports />} />
        <Route path="stocks/edit" element={<EditProduct />}>
          <Route path=":productID" element={<EditProduct />} />
        </Route>
      </Route>
    </Routes>
  );
}
