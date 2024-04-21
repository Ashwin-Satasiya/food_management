import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const [userData, setUserData] = useState({});

  const navigate = useNavigate();

  const nameElement = useRef(null);
  const emailElement = useRef(null);
  const phoneElement = useRef(null);
  const messageElement = useRef(null);

  const onSubmitHandle = (event) => {
    event.preventDefault();
    setUserData({
      name: nameElement.current.value,
      email: emailElement.current.value,
      phone: phoneElement.current.value,
      message: messageElement.current.value,
    });
    event.target.reset();
  };

  useEffect(() => {
    if (userData.name && userData.email && userData.phone && userData.message) {
      axios
        .post(
          "https://661cd0d2e7b95ad7fa6b3993.mockapi.io/food_restaurant",
          userData
        )
        .then((response) => {
          response.data;
          setUserData({
            name: "",
            email: "",
            phone: "",
            message: "",
          });
          navigate("/login-admin/manage-contacts");
        })
        .catch((error) => console.log("userDataPost", error));
    }
  }, [userData]);

  return (
    <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <p>Contact Us</p>
        </div>
        <form
          onSubmit={onSubmitHandle}
          method="post"
          role="form"
          className="php-email-form p-3 p-md-4"
        >
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              ref={nameElement}
              className="form-control"
              placeholder="Write name here"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              ref={emailElement}
              className="form-control"
              placeholder="Write Email Id here"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Phone</label>
            <input
              type="text"
              ref={phoneElement}
              className="form-control"
              placeholder="Write Contact No. here"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Message</label>
            <textarea
              type="text"
              ref={messageElement}
              className="form-control"
              placeholder="tell us something..."
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>

        <div className="mt-5">
          <iframe
            style={{ border: 0, width: "100%", height: "350px" }}
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
