import React from "react";
import { Route, Routes } from "react-router-dom";
import CusCreateReview from "../pages/review/CustCreateReview";

export default function ReviewsRouter() {
  return (
    <Routes>

      <Route path="/createReview" element={<CusCreateReview />} />

    </Routes>
  );
}
