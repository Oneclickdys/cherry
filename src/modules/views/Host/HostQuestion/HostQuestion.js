import React, { useCallback, useEffect } from 'react';
import { useLemonadeQuestion, observer } from 'react-lemonade-editor';
import Button from '../../../atoms/Button/Button';
import useHostQuestion from './useHostQuestion';
import BlockBar from '../../../atoms/BlockBar/BlockBar';
import QuestionCounter from '../../../atoms/QuestionCounter/QuestionCounter';
import addQuestionStyle from './util/addQuestionStyle';
import QuestionTimeOut from '../../../atoms/QuestionTimeOut/QuestionTimeOut';
// import getTestData from './util/testData';

function HostQuestion({ currentPage }) {
  const { onNext } = useHostQuestion(currentPage);
  // const questionData = addQuestionStyle(getTestData().currentQuestion);
  const questionData = addQuestionStyle(currentPage.currentQuestion);
  const {
    exercise: { Question, store },
  } = useLemonadeQuestion({ data: questionData });

  const onComplete = useCallback(() => {
    onNext()
  }, [onNext])

  useEffect(() => {
    window.store = store;
  }, []);

  return (
    <div className='host-question'>
      <div className='host-question__header'>
        <BlockBar>
          <React.Fragment>
            <QuestionCounter currentQuestion={1} totalQuestions={10} />
            <Button onClick={onNext}>Continuar</Button>
          </React.Fragment>
        </BlockBar>
      </div>
      <div className='host-question__body'>
        <div className='timer-wrapper'>
          <QuestionTimeOut onComplete={onComplete} totalTime={5} />
        </div>
        <div className='cherry lemonade-exercises'>
          <Question disabled={true}/>
        </div>
      </div>
    </div>
  );
}

// lo convertimos en observable para que mobx
// optimice to el proceso
export default observer(HostQuestion);
