import React from "react";

import { setup, storeFactory } from "../../testUtils";
import rootReducer from "./reducers";
import { ConnectedGame, UnconnectedGame } from "./";
import { shallow } from "enzyme";

const guessWordGameSetup = (initialState) => {
  const store = storeFactory(rootReducer, initialState);
  const wrapper = setup(ConnectedGame, {}, null, store).dive().dive();
  return wrapper;
};

describe("redux props", () => {
  test("has access to `success` state", () => {
    const success = true;
    const wrapper = guessWordGameSetup({ success });
    const successProp = wrapper.instance().props.success;
    expect(successProp).toBe(success);
  });

  test("has access to `secretWord` state", () => {
    const secretWord = "party";
    const wrapper = guessWordGameSetup({ secretWord });
    const secretWordProp = wrapper.instance().props.secretWord;
    expect(secretWordProp).toBe(secretWord);
  });

  test("has access to `guessedWords` state", () => {
    const guessedWords = [{ guessedWord: "train", letterMatchCount: 3 }];
    const wrapper = guessWordGameSetup({ guessedWords });
    const guessedWordsProp = wrapper.instance().props.guessedWords;
    expect(guessedWordsProp).toEqual(guessedWords);
  });

  test("`getSecretWord` action creator is a function on the props", () => {
    const wrapper = guessWordGameSetup();
    const getSecretWordProp = wrapper.instance().props.getSecretWord;
    expect(getSecretWordProp).toBeInstanceOf(Function);
  });
});

test("`getSecretWord` runs on Game mount", () => {
  const getSecretWordMock = jest.fn();

  // set up the game component with getSecretWordMock as getSecretWord prop
  const wrapper = shallow(
    <UnconnectedGame getSecretWord={getSecretWordMock} />
  );

  // run lifecycle method
  wrapper.instance().componentDidMount();

  //check to see if mock ran
  const getSecretWordCallCount = getSecretWordMock.mock.calls.length;
  expect(getSecretWordCallCount).toBe(2);
});
