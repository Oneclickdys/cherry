import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useAppContext } from '../../../../context/AppContext';
import { getUserAnswerForActualQuestion, putCurrentPage } from '../../../../server/firebase';
import { PAGES } from '../../../../utils/constants';

export default function useHostAnswers({ currentPage }) {
  console.log('currentPage: ', currentPage);
  const navigate = useNavigate();
  const { gameCode, currentQuiz } = useAppContext();

  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    getAnswers();
  });

  async function getAnswers() {
    const response = await getUserAnswerForActualQuestion(gameCode, currentPage.currentQuestion.reference);
    console.log('answers resposne: ', response);
  }

  async function onNext() {
    console.log(currentPage.indexQuestion, 'currentPage.indexQuestion');
    await putCurrentPage(gameCode, PAGES.ranking, currentQuiz.questions[currentPage.indexQuestion], currentPage.indexQuestion);
    navigate('/ranking');
  }

  return { currentQuiz, onNext };
}
