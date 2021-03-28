import React, { Component } from "react";
import { connect } from "react-redux";
import { guessWord } from "./actions";

export class UnconnectedInput extends Component {
  render() {
    return (
      <div data-test="component-input">
        {this.props.success ? null : (
          <form className="form-inline">
            <input
              data-test="input-box"
              ref={this.inputBox}
              className="mb-2 mx-sm-3"
              id="word-guess"
              type="text"
              placeholder="enter guess"
            />
            <button
              data-test="submit-button"
              className="btn btn-primary mb-2"
              type="submit"
              onClick={() => this.props.guessWord("train")}
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
