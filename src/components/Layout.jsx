import React from "react";

import { Outlet } from "react-router-dom";
import Navber from "./Navber";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="min-h-screen">
      <Navber />
      <main className="pt-[80px] lg:pt-[120px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
