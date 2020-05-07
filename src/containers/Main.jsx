import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import ModalRules from "../components/ModalRules";
import ModalDashboard from "../components/ModalDashboard";
import ModalOnline from "../components/ModalOnline";
import ModalWannaPlay from "../components/ModalWannaPlay";
import Header from "../components/Header";
import Options from "../components/Options";
import OptionsPlus from "../components/OptionsPlus";
import Game from "../components/game";
import "../assets/styles/Main.css";
import SwitchButton from "../components/SwitchButton";

const Main = ({
  isPlaying,
  userOption,
  computerOption,
  winner,
  winnerPhrase,
  score,
  losed,
  tied,
  isPlus,
  isModalRules,
  isModalDashBoard,
  isModalOnline,
  isModalWannaPlay,
  isLogged,
  usersOnline,
  userFrom,
  isPlayingOnline,
}) => {
  const { socket } = props;
  //Hooks

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

const mapStateToProps = (state) => {
  return {
    isPlaying: state.isPlaying,
    userOption: state.userOption,
    computerOption: state.computerOption,
    winner: state.winner,
    winnerPhrase: state.winnerPhrase,
    score: state.score,
    losed: state.losed,
    tied: state.tied,
    isPlus: state.isPlus,
    isModalRules: state.isModalRules,
    isModalDashBoard: state.isModalDashBoard,
    isModalOnline: state.isModalOnline,
    isModalWannaPlay: state.isModalWannaPlay,
    isLogged: state.isLogged,
    usersOnline: state.usersOnline,
    userFrom: state.userFrom,
    isPlayingOnline: state.isPlayingOnline,
  };
};
export default connect(mapStateToProps, null)(Main);
