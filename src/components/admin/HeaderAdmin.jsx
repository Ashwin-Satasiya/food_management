import React from "react";

import { Link } from "react-router-dom";

const HeaderAdmin = () => {
  return (
    <div className="container-fluid bg-dark border">
      <header className="d-flex justify-content-start py-3">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link to="/" className="nav-link text-white" aria-current="page">
              <button className="btn btn-info">Home</button>
            </Link>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default HeaderAdmin;
