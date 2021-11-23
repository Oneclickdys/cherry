import React from 'react';
import { useAppContext } from '../../../context/AppContext';
import BlockHeader from '../../atoms/BlockHeader/BlockHeader';
import BoxCode from '../../atoms/BoxCode/BoxCode';
import Button from '../../atoms/Button/Button';
import HeaderBack from '../../components/HeaderBack/HeaderBack';
import QuizTitle from '../../components/QuizTitle/QuizTitle';
import LayoutDefault from '../../layout/LayoutDefault/LayoutDefault';
import useCode from './useCode';

const Code = () => {
  const { code, users, quiz, onStartGame } = useCode();
  const { quizCode, setQuizCode } = useAppContext();
  window.setQuizCode = (val) => setQuizCode(val);
  return (
    <LayoutDefault>
      <div className="code">
        <HeaderBack />
        <div className="code__wrapper">
          <div>context: {quizCode}</div>
          <QuizTitle title={quiz.name} subtitle={quiz.description} />
          <BoxCode>{code}</BoxCode>
          <BlockHeader>Usuarios conectados</BlockHeader>
          <ul className="user-list">
            {users.map((user) => (
              <li className="user-list__name">{user.name}</li>
            ))}
          </ul>
          <Button onClick={onStartGame}>Comenzar</Button>
        </div>
      </div>
    </LayoutDefault>
  );
};

export default Code;
