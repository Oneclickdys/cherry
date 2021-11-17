import { useState } from 'react';
import { quizzesMock } from '../../../../mocks/quizzes';

export default function useQuizList() {
  const [list, setList] = useState(quizzesMock);

  function onClickQuiz(guid) {
    console.log('onClickQuiz: ', guid);
  }

  return { list, onClickQuiz };
}
