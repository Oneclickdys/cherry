import { useCallback } from 'react';
import { useLemonadeQuestion } from 'react-lemonade-editor';
import { useNavigate } from 'react-router';
import { useAppContext } from '../../../../context/AppContext';
import { putCurrentPage } from '../../../../server/firebase';
import addQuestionStyle from '../../../../utils/addQuestionStyle';
import { DEVMODE } from '../../../../utils/config';
import { PAGES } from '../../../../utils/constants';
import getTestData from './util/testData';

export default function useHostQuestion(currentPage) {
  const devMode = DEVMODE;

  const navigate = useNavigate();
  const { gameCode, currentQuiz } = useAppContext();

  // al usar devMode usa datos dummy en vez de los reales
  // para poder refrescar la página sin que de un error
  const data = devMode ? getTestData() : currentPage;

  // modifica los datos para establecer el modo 2 columnas
  // para las opciones de respuesta de usuario
  const questionData = addQuestionStyle(data.currentQuestion);

  const onNext = useCallback(async () => {
    await putCurrentPage(gameCode, PAGES.answers, currentQuiz.questions[currentPage.indexQuestion], currentPage.indexQuestion);
    navigate('/answers');
  }, [currentPage, currentQuiz, navigate, gameCode]);

  // crea lemonade
  const { exercise } = useLemonadeQuestion({ data: questionData });

  const onComplete = useCallback(() => {
    onNext();
  }, [onNext]);

  return { currentQuiz, onComplete, Question: exercise.Question };
}
