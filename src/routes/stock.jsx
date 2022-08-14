import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";

export default function StockRouter() {
    return (
        <Routes>
            <Route path="/stock" element={<Home />}/>
        </Routes>
    )
}