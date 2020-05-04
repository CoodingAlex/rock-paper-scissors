import React, { useState, useEffect } from "react";

import Header from "../components/Header";
import Options from "../components/Options";
import Game from "../components/game";

import "../assets/styles/Main.css";
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
  function setOption(event) {
    setUserOption(event.target.id);
    setComputerOption(Game.getRandomOption());
    setIsPlaying(true);
  }
  return (
    <div className="Main">
      <div className="Main__Container">
        <div className="Main__Header">
          <div className="Main__Header__Container">
            <Header score={score} />
          </div>
        </div>
        <div className="Main__Options">
          <div className="Main__Options__Container">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
