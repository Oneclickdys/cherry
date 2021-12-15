import { useState } from 'react';
import { useAppContext } from '../../../../context/AppContext';

export default function useGuestAnswers({ currentPage }) {
  const [answerStatus, setAnswerStatus] = useState('success');
  const { currentQuiz } = useAppContext();

  return { answerStatus, currentQuiz };
}
