import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

import Congrats from "../../../modules/guess-word-game/congrats";
import { setup, findByTestAttribute } from "../../../testUtils";

Enzyme.configure({ adapter: new Adapter() });

test("renders without errors", () => {
  const wrapper = setup(Congrats);
  const congratsComponent = findByTestAttribute(wrapper, "component-congrats");
  expect(congratsComponent.length).toBe(1);
});

test("renders no text when `success` props is false", () => {
  const wrapper = setup(Congrats, { success: false });
  const congratsComponent = findByTestAttribute(wrapper, "component-congrats");
  expect(congratsComponent.text()).toBe("");
});

test("renders non-empty congrats message when success prop", () => {
  const wrapper = setup(Congrats, { success: true });
  const congratsComponent = findByTestAttribute(wrapper, "component-congrats");
  const message = findByTestAttribute(wrapper, 'congrats-message')
  expect(message.text().length).not.toBe(0)
});
