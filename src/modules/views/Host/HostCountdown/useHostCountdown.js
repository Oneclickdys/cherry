import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useAppContext } from '../../../../context/AppContext';
import { putCurrentPage } from '../../../../server/firebase';
import { PAGES } from '../../../../utils/constants';

export default function useHostCountdown() {
  const navigate = useNavigate();
  const { gameCode, currentQuiz } = useAppContext();
  useEffect(() => {
    setTimeout(() => {
      finishCountdown();
    }, 4000);
  }, []);

  function finishCountdown() {
    console.log('finishCountdown', currentQuiz);
    putCurrentPage(gameCode, PAGES.statement, currentQuiz.questions[0], 0);
    navigate('/statement');
  }

  return {};
}
