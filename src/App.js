import React, { Component } from "react";
import GuessWordGameContainer from "./modules/02.jotto-redux";

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
