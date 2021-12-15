import React from 'react';
import { observer } from 'react-lemonade-editor';
import BlockBar from '../../../atoms/BlockBar/BlockBar';
import Button from '../../../atoms/Button/Button';
import QuestionCounter from '../../../atoms/QuestionCounter/QuestionCounter';
import useHostQuestion from './useHostQuestion';
import QuestionTimeOut from '../../../atoms/QuestionTimeOut/QuestionTimeOut';

function HostQuestion({ currentPage }) {
  const { onComplete, Question } = useHostQuestion(currentPage, true);

  return (
    <div className='host-question'>
      <div className='host-question__header'>
        <BlockBar>
          <React.Fragment>
            <QuestionCounter currentQuestion={1} totalQuestions={10} />
            <Button onClick={onComplete}>Continuar</Button>
          </React.Fragment>
        </BlockBar>
      </div>
      <div className='host-question__body'>
        <div className='timer-wrapper'>
          <QuestionTimeOut onComplete={onComplete} totalTime={20} />
        </div>
        <div className='cherry lemonade-exercises'>
          <Question disabled={true} />
        </div>
      </div>
    </div>
  );
}

// lo convertimos en observable para que mobx
// optimice to el proceso
export default observer(HostQuestion);
