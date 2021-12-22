import React from 'react';
import useGuestRanking from './useGuestRanking';

const GuestRanking = () => {
  const { position, score } = useGuestRanking();

  return (
    <div className="guest-ranking">
      <div className="guest-ranking__wrapper">
        <div className="guest-ranking__position">{`¡Estás en ${position}ª posición!`}</div>
        <div className="guest-ranking__score">{score} Puntos</div>
      </div>
    </div>
  );
};

export default GuestRanking;
