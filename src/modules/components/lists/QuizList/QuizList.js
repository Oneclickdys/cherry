import PropTypes from 'prop-types';
import React from 'react';
import QuizCard from '../../cards/QuizCard/QuizCard';

const QuizList = ({ list, onClickQuiz }) => {
  return (
    <div className="quiz-list">
      {list.map((quiz) => {
        return (
          <div className="quiz-list__entry" key={quiz.guid}>
            <QuizCard {...quiz} onClick={onClickQuiz} />
          </div>
        );
      })}
    </div>
  );
};

QuizList.propTypes = {
  list: PropTypes.array,
};

QuizList.defaultProps = {
  list: [],
};

export default QuizList;
