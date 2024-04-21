import React from "react";
import HeaderAdmin from "./HeaderAdmin";
import SidebarAdmin from "./SidebarAdmin";
import FooterAdmin from "./FooterAdmin";
import DashboardContent from "./DashboardContent";

const LayoutAdmin = () => {
  return (
    <div>
      <HeaderAdmin />
      <div className="d-flex">
        <SidebarAdmin />
        <DashboardContent />
      </div>
      <FooterAdmin />
    </div>
  );
};

export default LayoutAdmin;
