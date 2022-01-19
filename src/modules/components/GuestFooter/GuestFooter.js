import React from 'react';
import BlockBar from '../../atoms/BlockBar/BlockBar';
import useGuestFooter from './useGuestFooter';

function GuestFooter({ initialScore }) {
  const { user } = useGuestFooter();

  const score = initialScore !== undefined ? initialScore : user.score;

  return (
    <div className='guest-question__footer'>
      <BlockBar>
        <React.Fragment>
          <span>{user.name}</span>
          <div>{score}</div>
        </React.Fragment>
      </BlockBar>
    </div>
  );
}

export default GuestFooter;
