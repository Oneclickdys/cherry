import { default as React } from 'react';
import Button from '../../../atoms/Button/Button';
import useHostPodium from './useHostPodium';

const HostPodium = () => {
  const { users, quizName, onNext } = useHostPodium();

  return (
    <div className="host-podium">
      <div className="host-podium__wrapper">
        <div className="host-podium__title">{quizName}</div>
        <div className="host-podium__podium">
          <div className="host-podium__place">
            <div className="host-podium__name">Nombre</div>
            <div className="host-podium_second">
              <div className="host-podium__info">
                <div className="host-podium__position">2</div>
                <div className="host-podium__info-right">
                  <div className="host-podium__score">95</div>
                  <div className="host-podium__correct-answers">Puntos</div>
                </div>
              </div>
            </div>
          </div>
          <div className="host-podium__place">
            <div className="host-podium__name">Nombre</div>
            <div className="host-podium_first">
              <div className="host-podium__info">
                <div className="host-podium__position">1</div>
                <div className="host-podium__info-right">
                  <div className="host-podium__score">120</div>
                  <div className="host-podium__correct-answers">Puntos</div>
                </div>
              </div>
            </div>
          </div>
          <div className="host-podium__place">
            <div className="host-podium__name">Nombre</div>
            <div className="host-podium_third">
              <div className="host-podium__info">
                <div className="host-podium__position">3</div>
                <div className="host-podium__info-right">
                  <div className="host-podium__score">40</div>
                  <div className="host-podium__correct-answers">Puntos</div>
                </div>
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
