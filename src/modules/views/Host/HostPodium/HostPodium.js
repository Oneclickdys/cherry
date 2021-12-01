import { Button } from '@mui/material';
import { default as React } from 'react';
import useHostPodium from './useHostPodium';

const HostPodium = () => {
  const { onNext } = useHostPodium();

  return (
    <div>
      HostPodium
      <Button onClick={onNext}>Continuar</Button>
    </div>
  );
};

export default HostPodium;
