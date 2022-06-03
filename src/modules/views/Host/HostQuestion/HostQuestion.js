/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { observer } from 'react-lemonade-editor';
import BlockBar from '../../../atoms/BlockBar/BlockBar';
import QuestionTimeOut from '../../../atoms/QuestionTimeOut/QuestionTimeOut';
import HostHeader from '../../../components/HostHeader/HostHeader';
import useHostQuestion from './useHostQuestion';

function HostQuestion({ currentPage }) {
  const { currentQuiz, onComplete, Question, stimulus, image } = useHostQuestion(currentPage, true);

  return (
    <div className="host-question">
      <div className="host-question__header">
        <BlockBar>
          <React.Fragment>
            {/*<QuestionCounter currentQuestion={1} totalQuestions={10} />
            <Button onClick={onComplete}>Continuar</Button>*/}
            <HostHeader
              currentQuestion={currentPage ? currentPage.indexQuestion + 1 : 0}
              totalQuestions={currentQuiz.questions ? currentQuiz.questions.length : 0}
            />
          </React.Fragment>
        </BlockBar>
      </div>
      <div className="host-question__body">
        <div className="timer-wrapper">
          <QuestionTimeOut onComplete={onComplete} totalTime={10} />
        </div>
        <div className="host-question__top">
          <div className="host-question__title">{stimulus}</div>
          {image && (
            <div className="host-question__image">
              <img src={image} />
            </div>
          )}
        </div>
        <div className="cherry lemonade-exercises">
          <Question disabled={true} />
        </div>
      </div>
    </div>
  );
}

// lo convertimos en observable para que mobx
// optimice to el proceso
export default observer(HostQuestion);
