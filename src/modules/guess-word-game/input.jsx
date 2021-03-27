import React, { Component } from "react";
import { connect } from "react-redux";

class Input extends Component {
  render() {
    return (
      <div data-test="component-input">
        {this.props.success ? null : (
          <form>
            <input
              data-test="input-box"
              type="text"
              placeholder="enter guess"
            />
            <button data-test="submit-button" type="submit">
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

export default Input;
// export default connect(mapStateToProps)(Input);
