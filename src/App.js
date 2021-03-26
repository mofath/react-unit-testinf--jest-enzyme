import React, { Component } from "react";
import GuessWords from "./modules/guess-word-game/guess-words";
import Congrats from "./modules/guess-word-game/congrats";

class App extends Component {
  render() {
    return (
      <div className="App" data-test="component-app">
        <h1>Jotto</h1>
        <Congrats success={false} />
        <GuessWords
          guessedWords={[{ guessedWord: "train", letterMatchCount: 3 }]}
        />
      </div>
    );
  }
}

export default App;
