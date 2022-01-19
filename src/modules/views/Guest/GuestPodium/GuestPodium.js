import React from 'react';
import GuestFooter from '../../../components/GuestFooter/GuestFooter';
import useGuestPodium from './useGuestPodium';

const GuestPodium = () => {
  const { position } = useGuestPodium();

  return (
    <div className="guest-podium">
      {position && (
        <div className="guest-podium__wrapper">
          <div className="guest-podium__position-circle">{`${position}`}</div>
          <div className="guest-podium__position-text">{`${position}º Lugar`}</div>
        </div>
      )}
      <GuestFooter />
    </div>
  );
};

export default GuestPodium;
