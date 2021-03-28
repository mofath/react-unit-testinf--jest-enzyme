import { getLetterMatchCount } from ".";

describe("getLetterMatchCount", () => {
  const secretWord = "party";
  test("returns correct count when there are no matching letters", () => {
      const letterMatchCount = getLetterMatchCount("bones", secretWord);
      expect(letterMatchCount).toBe(0)
  });
  test("return the correct count where there are 3 matching letters", () => {
    const letterMatchCount = getLetterMatchCount("train", secretWord);
    expect(letterMatchCount).toBe(3)
  });

  test("returns the correct count where there are dublicate letter in the guessedword", () => {
    const letterMatchCount = getLetterMatchCount("parka", secretWord);
    expect(letterMatchCount).toBe(3)
  });
});
