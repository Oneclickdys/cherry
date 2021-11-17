import PropTypes from 'prop-types';
import React from 'react';

const QuizCard = ({ guid, name, onClick }) => {
  return (
    <div className="quiz-card" onClick={() => onClick(guid)}>
      <div className="quiz-card__name">{name}</div>
    </div>
  );
};

QuizCard.propTypes = {
  guid: PropTypes.string,
  name: PropTypes.string,
  onClick: PropTypes.func,
};

QuizCard.defaultProps = {
  guid: '1',
  name: 'Quiz name',
  onClick: () => {},
};

export default QuizCard;
