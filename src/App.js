import React, { Component } from "react";
import GuessWordGameContainer from "./modules/guess-word-game";

class App extends Component {
  render() {
    return (
      <div className="App" data-test="component-app">
        <GuessWordGameContainer />
      </div>
    );
  }
}

export default App;
