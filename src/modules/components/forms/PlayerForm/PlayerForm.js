import React from 'react';
import Button from '../../../atoms/Button/Button';
import Input from '../../../atoms/Input/Input';
import AvatarsSelect from './AvatarsSelect/AvatarsSelect';
import usePlayerForm from './usePlayerForm';

function PlayerForm({ onSubmit, title, placeholder, buttonText, minLength = 0 }) {
  const { userName, userAvatar, onChangeUserName, onClickSubmit, onChangeSelectedAvatar } = usePlayerForm(onSubmit);

  return (
    <div className="player-form">
      <div className="player-form__wrapper">
        <div className="player-form__title">{title}</div>
        <div className="player-form__input">
          <Input placeholder={placeholder} value={userName} onChange={onChangeUserName} handleEnter={onClickSubmit} autoFocus />
        </div>
        <AvatarsSelect onChangeSelectedAvatar={onChangeSelectedAvatar} selectedAvatar={userAvatar} />
        <div className="player-form__button">
          <Button onClick={onClickSubmit} disabled={(minLength > 0 && userName.length < minLength) || !userAvatar}>
            {buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default PlayerForm;
