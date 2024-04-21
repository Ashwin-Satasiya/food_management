import React from "react";
import Header from "./Header";
import Footer from "./Footer";

import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Header />

      <div className="mt-4">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
