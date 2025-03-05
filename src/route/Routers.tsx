import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../page/login/Index";
import Dashboard from "../page/dash/Index";
import { User } from "../page/user/Index";
import { Product } from "../page/product/Index";
import { Status } from "../page/status/Index";
import { History } from "../page/history/Index";
import { PublicProtectRoute } from "../component/layout/PublicProtectRoute";
import { ProtectedRoute } from "../component/layout/ProtectedRoute";
import NotFound from "../page/notfound";
import { Navigate } from "react-router-dom";

const token = localStorage.getItem("token");

export default function Routers() {
  return (
    <Routes>
      <Route element={<PublicProtectRoute />}>
        <Route path="/" element={<Login />} />
      </Route>
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/user" element={<User />} />
        <Route path="/dashboard/product" element={<Product />} />
        <Route path="/dashboard/status" element={<Status />} />
        <Route path="/dashboard/history" element={<History />} />
      </Route>
      <Route
        path="*"
        element={token ? <NotFound /> : <Navigate to="/login" replace />}
      />
    </Routes>
  );
}
