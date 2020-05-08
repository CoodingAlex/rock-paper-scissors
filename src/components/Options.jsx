import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { setIsPlayingOnline, setWinnerPhrase } from "../actions";
import "../assets/styles/Options.css";
import "../assets/styles/Game.css";
import Option from "./Option";
import GameOption from "./GameOption";

const Options = (props) => {
  if (props.isPlaying) {
    return (
      <div className="Game">
        <div className="Game__Container">
          <GameOption option={props.userOption} typeOption="User"></GameOption>
          <p className="Winner__Phrase">{props.winnerPhrase}</p>
          <button
            onClick={() => {
              props.setIsPlaying(false);

              if (props.winner == "User") {
                props.setScore(props.score + 1);
              }
              if (props.winner == "Tie") {
                props.setTied(props.tied + 1);
              }
              if (props.winner == "Computer") {
                props.setLosed(props.losed + 1);
              }
              props.setIsPlayingOnline(false);
              props.setWinnerPhrase("");
            }}
            className="Play__Again__Button"
          >
            play Again
          </button>
          {!props.computerOption && <GameOption typeOption="Computer" />}
          {props.computerOption && (
            <GameOption option={props.computerOption} typeOption="Computer" />
          )}
        </div>
      </div>
    );
  }
  return (
    <div className="Options">
      <div className="Options__Container">
        <Option option="Paper" onClick={props.setOption} />
        <Option option="Rock" onClick={props.setOption} />
        <Option option="Scissors" onClick={props.setOption} />
      </div>
    </div>
  );
};
const mapDispatchToProps = {
  setIsPlayingOnline,
  setWinnerPhrase,
};
export default connect(null, mapDispatchToProps)(Options);

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
