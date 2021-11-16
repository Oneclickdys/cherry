import React from 'react';
import { USER_TYPES } from '../../../utils/constants';
import Button from '../../atoms/Button/Button';
import Separator from '../../atoms/Separator/Separator';
import LayoutDefault from '../../layout/LayoutDefault/LayoutDefault';
import useHome from './useHome';

const Home = () => {
  const { onSelectType } = useHome();

  return (
    <LayoutDefault>
      <div className="home">
        <div className="home__title">Quiero ser...</div>
        <div className="home__options-wrapper">
          <Button text="ANFITRIÓN" onClick={() => onSelectType(USER_TYPES.host)} />
          <Separator />
          <Button text="CONCURSANTE" onClick={() => onSelectType(USER_TYPES.guest)} />
        </div>
      </div>
    </LayoutDefault>
  );
};

export default Home;
