import React from "react";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header
      id=""
      style={{ backgroundColor: "#e3f2f3" }}
      className="header fixed-top d-flex align-items-center"
    >
      <div className="container-fluid ">
        <div className="row">
          <div className="col-md-4 d-flex justify-content-center">
            <a
              href="index.html"
              className="logo d-flex align-items-center  me-lg-0"
            >
              <img src="assets/img/logo.png" alt="" />
              <h1>FlavorFusion</h1>
            </a>
          </div>

          <div className="col-md-8 d-flex justify-content-center">
            <ul className="d-flex nav gap-3 py-3">
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/about"}>About</Link>
              </li>
              <li>
                <Link to={"/menu"}>Menu</Link>
              </li>

              <li>
                <Link to={"/chefs"}>Chefs</Link>
              </li>

              <li>
                <Link to={"/contact"}>Contact</Link>
              </li>
              <li>
                <Link to={"/login-admin/layout-admin"}>
                  <button className="btn btn-primary">Dashboard</button>{" "}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
