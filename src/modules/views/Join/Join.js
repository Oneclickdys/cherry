import React from 'react';
import JoinForm from '../../components/forms/JoinForm/JoinForm';
import LayoutDefault from '../../layout/LayoutDefault/LayoutDefault';
import useJoin from './useJoin';

const Join = ({ join }) => {
  const { onCheckGame, game, onJoin } = useJoin(join);
  return (
    <LayoutDefault>
      <div className="join">
        {!game && <JoinForm onSubmit={onCheckGame} />}
        {game && !game.status && <JoinForm onSubmit={onJoin} placeholder={'Escribe tu nombre'} />}
        {game && game.status === 'joined' && <span>Unido</span>}
      </div>
    </LayoutDefault>
  );
};

export default Join;
