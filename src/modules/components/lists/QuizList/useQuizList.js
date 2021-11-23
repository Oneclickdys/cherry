import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { getQuizzes } from '../../../../server/firebase';
export default function useQuizList() {
  const navigate = useNavigate();

  const [list, setList] = useState([]);

  useEffect(() => {
    requestQuizzes();
  }, []);

  async function requestQuizzes() {
    const quizzes = await getQuizzes();
    setList(quizzes);
  }

  function onClickQuiz(guid) {
    navigate(`/code/${guid}`);
  }

  return { list, onClickQuiz };
}
