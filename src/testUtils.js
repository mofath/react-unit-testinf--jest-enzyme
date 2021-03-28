import React from "react";
import { createStore, applyMiddleware } from "redux";
import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import thunkMiddleware from "redux-thunk";

import checkPropsTypes from "check-prop-types";

Enzyme.configure({ adapter: new Adapter() });

/**
 * Create a testing store with reducer, middleware and initialstate
 * @param {object}
 * @param {object} initialState
 * @returns {Store} - redux store
 */
export const storeFactory = (reducer, initialState) => {
  const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);
  return createStoreWithMiddleware(reducer, initialState);
};

/**
 * Factory function to create a shallow wrapper for the App component
 * @function setup
 * @param {object } props - Component props.
 * @param {any} state - Initial state for setup.
 * @returns {ShallowWrapper}
 */
export const setup = (Component, props = {}, state = null, store = null) => {
  const wrapper = shallow(<Component {...props} store={store} />);
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

export const checkProps = (component, conformingProps) => {
  const propError = checkPropsTypes(
    component.propTypes,
    conformingProps,
    "prop",
    component.name
  );
  expect(propError).toBeUndefined();
};
