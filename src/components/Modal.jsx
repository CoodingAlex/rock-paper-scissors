import React from "react";
import ReactDOM from "react-dom";
import "../assets/styles/Modal.css";
import iconClose from "../assets/img/icon-close.svg";
function Modal(props) {
  if (!props.isOpen) {
    return null;
  }
  return ReactDOM.createPortal(
    <div className="Modal">
      <div className="Modal__container">
        <button onClick={props.onClose} className="Modal__close-button">
          {" "}
          <img src={iconClose} alt="" />
        </button>
        {props.children}
      </div>
    </div>,
    document.querySelector("#modal"),
    "modal"
  );
}

export default Modal;
