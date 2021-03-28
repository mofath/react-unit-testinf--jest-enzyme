import { actionTypes } from "../actions";
import reducer from ".";

test("returns initial default state of `false` when action is passed", () => {
  const newState = reducer(undefined, {});
  expect(newState.success).toBe(false);
});

test("returns state of true upon recieving an action of type `CORRECR_GUESS`", () => {
  const newState = reducer(undefined, { type: actionTypes.CORRECT_GUESS });
  expect(newState.success).toBe(true);
});
