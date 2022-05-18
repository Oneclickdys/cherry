import { useState } from 'react';

export default function usePlayerForm(onSubmit) {
  const [userName, serUserName] = useState('');
  const [userAvatar, setUserAvatar] = useState('');

  function onChangeUserName(newCode) {
    serUserName(newCode);
  }

  function onClickSubmit() {
    onSubmit(userName, userAvatar.id);
  }

  function onChangeSelectedAvatar(avatar) {
    setUserAvatar(avatar);
  }

  return { userName, onChangeUserName, onClickSubmit, userAvatar, onChangeSelectedAvatar };
}
