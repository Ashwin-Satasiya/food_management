import React from "react";

import HeroImage from "../assets/img/hero-img.jpeg";

const Home = () => {
  return (
    <section id="hero" className="hero d-flex align-items-center section-bg">
      <div className="container">
        <div className="row justify-content-between gy-5">
          <div className="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start">
            <h2 data-aos="fade-up">
              Enjoy Your Healthy
              <br />
              Delicious Food
            </h2>
          </div>
          <div className="col-lg-5 order-1 order-lg-2 text-center text-lg-start">
            <img
              src={HeroImage}
              width={500}
              className="img-fluid"
              alt="HeroImage"
              data-aos="zoom-out"
              data-aos-delay="300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
