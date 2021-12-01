import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { useAppContext } from '../../../context/AppContext';
import { createGame, getQuiz, getUsersInGame, putCurrentPage } from '../../../server/firebase';
import { PAGES } from '../../../utils/constants';
import { getCode } from '../../../utils/general';

export default function useCode(onListenerChangePage) {
  const { quizGuid } = useParams();
  const { gameCode, setGameCode, currentQuiz, setCurrentQuiz } = useAppContext();

  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  async function getSelectedQuiz() {
    const response = await getQuiz(quizGuid);
    setCurrentQuiz(response);
  }

  function onChangeUsers(newUsers) {
    setUsers(newUsers);
  }

  async function onStartGame() {
    await putCurrentPage(gameCode, PAGES.countdown);
    navigate('/countdown');
  }

  useEffect(() => {
    getSelectedQuiz();
  }, []);

  useEffect(() => {
    if (currentQuiz.guid) {
      const code = getCode().toString();
      createGame(code, currentQuiz);
      getUsersInGame(code, onChangeUsers);
      setGameCode(code);
      onListenerChangePage(code);
    }
  }, [currentQuiz]);

  return { gameCode, users, currentQuiz, onStartGame };
}
