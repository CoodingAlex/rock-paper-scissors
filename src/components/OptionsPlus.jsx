import React, { useState, useEffect } from "react";
import "../assets/styles/OptionsPlus.css";
import "../assets/styles/Game.css";
import Option from "./Option";
import GameOption from "./GameOption";
const OptionsPlus = (props) => {
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
            }}
            className="Play__Again__Button"
          >
            play Again
          </button>

          <GameOption option={props.computerOption} typeOption="Computer" />
        </div>
      </div>
    );
  }
  return (
    <div className="Options">
      <div className="Options__Container__Plus">
        <Option option="Spock" onClick={props.setOption} plus={true} />
        <Option option="Rock" onClick={props.setOption} plus={true} />
        <Option option="Scissors" onClick={props.setOption} plus={true} />
        <Option option="Paper" onClick={props.setOption} plus={true} />
        <Option option="Lizard" onClick={props.setOption} plus={true} />
      </div>
    </div>
  );
};

export default OptionsPlus;
