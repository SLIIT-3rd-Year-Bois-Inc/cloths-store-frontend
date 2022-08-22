import React from "react";
import { Route, Routes } from "react-router-dom";
import CusCreateReview from "../pages/review/cust-create-review";
import CusUpdateReview from "../pages/review/cust-update-review";

export default function ReviewsRouter() {
  return (
    <Routes>
      <Route path="/createReview" element={<CusCreateReview />} />
      <Route path="/updateReview" element={<CusUpdateReview />} />
    </Routes>
  );
}
