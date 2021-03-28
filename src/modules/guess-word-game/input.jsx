import React, { Component } from "react";
import { connect } from "react-redux";
import { guessWord } from "./actions";

export class UnconnectedInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentGuess: null,
    };
    this.submitGuessedWord = this.submitGuessedWord.bind(this);
  }

  submitGuessedWord(e) {
    e.preventDefault();
    const guessedWord = this.state.currentGuess;
    if (guessWord && guessWord.length > 0) {
      this.props.guessWord(guessedWord);
      this.setState({ currentGuess: "" });
    }
  }

  render() {
    return (
      <div data-test="component-input">
        {this.props.success ? null : (
          <form className="form-inline mb-2">
            <input
              data-test="input-box"
              className="mb-2 mx-sm-3"
              id="word-guess"
              type="text"
              value={this.props.currentGuess}
              onChange={(e) => this.setState({ currentGuess: e.target.value })}
              ref={this.inputBox}
              placeholder="enter guess"
            />
            <button
              data-test="submit-button"
              className="btn btn-primary mb-2"
              type="submit"
              onClick={(e) => this.submitGuessedWord(e)}
            >
              Submit
            </button>
          </form>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ success }) => {
  return { success };
};

export default connect(mapStateToProps, { guessWord })(UnconnectedInput);
