import React from 'react';
import { getAvatarById } from '../../../utils/player';
import Avatar from '../Avatar/Avatar';

const UserInfo = ({ user }) => {
  return (
    <div className="user-info">
      <Avatar image={getAvatarById(user.avatarId).path} />
      <span className="user-info__name">{user.name}</span>
    </div>
  );
};

export default UserInfo;
