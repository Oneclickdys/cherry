import React from 'react';
import Button from '../../../atoms/Button/Button';
import HostHeader from '../../../components/HostHeader/HostHeader';
import BarStats from '../../../components/stats/BarStats/BarStats';
import useHostAnswers from './useHostAnswers';

function HostAnswers({ currentPage }) {
  console.log(currentPage, 'currentPage');
  const { currentQuiz, groupedAnswers, onNext } = useHostAnswers({ currentPage });
  return (
    <div className="host-answers">
      <div className="host-question__header">
        <HostHeader currentQuestion={currentPage.indexQuestion + 1} totalQuestions={currentQuiz.questions.length} />
      </div>
      <div className="host-answers__wrapper">
        <div className="host-answers__title">Estadísticas</div>
        <div className="host-answers__bars">
          <BarStats agroupAnswers={groupedAnswers} />
        </div>
        <div className="host-answers__next">
          <Button onClick={onNext}>Continuar</Button>
        </div>
      </div>
    </div>
  );
}

export default HostAnswers;
