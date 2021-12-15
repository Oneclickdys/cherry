import React from 'react';
import BlockBar from '../../atoms/BlockBar/BlockBar';

function GuestFooter() {
  return (
    <div className='guest-question__footer'>
      <BlockBar>
        <React.Fragment>
          <span>UserName</span>
          <div>Points</div>
        </React.Fragment>
      </BlockBar>
    </div>
  );
}

export default GuestFooter;