import React from "react";
import Modal from "./Modal";
import "../assets/styles/ModalDashboard.css";

const ModalDashboard = (props) => {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <div className="ModalDashboard">
        <div className="ModalDashboard__Container">
          <div className="ModalDashboard__Title">
            <h1>Dashboard</h1>
          </div>
          <div className="ModalDashboard__Content">
            <div className="ModalDashboard__Content__Container">
              <div className="ModalDashboard__Content__Item">
                <p>Winned: {props.winned}</p>
              </div>
              <div className="ModalDashboard__Content__Item">
                <p>Losed: {props.losed}</p>
              </div>
              <div className="ModalDashboard__Content__Item">
                <p>Tied: {props.tied}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalDashboard;
