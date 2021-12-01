import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useAppContext } from '../../../../context/AppContext';
import { getOnceCurrentPage, putCurrentPage } from '../../../../server/firebase';
import { PAGES } from '../../../../utils/constants';
import { calculateAverageTimeToReadStatement, percentage, stripHtml } from '../../../../utils/general';

export default function useHostStatement() {
  let navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(null);
  const [statement, setStatement] = useState('');
  const [timeToRead, setTimeToRead] = useState(null);
  const [actualSecond, setActualSecond] = useState(0);
  const [progress, setProgress] = useState(0);

  const { gameCode, currentQuiz } = useAppContext();

  useEffect(() => {
    getCurrentPage();
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

  async function getCurrentPage() {
    const page = await getOnceCurrentPage(gameCode);
    setCurrentPage(page);
    setStatement(stripHtml(page?.currentQuestion?.data?.stimulus));
  }

  function goQuestion(page) {
    putCurrentPage(gameCode, PAGES.question, currentQuiz.questions[page.indexQuestion], page.indexQuestion);
    navigate(`/question`);
  }

  return { statement, progress };
}
