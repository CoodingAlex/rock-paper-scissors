import React, { useState, useEffect } from "react";
import ModalRules from "../components/ModalRules";
import ModalDashboard from "../components/ModalDashboard";
import Header from "../components/Header";
import Options from "../components/Options";
import OptionsPlus from "../components/OptionsPlus";
import Game from "../components/game";
import switchButton from "../components/SwitchButton";

import "../assets/styles/Main.css";
import SwitchButton from "../components/SwitchButton";
const Main = (props) => {
  useEffect(() => {
    setWinner(Game.getWinner(userOption, computerOption));
    if (winner == "Tie") setWinnerPhrase("This is a Tie");
    if (winner == "User") setWinnerPhrase("You Win");

    if (winner == "Computer") setWinnerPhrase("You Lose");
  });
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
      <ModalRules
        isOpen={isModalRules}
        onClose={openModalRules}
        isPlus={isPlus}
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
            {isPlus && (
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
            {!isPlus && (
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
          <button onClick={openModalRules} className="Rules__Button">
            Rules
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
