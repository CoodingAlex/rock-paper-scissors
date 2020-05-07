import React, { useState, useEffect } from "react";
import ModalRules from "../components/ModalRules";
import ModalDashboard from "../components/ModalDashboard";
import ModalOnline from "../components/ModalOnline";
import ModalWannaPlay from "../components/ModalWannaPlay";
import Header from "../components/Header";
import Options from "../components/Options";
import OptionsPlus from "../components/OptionsPlus";
import Game from "../components/game";
import switchButton from "../components/SwitchButton";
import socketIOClient from "socket.io-client";
import "../assets/styles/Main.css";
import SwitchButton from "../components/SwitchButton";
const ENDPOINT = "http://192.168.0.19:3001/";
const socket = socketIOClient(ENDPOINT);
const Main = (props) => {
  //Hooks
  const [isPlaying, setIsPlaying] = useState(false);
  const [userOption, setUserOption] = useState("");
  const [computerOption, setComputerOption] = useState("");
  const [winner, setWinner] = useState("");
  const [winnerPhrase, setWinnerPhrase] = useState("");
  const [score, setScore] = useState(0);
  const [losed, setLosed] = useState(0);
  const [tied, setTied] = useState(0);
  const [isPlus, setIsPlus] = useState(false);
  const [isModalRules, setIsModalRules] = useState(false);
  const [isModalDashBoard, setIsModalDashBoard] = useState(false);
  const [isModalOnline, setIsModalOnline] = useState(false);
  const [isModalWannaPlay, setIsModalWannaPlay] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const [usersOnline, setUsersOnline] = useState({ you: "", users: [] });
  const [userFrom, setUserFrom] = useState({ username: "", id: "" });
  const [isPlayingOnline, setIsPlayingOnline] = useState(false);
  useEffect(() => {
    console.log("MAIN:18", usersOnline);

    setWinner(Game.getWinner(userOption, computerOption));
    if (winner == "Tie") setWinnerPhrase("This is a Tie");
    if (winner == "User") setWinnerPhrase("You Win");

    if (winner == "Computer") setWinnerPhrase("You Lose");
  });
  useEffect(() => {
    socket.on("invitation", (userFromId) => {
      let userFromInvitation = usersOnline.users.filter(
        (user) => user.id == userFromId
      );
      setUserFrom(userFromInvitation[0]);

      openModalWannaPlay();
    });
    socket.on("room", (roomname) => {
      setIsModalOnline(false);
      setIsModalWannaPlay(false);

      setIsPlayingOnline(true);
      setComputerOption("");
    });
    socket.on("final:options", (finalOptions) => {
      let rivalOption = finalOptions.filter(
        (option) => option.id !== socket.id
      );
      rivalOption = rivalOption[0];
      console.log(rivalOption);

      setComputerOption(rivalOption.option);
      setIsPlayingOnline(false);
    });
  }, []);

  //////////////////////////
  async function getUserOption(event) {
    setUserOption(event.target.id);
    socket.emit("playing:option", { option: event.target.id, id: socket.id });
    setIsPlaying(true);
  }

  function setOption(event) {
    setUserOption(event.target.id);
    if (isPlus) {
      setComputerOption(Game.getRandomOption("bonus"));
    } else {
      setComputerOption(Game.getRandomOption());
    }
    setIsPlaying(true);
  }
  function openModalRules() {
    setIsModalRules(!isModalRules);
  }
  function openModalOnline() {
    setIsModalOnline(!isModalOnline);
  }
  function openModalWannaPlay() {
    setIsModalWannaPlay(!isModalWannaPlay);
  }
  function openModalDashBoard() {
    setIsModalDashBoard(!isModalDashBoard);
  }
  function changePlus() {
    setIsPlus(!isPlus);
  }
  return (
    <div className="Main">
      <ModalDashboard
        isOpen={isModalDashBoard}
        onClose={openModalDashBoard}
        isPlus={isPlus}
        winned={score}
        losed={losed}
        tied={tied}
      />
      <ModalOnline
        isOpen={isModalOnline}
        onClose={openModalOnline}
        isPlus={isPlus}
        isLogged={isLogged}
        setIsLogged={setIsLogged}
        socket={socket}
        usersOnline={usersOnline}
        setUsersOnline={setUsersOnline}
      />
      <ModalRules
        isOpen={isModalRules}
        onClose={openModalRules}
        isPlus={isPlus}
      />
      <ModalWannaPlay
        isOpen={isModalWannaPlay}
        onClose={openModalWannaPlay}
        isPlus={isPlus}
        userFrom={userFrom}
        socket={socket}
      />
      <div className="Main__Container">
        <div className="Main__Header">
          <div className="Main__Header__Container">
            <Header score={score} isPlus={isPlus} />
          </div>
          <div className="switch__button">
            <h2>
              Mode plus: <br /> {isPlus && "On"} {!isPlus && "Off"}
            </h2>
            <SwitchButton onClick={changePlus} />
          </div>
        </div>
        <div className="Main__Options">
          <div className="Main__Options__Container">
            {/* Online optionss /////////////////////////////////////////////// */}
            {!isPlus && isPlayingOnline && (
              <Options
                setOption={getUserOption}
                userOption={userOption}
                winnerPhrase={winnerPhrase}
                computerOption={computerOption}
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
                setScore={setScore}
                score={score}
                winner={winner}
                setLosed={setLosed}
                setTied={setTied}
                tied={tied}
                losed={losed}
              />
            )}
            {/* /////////////////////////////// */}
            {isPlus && !isPlayingOnline && (
              <OptionsPlus
                setOption={setOption}
                userOption={userOption}
                winnerPhrase={winnerPhrase}
                computerOption={computerOption}
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
                setScore={setScore}
                score={score}
                winner={winner}
                setLosed={setLosed}
                setTied={setTied}
                tied={tied}
                losed={losed}
              />
            )}
            {!isPlus && !isPlayingOnline && (
              <Options
                setOption={setOption}
                userOption={userOption}
                winnerPhrase={winnerPhrase}
                computerOption={computerOption}
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
                setScore={setScore}
                score={score}
                winner={winner}
                setLosed={setLosed}
                setTied={setTied}
                tied={tied}
                losed={losed}
              />
            )}
          </div>
        </div>
        <div className="Main__Footer">
          <button onClick={openModalDashBoard} className="Dashboard__Button">
            Dashboard
          </button>
          <button onClick={openModalOnline} className="Rules__Button">
            Online
          </button>
          <button onClick={openModalRules} className="Online__Button">
            Rules
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
