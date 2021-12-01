import React from 'react';
import ProgressBar from '../../../atoms/ProgressBar/ProgressBar';
import useHostStatement from './useHostStatement';

function HostStatement({ currentPage }) {
  const { statement, progress } = useHostStatement(currentPage);

  return (
    <div className="host-statement">
      {statement && (
        <div className="host-statement__wrapper">
          <div className="host-statement__title">{statement}</div>
          <div className="host-statement__progress">
            <ProgressBar progress={progress} />
          </div>
        </div>
      )}
    </div>
  );
}

export default HostStatement;
