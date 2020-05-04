function getRandomOption(mode = "normal") {
  let option;
  if (mode == "normal") {
    option = Math.floor(Math.random() * (4 - 1) + 1);
  }
  if (mode == "bonus") {
    option = Math.floor(Math.random() * (6 - 1) + 1);
  }
  console.log(option);

  switch (option) {
    case 1:
      return "Scissors";
      break;
    case 2:
      return "Rock";
      break;
    case 3:
      return "Paper";
      break;
    case 4:
      return "Spock";
      break;
    case 5:
      return "Lizard";
      break;
    default:
      break;
  }
}

function getWinner(userOption, computerOption) {
  switch (userOption) {
    case "Scissors":
      if (computerOption == "Paper") return "User";
      if (computerOption == "Lizard") return "User";
      if (computerOption == "Spock") return "Computer";
      if (computerOption == "Rock") return "Computer";
      if (computerOption == "Scissors") return "Tie";
      break;
    case "Paper":
      if (computerOption == "Rock") return "User";
      if (computerOption == "Spock") return "User";
      if (computerOption == "Lizard") return "Computer";
      if (computerOption == "Scissors") return "Computer";
      if (computerOption == "Paper") return "Tie";
      break;
    case "Rock":
      if (computerOption == "Lizard") return "User";
      if (computerOption == "Scissors") return "User";
      if (computerOption == "Spock") return "Computer";
      if (computerOption == "Paper") return "Computer";
      if (computerOption == "Rock") return "Tie";
      break;
    case "Spock":
      if (computerOption == "Scissors") return "User";
      if (computerOption == "Rock") return "User";
      if (computerOption == "Paper") return "Computer";
      if (computerOption == "Lizard") return "Computer";
      if (computerOption == "Spock") return "Tie";
      break;
    case "Lizard":
      if (computerOption == "Spock") return "User";
      if (computerOption == "Paper") return "User";
      if (computerOption == "Scissors") return "Computer";
      if (computerOption == "Rock") return "Computer";
      if (computerOption == "Lizard") return "Tie";
      break;
    default:
      break;
  }
}

module.exports = {
  getRandomOption,
  getWinner,
};
