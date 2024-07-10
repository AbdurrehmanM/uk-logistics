import React from "react";
import "./locationMap.css";

const LocationMap = () => {
  return (
    <div className="location-map">
      <iframe
        title="UK Logistics Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.7091490211755!2d-0.12764728423063114!3d51.50735047963421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b33393ed9f7%3A0x29a23b8d2c4e7e4d!2sLondon%2C%20UK!5e0!3m2!1sen!2s!4v1625671234567!5m2!1sen!2s"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default LocationMap;
