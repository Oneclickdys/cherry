import React from 'react';
import Button from '../../../atoms/Button/Button';
import useHostAnswers from './useHostAnswers';

function HostAnswers({ currentPage }) {
  console.log(currentPage, 'currentPage');
  const { onNext } = useHostAnswers(currentPage);

  return (
    <div>
      hostAnswers
      <Button onClick={onNext}>Continuar</Button>
    </div>
  );
}

export default HostAnswers;
