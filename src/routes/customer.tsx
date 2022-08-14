import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";

export default function CustomerRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
    </Routes>
  );
}
