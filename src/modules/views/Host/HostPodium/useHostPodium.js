import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useAppContext } from '../../../../context/AppContext';
import { getGameUsers, putCurrentPage } from '../../../../server/firebase';
import { PAGES } from '../../../../utils/constants';

export default function useHostPodium() {
  const navigate = useNavigate();
  const { gameCode, currentQuiz } = useAppContext();

  console.log('currentQuiz: ', currentQuiz);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    const response = await getGameUsers(gameCode);
    setUsers(
      response.sort((a, b) => {
        return b.score - a.score;
      })
    );
  }

  async function onNext() {
    await putCurrentPage(gameCode, PAGES.home, currentQuiz.questions[0], 0);
    navigate('/');
  }

  return { users, quizName: currentQuiz.name, onNext };
}
