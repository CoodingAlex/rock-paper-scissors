import React from "react";

import Header from "../components/Header";
import Options from "../components/Options";

import "../assets/styles/Main.css";
const Main = () => {
  return (
    <div className="Main">
      <div className="Main__Container">
        <div className="Main__Header">
          <div className="Main__Header__Container">
            <Header />
          </div>
        </div>
        <div className="Main__Options">
          <div className="Main__Options__Container">
            <Options />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
