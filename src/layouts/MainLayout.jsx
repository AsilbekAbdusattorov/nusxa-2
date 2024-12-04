import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet, useLocation } from "react-router-dom";

const MainLayout = () => {
  // Hozirgi yo'lni aniqlash
  const location = useLocation();
  const isNotFoundPages = location.pathname === '/PageNotFound'

  return (
    <div className="flex flex-col min-h-screen">
      {/* 404 sahifasida bo'lmasa, Headerni ko'rsatamiz */}
      {!isNotFoundPages && <Header />}
      <main className="grow">
        <Outlet />
      </main>
      {/* 404 sahifasida bo'lmasa, Footerni ko'rsatamiz */}
      {!isNotFoundPages && <Footer />}
    </div>
  );
};

export default MainLayout;
