import React from 'react';
import { AvatarsPlayer } from '../../../../../utils/player';
import Avatar from '../../../../atoms/Avatar/Avatar';

const AvatarsSelect = ({ label, onChangeSelectedAvatar, selectedAvatar }) => {
  return (
    <div className="avatars-selectt">
      {label && <label className="input__label">{label}</label>}
      <div className="avatars-select__list">
        {AvatarsPlayer.map((avatar) => (
          <div
            className={`avatars-select__avatar avatars-select__avatar--${avatar.id === selectedAvatar.id ? 'selected' : 'default'}`}
            onClick={() => onChangeSelectedAvatar(avatar)}
            key={avatar.id}
          >
            <Avatar image={avatar.path} size="xl" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvatarsSelect;
