import { setup, findByTestAttribute, checkProps } from "../../testUtils";

import GuessWords from "./guess-words";

const defaultProps = {
  guessedWords: [{ guessedWord: "train", letterMatchCount: 3 }],
};

test("does not throw warning with expected props", () => {
  const props = {};
  const setupProps = { ...defaultProps, ...props };
  setup(GuessWords, setupProps);
  checkProps(GuessWords, defaultProps);
});

describe("if there're no words guessed", () => {
  let wrapper = null;

  beforeEach(() => (wrapper = setup(GuessWords, { guessedWords: [] })));

  test("renders without errors", () => {
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
  let guessedWords = [
    { guessedWord: "train", letterMatchCount: 3 },
    { guessedWord: "agile", letterMatchCount: 1 },
    { guessedWord: "party", letterMatchCount: 5 },
  ];

  beforeEach(() => (wrapper = setup(GuessWords, { guessedWords })));

  test("renders without errors", () => {
    const component = findByTestAttribute(wrapper, "component-guessed-words");
    expect(component.length).toBe(1);
  });

  test('renders "guessed words" section', () => {
    const guessedWordsNode = findByTestAttribute(wrapper, "guessed-words");
    expect(guessedWordsNode.length).toBe(1);
  });

  test("correct number of guessed words", () => {
    const guessedWordNode = findByTestAttribute(wrapper, "guessed-word");
    expect(guessedWordNode.length).toBe(guessedWords.length);
  });
});
