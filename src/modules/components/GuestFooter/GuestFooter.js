import React from 'react';
import BlockBar from '../../atoms/BlockBar/BlockBar';
import UserInfo from '../../atoms/UserInfo/UserInfo';
import useGuestFooter from './useGuestFooter';

function GuestFooter({ initialScore }) {
  const { user } = useGuestFooter();

  const score = initialScore !== undefined ? initialScore : user.score;

  return (
    <div className="guest-footer">
      <BlockBar>
        <React.Fragment>
          <div className="guest-footer__user-info">
            <UserInfo user={user} />
          </div>
          <div>{score}</div>
        </React.Fragment>
      </BlockBar>
    </div>
  );
}

export default GuestFooter;
