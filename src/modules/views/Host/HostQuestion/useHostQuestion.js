import { useNavigate } from 'react-router';
import { useAppContext } from '../../../../context/AppContext';
import { putCurrentPage } from '../../../../server/firebase';
import { PAGES } from '../../../../utils/constants';

export default function useHostQuestion(currentPage) {
  const navigate = useNavigate();
  const { gameCode, currentQuiz } = useAppContext();

  async function onNext() {
    await putCurrentPage(gameCode, PAGES.answers, currentQuiz.questions[currentPage.indexQuestion], currentPage.indexQuestion);
    navigate('/answers');
  }

  return { onNext };
}
