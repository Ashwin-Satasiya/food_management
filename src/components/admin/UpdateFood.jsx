import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import HeaderAdmin from "./HeaderAdmin";
import FooterAdmin from "./FooterAdmin";
import SidebarAdmin from "./SidebarAdmin";

const UpdateFood = () => {
  const [foodMenu, setFoodMenu] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://661cd0d2e7b95ad7fa6b3993.mockapi.io/foodData/${id}`)
      .then((response) => setFoodMenu(response.data))
      .catch((error) => console.log("DataGet", error));
  }, []);

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
    navigate("/login-admin/manage-food");
  };

  useEffect(() => {
    axios
      .put(
        `https://661cd0d2e7b95ad7fa6b3993.mockapi.io/foodData/${id}`,
        foodMenu
      )
      .then((response) => {
        response.data;
      })
      .catch((error) => console.log("DataPut", error));
  }, [foodMenu]);

  return (
    <>
      <HeaderAdmin />
      <div className="d-flex">
        <SidebarAdmin />
        <section id="contact" className="contact pt-2 w-75">
          <div className="container">
            <h3 className="text-center">Update food details</h3>
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
                  value={foodMenu.foodName || ""}
                  ref={foodNameElement}
                  onChange={(event) =>
                    setFoodMenu({ ...foodMenu, foodName: event.target.value })
                  }
                  className="form-control"
                  placeholder="Write Food name here"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Food Qty.</label>
                <input
                  type="text"
                  value={foodMenu.foodQty || ""}
                  ref={foodQtyElement}
                  onChange={(event) =>
                    setFoodMenu({ ...foodMenu, foodQty: event.target.value })
                  }
                  className="form-control"
                  placeholder="Enter Qty. here"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Price</label>
                <input
                  type="text"
                  value={foodMenu.foodPrice || ""}
                  ref={foodPriceElement}
                  onChange={(event) =>
                    setFoodMenu({ ...foodMenu, foodPrice: event.target.value })
                  }
                  className="form-control"
                  placeholder="Write price here"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Date</label>
                <input
                  type="date"
                  value={foodMenu.foodDate || ""}
                  ref={foodDateElement}
                  onChange={(event) =>
                    setFoodMenu({ ...foodMenu, foodDate: event.target.value })
                  }
                  className="form-control"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Update
              </button>
            </form>
          </div>
        </section>
      </div>
      <FooterAdmin />
    </>
  );
};

export default UpdateFood;
