import React, { Component } from "react";
import GuessWords from "./guess-words";
import Congrats from "./congrats";
import Input from "./input";
import { Provider, connect } from "react-redux";
import store from "./configStore";
import { getSecretWord } from "./actions";

export class UnconnectedGame extends Component {
  componentDidMount() {
    this.props.getSecretWord();
  }

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

export const ConnectedGame = connect(mapStateToProps, { getSecretWord })(
  UnconnectedGame
);

class GuessWordGameContainer extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedGame />
      </Provider>
    );
  }
}

export default GuessWordGameContainer;
