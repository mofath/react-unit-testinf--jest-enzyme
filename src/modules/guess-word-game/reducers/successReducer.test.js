import { actionTypes } from "../actions";
import { successReducer } from "./successReducer";

test("returns initial default state of `false` when action is passed", () => {
  const newState = successReducer(undefined, {});
  expect(newState).toBe(false);
});

test("returns state of true upon recieving an action of type `CORRECR_GUESS`", () => {
  const newState = successReducer(undefined, { type: actionTypes.CORRECT_GUESS });
  expect(newState).toBe(true);
});
