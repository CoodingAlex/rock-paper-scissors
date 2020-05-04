import React from "react";
import "../assets/styles/SwitchButton.css";
const SwitchButton = (props) => (
  <label className="toggle">
    <input type="checkbox" onClick={props.onClick} />
    <span className="slider"></span>
  </label>
);

export default SwitchButton;
