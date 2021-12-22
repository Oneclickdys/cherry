import { default as React } from 'react';
import Button from '../../../atoms/Button/Button';
import useHostPodium from './useHostPodium';

const HostPodium = () => {
  const { users, quizName, onNext } = useHostPodium();

  function renderName(position) {
    if (users && users.length >= position + 1) {
      return users[position].name;
    } else return '';
  }

  function renderPoints(position) {
    if (users && users.length >= position + 1) {
      return (
        <div className="host-podium__info-right">
          <div className="host-podium__score">{users[position].score}</div>
          <div className="host-podium__correct-answers">Puntos</div>
        </div>
      );
    } else return null;
  }

  return (
    <div className="host-podium">
      <div className="host-podium__wrapper">
        <div className="host-podium__title">{quizName}</div>
        <div className="host-podium__podium">
          <div className="host-podium__place">
            <div className="host-podium__name">{renderName(1)}</div>
            <div className="host-podium_second">
              <div className="host-podium__info">
                <div className="host-podium__position">2</div>
                {renderPoints(1)}
              </div>
            </div>
          </div>
          <div className="host-podium__place">
            <div className="host-podium__name">{renderName(0)}</div>
            <div className="host-podium_first">
              <div className="host-podium__info">
                <div className="host-podium__position">1</div>
                {renderPoints(0)}
              </div>
            </div>
          </div>
          <div className="host-podium__place">
            <div className="host-podium__name">{renderName(2)}</div>
            <div className="host-podium_third">
              <div className="host-podium__info">
                <div className="host-podium__position">3</div>
                {renderPoints(2)}
              </div>
            </div>
          </div>
        </div>
        <div className="host-podium__next">
          <Button onClick={onNext}>Finalizar</Button>
        </div>
      </div>
    </div>
  );
};

export default HostPodium;
