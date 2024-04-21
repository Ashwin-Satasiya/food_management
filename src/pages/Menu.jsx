import React from "react";

import MenuItem1 from "../assets/img/menu/menu-item-1.jpeg";
import MenuItem2 from "../assets/img/menu/menu-item-2.jpeg";
import MenuItem3 from "../assets/img/menu/menu-item-3.jpeg";
import MenuItem4 from "../assets/img/menu/menu-item-4.jpeg";
import MenuItem5 from "../assets/img/menu/menu-item-5.jpeg";
import MenuItem6 from "../assets/img/menu/menu-item-6.jpeg";

const Menu = () => {
  return (
    <section id="menu" className="menu">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>Our Menu</h2>
          <p>
            Check Our <span>Yummy Menu</span>
          </p>
        </div>

        <div className="tab-content" data-aos="fade-up" data-aos-delay="300">
          <div className="tab-pane fade active show" id="menu-starters">
            <div className="tab-header text-center"></div>

            <div className="row gy-5">
              <div className="col-lg-4 menu-item">
                <a href={MenuItem1} className="glightbox">
                  <img src={MenuItem1} className="menu-img img-fluid" alt="" />
                </a>
                <h4>Gujarati Dish</h4>
                <p className="ingredients">
                  Lorem, deren, trataro, filede, nerada
                </p>
                <p className="price">Rs. 140</p>
              </div>

              <div className="col-lg-4 menu-item">
                <a href={MenuItem2} className="glightbox">
                  <img src={MenuItem2} className="menu-img img-fluid" alt="" />
                </a>
                <h4>Bhel</h4>
                <p className="ingredients">
                  Lorem, deren, trataro, filede, nerada
                </p>
                <p className="price">Rs. 60</p>
              </div>

              <div className="col-lg-4 menu-item">
                <a href={MenuItem3} className="glightbox">
                  <img src={MenuItem3} className="menu-img img-fluid" alt="" />
                </a>
                <h4>Fafda</h4>
                <p className="ingredients">
                  Lorem, deren, trataro, filede, nerada
                </p>
                <p className="price">Rs. 50</p>
              </div>

              <div className="col-lg-4 menu-item">
                <a href={MenuItem4} className="glightbox">
                  <img src={MenuItem4} className="menu-img img-fluid" alt="" />
                </a>
                <h4>Vanela Gathiya</h4>
                <p className="ingredients">
                  Lorem, deren, trataro, filede, nerada
                </p>
                <p className="price">Rs. 50</p>
              </div>

              <div className="col-lg-4 menu-item">
                <a href={MenuItem5} className="glightbox">
                  <img src={MenuItem5} className="menu-img img-fluid" alt="" />
                </a>
                <h4>Dosa</h4>
                <p className="ingredients">
                  Lorem, deren, trataro, filede, nerada
                </p>
                <p className="price">Rs. 110</p>
              </div>

              <div className="col-lg-4 menu-item">
                <a href={MenuItem6} className="glightbox">
                  <img src={MenuItem6} className="menu-img img-fluid" alt="" />
                </a>
                <h4>Dhokala</h4>
                <p className="ingredients">
                  Lorem, deren, trataro, filede, nerada
                </p>
                <p className="price">Rs. 40</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
