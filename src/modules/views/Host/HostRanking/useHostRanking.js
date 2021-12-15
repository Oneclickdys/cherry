import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useAppContext } from '../../../../context/AppContext';
import { getGameUsers, putCurrentPage } from '../../../../server/firebase';
import { PAGES } from '../../../../utils/constants';

export default function useHostRanking(currentPage) {
  const navigate = useNavigate();
  const { gameCode, currentQuiz } = useAppContext();

  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  async function onNext() {
    let nextPage = PAGES.statement;
    let nextIndex = parseInt(currentPage.indexQuestion + 1);

    console.log(currentQuiz, currentPage, 'currentQuizcurrentQuizcurrentQuiz');
    if (currentQuiz.questions.length <= nextIndex) {
      nextPage = PAGES.podium;
      nextIndex = 0;
    }
    await putCurrentPage(gameCode, nextPage, nextIndex ? currentQuiz.questions[nextIndex] : {}, nextIndex);
    navigate(`/${nextPage}`);
  }

  async function getUsers() {
    const response = await getGameUsers(gameCode);
    setUsers(response);
  }

  return { users, onNext };
}
