import React from 'react';
import Icon from '../../atoms/Icon/Icon';
import useHeaderBack from './useHeaderBack';

const HeaderBack = () => {
  const { goBack } = useHeaderBack();

  return (
    <div className="header-back">
      <div onClick={goBack} className="header-back__icon">
        <Icon type="back" size="big" />
      </div>
    </div>
  );
};

export default HeaderBack;
