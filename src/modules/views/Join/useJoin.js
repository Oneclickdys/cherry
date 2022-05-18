import { useState } from 'react';
import { useAppContext } from '../../../context/AppContext';
import { getGame, getQuiz, joinGame } from '../../../server/firebase';

export default function useJoin(join) {
  const [game, setGame] = useState('');
  const [currentCode, setCurrentCode] = useState('');
  const { setGameCode, setCurrentQuiz, setUserId } = useAppContext();

  async function onCheckGame(data) {
    const game = await getGame(data);
    setCurrentCode(data);
    setGame(game);
  }

  async function onJoin(name) {
    console.log('onJoin', name);
    try {
      const userId = await joinGame(currentCode, name);
      const game = await getGame(currentCode);
      const quizz = await getQuiz(game.quiz.guid);
      setCurrentQuiz(quizz);
      setGameCode(currentCode);
      setGame({ ...game, status: 'joined' });
      join(currentCode, userId);
    } catch (e) {
      console.log('error', e);
    }
  }

  return { onCheckGame, onJoin, game };
}
