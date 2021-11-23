import React from 'react';
import JoinForm from '../../components/forms/JoinForm/JoinForm';
import HeaderBack from '../../components/HeaderBack/HeaderBack';
import LayoutDefault from '../../layout/LayoutDefault/LayoutDefault';
import useJoin from './useJoin';

const Join = () => {
  const { onCheckGame, game, onJoin } = useJoin();
  return (
    <LayoutDefault>
      <div className="join">
        <HeaderBack />
        {game && game.quiz && game.quiz.guid && (
          <div className="join__quiz">
            <div className="join__quiz-title">{game.quiz.name}</div>
            <div className="join__quiz-description">{game.quiz.description}</div>
          </div>
        )}
        <div className="join__wrapper">
          {!game && (
            <JoinForm onSubmit={onCheckGame} title="Usa el código para unirte a una partida" placeholder="Código de la partida" buttonText="Ingresar" />
          )}
          {game && !game.status && <JoinForm onSubmit={onJoin} title="Introduce tu nombre" placeholder="Nombre" buttonText="Unirme" />}
          {game && game.status === 'joined' && <span>Unido</span>}
        </div>
      </div>
    </LayoutDefault>
  );
};

export default Join;
