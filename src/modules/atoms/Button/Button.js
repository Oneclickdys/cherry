import PropTypes from "prop-types";
import React from "react";

const Button = ({ onClick, children, loading, disabled }) => {
  return (
    <button
      aria-label="Button"
      className="button"
      onClick={onClick}
      disabled={disabled}
    >
      {loading ? (
        <div className="button__loading">Loading...</div>
      ) : (
        <div className="button__content">{children}</div>
      )}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  onClick: function () {},
  text: "Click me!",
  loading: false,
  disabled: false,
};

export default Button;
