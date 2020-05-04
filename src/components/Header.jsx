import React from "react";
import normalLogo from "../assets/img/logo.svg";
import bonusLogo from "../assets/img/logo-bonus.svg";
import "../assets/styles/Header.css";
const Header = (props) => {
  let logo;
  if (props.isPlus == false) {
    logo = normalLogo;
  } else {
    logo = bonusLogo;
  }
  return (
    <div className="Header">
      <div className="Header__Container">
        <div className="Header__Text">
          <img src={logo} alt="" />
        </div>
        <div className="Header__Score">
          <h2>Score</h2>
          <h1>{props.score}</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
