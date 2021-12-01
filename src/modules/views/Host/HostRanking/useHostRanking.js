import { useNavigate } from 'react-router';
import { useAppContext } from '../../../../context/AppContext';
import { putCurrentPage } from '../../../../server/firebase';
import { PAGES } from '../../../../utils/constants';

export default function useHostRanking() {
  const navigate = useNavigate();
  const { gameCode, currentQuiz } = useAppContext();

  function onNext() {
    navigate('/podium');
    putCurrentPage(gameCode, PAGES.podium, currentQuiz.questions[0], 0);
  }

  return { onNext };
}
