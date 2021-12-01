import React from 'react';
import Button from '../../../atoms/Button/Button';
import useHostQuestion from './useHostQuestion';

function HostQuestion({ currentPage }) {
  const { onNext } = useHostQuestion(currentPage);

  return (
    <div>
      hostQuestion
      <Button onClick={onNext}>Continuar</Button>
    </div>
  );
}

export default HostQuestion;
