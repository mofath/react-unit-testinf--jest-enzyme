import React from "react";
import hookAction from "./actions/hookAction";
import { Congrats, GuessWords, Input } from "./components";
import reducer from "./reducer";

const Game = (props) => {
  const [state, dispatch] = React.useReducer(reducer, { secretWord: null });

  const setSecretWord = (secretWord) => {
    dispatch({ type: "setSecretWord", payload: secretWord });
  };

  React.useEffect(() => {
    hookAction.getSecretWord(setSecretWord);
  }, []);

  if (!state.secretWord) {
    return (
      <div className="container" data-test="spinner">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading..</span>
        </div>
        <p>Loading Secret Word</p>
      </div>
    );
  }

  return (
    <div className="container" data-test="component-guess-word-game">
      <h1 className="mt-5 mb-4">Jotto</h1>
      <div className="mb-3">
        The secret word is <b>{props.secretWord}</b>
      </div>
      {/* <Congrats success={props.success} /> */}
      <Input secretWord={state.secretWord} />
      {/* <GuessWords guessedWords={props.guessedWords} /> */}
    </div>
  );
};

export default Game;
