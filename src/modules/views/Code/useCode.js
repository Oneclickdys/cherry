import { useEffect, useState } from 'react';
import { createGame, getUsersInGame } from '../../../server/firebase';
import { getCode } from '../../../utils/general';

export default function useCode() {
  const [code, setCode] = useState('');
  const [users, setUsers] = useState([]);

  function onChangeUsers(newUsers) {
    setUsers(newUsers);
  }

  useEffect(() => {
    setTimeout(() => {
      const code = getCode().toString();
      createGame(code);
      getUsersInGame(code, onChangeUsers);
      setCode(code);
    }, 4000);
  }, []);

  return { code, users };
}
