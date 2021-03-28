import React, { Component } from "react";
import { connect } from "react-redux";
import { guessWord } from "./actions";

class Input extends Component {
  render() {
    return (
      <div data-test="component-input">
        {this.props.success ? null : (
          <form className="form-inline">
            <input
              data-test="input-box"
              ref={this.inputBox}
              className="form-control"
              id="word-guess"
              type="text"
              placeholder="enter guess"
            />
            <button
              data-test="submit-button"
              className="btn btn-primary"
              type="submit"
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

export default connect(mapStateToProps, { guessWord })(Input);
