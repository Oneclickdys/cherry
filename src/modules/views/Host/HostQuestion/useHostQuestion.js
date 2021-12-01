import { useNavigate } from 'react-router';
import { useAppContext } from '../../../../context/AppContext';
import { putCurrentPage } from '../../../../server/firebase';
import { PAGES } from '../../../../utils/constants';

export default function useHostQuestion(currentPage) {
  const navigate = useNavigate();
  const { gameCode, currentQuiz } = useAppContext();

  function onNext() {
    navigate('/answers');
    putCurrentPage(gameCode, PAGES.answers, currentQuiz.questions[currentPage.indexQuestion], currentPage.indexQuestion);
  }

  return { onNext };
}
