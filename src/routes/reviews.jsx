import React from "react";
import { Route, Routes } from "react-router-dom";
import CusCreateReview from "../pages/review/cust-create-review";
import CusUpdateReview from "../pages/review/cust-update-review";
import CusViewReview from "../pages/review/cust-view-review";

import Template from "../pages/review/template";

export default function ReviewsRouter() {
  return (
    <Routes>
      <Route path="/createReview" element={<CusCreateReview />} />
      <Route path="/updateReview" element={<CusUpdateReview />} />
      <Route path="/viewReview" element={<CusViewReview />} />

      <Route path="/template" element={<Template />} />
    </Routes>
  );
}
