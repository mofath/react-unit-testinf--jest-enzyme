const languageStrings = {
  en: {
    congrats: "Congratulations! You guessed the word!",
    submit: "Submit",
    guessPrompt: "Try to guess the secret word!",
    guessInputPlaceholder: "enter guess",
    guessColumnHeader: "Guessed Words",
    numberColumnHeader: "#",
    totalGuesses: "Total Guesses",
    guessedWords: "Guesses",
    matchingLettersColumnHeader: "Matching Letters",
    newWord: "New Word",
  },
  emoji: {
    congrats: "🎯🎉",
    submit: "🚀",
    guessPrompt: "🤔🤫🔤",
    guessInputPlaceholder: "⌨️🤔",
    guessedWords: "🤷‍🔤",
    guessColumnHeader: "🤷‍",
    numberColumnHeader: "🔢",
    totalGuesses: "🔢🤷‍♀️",
    matchingLettersColumnHeader: "✅",
    newWord: "✨🔤",
  },
};

function getStringByLanguage(
  languageCode,
  stringKey,
  stringFile = languageStrings
) {
  if (!stringFile[languageCode] || !stringFile[languageCode][stringKey]) {
    // return default language
    console.warn(`Could not get string [${stringKey}] for [${languageCode}]`);
    return stringFile.en[stringKey];
  }
  return stringFile[languageCode][stringKey];
}

export default { getStringByLanguage };
