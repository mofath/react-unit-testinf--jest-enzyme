import { actionTypes } from "../actions";

export function successReducer(state = false, action) {
  switch (action.type) {
    case actionTypes.CORRECT_GUESS:
      return true;
    default:
      return state;
  }
}
