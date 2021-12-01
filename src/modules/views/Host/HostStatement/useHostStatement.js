import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useAppContext } from '../../../../context/AppContext';
import { putCurrentPage } from '../../../../server/firebase';
import { PAGES } from '../../../../utils/constants';
import { calculateAverageTimeToReadStatement, percentage, stripHtml } from '../../../../utils/general';

export default function useHostStatement(currentPage) {
  let navigate = useNavigate();

  const [statement, setStatement] = useState('');
  const [timeToRead, setTimeToRead] = useState(null);
  const [actualSecond, setActualSecond] = useState(0);
  const [progress, setProgress] = useState(0);

  const { gameCode, currentQuiz } = useAppContext();

  useEffect(() => {
    putStatement();
  }, []);

  useEffect(() => {
    setTimeToRead(calculateAverageTimeToReadStatement(statement));
  }, [statement]);

  useEffect(() => {
    const timer = actualSecond < timeToRead && setInterval(() => setActualSecond(actualSecond + 1), 1000);
    return () => clearInterval(timer);
  }, [timeToRead, actualSecond]);

  useEffect(() => {
    setProgress(percentage(actualSecond, timeToRead));

    if (actualSecond === timeToRead) {
      setTimeout(() => {
        if (actualSecond === timeToRead) goQuestion(currentPage);
      }, 1000);
    }
  }, [actualSecond]);

  function putStatement() {
    setStatement(stripHtml(currentPage?.currentQuestion?.data?.stimulus));
  }

  async function goQuestion(page) {
    await putCurrentPage(gameCode, PAGES.question, currentQuiz.questions[page.indexQuestion], page.indexQuestion);
    navigate(`/question`);
  }

  return { statement, progress };
}
