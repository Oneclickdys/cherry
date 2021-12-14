import React from 'react';
import BlockBar from '../../atoms/BlockBar/BlockBar';
import QuestionCounter from '../../atoms/QuestionCounter/QuestionCounter';

const HostHeader = ({ currentQuestion, totalQuestions }) => {
  return (
    <BlockBar>
      <React.Fragment>
        <QuestionCounter currentQuestion={currentQuestion} totalQuestions={totalQuestions} />
      </React.Fragment>
    </BlockBar>
  );
};

HostHeader.defaultProps = {
  currentQuestion: 1,
  totalQuestions: 10,
};

export default HostHeader;
