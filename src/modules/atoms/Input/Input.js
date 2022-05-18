import PropTypes from 'prop-types';
import React, { useEffect, useRef } from 'react';

const Input = ({ label, placeholder, value, onChange, handleEnter, disabled, autoFocus }) => {
  const input = useRef();

  function submitOnEnter(e) {
    if (e.keyCode === 13 && handleEnter) {
      handleEnter();
      input.current.blur();
    }
  }

  useEffect(() => {
    if (autoFocus) setTimeout(() => input.current.focus(), 100);
  }, []);

  return (
    <div className='input'>
      {label && <label className='input__label'>{label}</label>}
      <div className='input__container'>
        <input
          ref={input}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={submitOnEnter}
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
  placeholder: 'Write here...',
  onChange: () => {
  },
  disabled: false,
};

export default Input;
