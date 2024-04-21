import React from "react";

import { Link } from "react-router-dom";

const FooterAdmin = () => {
  return (
    <footer className="py-2 bg-dark border border-2 border-dark">
      <ul className="nav justify-content-center  ">
        <li className="nav-item">
          <Link to="/" className="nav-link px-2 text-white">
            <button className="btn btn-info">Home</button>
          </Link>
        </li>
      </ul>
      <p className="text-center text-white">© 2024 Company</p>
    </footer>
  );
};

export default FooterAdmin;
