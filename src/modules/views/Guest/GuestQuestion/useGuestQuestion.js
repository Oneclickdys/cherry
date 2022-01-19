import { useCallback, useEffect, useRef, useState } from 'react';
import { useAppContext } from '../../../../context/AppContext';
import { addAnswer, updateTotalUserScore } from '../../../../server/firebase';

export default function useGuestQuestion({ currentPage }) {
  const { gameCode, user, currentQuiz, setLastPlayerResponse } = useAppContext();
  const [isAnswered, setIsAnswered] = useState(false);
  const timer = useRef();
  // console.log('user: ', user);

  const handleResponse = useCallback(
    (userResponse) => {
      const responseTime = getResponseTime(timer.current);
      // enviar la respuesta y tiempo al servidor

      sendAnswer(userResponse[0], responseTime);
      setIsAnswered(true);
    },
    [setIsAnswered, sendAnswer]
  );

  async function sendAnswer(userResponse, time) {
    const { data, reference: questionId } = currentPage.currentQuestion;
    const correctAnswer = data.validation.valid_response.value[0];
    let score = 0;
    if (correctAnswer === userResponse) {
      score = parseInt(1000 - time / 10);
    }

    const payload = {
      questionId,
      userId: user.id,
      userResponseId: userResponse,
      score,
      time: time / 1000,
      isCorrect: correctAnswer === userResponse,
    };

    console.log('ANSWER PAYLOAD: ', payload);
    setLastPlayerResponse(payload);
    await addAnswer(gameCode, payload);
    await updateTotalUserScore(gameCode, user.id, user.name, user.score + score);
  }

  useEffect(() => {
    timer.current = new Date();
  }, []);

  return {
    currentQuiz,
    isAnswered,
    handleResponse,
    user
  };
}

// calcula el tiempo transcurrido hasta que el usuario responde
function getResponseTime(initialTime) {
  const actualDate = new Date();
  return Math.abs(initialTime - actualDate);
}
