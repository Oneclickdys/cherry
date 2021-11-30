import React from 'react';
import useHostCountdown from './useHostCountdown';

const HostCountdown = () => {
  const { countdown } = useHostCountdown();

  return (
    <div className="host-countdown">
      <div className="host-countdown__wrapper">
        <div className="host-countdown__title">CUENTA ATRÁS</div>
        <div className="host-countdown__countdown">{countdown}</div>
      </div>
    </div>
  );
};

export default HostCountdown;
