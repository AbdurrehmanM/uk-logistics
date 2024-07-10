import React, { useState } from "react";
import LocationMap from "./location";
import axios from "axios";
import "./index.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    query: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/contact",
        formData
      );
      if (response.status === 200) {
        alert("Form submitted successfully");
      }
    } catch (error) {
      console.error("There was an error submitting the form!", error);
    }
  };

  return (
    <div div className="container">
      <center>
        <h2>Contact Us</h2>
      </center>
      <form className="contact-form" onSubmit={handleSubmit} id="contact-us">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone No"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          required
        />
        <textarea
          name="query"
          placeholder="Query"
          value={formData.query}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Submit</button>
      </form>
      <LocationMap />
    </div>
  );
};

export default ContactUs;
