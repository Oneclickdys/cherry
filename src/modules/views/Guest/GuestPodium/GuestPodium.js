import React from 'react';
import useGuestPodium from './useGuestPodium';

const GuestPodium = () => {
  const { position, score } = useGuestPodium();

  return (
    <div className="guest-podium">
      <div className="guest-podium__wrapper">
        <div className="guest-podium__position">{`HAS QUEDADO ${position}º`}</div>
        <div className="guest-podium__score">{score} Puntos</div>
      </div>
    </div>
  );
};

export default GuestPodium;
