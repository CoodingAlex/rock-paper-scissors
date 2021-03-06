import React, { useState } from "react";
import "../assets/styles/Options.css";
import "../assets/styles/Game.css";
import iconPaper from "../assets/img/icon-paper.svg";
import iconRock from "../assets/img/icon-rock.svg";
import iconScissors from "../assets/img/icon-scissors.svg";
import iconSpock from "../assets/img/icon-spock.svg";
import iconLizard from "../assets/img/icon-lizard.svg";
const Option = (props) => {
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
  if (props.plus) {
    return (
      <figure
        className={`${props.option}__Container__Plus Option__Container__Plus ${props.option}__Border`}
        onClick={props.onClick}
        id={props.option}
      >
        <img src={icon} alt={props.option} id={props.option} />
      </figure>
    );
  }
  return (
    <figure
      className={`${props.option}__Container Option__Container ${props.option}__Border`}
      onClick={props.onClick}
      id={props.option}
    >
      <img src={icon} alt={props.option} id={props.option} />
    </figure>
  );
};
export default Option;
