const reducer = (state, action) => {
  switch (action.type) {
    case "SET_WINNER":
      return {
        ...state,
        winner: action.payload,
      };
    case "SET_WINNER_PHRASE":
      return {
        ...state,
        winnerPhrase: action.payload,
      };
    case "SET_IS_MODAL_ONLINE":
      return {
        ...state,
        isModalOnline: action.payload,
      };
    case "SET_IS_MODAL_WANNA_PLAY":
      return {
        ...state,
        isModalWannaPlay: action.payload,
      };
    case "SET_IS_PLAYING_ONLINE":
      return {
        ...state,
        isPlayingOnline: action.payload,
      };
    case "SET_COMPUTER_OPTION":
      return {
        ...state,
        computerOption: action.payload,
      };
    case "SET_USER_OPTION":
      return {
        ...state,
        userOption: action.payload,
      };
    case "SET_IS_PLAYING":
      return {
        ...state,
        isPlaying: action.payload,
      };
    case "SET_IS_MODAL_RULES":
      return {
        ...state,
        isModalRules: action.payload,
      };
    case "SET_IS_MODAL_DASH_BOARD":
      return {
        ...state,
        isModalDashBoard: action.payload,
      };
    case "SET_IS_PLUS":
      return {
        ...state,
        isPlus: action.payload,
      };
    case "SET_IS_LOGGED":
      return {
        ...state,
        isLogged: action.payload,
      };
    case "SET_USERS_ONLINE":
      return {
        ...state,
        usersOnline: action.payload,
      };
    case "SET_LOSED":
      return {
        ...state,
        losed: action.payload,
      };
    case "SET_TIED":
      return {
        ...state,
        tied: action.payload,
      };
    case "SET_SCORE":
      return {
        ...state,
        score: action.payload,
      };
    case "SET_YOU":
      return {
        ...state,
        you: action.payload,
      };
    case "SET_USER_FROM":
      return {
        ...state,
        userFrom: action.payload,
      };
    case "SET_ROOM":
      return {
        ...state,
        room: action.payload,
      };

    default:
      return state;
      break;
  }
};

export default reducer;
