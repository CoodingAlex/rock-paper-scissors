import React from "react";
import iconPaper from "../assets/img/icon-paper.svg";
import iconRock from "../assets/img/icon-rock.svg";
import iconScissors from "../assets/img/icon-scissors.svg";
import iconSpock from "../assets/img/icon-spock.svg";
import iconLizard from "../assets/img/icon-lizard.svg";
const GameOption = (props) => {
  let icon;
  switch (props.option) {
    case "Rock":
      icon = iconRock;
      break;
    case "Paper":
      icon = iconPaper;
      break;
    case "Scissors":
      icon = iconScissors;
      break;
    case "Spock":
      icon = iconSpock;
      break;
    case "Lizard":
      icon = iconLizard;
      break;
    default:
      break;
  }
  return (
    <figure
      className={`Option__Game__Container ${props.option}__Border ${props.typeOption}__Option`}
    >
      <img src={icon} alt="" id={props.option} />
    </figure>
  );
};
export default GameOption;
