import React, { Component } from "react";
import GuessWords from "./guess-words";
import Congrats from "./congrats";

class GuessWordGame extends Component {
  render() {
    return (
      <div className="App" data-test="">
        <h1>Jotto</h1>
        <Congrats success={false} />
        <GuessWords
          guessedWords={[{ guessedWord: "train", letterMatchCount: 3 }]}
        />
      </div>
    );
  }
}

export default GuessWordGame;
