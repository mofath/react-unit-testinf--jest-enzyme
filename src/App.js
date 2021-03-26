import React, { Component } from "react";
import GuessWordGame from './modules/guess-word-game'

class App extends Component {
  render() {
    return (
      <div className="App" data-test="component-app">
        <GuessWordGame />
      </div>
    );
  }
}

export default App;
