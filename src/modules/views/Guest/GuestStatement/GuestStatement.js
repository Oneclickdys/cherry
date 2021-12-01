import React from 'react';
import Loading from '../../../atoms/Loading/Loading';

const GuestStatement = () => {
  return (
    <div className="guest-countdown">
      <div className="guest-countdown__wrapper">
        <div className="guest-countdown__title">Pregunta en curso...</div>
        <div className="guest-countdown__loading">
          <Loading size="big" />
        </div>
      </div>
    </div>
  );
};

export default GuestStatement;
