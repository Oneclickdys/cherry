import { Button } from '@mui/material';
import React from 'react';
import useHostRanking from './useHostRanking';

const HostRanking = () => {
  const { onNext } = useHostRanking();

  return (
    <div>
      HostRanking
      <Button onClick={onNext}>Continuar</Button>
    </div>
  );
};

export default HostRanking;
