import React, { useState } from "react";
import PropsTypes from "prop-types";

const Input = (props) => {
  const [currentGuess, setCurrentGuess] = useState("");
  const submitGuessedWord = (e) => {
    e.preventDefault();
  };

  return (
    <div data-test="component-input">
      {props.success ? null : (
        <form className="form-inline mb-2">
          <input
            data-test="input-box"
            className="mb-2 mx-sm-3"
            id="word-guess"
            type="text"
            value={currentGuess}
            onChange={(e) => setCurrentGuess(e.target.value)}
            placeholder="enter guess"
          />
          <button
            data-test="submit-button"
            className="btn btn-primary mb-2"
            type="submit"
            onClick={(e) => submitGuessedWord(e)}
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

Input.prototype = {
  secretWord: PropsTypes.string.isRequired
}

export default Input;
