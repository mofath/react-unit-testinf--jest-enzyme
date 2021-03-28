import React from "react";
import { shallow } from "enzyme";
import { setup, findByTestAttribute, storeFactory } from "../../../../testUtils";
import rootReducer from "../../reducers";
import Input, { UnconnectedInput } from "./input";

const inputSetup = (initialState = {}) => {
  const store = storeFactory(rootReducer, initialState);
  const wrapper = setup(Input, {}, null, store).dive().dive();
  return wrapper;
};

describe("render", () => {
  describe("word has not been guessed", () => {
    let wrapper = null;

    beforeEach(() => {
      const initialState = { success: false };
      wrapper = inputSetup(initialState);
    });

    test("renders the component without error", () => {
      const component = findByTestAttribute(wrapper, "component-input");
      expect(component.length).toBe(1);
    });

    test("renders the input box", () => {
      const inputBox = findByTestAttribute(wrapper, "input-box");
      expect(inputBox.length).toBe(1);
    });

    test("renders the submit button", () => {
      const submitButton = findByTestAttribute(wrapper, "submit-button");
      expect(submitButton.length).toBe(1);
    });
  });

  describe("word has been guessed", () => {
    let wrapper = null;

    beforeEach(() => {
      const initialState = { success: true };
      wrapper = inputSetup(initialState);
    });

    test("renders the component without error", () => {
      const component = findByTestAttribute(wrapper, "component-input");
      expect(component.length).toBe(1);
    });

    test("does not render the input box", () => {
      const inputBox = findByTestAttribute(wrapper, "input-box");
      expect(inputBox.length).toBe(0);
    });

    test("renders the submit button", () => {
      const submitButton = findByTestAttribute(wrapper, "submit-button");
      expect(submitButton.length).toBe(0);
    });
  });
});

describe("redux props", () => {
  test("has success piece of state as props", () => {
    const success = false;
    const wrapper = inputSetup({ success });
    const successProp = wrapper.instance().props.success;
    expect(successProp).toBe(success);
  });

  test("`guessWord` creator is action prop", () => {
    const wrapper = inputSetup();
    const guessWordProp = wrapper.instance().props.guessWord;
    expect(guessWordProp).toBeInstanceOf(Function);
  });
});

describe("`guessWord` action creator call", () => {
  let guessWordMock;
  let guessedWord;
  let wrapper;

  beforeEach(() => {
    guessWordMock = jest.fn();
    guessedWord = "train";
    const props = { guessWord: guessWordMock };
    wrapper = shallow(<UnconnectedInput {...props} />);
    wrapper.setState({ currentGuess: guessedWord });
    const submitButton = findByTestAttribute(wrapper, "submit-button");
    submitButton.simulate("click", { preventDefault() {} });
  });

  test("calls `guessWord` when button is clicked", () => {
    const guessWordMockCallCount = guessWordMock.mock.calls.length;
    expect(guessWordMockCallCount).toBe(1);
  });

  test("calls `guessWord with input value as argument`", () => {
    const guessedWordArg = guessWordMock.mock.calls[0][0];
    expect(guessedWordArg).toBe(guessedWord);
  });

  test("input box clears on submit", () => {
    expect(wrapper.state("currentGuess")).toBe("");
  });
});
