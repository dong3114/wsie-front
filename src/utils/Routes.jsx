import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import Header from "../layouts/Header";
import Footer from "../layouts/Footer";

import ReportPage from "../pages/report/Index";
import MenuPage from "../pages/menu/Index";   

// 이건 컴포넌트 화 할까 고민.
function Layout() {
  return (
    <>
      <Header />
      <main className="container section">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MenuPage />} />
          <Route path="/files" element={<ReportPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
