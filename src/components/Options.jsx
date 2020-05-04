import React, { useState, useEffect } from "react";
import "../assets/styles/Options.css";
import "../assets/styles/Game.css";
import Option from "./Option";
import GameOption from "./GameOption";
import Game from "./game";
const Options = () => {
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
  function setOption(event) {
    setUserOption(event.target.id);
    setComputerOption(Game.getRandomOption());
    setIsPlaying(true);
  }
  if (isPlaying) {
    return (
      <div className="Game">
        <div className="Game__Container">
          <GameOption option={userOption} typeOption="User"></GameOption>
          <p className="Winner__Phrase">{winnerPhrase}</p>
          <button
            onClick={() => setIsPlaying(false)}
            className="Play__Again__Button"
          >
            play Again
          </button>
          <GameOption
            option={computerOption}
            typeOption="Computer"
          ></GameOption>
        </div>
      </div>
    );
  }
  return (
    <div className="Options">
      <div className="Options__Container">
        <Option option="Paper" onClick={setOption} />
        <Option option="Rock" onClick={setOption} />
        <Option option="Scissors" onClick={setOption} />
      </div>
    </div>
  );
};

export default Options;

// function changeToGameMode(event) {
//   if (event.target.id == "Paper") {
//     removeNoSelectedOptions("Paper", "Scissors", "Rock");
//     translateToGame("Paper");
//   }
//   if (event.target.id == "Scissors") {
//     removeNoSelectedOptions("Scissors", "Paper", "Rock");
//     translateToGame("Scissors");
//   }
//   if (event.target.id == "Rock") {
//     removeNoSelectedOptions("Rock", "Scissors", "Paper");
//     translateToGame("Rock");
//   }
// }
