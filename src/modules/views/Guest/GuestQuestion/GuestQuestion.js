import React, { useEffect, useState } from 'react';
import BlockBar from '../../../atoms/BlockBar/BlockBar';
import QuestionCounter from '../../../atoms/QuestionCounter/QuestionCounter';
import GuestFooter from '../../../components/GuestFooter/GuestFooter';
import GuestControls from './components/GuestControls/GuestControls';
import WaitingForCompleteActivity from './components/WaitingForCompleteActivity/WaitingForCompleteActivity';
import useGuestQuestion from './useGuestQuestion';

function GuestQuestion({ currentPage }) {
  const { currentQuiz, isAnswered, handleResponse, user } = useGuestQuestion({ currentPage });
  const [initialScore, setInitialScore] = useState(user.score);

  useEffect(() => {
    setInitialScore(user.score);
  }, []);

  return (
    <div className='guest-question'>
      <div className='guest-question__header'>
        <BlockBar>
          <React.Fragment>
            <QuestionCounter
              currentQuestion={currentPage.indexQuestion + 1}
              totalQuestions={currentQuiz.questions.length}
            />
          </React.Fragment>
        </BlockBar>
      </div>

      {isAnswered ? <WaitingForCompleteActivity /> :
        <GuestControls currentPage={currentPage} onResponse={handleResponse} />}

      <GuestFooter initialScore={initialScore || 0}/>
    </div>
  );
}

export default GuestQuestion;
