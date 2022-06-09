import { useEffect, useRef, useState } from 'react';
import { useAppContext } from '../../../context/AppContext';
import { getGame, getQuiz, joinGame } from '../../../server/firebase';
import { createAudio, getBackgroundAudio, playAudio, stopAudio } from '../../../utils/utilsAudio';

export default function useJoin(join) {
  const [game, setGame] = useState('');
  const [currentCode, setCurrentCode] = useState('');
  const { setGameCode, setCurrentQuiz, setUserId } = useAppContext();
  const audioPlayerRef = useRef(null);

  useEffect(() => {
    return () => {
      stopAudio(audioPlayerRef.current);
    };
  }, []);

  async function onCheckGame(data) {
    const game = await getGame(data);
    setCurrentCode(data);
    setGame(game);
  }

  async function onJoin(name, avatar) {
    console.log('onJoin', name, avatar);
    try {
      const userId = await joinGame(currentCode, name, avatar);
      const game = await getGame(currentCode);
      const quizz = await getQuiz(game.quiz.guid);
      setCurrentQuiz(quizz);
      setGameCode(currentCode);
      setGame({ ...game, status: 'joined' });
      join(currentCode, userId);
      playBackground();
    } catch (e) {
      console.log('error', e);
    }
  }

  function playBackground() {
    let newAudioPlayer = createAudio(getBackgroundAudio());
    playAudio(newAudioPlayer);
    audioPlayerRef.current = newAudioPlayer;
  }

  return { onCheckGame, onJoin, game };
}
