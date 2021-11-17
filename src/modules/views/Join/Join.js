import React from 'react';
import JoinForm from '../../components/forms/JoinForm/JoinForm';
import LayoutDefault from '../../layout/LayoutDefault/LayoutDefault';
import useJoin from './useJoin';

const Join = () => {
  const { onSubmit, game } = useJoin();
  return (
    <LayoutDefault>
      <div className="join">
        {!game && <JoinForm onSubmit={onSubmit} />}
        {game && <JoinForm onSubmit={onSubmit} placeholder={'Escribe tu nombre'} />}
      </div>
    </LayoutDefault>
  );
};

export default Join;
