import React, { useState, useEffect } from "react";

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
  const [isPlus, setIsPlus] = useState(false);

  function setOption(event) {
    setUserOption(event.target.id);
    if (isPlus) {
      setComputerOption(Game.getRandomOption("bonus"));
    } else {
      setComputerOption(Game.getRandomOption());
    }
    setIsPlaying(true);
  }

  function changePlus() {
    setIsPlus(!isPlus);
  }
  return (
    <div className="Main">
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
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
