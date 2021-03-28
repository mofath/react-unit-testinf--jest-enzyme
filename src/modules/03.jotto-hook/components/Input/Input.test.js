import React from "react";
import { setup, findByTestAttribute } from "../../../../testUtils";
import Input from "./input";

let wrapper;
const inputSetup = () => {
  wrapper = setup(Input);
  return wrapper;
};

test("Input renders without errors", () => {
  wrapper = inputSetup();
  const inputComponent = findByTestAttribute(wrapper, "component-input");
  expect(inputComponent.length).toBe(1);
});
