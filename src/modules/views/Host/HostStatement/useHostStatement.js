import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useAppContext } from '../../../../context/AppContext';
import { getOnceCurrentPage, putCurrentPage } from '../../../../server/firebase';
import { PAGES } from '../../../../utils/constants';

export default function useHostStatement() {
  const [currentPage, setCurrentPage] = useState(null);
  const { gameCode, currentQuiz } = useAppContext();
  let navigate = useNavigate();

  useEffect(() => {
    getCurrentPage();
  }, []);

  function goQuestion() {
    putCurrentPage(gameCode, PAGES.question, currentQuiz.questions[currentPage.indexQuestion], currentPage.indexQuestion);
    navigate(`/question`);
  }

  async function getCurrentPage() {
    setCurrentPage(await getOnceCurrentPage(gameCode));
  }

  return { currentPage, goQuestion };
}
