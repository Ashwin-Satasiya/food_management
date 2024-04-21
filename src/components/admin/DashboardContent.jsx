import React from "react";
import { Link } from "react-router-dom";

import image1 from "../../assets/img/gallery/gallery-1.jpg";
import image2 from "../../assets/img/gallery/gallery-2.jpg";
import image3 from "../../assets/img/gallery/gallery-3.jpg";

const DashboardContent = () => {
  return (
    <div className="container-fluid mt-2 p-3">
      <h2 className="text-center mt-3">Welcome to FlavorFusion Dashboard</h2>

      <div className="row mt-4">
        <div className="col-md-4">
          <div className="card" style={{ width: "18rem" }}>
            <img src={image1} className="card-img-top img-fluid" alt="image1" />
            <div className="card-body">
              <h5 className="card-title">Savory Delights</h5>
              <p className="card-text">
                Step into a world of culinary excellence with our savory
                delights
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card" style={{ width: "18rem" }}>
            <img src={image2} className="card-img-top img-fluid" alt="image2" />
            <div className="card-body">
              <h5 className="card-title">Favorites Showcase</h5>
              <p className="card-text">
                Explore the essence of our restaurant through our customer
                favorites showcase.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card" style={{ width: "18rem" }}>
            <img src={image3} className="card-img-top img-fluid" alt="image3" />
            <div className="card-body">
              <h5 className="card-title">Farm-to-Table Freshness</h5>
              <p className="card-text">
                Experience the essence of farm-to-table freshness.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
