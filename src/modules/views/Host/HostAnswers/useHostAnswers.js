import { useNavigate } from 'react-router';
import { useAppContext } from '../../../../context/AppContext';
import { putCurrentPage } from '../../../../server/firebase';
import { PAGES } from '../../../../utils/constants';

export default function useHostAnswers(currentPage) {
  const navigate = useNavigate();
  const { gameCode, currentQuiz } = useAppContext();

  async function onNext() {
    console.log(currentPage.indexQuestion, 'currentPage.indexQuestion');
    await putCurrentPage(gameCode, PAGES.ranking, currentQuiz.questions[currentPage.indexQuestion], currentPage.indexQuestion);
    navigate('/ranking');
  }

  return { currentQuiz, onNext };
}
