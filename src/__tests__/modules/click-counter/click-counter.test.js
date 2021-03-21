import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import ClickCounter from "../../../modules/click-counter/click-counter";

Enzyme.configure({ adapter: new Adapter() });

/**
 * Factory function to create a shallow wrapper for the App component
 * @function setup
 * @param {object } props - Component props.
 * @param {any} state - Initial state for setup.
 * @returns {ShallowWrapper}
 */
export const setup = (Component, props = {}, state = null) => {
  const wrapper = shallow(<Component {...props} />);
  if (state) wrapper.setState(state);
  return wrapper;
};

/**
 * Return shallowWrapper containing node(s) with the given data-test value
 * @param {ShallowWrapper} wrapper  - Enzyme shallow wrapper to search within.
 * @param {string} val - Value of data-test attribute for search.
 * @returns {ShallowWrapper}
 */
export const findByTestAttribute = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

test("renders click-counter-container without error", () => {
  const wrapper = setup(ClickCounter);
  const clickCounterComponent = findByTestAttribute(wrapper, "click-counter");
  expect(clickCounterComponent.length).toBe(1);
});

test("renders increment button", () => {
  const wrapper = setup(ClickCounter);
  const button = findByTestAttribute(wrapper, "increment-button");
  expect(button.length).toBe(1);
});

test("renders counter display", () => {
  const wrapper = setup(ClickCounter);
  const counterDisplay = findByTestAttribute(wrapper, "counter-display");
  expect(counterDisplay.length).toBe(1);
});

test("counter starts at 0", () => {
  const wrapper = setup(ClickCounter);
  const initialCounterState = wrapper.state("counter");
  expect(initialCounterState).toBe(0);
});

test("clicking increment button increments counter display", () => {
  const counter = 7;
  const wrapper = setup(ClickCounter, null, { counter });
  const button = findByTestAttribute(wrapper, "increment-button");
  button.simulate("click");
  const counterDisplay = findByTestAttribute(wrapper, "counter-display");
  expect(counterDisplay.text()).toContain(counter + 1);
});
