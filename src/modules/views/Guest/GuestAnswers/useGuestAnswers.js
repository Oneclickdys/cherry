import { useEffect, useState } from 'react';
import { useAppContext } from '../../../../context/AppContext';
import { createAudio, getFailAudio, getSuccessAudio, playAudio } from '../../../../utils/utilsAudio';

export default function useGuestAnswers({ currentPage }) {
  const [answerStatus, setAnswerStatus] = useState(null);
  const { currentQuiz, lastPlayerResponse } = useAppContext();
  console.log('currentPage: ', currentPage);
  console.log('lastPlayerResponse: ', lastPlayerResponse);

  useEffect(() => {
    const status = lastPlayerResponse.isCorrect ? 'success' : 'fail';
    playSound(status);
    setAnswerStatus(status);
  }, [lastPlayerResponse]);

  function playSound(status) {
    let newAudioPlayer = createAudio(status === 'success' ? getSuccessAudio() : getFailAudio());
    playAudio(newAudioPlayer);
  }

  return { answerStatus, currentQuiz };
}
