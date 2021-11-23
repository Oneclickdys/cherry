import React from 'react';
import HeaderBack from '../../components/HeaderBack/HeaderBack';
import QuizList from '../../components/lists/QuizList/QuizList';
import LayoutDefault from '../../layout/LayoutDefault/LayoutDefault';

const Create = () => {
  return (
    <LayoutDefault>
      <div className="create">
        <HeaderBack />
        <div className="create__list">
          <div className="create__list-title">Selecciona un quiz</div>
          <QuizList />
        </div>
      </div>
    </LayoutDefault>
  );
};

export default Create;
