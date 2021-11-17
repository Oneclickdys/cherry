import React from 'react';
import Icon from '../../atoms/Icon/Icon';
import LayoutDefault from '../../layout/LayoutDefault/LayoutDefault';
import useCreate from './useCreate';

const Create = () => {
  const { goBack } = useCreate();

  return (
    <LayoutDefault>
      <div className="create">
        <div className="create__header">
          <div onClick={goBack} className="create__back">
            <Icon type="back" size="big" />
          </div>
        </div>
        <div className="create__list"></div>
      </div>
    </LayoutDefault>
  );
};

export default Create;
