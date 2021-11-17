import { useEffect, useState } from 'react';
import { createGame, getUsersInGame, putCurrentPage } from '../../../server/firebase';
import { PAGES } from '../../../utils/constants';
import { getCode } from '../../../utils/general';

export default function useCode() {
  const [code, setCode] = useState('');
  const [users, setUsers] = useState([]);

  function onChangeUsers(newUsers) {
    setUsers(newUsers);
  }

  function onStartGame() {
    putCurrentPage(code, PAGES.countdown);
  }

  useEffect(() => {
    setTimeout(() => {
      const code = getCode().toString();
      createGame(code);
      getUsersInGame(code, onChangeUsers);
      setCode(code);
    }, 4000);
  }, []);

  return { code, users, onStartGame };
}
