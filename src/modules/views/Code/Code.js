import React from 'react';
import useCode from './useCode';
import QuizTitle from '../../components/QuizTitle/QuizTitle';
import BoxCode from '../../atoms/BoxCode/BoxCode';
import BlockHeader from '../../atoms/BlockHeader/BlockHeader';
import VerticalCenterLayout from '../../atoms/VerticalCenterLayout/VerticalCenterLayout';
import Button from '../../atoms/Button/Button';
import './_code.scss';

const data = {
  quizTitle: 'Título del quiz',
  quizSubtitle: 'Breve descripción del tema de este quiz',
  listHeader: 'Usuarios conectados',
  buttonText: 'Comenzar',
};

const Code = () => {
  const { code, users, onStartGame } = useCode();
  return (
    <VerticalCenterLayout>
      <div className='align-center'>
        <QuizTitle title={data.quizTitle} subtitle={data.quizSubtitle} />
        <BoxCode>{code}</BoxCode>
        <BlockHeader>{data.listHeader}</BlockHeader>
        <ul className='user-list'>
          {users.map((user) =>
            <li className='user-list__name'>{user.name}</li>,
          )}
        </ul>
        <Button>Comenzar</Button>
      </div>
    </VerticalCenterLayout>
  );
};

export default Code;
