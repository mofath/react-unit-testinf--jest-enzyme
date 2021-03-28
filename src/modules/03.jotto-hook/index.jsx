import React from "react";
import { Congrats, GuessWords, Input } from "./components";

const Game = (props) => {
  return (
    <div className="container" data-test="component-guess-word-game">
      <h1 className="mt-5 mb-4">Jotto</h1>
      <div className="mb-3">
        The secret word is <b>{props.secretWord}</b>
      </div>
      <Congrats success={props.success} />
      <Input />
      <GuessWords guessedWords={props.guessedWords} />
    </div>
  );
};

export default Game;
