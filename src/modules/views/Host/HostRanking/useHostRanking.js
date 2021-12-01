import { useNavigate } from 'react-router';
import { useAppContext } from '../../../../context/AppContext';
import { putCurrentPage } from '../../../../server/firebase';
import { PAGES } from '../../../../utils/constants';

export default function useHostRanking(currentPage) {
  const navigate = useNavigate();
  const { gameCode, currentQuiz } = useAppContext();

  function onNext() {
    let nextPage = PAGES.statement;
    debugger;
    let nextIndex = parseInt(currentPage.indexQuestion + 1);

    console.log(currentQuiz, currentPage, 'currentQuizcurrentQuizcurrentQuiz');
    if (currentQuiz.questions.length < currentPage.indexQuestion) {
      nextPage = PAGES.podium;
      nextIndex = 0;
    }
    debugger;
    putCurrentPage(gameCode, nextPage, nextIndex ? currentQuiz.questions[nextIndex] : {}, nextIndex);
    navigate(`/${nextPage}`);
  }

  return { onNext };
}
