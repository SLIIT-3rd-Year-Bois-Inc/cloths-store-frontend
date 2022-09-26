import React from "react";
import { Route, Routes } from "react-router-dom";
import CusCreateReview from "../pages/review/cust-create-review";
import CusUpdateReview from "../pages/review/cust-update-review";
import CusViewReview from "../pages/review/cust-view-review";
import Tabs from "../pages/review/cust-two-tab";
import AdminAnswer from "../pages/review/admin-view-questions";

import Template from "../pages/review/template";

export default function ReviewsRouter() {
  return (
    <Routes>
      <Route path="/createReview" element={<CusCreateReview />} />
      <Route path="/updateReview" element={<CusUpdateReview />} />
      <Route path="/viewReview" element={<CusViewReview />} />
      <Route path="/tabs" element={<Tabs />} />
      <Route path="/adminAnswer" element={<AdminAnswer />} />

      <Route path="/template" element={<Template />} />
    </Routes>
  );
}
