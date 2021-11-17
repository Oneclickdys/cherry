import React from 'react';
import { USER_TYPES } from '../../../utils/constants';
import Button from '../../atoms/Button/Button';
import LayoutDefault from '../../layout/LayoutDefault/LayoutDefault';
import useHome from './useHome';

const Home = () => {
  const { onSelectType } = useHome();

  return (
    <LayoutDefault>
      <div className="home">
        <div className="home__title">Quiero ser...</div>
        <div className="home__options-wrapper">
          <div className="home__host-button">
            <Button onClick={() => onSelectType(USER_TYPES.host)}>ANFITRIÓN</Button>
          </div>
          <div className="home__guest-button">
            <Button onClick={() => onSelectType(USER_TYPES.guest)}>CONCURSANTE</Button>
          </div>
        </div>
      </div>
    </LayoutDefault>
  );
};

export default Home;
