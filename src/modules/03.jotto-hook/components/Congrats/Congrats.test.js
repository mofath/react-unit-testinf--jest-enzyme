import React from "react";
import { shallow, mount } from "enzyme";
import { findByTestAttribute, checkProps } from "../../../../testUtils";
import Congrats from "./Congrats";
import languageContext from "../../contexts/languageContext";


const setup = ({ language, success }) => {
  language = language || "en";
  success = success || false;

  return mount(
    <languageContext.Provider value={language}>
      <Congrats success={success} />
    </languageContext.Provider>
  );
};

describe("languagePicker", () => {
  test("correctely renders congrats string in english", () => {
    const wrapper = setup({ success: true });
    expect(wrapper.text()).toBe("Congratulations! You guessed the word!");
  });

  test("correctely renders congrats string in emoji", () => {
    const wrapper = setup({ success: true, language: "emoji" });
    expect(wrapper.text()).toBe('🎯🎉');
  });
});

test("render without error", () => {
  const wrapper = setup({});
  const component = findByTestAttribute(wrapper, "component-congrats");
  expect(component.length).toBe(1);
});
