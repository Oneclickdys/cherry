import React from 'react';
import Icon from '../../../atoms/Icon/Icon';
import HostHeader from '../../../components/HostHeader/HostHeader';
import useGuestAnswers from './useGuestAnswers';

const GuestAnswers = ({ currentPage }) => {
  const { answerStatus, currentQuiz } = useGuestAnswers(currentPage);
  const iconStatus = {
    fail: 'close',
    success: 'checked',
    timeout: 'timer',
  };

  const textStatus = {
    fail: '¡No es correcto!',
    success: '¡Correcto!',
    timeout: '¡Te has quedado sin tiempo!',
  };

  return (
    <div className="guest-answers">
      <HostHeader currentQuestion={currentPage.indexQuestion + 1} totalQuestions={currentQuiz.questions.length} />
      <div className="guest-answers__content">
        <Icon type={iconStatus[answerStatus]} />
        <span className="guest-answers__text">{textStatus[answerStatus]}</span>
      </div>
    </div>
  );
};

export default GuestAnswers;
