function removeNoSelectedOptions(optionSelected, noSelected1, noSelected2) {
  let optionRemoved1 = document.querySelector(`#${noSelected1}`);
  let optionRemoved2 = document.querySelector(`#${noSelected2}`);
  let optionsContainer = document.querySelector(".Options__Container");
  let optionSelectedContainer = document.querySelector(`#${optionSelected}`);
  try {
    optionsContainer.classList.remove("Options__Container");
    optionsContainer.classList.add("Game__Container");

    optionSelectedContainer.classList.remove(`${optionSelected}__Container`);
    optionRemoved1.remove();
    optionRemoved2.remove();
  } catch {}
}
function translateToGame(optionSelected) {
  let selectedOption = document.querySelector(`#${optionSelected}`);
  console.log(selectedOption);

  selectedOption.classList.add("Selected__Option");
}

module.exports = {
  translateToGame,
  removeNoSelectedOptions,
};
