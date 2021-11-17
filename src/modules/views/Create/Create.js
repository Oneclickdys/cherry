import React from 'react';
import LayoutDefault from '../../layout/LayoutDefault/LayoutDefault';
import useCreate from './useCreate';

const Create = () => {
  const { goBack } = useCreate();

  return (
    <LayoutDefault>
      <div className="create">
        <div className="create__header">
          <div onClick={goBack}>Volver</div>
        </div>
        <div className="create__list"></div>
      </div>
    </LayoutDefault>
  );
};

export default Create;
