import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateContacts = () => {
  const [contactInfo, setContactInfo] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://661cd0d2e7b95ad7fa6b3993.mockapi.io/food_restaurant/${id}`)
      .then((response) => setContactInfo(response.data))
      .catch((error) => console.log("DataGetId", error));
  }, []);

  const onSubmit = (event) => {
    event.preventDefault();
    const updateData = {
      name: event.target.name.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
      message: event.target.message.value,
    };
    setContactInfo(updateData);
    navigate("/login-admin/manage-contacts");
  };

  useEffect(() => {
    axios
      .put(
        `https://661cd0d2e7b95ad7fa6b3993.mockapi.io/food_restaurant/${id}`,
        contactInfo
      )
      .then((response) => {
        response.data;
      })
      .catch((error) => console.log("DataPut", error));
  }, [contactInfo]);

  return (
    <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">
        <h2 className="text-center">Update Contact</h2>

        <form
          onSubmit={onSubmit}
          method="post"
          role="form"
          className="php-email-form p-3 p-md-4"
        >
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              name="name"
              value={contactInfo.name || ""}
              onChange={(event) =>
                setContactInfo({
                  ...contactInfo,
                  name: event.target.value,
                })
              }
              className="form-control"
              placeholder="Write name here"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              value={contactInfo.email || ""}
              onChange={(event) =>
                setContactInfo({
                  ...contactInfo,
                  email: event.target.value,
                })
              }
              className="form-control"
              placeholder="Write Email Id here"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Phone</label>
            <input
              type="text"
              name="phone"
              value={contactInfo.phone || ""}
              onChange={(event) =>
                setContactInfo({
                  ...contactInfo,
                  phone: event.target.value,
                })
              }
              className="form-control"
              placeholder="Write Contact No. here"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Message</label>
            <textarea
              type="text"
              name="message"
              value={contactInfo.message || ""}
              onChange={(event) =>
                setContactInfo({ ...contactInfo, message: event.target.value })
              }
              className="form-control"
              placeholder="tell us something..."
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Update
          </button>
        </form>
      </div>
    </section>
  );
};

export default UpdateContacts;
