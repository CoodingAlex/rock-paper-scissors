function getRandomOption() {
  let option = Math.floor(Math.random() * (4 - 1) + 1);
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
    default:
      break;
  }
}

function getWinner(userOption, computerOption) {
  switch (userOption) {
    case "Scissors":
      if (computerOption == "Paper") return "User";
      if (computerOption == "Rock") return "Computer";
      if (computerOption == "Scissors") return "Tie";
      break;
    case "Paper":
      if (computerOption == "Rock") return "User";
      if (computerOption == "Scissors") return "Computer";
      if (computerOption == "Paper") return "Tie";
      break;
    case "Rock":
      if (computerOption == "Scissors") return "User";
      if (computerOption == "Paper") return "Computer";
      if (computerOption == "Rock") return "Tie";
      break;
    default:
      break;
  }
}

module.exports = {
  getRandomOption,
  getWinner,
};
