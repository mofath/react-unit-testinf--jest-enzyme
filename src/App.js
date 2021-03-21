import React, { Component } from "react";
import ClickCounter from './modules/click-counter/click-counter'

class App extends Component {
  render() {
    return (
      <div className="App" data-test="component-app">
        <h1>App</h1>
        <ClickCounter />
      </div>
    );
  }
}

export default App;
