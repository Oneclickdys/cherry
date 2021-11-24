import React from 'react';
import { useAppContext } from '../../../context/AppContext';
import BlockHeader from '../../atoms/BlockHeader/BlockHeader';
import BoxCode from '../../atoms/BoxCode/BoxCode';
import Button from '../../atoms/Button/Button';
import HeaderBack from '../../components/HeaderBack/HeaderBack';
import UsersList from '../../components/lists/UsersList/UsersList';
import QuizTitle from '../../components/QuizTitle/QuizTitle';
import LayoutDefault from '../../layout/LayoutDefault/LayoutDefault';
import useCode from './useCode';

const Code = () => {
  const { code, users, quiz, onStartGame } = useCode();
  const { quizCode, setQuizCode } = useAppContext();
  window.setQuizCode = (val) => setQuizCode(val);
  setQuizCode(code);
  return (
    <LayoutDefault>
      <div className="code">
        <HeaderBack />
        <div className="code__wrapper">
          <QuizTitle title={quiz.name} subtitle={quiz.description} />
          <BoxCode>{code}</BoxCode>
          <BlockHeader>Usuarios conectados</BlockHeader>
          <UsersList users={users} />
          <Button onClick={onStartGame} disabled={users.length === 0}>
            Comenzar
          </Button>
        </div>
      </div>
    </LayoutDefault>
  );
};

export default Code;
