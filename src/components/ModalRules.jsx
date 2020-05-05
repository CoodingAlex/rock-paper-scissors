import React from "react";
import Modal from "./Modal";
import "../assets/styles/ModalRules.css";
import imageRules from "../assets/img/image-rules.svg";
import imageRulesBonus from "../assets/img/image-rules-bonus.svg";
const ModalRuler = (props) => {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <div className="ModalRules">
        <div className="ModalRules__Container">
          <div className="ModalRules__Title">
            <p>Rules</p>
          </div>
          <div className="ModalRules__Content">
            {props.isPlus && (
              <img
                src={imageRulesBonus}
                alt="image rules"
                className="ModalRules__img"
              />
            )}
            {!props.isPlus && (
              <img
                src={imageRules}
                alt="image rules"
                className="ModalRules__img"
              />
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalRuler;
