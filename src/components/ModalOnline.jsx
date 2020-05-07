import React, { useEffect } from "react";
import Modal from "./Modal";
import "../assets/styles/ModalOnline.css";
import PlayWith from "./PlayWith";
const ModalOnline = (props) => {
  let you = props.usersOnline.you;
  useEffect(() => {
    props.socket.on("connectedUsers", (users) => {
      console.log("connected users");

      props.setUsersOnline({
        you: "",
        users: [...users],
      });
    });
    props.socket.on("userDisconnected", (users) => {
      users = users.filter((user) => props.usersOnline.you !== user.username);
      props.setUsersOnline({
        you: props.usersOnline.you || "",
        users: [...users],
      });
    });
  }, []);
  useEffect(() => {
    return () => {
      props.socket.on("newUserConected", (user) => {
        console.log("new user");
        console.log(user);
        console.log(props.usersOnline);

        props.setUsersOnline({
          you: props.usersOnline.you || "",
          users: props.usersOnline.users.concat(user),
        });
      });
    };
  }, [props.usersOnline]);
  function login() {
    const usernameInput = document.getElementById("username");
    const login_message = document.querySelector(".Login__Message");
    let username = usernameInput.value;
    const comparativeUsername = props.usersOnline.users.filter(
      (user) => user.username === username
    );

    if (comparativeUsername.length !== 0) {
      login_message.innerHTML = "That username already exists";
      return false;
    }
    if (username !== "") {
      props.socket.emit("login", username);
      props.setIsLogged(true);
      props.setUsersOnline({
        you: username,
        users: [...props.usersOnline.users],
      });
    } else {
      login_message.innerHTML = "Please, put a username";
      props.setIsLogged(false);
    }
  }

  if (!props.isLogged) {
    return (
      <Modal isOpen={props.isOpen} onClose={props.onClose}>
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
      <Modal isOpen={props.isOpen} onClose={props.onClose}>
        <div className="ModalOnline">
          <div className="ModalOnline__Container">
            <div className="ModalOnline__Title">
              <h2>Users Online</h2>
            </div>
            <div className="ModalOnline__Users">
              <div className="ModalOnline__Users__Container">
                <p>(You) {props.usersOnline.you}</p>
                {props.usersOnline.users.map((user) => {
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

export default ModalOnline;
