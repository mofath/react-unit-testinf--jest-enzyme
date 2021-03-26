import React, { Component } from "react";
import GuessWords from "./guess-words";
import Congrats from "./congrats";
import { Provider } from "react-redux";
import store from "./configStore";

class GuessWordGame extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App" data-test="">
          <h1>Jotto</h1>
          <Congrats success={false} />
          <GuessWords
            guessedWords={[{ guessedWord: "train", letterMatchCount: 3 }]}
          />
        </div>
      </Provider>
    );
  }
}

export default GuessWordGame;
