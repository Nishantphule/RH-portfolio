// Preloader.js
import React from "react";
import logo from "../assets/images/my-avatar.png";

const Preloader = () => {
  return (
    <div className="preloader">
      <img src={logo} alt="Loading..." className="preloader-image" />
      <h1 className="preloader-text">Raj Hariyani</h1>
    </div>
  );
};

export default Preloader;
