import React from 'react';
import useHostStatement from './useHostStatement';

const HostStatement = () => {
  const { currentPage } = useHostStatement();

  return <div>{currentPage?.currentQuestion?.statement}</div>;
};

export default HostStatement;
