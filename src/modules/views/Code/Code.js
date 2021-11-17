import React from 'react';
import useCode from './useCode';

const Code = () => {
  const { code, users, onStartGame } = useCode();
  return (
    <div>
      {code} {users.map((user) => user.name)}
    </div>
  );
};

export default Code;
