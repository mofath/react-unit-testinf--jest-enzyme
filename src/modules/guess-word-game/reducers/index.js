import { actionTypes } from "../actions";

const INITIAL_STATE = {
  success: false,
  guessedWords: [],
  secretWord: "",
};

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionTypes.GUESS_WORD:
      return {
        ...state,
        guessedWords: [...state.guessedWords, ...action.payload],
      };
    case actionTypes.CORRECT_GUESS:
      return { ...state, success: true };
    case actionTypes.SET_SECRET_WORD:
      return { ...state, secretWord: action.payload };
    default:
      return state;
  }
}

export default reducer;
