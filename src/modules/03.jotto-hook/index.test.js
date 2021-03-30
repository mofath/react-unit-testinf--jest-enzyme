import React from "react";
import { mount } from "enzyme";
import { findByTestAttribute } from "../../testUtils";
import Game from "./";

import hookActions from "./actions/hookAction";

const mockGetSecretWord = jest.fn();

const setup = (secretWord = "party") => {
  mockGetSecretWord.mockClear();
  hookActions.getSecretWord = mockGetSecretWord;
  const mockUseReducer = jest.fn().mockReturnValue([{ secretWord, language: "en" }, jest.fn()]);
  React.useReducer = mockUseReducer;
  // use mount, because useEffect not called on `shallow`
  return mount(<Game />);
};

test("Game renders without error", () => {
  const wrapper = setup();
  const component = findByTestAttribute(wrapper, "component-guess-word-game");
  expect(component.length).toBe(1);
});

describe("getSecretWord calls", () => {
  test("getSecretWord gets called on Game mount", () => {
    setup();

    // check to see if secret word was updated
    expect(mockGetSecretWord).toHaveBeenCalled();
  });
  test("secretWord does not update on Game update", () => {
    const wrapper = setup();
    mockGetSecretWord.mockClear();

    wrapper.setProps();

    expect(mockGetSecretWord).not.toHaveBeenCalled();
  });
});

describe("secretWord is not null", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup("party");
  });

  test("renders Game when secretWord is not null", () => {
    const appComponent = findByTestAttribute(
      wrapper,
      "component-guess-word-game"
    );
    expect(appComponent.exists()).toBe(true);
  });
  test("does not render spinner when secretWord is not null", () => {
    const spinnerComponent = findByTestAttribute(wrapper, "spinner");
    expect(spinnerComponent.exists()).toBe(false);
  });
});

describe("secretWord is null", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup(null);
  });

  test("does not render app when secretWord is null", () => {
    const appComponent = findByTestAttribute(
      wrapper,
      "component-guess-word-game"
    );
    expect(appComponent.exists()).toBe(false);
  });
  test("renders spinner when secretWord is null", () => {
    const spinnerComponent = findByTestAttribute(wrapper, "spinner");
    expect(spinnerComponent.exists()).toBe(true);
  });
});
