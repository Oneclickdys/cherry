import React from 'react';
import Button from '../../../atoms/Button/Button';
import useHostRanking from './useHostRanking';

const HostRanking = ({ currentPage }) => {
  const { onNext } = useHostRanking(currentPage);

  return (
    <div>
      HostRanking
      <Button onClick={onNext}>Continuar</Button>
    </div>
  );
};

export default HostRanking;
