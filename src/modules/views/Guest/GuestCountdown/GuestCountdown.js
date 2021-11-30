import React from 'react';
import Loading from '../../../atoms/Loading/Loading';

const GuestCountdown = () => {
  return (
    <div className="guest-countdown">
      <div className="guest-countdown__wrapper">
        <div className="guest-countdown__title">Prepárate, ¡el juego está a punto de empezar!</div>
        <div className="guest-countdown__loading">
          <Loading size="big" />
        </div>
      </div>
    </div>
  );
};

export default GuestCountdown;
