import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const DeleteContacts = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .delete(
        `https://661cd0d2e7b95ad7fa6b3993.mockapi.io/food_restaurant/${id}`
      )
      .then((response) => {
        response.data;
        navigate("/login-admin/manage-contacts");
      });
  }, []);
};

export default DeleteContacts;
