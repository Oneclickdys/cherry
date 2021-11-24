import React from 'react';
import HeaderBack from '../../components/HeaderBack/HeaderBack';
import QuizList from '../../components/lists/QuizList/QuizList';
import useQuizList from '../../components/lists/QuizList/useQuizList';
import LayoutDefault from '../../layout/LayoutDefault/LayoutDefault';

const Create = () => {
  const { list, onClickQuiz } = useQuizList();
  return (
    <LayoutDefault>
      <div className="create">
        <HeaderBack />
        <div className="create__list">
          <div className="create__list-title">Selecciona un quiz</div>
          <QuizList list={list} onClickQuiz={onClickQuiz} />
        </div>
      </div>
    </LayoutDefault>
  );
};

export default Create;
