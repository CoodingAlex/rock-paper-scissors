import React from "react";
import Modal from "./Modal";
import "../assets/styles/ModalWannaPlay.css";

const ModalWannaPlay = (props) => {
  let username = props.userFrom ? props.userFrom.username : "";
  let id = props.userFrom ? props.userFrom.id : "";
  function acceptInvitation() {
    props.socket.emit("accept:invitation", id);
    props.onClose();
  }
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <div className="ModalWannaPlay">
        <div className="ModalWannaPlay__Container">
          <div className="ModalWannaPlay__Content">
            <div className="ModalWannaPlay__Content__Container">
              <div className="ModalWannaPlay__Content__Item">
                <h2>{username} wants to play with you</h2>
                <div className="ModalWannaPlay__Buttons">
                  <button
                    className="Button__WannaPlay Button__Accept"
                    onClick={acceptInvitation}
                  >
                    Accept
                  </button>
                  <button className="Button__WannaPlay Button__Reject">
                    Reject
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalWannaPlay;
