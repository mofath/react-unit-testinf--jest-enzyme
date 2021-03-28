import React, { Component } from "react";
import GuessWords from "./guess-words";
import Congrats from "./congrats";
import Input from "./input";
import { Provider, connect } from "react-redux";
import store from "./configStore";
import { getSecretWord } from "./actions";

class Game extends Component {
  render() {
    return (
      <div className="container" data-test="component-guess-word-game">
        <h1>Jotto</h1>
        <Congrats success={this.props.success} />
        <Input />
        <GuessWords guessedWords={this.props.guessedWords} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { success, guessedWords, secretWord } = state;
  return { success, guessedWords, secretWord };
};

export const GuessWordGame = connect(mapStateToProps, { getSecretWord })(Game);

class GuessWordGameContainer extends Component {
  render() {
    return (
      <Provider store={store}>
        <GuessWordGame />
      </Provider>
    );
  }
}

export default GuessWordGameContainer;
