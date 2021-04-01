import React, { useContext } from "react";
import PropTypes from "prop-types";

import languageContext from "../../contexts/languageContext";
import stringModule from "../../helpers/strings";

const Congrats = (props) => {
  const language = useContext(languageContext);

  if (props.success) {
    return (
      <div
        data-test="component-congrats"
        className="alert alert-success mt-4 mb-3"
      >
        <span data-test="congrats-message">
          {stringModule.getStringByLanguage(language, "congrats")}
        </span>
      </div>
    );
  } else {
    return <div data-test="component-congrats" />;
  }
};

Congrats.propTypes = {
  success: PropTypes.bool,
};

export default Congrats;
