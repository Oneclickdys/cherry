import React, { useEffect } from 'react';
import { useAppContext } from '../../../../context/AppContext';
import useHostStatement from './useHostStatement';

const HostStatement = () => {
  const { currentPage, goQuestion } = useHostStatement();
  const { gameCode, currentQuiz } = useAppContext();

  useEffect(() => {
    setTimeout(() => {
      goQuestion();
    }, 4000);
  }, []);

  return <div>{currentPage?.currentQuestion?.statement}</div>;
};

export default HostStatement;
