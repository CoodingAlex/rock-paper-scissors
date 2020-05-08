import React, { useEffect } from "react";
import Modal from "./Modal";
import { setUsersOnline, setYou } from "../actions";
import { connect } from "react-redux";

import "../assets/styles/ModalOnline.css";
import PlayWith from "./PlayWith";
const ModalOnline = (props) => {
  useEffect(() => {});

  useEffect(() => {
    props.socket.on("userDisconnected", (users) => {
      users = users.filter((user) => user.id != props.socket.id);
      props.setUsersOnline(users);
    });
  }, []);
  useEffect(() => {
    props.socket.on("newUserConected", (users) => {
      users = users.filter((user) => user.id != props.socket.id);
      props.setUsersOnline(users);
    });
  }, []);
  function login() {
    const usernameInput = document.getElementById("username");
    const login_message = document.querySelector(".Login__Message");
    let username = usernameInput.value;

    const comparativeUsername = props.usersOnline.filter(
      (user) => user.username === username
    );

    if (comparativeUsername.length !== 0) {
      login_message.innerHTML = "That username already exists";
      return false;
    }
    if (username !== "") {
      props.socket.emit("login", username);
      props.setIsLogged(true);
      props.setYou(username);
    } else {
      login_message.innerHTML = "Please, put a username";
      props.setIsLogged(false);
    }
  }

  if (!props.isLogged) {
    return (
      <Modal isOpen={props.isModalOnline} onClose={props.onClose}>
        <div className="ModalOnline">
          <div className="ModalOnline__Container">
            <div className="ModalOnline__Title">
              <h2>Youre Not Logged</h2>
            </div>
            <div className="ModalOnline__Login">
              <input type="text" placeholder="Put your name" id="username" />
              <p className="Login__Message"></p>
              <button onClick={login}>Login</button>
            </div>
          </div>
        </div>
      </Modal>
    );
  }
  if (props.isLogged) {
    return (
      <Modal isOpen={props.isModalOnline} onClose={props.onClose}>
        <div className="ModalOnline">
          <div className="ModalOnline__Container">
            <div className="ModalOnline__Title">
              <h2>Users Online</h2>
            </div>
            <div className="ModalOnline__Users">
              <div className="ModalOnline__Users__Container">
                <p>(You) {props.you}</p>
                {props.usersOnline.map((user) => {
                  if (user == 0) {
                    return null;
                  }
                  return (
                    <PlayWith
                      username={user.username}
                      id={user.id}
                      key={user.id}
                      socket={props.socket}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Modal>
    );
  }
};
const mapStateToProps = (state) => {
  return {
    isModalOnline: state.isModalOnline,
    usersOnline: state.usersOnline,
    isLogged: state.isLogged,
    you: state.you,
  };
};
const mapDispatchToProps = {
  setUsersOnline,
  setYou,
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalOnline);
