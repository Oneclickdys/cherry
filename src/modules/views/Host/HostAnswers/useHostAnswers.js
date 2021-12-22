import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useAppContext } from '../../../../context/AppContext';
import { getGameUsers, getUserAnswerForActualQuestion, putCurrentPage } from '../../../../server/firebase';
import { PAGES } from '../../../../utils/constants';

export default function useHostAnswers({ currentPage }) {
  console.log('currentPage: ', currentPage);
  const navigate = useNavigate();
  const { gameCode, currentQuiz } = useAppContext();

  const [groupedAnswers, setGroupedAnswers] = useState([]);

  useEffect(() => {
    calculateBars();
  }, []);

  async function calculateBars() {
    const question = currentPage.currentQuestion.data;
    const answers = await getUserAnswerForActualQuestion(gameCode, currentPage.currentQuestion.reference);
    //console.log('answers: ', answers);
    const players = await getGameUsers(gameCode);
    console.log('players: ', players);
    const validAnswer = question.validation.valid_response.value[0];
    //console.log('validAnswer: ', validAnswer);

    setGroupedAnswers(
      question.options.map((option) => {
        return {
          count: calculateBarHeight(option.value, answers, players),
          correct: option.value === validAnswer,
        };
      })
    );
  }

  function calculateBarHeight(option, answers, players) {
    console.log('option: ', option);
    const answerInThisOptions = answers.filter((answer) => answer.userResponseId === option);
    console.log('answerInThisOptions: ', answerInThisOptions);
    if (answerInThisOptions.length === 0) return 0;
    return (answerInThisOptions.length * 100) / players.length;
  }

  async function onNext() {
    console.log(currentPage.indexQuestion, 'currentPage.indexQuestion');
    await putCurrentPage(gameCode, PAGES.ranking, currentQuiz.questions[currentPage.indexQuestion], currentPage.indexQuestion);
    navigate('/ranking');
  }

  return { currentQuiz, groupedAnswers, onNext };
}
