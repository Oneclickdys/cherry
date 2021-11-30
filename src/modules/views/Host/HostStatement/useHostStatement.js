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

  const goQuestion = (page) => {
    putCurrentPage(gameCode, PAGES.question, currentQuiz.questions[page.indexQuestion], page.indexQuestion);
    navigate(`/question`);
  };

  async function getCurrentPage() {
    const page = await getOnceCurrentPage(gameCode);
    setCurrentPage(page);
    setTimeout(() => {
      goQuestion(page);
    }, 4000);
  }

  return { currentPage };
}
