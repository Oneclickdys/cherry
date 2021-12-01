import React from 'react';
import BlockHeader from '../../atoms/BlockHeader/BlockHeader';
import BoxCode from '../../atoms/BoxCode/BoxCode';
import Button from '../../atoms/Button/Button';
import HeaderBack from '../../components/HeaderBack/HeaderBack';
import UsersList from '../../components/lists/UsersList/UsersList';
import QuizTitle from '../../components/QuizTitle/QuizTitle';
import LayoutDefault from '../../layout/LayoutDefault/LayoutDefault';
import useCode from './useCode';

const Code = ({ onListenerChangePage }) => {
  const { gameCode, users, currentQuiz, onStartGame } = useCode(onListenerChangePage);
  return (
    <LayoutDefault>
      <div className="code">
        <HeaderBack />
        <div className="code__wrapper">
          <QuizTitle title={currentQuiz.name} subtitle={currentQuiz.description} />
          <BoxCode>{gameCode}</BoxCode>
          <BlockHeader>Usuarios conectados</BlockHeader>
          <UsersList users={users} />
          <Button onClick={onStartGame}>Comenzar</Button>
        </div>
      </div>
    </LayoutDefault>
  );
};

export default Code;
