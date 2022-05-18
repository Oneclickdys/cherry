import PropTypes from 'prop-types';
import React from 'react';
import Button from '../../../atoms/Button/Button';
import Input from '../../../atoms/Input/Input';
import useJoinForm from './useJoinForm';

function JoinForm({ onSubmit, title, placeholder, buttonText, minLength = 0 }) {
  const { code, onChangeCode, onClickSubmit } = useJoinForm(onSubmit);

  return (
    <div className='join-form'>
      <div className='join-form__wrapper'>
        <div className='join-form__title'>{title}</div>
        <div className='join-form__input'>
          <Input placeholder={placeholder} value={code} onChange={onChangeCode} handleEnter={onClickSubmit} autoFocus />
        </div>
        <div className='join-form__button'>
          <Button onClick={onClickSubmit} disabled={minLength > 0 && code.length < minLength}>
            {buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
}

JoinForm.propTypes = {
  code: PropTypes.string,
  onChangeCode: PropTypes.func,
  onClickSubmit: PropTypes.func,
  title: PropTypes.string,
  buttonText: PropTypes.string,
};

JoinForm.defaultProps = {
  code: null,
  onChangeCode: () => {
  },
  onClickSubmit: () => {
  },
  title: 'Title of the form',
  placeholder: 'Write here...',
  buttonText: 'Click me!',
};

export default JoinForm;
