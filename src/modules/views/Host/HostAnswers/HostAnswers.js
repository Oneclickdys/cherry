import React from 'react';
import Button from '../../../atoms/Button/Button';
import useHostAnswers from './useHostAnswers';

function HostAnswers() {
  const { onNext } = useHostAnswers();

  return (
    <div>
      hostAnswers
      <Button onClick={onNext}>Continuar</Button>
    </div>
  );
}

export default HostAnswers;
