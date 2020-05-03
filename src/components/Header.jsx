import React from "react";
import logo from "../assets/img/logo.svg";
import "../assets/styles/Header.css";
const Header = () => {
  return (
    <div className="Header">
      <div className="Header__Container">
        <div className="Header__Text">
          <img src={logo} alt="" />
        </div>
        <div className="Header__Score">
          <h2>Score</h2>
          <h1>12</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
