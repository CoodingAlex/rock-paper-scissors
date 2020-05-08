import React from "react";
import Modal from "./Modal";
import { connect } from "react-redux";
import { setIsModalWannaPlay, setIsModalOnline } from "../actions";

import "../assets/styles/ModalWannaPlay.css";

const ModalWannaPlay = (props) => {
  let username = props.userFrom ? props.userFrom.username : "";

  function acceptInvitation() {
    props.socket.emit("accept:invitation", props.userFrom.id);
    props.setIsModalWannaPlay(!props.isModalWannaPlay);
    props.setIsModalOnline(false);
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
const mapStateToProps = (state) => {
  return {
    you: state.you,
    userFrom: state.userFrom,
    isModalWannaPlay: state.isModalWannaPlay,
  };
};
const mapDispatchToProps = {
  setIsModalWannaPlay,
  setIsModalOnline,
};
export default connect(mapStateToProps, mapDispatchToProps)(ModalWannaPlay);
