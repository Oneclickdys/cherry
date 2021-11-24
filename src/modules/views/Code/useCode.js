import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { useAppContext } from '../../../context/AppContext';
import { createGame, getQuiz, getUsersInGame, putCurrentPage } from '../../../server/firebase';
import { PAGES } from '../../../utils/constants';
import { getCode } from '../../../utils/general';

export default function useCode() {
  const { quizGuid } = useParams();
  const { quizCode, setQuizCode } = useAppContext();

  const [code, setCode] = useState('');
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const [quiz, setQuiz] = useState({});

  async function getSelectedQuiz() {
    const response = await getQuiz(quizGuid);
    setQuiz(response);
  }

  function onChangeUsers(newUsers) {
    setUsers(newUsers);
  }

  function onStartGame() {
    putCurrentPage(code, PAGES.countdown);
    navigate('/countdown');
  }

  useEffect(() => {
    getSelectedQuiz();
  }, []);

  useEffect(() => {
    if (quiz.guid) {
      const code = getCode().toString();
      createGame(code, quiz);
      getUsersInGame(code, onChangeUsers);
      setCode(code);
      setQuizCode(code);
    }
  }, [quiz]);

  return { code, users, quiz, onStartGame };
}
