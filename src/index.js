import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducers/index";
import socketIOClient from "socket.io-client";

import Main from "./containers/Main";
import "./assets/styles/global.css";

const initialState = {
  isPlaying: false,
  userOption: "",
  computerOption: "",
  winner: "",
  winnerPhrase: "",
  score: 0,
  losed: 0,
  tied: 0,
  isPlus: false,
  isModalRules: false,
  isModalDashBoard: false,
  isModalOnline: false,
  isModalWannaPlay: false,
  isLogged: false,
  usersOnline: [],
  you: "",
  room: "",
  userFrom: { username: "", id: "" },
  isPlayingOnline: false,
};
const store = createStore(reducer, initialState);
let socket;
if (process.env.NODE_ENV === "development") {
  const ENDPOINT = "https://rock-paper-scissorsapi.herokuapp.com/";
  socket = socketIOClient(ENDPOINT);
}
if (process.env.NODE_ENV === "production") {
  const ENDPOINT = process.env.API_URL;
  socket = socketIOClient(ENDPOINT);
}

ReactDOM.render(
  <Provider store={store}>
    <Main socket={socket} />
  </Provider>,
  document.getElementById("root")
);
