import React from 'react';
import { useAppContext } from '../../../context/AppContext';
import BlockHeader from '../../atoms/BlockHeader/BlockHeader';
import BoxCode from '../../atoms/BoxCode/BoxCode';
import Button from '../../atoms/Button/Button';
import VerticalCenterLayout from '../../atoms/VerticalCenterLayout/VerticalCenterLayout';
import QuizTitle from '../../components/QuizTitle/QuizTitle';
import useCode from './useCode';

const data = {
  quizTitle: 'Título del quiz',
  quizSubtitle: 'Breve descripción del tema de este quiz',
  listHeader: 'Usuarios conectados',
  buttonText: 'Comenzar',
};

const Code = () => {
  const { code, users, onStartGame } = useCode();
  const { quizCode, setQuizCode } = useAppContext();
  window.setQuizCode = (val) => setQuizCode(val);
  setQuizCode(code);
  return (
    <VerticalCenterLayout>
      <div className="align-center">
        <div>context: {quizCode}</div>
        <QuizTitle title={data.quizTitle} subtitle={data.quizSubtitle} />
        <BoxCode>{code}</BoxCode>
        <BlockHeader>{data.listHeader}</BlockHeader>
        <ul className="user-list">
          {users.map((user) => (
            <li className="user-list__name">{user.name}</li>
          ))}
        </ul>
        <Button onClick={onStartGame}>Comenzar</Button>
      </div>
    </VerticalCenterLayout>
  );
};

export default Code;
