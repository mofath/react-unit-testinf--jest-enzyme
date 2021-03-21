import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

import Congrats from "../../../modules/guess-word-game/congrats";
import { setup, findByTestAttribute, checkProps } from "../../../testUtils";

const defaultProps = { success: false };

Enzyme.configure({ adapter: new Adapter() });

test("renders without errors", () => {
  const setupProps = { ...defaultProps, ...{ success: false } };
  const wrapper = setup(Congrats, setupProps);
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
  const message = findByTestAttribute(wrapper, "congrats-message");
  expect(message.text().length).not.toBe(0);
});

test("does not throw warning with expected props", () => {
  const expectedProps = { success: false };
  checkProps(Congrats, expectedProps);
});
