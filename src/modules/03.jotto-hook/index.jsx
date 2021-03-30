import React from "react";
import hookAction from "./actions/hookAction";
import { Congrats, GuessWords, Input, LanguagePicker } from "./components";
import languageContext from "./contexts/languageContext";
import reducer, { INITIAL_STATE } from "./reducer";

function App() {
  const [state, dispatch] = React.useReducer(reducer, INITIAL_STATE);

  const setSecretWord = (secretWord) => dispatch({ type: "setSecretWord", payload: secretWord });
  const setLanguage = (language) => dispatch({ type: "setLanguage", payload: language });

  React.useEffect(() => {
    hookAction.getSecretWord(setSecretWord);
  }, []);

  if (!state.secretWord) {
    return (
      <div className="container" data-test="spinner">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <p>Loading secret word</p>
      </div>
    );
  }

  return (
    <div className="container" data-test="component-guess-word-game">
      <h1>Jotto</h1>
      <languageContext.Provider value={state.language}>
        hello
      </languageContext.Provider>
    </div>
  );
}

export default App;
