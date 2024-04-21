import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import HeaderAdmin from "./HeaderAdmin";
import FooterAdmin from "./FooterAdmin";
import SidebarAdmin from "./SidebarAdmin";

const AddFood = () => {
  const [foodMenu, setFoodMenu] = useState({});

  const navigate = useNavigate();

  const foodNameElement = useRef(null);
  const foodQtyElement = useRef(null);
  const foodPriceElement = useRef(null);
  const foodDateElement = useRef(null);

  const onSubmitHandle = (event) => {
    event.preventDefault();
    setFoodMenu({
      foodName: foodNameElement.current.value,
      foodQty: foodQtyElement.current.value,
      foodPrice: foodPriceElement.current.value,
      foodDate: foodDateElement.current.value,
    });
    event.target.reset();
  };

  useEffect(() => {
    if (
      foodMenu.foodName &&
      foodMenu.foodQty &&
      foodMenu.foodPrice &&
      foodMenu.foodDate
    ) {
      axios
        .post("https://661cd0d2e7b95ad7fa6b3993.mockapi.io/foodData", foodMenu)
        .then((response) => {
          response.data;
          setFoodMenu({
            foodName: "",
            foodQty: "",
            foodPrice: "",
            foodDate: "",
          });
          navigate("/login-admin/manage-food");
        })
        .catch((error) => console.log("userDataPost", error));
    }
  }, [foodMenu]);

  return (
    <>
      <HeaderAdmin />
      <div className="d-flex">
        <SidebarAdmin />
        <section id="contact" className="contact pt-2 w-75">
          <div className="container">
            <h3 className="text-center">Add food details</h3>
            <form
              onSubmit={onSubmitHandle}
              method="post"
              role="form"
              className="php-email-form p-3 p-md-4 "
            >
              <div className="mb-3">
                <label className="form-label">Food name</label>
                <input
                  type="text"
                  ref={foodNameElement}
                  className="form-control"
                  placeholder="Write Food name here"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Food Qty.</label>
                <input
                  type="text"
                  ref={foodQtyElement}
                  className="form-control"
                  placeholder="Enter Qty. here"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Price</label>
                <input
                  type="text"
                  ref={foodPriceElement}
                  className="form-control"
                  placeholder="Write price here"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Date</label>
                <input
                  type="date"
                  ref={foodDateElement}
                  className="form-control"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </section>
      </div>
      <FooterAdmin />
    </>
  );
};

export default AddFood;
