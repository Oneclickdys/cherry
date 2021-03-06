import React from 'react';
import JoinForm from '../../components/forms/JoinForm/JoinForm';
import PlayerForm from '../../components/forms/PlayerForm/PlayerForm';
import HeaderBack from '../../components/HeaderBack/HeaderBack';
import LayoutDefault from '../../layout/LayoutDefault/LayoutDefault';
import useJoin from './useJoin';

const Join = ({ join }) => {
  const { onCheckGame, game, onJoin } = useJoin(join);
  return (
    <LayoutDefault>
      <div className="join">
        <HeaderBack />
        <div className="join__wrapper">
          {game && game.quiz && game.quiz.guid && (
            <div className="join__quiz">
              <div className="join__quiz-title">{game.quiz.name}</div>
              <div className="join__quiz-description">{game.quiz.description}</div>
            </div>
          )}
          {!game && (
            <JoinForm
              onSubmit={onCheckGame}
              title="Usa el código para unirte a una partida"
              placeholder="Código de la partida"
              buttonText="Ingresar"
              minLength={4}
            />
          )}
          {game && !game.status && <PlayerForm onSubmit={onJoin} title="Introduce tu nombre" placeholder="Nombre" buttonText="Unirme" minLength={1} />}
          {game && game.status === 'joined' && <span>¡Te has unido! Esperando a que el anfitrión lance el juego.</span>}
        </div>
      </div>
    </LayoutDefault>
  );
};

export default Join;
