import PropTypes from "prop-types";
import React from "react";

const Input = ({ label, placeholder, value, onChange, disabled }) => {
  return (
    <div className="input">
      {label && <label className="input__label">{label}</label>}
      <div className="input__container">
        <input
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          value={value}
        />
      </div>
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};

Input.defaultProps = {
  placeholder: "Write here...",
  onChange: () => {},
  disabled: false,
};

export default Input;
