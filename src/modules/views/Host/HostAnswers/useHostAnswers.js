import { useNavigate } from 'react-router';
import { useAppContext } from '../../../../context/AppContext';
import { putCurrentPage } from '../../../../server/firebase';
import { PAGES } from '../../../../utils/constants';

export default function useHostAnswers(currentPage) {
  const navigate = useNavigate();
  const { gameCode, currentQuiz } = useAppContext();

  function onNext() {
    console.log(currentPage.indexQuestion, 'currentPage.indexQuestion');
    putCurrentPage(gameCode, PAGES.ranking, currentQuiz.questions[currentPage.indexQuestion], currentPage.indexQuestion);
    navigate('/ranking');
  }

  return { onNext };
}
