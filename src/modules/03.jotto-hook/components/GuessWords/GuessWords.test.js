import React from "react";
import { shallow } from "enzyme";
import { findByTestAttribute } from "../../../../testUtils";
import GuessedWords from "./GuessWords";

import guessedWordsContext from "../../contexts/guessedWordsContext";

const setup = (guessedWords = []) => {
    const mockUseGuessedWords = jest
        .fn()
        .mockReturnValue([guessedWords, jest.fn()]);
    guessedWordsContext.useGuessedWords = mockUseGuessedWords;
    return shallow( < GuessedWords / > );
};

describe("if there are no words guessed", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setup([]);
    });
    test("renders without error", () => {
        const component = findByTestAttribute(wrapper, "component-guessed-words");
        expect(component.length).toBe(1);
    });
    test("renders instructions to guess a word", () => {
        const instructions = findByTestAttribute(wrapper, "guess-instructions");
        expect(instructions.text().length).not.toBe(0);
    });
});
describe("if there are words guessed", () => {
    let wrapper;
    const guessedWords = [
        { guessedWord: "train", letterMatchCount: 3 },
        { guessedWord: "agile", letterMatchCount: 1 },
        { guessedWord: "party", letterMatchCount: 5 },
    ];
    beforeEach(() => {
        wrapper = setup(guessedWords);
    });

    test("renders without error", () => {
        const component = findByTestAttribute(wrapper, "component-guessed-words");
        expect(component.length).toBe(1);
    });

    test('renders "guessed words" section', () => {
        const guessedWordsNode = findByTestAttribute(wrapper, "guessed-words");
        expect(guessedWordsNode.length).toBe(1);
    });

    test("correct number of guessed words", () => {
        const guessedWordNodes = findByTestAttribute(wrapper, "guessed-word");
        expect(guessedWordNodes.length).toBe(guessedWords.length);
    });

    test("includes guess word index for each word", () => {
        const guessWordIndexes = findByTestAttribute(wrapper, "guessed-word-index");
        const indexesText = guessWordIndexes.map((wrapper) => wrapper.text());
        const expectedText = guessedWords.map((word, index) =>
            (index + 1).toString()
        );
        expect(indexesText).toEqual(expectedText);
    });

    test("number of guesses is displayed correctly", () => {
        const numberOfGuessesDiv = findByTestAttribute(wrapper, "total-guesses");
        expect(numberOfGuessesDiv.text()).toContain(guessedWords.length);
    });
});

describe("languagePicker", () => {
    test("correctly renders guess instructions string in English by default", () => {
        const wrapper = setup([]);
        const guessInstructions = findByTestAttribute(wrapper, "guess-instructions");
        expect(guessInstructions.text()).toBe("Try to guess the secret word!");
    });

    test("correctly renders guess instructions string in emoji", () => {
        const mockUseContext = jest.fn().mockReturnValue("emoji");
        React.useContext = mockUseContext;
        const wrapper = setup([]);
        const guessInstructions = findByTestAttribute(
            wrapper,
            "guess-instructions"
        );
        expect(guessInstructions.text()).toBe("🤔🤫🔤");
    });
});