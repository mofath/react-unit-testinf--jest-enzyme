import React from "react";

import { setup, findByTestAttribute, storeFactory } from "../../testUtils";
import rootReducer from "./reducers";
import Input from "./input";

describe("render", () => {
  describe("word has not been guessed", () => {
    let wrapper = null;

    beforeEach(() => {
      const initialStateAsProps = { success: false };
      wrapper = setup(Input, initialStateAsProps);
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
      const initialStateAsProps = { success: true };
      wrapper = setup(Input, initialStateAsProps);
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

describe("update state", () => {});
