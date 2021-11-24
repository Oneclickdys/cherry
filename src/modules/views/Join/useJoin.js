import { useState } from 'react';
import { useAppContext } from '../../../context/AppContext';
import { getGame, joinGame } from '../../../server/firebase';

export default function useJoin(join) {
  const [game, setGame] = useState('');
  const [currentCode, setCurrentCode] = useState('');
  const { setGameCode } = useAppContext();

  async function onCheckGame(data) {
    const game = await getGame(data);
    setCurrentCode(data);
    setGame(game);
  }

  async function onJoin(name) {
    try {
      await joinGame(currentCode, name);
      setGameCode(currentCode);
      setGame({ ...game, status: 'joined' });
      join(currentCode);
    } catch (e) {
      console.log('error', e);
    }
  }

  return { onCheckGame, onJoin, game };
}
