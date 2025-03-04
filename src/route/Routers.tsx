import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router";
import Login from "../page/login/Index";
import Dashboard from "../page/dash/Index";
import { User } from "../page/user/Index";
import { Product } from "../page/product/Index";
import { Status } from "../page/status/Index";
import { History } from "../page/history/Index";

export default function Routers() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/user" element={<User />} />
        <Route path="/dashboard/product" element={<Product />} />
        <Route path="/dashboard/status" element={<Status />} />
        <Route path="/dashboard/history" element={<History />} />
      </Routes>
    </Router>
  );
}
