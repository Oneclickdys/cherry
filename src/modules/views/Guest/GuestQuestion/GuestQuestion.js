import React from 'react';
import BlockBar from '../../../atoms/BlockBar/BlockBar';
import QuestionCounter from '../../../atoms/QuestionCounter/QuestionCounter';
import GuestFooter from '../../../components/GuestFooter/GuestFooter';
import GuestControls from './components/GuestControls/GuestControls';
import WaitingForCompleteActivity from './components/WaitingForCompleteActivity/WaitingForCompleteActivity';
import useGuestQuestion from './useGuestQuestion';

function GuestQuestion({ currentPage }) {
  const { currentQuiz, isAnswered, handleResponse } = useGuestQuestion({ currentPage });

  return (
    <div className="guest-question">
      <div className="guest-question__header">
        <BlockBar>
          <React.Fragment>
            <QuestionCounter currentQuestion={currentPage.indexQuestion + 1} totalQuestions={currentQuiz.questions.length} />
          </React.Fragment>
        </BlockBar>
      </div>

      {isAnswered ? <WaitingForCompleteActivity /> : <GuestControls currentPage={currentPage} onResponse={handleResponse} />}

      <GuestFooter />
    </div>
  );
}

export default GuestQuestion;
