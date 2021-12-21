import React from 'react';
import BlockBar from '../../atoms/BlockBar/BlockBar';
import useGuestFooter from './useGuestFooter';

function GuestFooter() {
  const { user } = useGuestFooter();

  return (
    <div className="guest-question__footer">
      <BlockBar>
        <React.Fragment>
          <span>{user.name}</span>
          <div>{user.score}</div>
        </React.Fragment>
      </BlockBar>
    </div>
  );
}

export default GuestFooter;
