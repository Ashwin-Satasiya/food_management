import React from "react";

import { Link } from "react-router-dom";

const SidebarAdmin = () => {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark border"
      style={{ width: "280px", height: "100vh" }}
    >
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <svg className="bi pe-none me-2" width="40" height="32">
          <use xlinkHref="#bootstrap"></use>
        </svg>
        <span className="fs-4">Dashboard</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <Link
            to={"/login-admin/layout-admin"}
            className="nav-link text-white"
            aria-current="page"
          >
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#home"></use>
            </svg>
            Home Dashboard
          </Link>
        </li>
        <li>
          <Link
            to={"/login-admin/manage-contacts"}
            className="nav-link text-white"
          >
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#speedometer2"></use>
            </svg>
            Manage Contact
          </Link>
        </li>
        <li>
          <Link to={"/login-admin/add-food"} className="nav-link text-white">
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#table"></use>
            </svg>
            Add Food
          </Link>
        </li>
        <li>
          <Link to={"/login-admin/manage-food"} className="nav-link text-white">
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#grid"></use>
            </svg>
            Manage Food
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SidebarAdmin;
