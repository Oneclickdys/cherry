import { useNavigate } from 'react-router';
import { useAppContext } from '../../../../context/AppContext';
import { putCurrentPage } from '../../../../server/firebase';
import { PAGES } from '../../../../utils/constants';

export default function useHostAnswers() {
  const navigate = useNavigate();
  const { gameCode, currentQuiz } = useAppContext();

  function onNext() {
    navigate('/ranking');
    putCurrentPage(gameCode, PAGES.ranking, currentQuiz.questions[0], 0);
  }

  return { onNext };
}
