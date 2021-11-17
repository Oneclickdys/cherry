import { useState } from 'react';
import { getGame, joinGame } from '../../../server/firebase';

export default function useJoin() {
  const [game, setGame] = useState('');
  const [currentCode, setCurrentCode] = useState('');

  async function onCheckGame(data) {
    const game = await getGame(data);
    setCurrentCode(data);
    setGame(game);
  }

  async function onJoin(name) {
    try {
      await joinGame(currentCode, name);
      setGame({ ...game, status: 'joined' });
    } catch {
      console.log('error');
    }
  }

  return { onCheckGame, onJoin, game };
}
