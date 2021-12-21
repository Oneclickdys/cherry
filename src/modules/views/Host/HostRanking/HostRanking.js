import clsx from 'clsx';
import React from 'react';
import Button from '../../../atoms/Button/Button';
import HostHeader from '../../../components/HostHeader/HostHeader';
import useHostRanking from './useHostRanking';

const HostRanking = ({ currentPage }) => {
  const { currentQuiz, users, onNext } = useHostRanking(currentPage);

  return (
    <div className="host-ranking">
      <div className="host-question__header">
        <HostHeader currentQuestion={currentPage.indexQuestion + 1} totalQuestions={currentQuiz.questions.length} />
      </div>
      <div className="host-ranking__wrapper">
        <div className="host-ranking__title">Ranking</div>
        <div className="host-ranking__ranking">
          {users.map((user, idx) => {
            return (
              <div
                key={idx}
                className={clsx('host-ranking__user', {
                  'host-ranking__user--first': idx === 0,
                })}
              >
                <div className="host-ranking__user-name">{user.name}</div>
                <div className="host-ranking__user-score">{user.score}</div>
              </div>
            );
          })}
        </div>
        <div className="host-ranking__next">
          <Button onClick={onNext}>Continuar</Button>
        </div>
      </div>
    </div>
  );
};

export default HostRanking;
