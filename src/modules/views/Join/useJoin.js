import { useState } from 'react';
import { getGame } from '../../../server/firebase';

export default function useJoin() {
  const [game, setGame] = useState('');

  async function onSubmit(data) {
    const game = await getGame(data);
    setGame(game);
  }

  return { onSubmit, game };
}
