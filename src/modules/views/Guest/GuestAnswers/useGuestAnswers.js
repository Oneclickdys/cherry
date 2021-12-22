import { useEffect, useState } from 'react';
import { useAppContext } from '../../../../context/AppContext';

export default function useGuestAnswers({ currentPage }) {
  const [answerStatus, setAnswerStatus] = useState(null);
  const { currentQuiz, lastPlayerResponse } = useAppContext();
  console.log('currentPage: ', currentPage);
  console.log('lastPlayerResponse: ', lastPlayerResponse);

  useEffect(() => {
    return setAnswerStatus(lastPlayerResponse.isCorrect ? 'success' : 'fail');
  }, [lastPlayerResponse]);

  return { answerStatus, currentQuiz };
}
