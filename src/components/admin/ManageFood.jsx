import React, { useEffect, useState } from "react";
import HeaderAdmin from "./HeaderAdmin";
import SidebarAdmin from "./SidebarAdmin";
import FooterAdmin from "./FooterAdmin";
import axios from "axios";
import { Link } from "react-router-dom";

const ManageFood = () => {
  const [foodInfo, setFoodInfo] = useState([]);

  useEffect(() => {
    axios
      .get("https://661cd0d2e7b95ad7fa6b3993.mockapi.io/foodData")
      .then((response) => setFoodInfo(response.data))
      .catch((error) => console.log("DataGet", error));
  }, []);

  return (
    <div>
      <HeaderAdmin />
      <div className="d-flex  ">
        <SidebarAdmin />

        <div className="mt-3 p-3">
          <div className="w-100 d-flex flex-column align-items-center p-3">
            <h3>Manage Food</h3>
            <div className="d-flex justify-content-end  w-100 ">
              <Link to="/login-admin/layout-admin">
                <button className="btn btn-info">Home Dashboard</button>
              </Link>
            </div>

            <table className="table table-striped ">
              <thead>
                <tr>
                  <th>Sr. No.</th>
                  <th>Food Name</th>
                  <th>Qty.</th>
                  <th>Price</th>
                  <th>Date</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>

              {foodInfo.length > 0 ? (
                foodInfo.map((data, index) => (
                  <tbody key={index}>
                    <tr>
                      <td>{index + 1}</td>
                      <td>{data.foodName}</td>
                      <td>{data.foodQty}</td>
                      <td>{data.foodPrice}</td>
                      <td>{data.foodDate}</td>
                      <td className=" d-flex justify-content-center gap-3 text-center">
                        <Link to={`/login-admin/update-food/${data.id}`}>
                          <button className="btn btn-success">
                            Edit <i className="bi bi-pencil-square"></i>
                          </button>
                        </Link>

                        <Link to={`/login-admin/delete-food/${data.id}`}>
                          <button className="btn btn-danger">
                            Delete <i className="bi bi-trash"></i>
                          </button>
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                ))
              ) : (
                <tbody>
                  <tr>
                    <td colSpan={7} className="text-center fs-4">
                      No Data found
                    </td>
                  </tr>
                </tbody>
              )}
            </table>
          </div>
        </div>
      </div>
      <FooterAdmin />
    </div>
  );
};

export default ManageFood;
