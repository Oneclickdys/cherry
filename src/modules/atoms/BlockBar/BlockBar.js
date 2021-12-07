import React from 'react';
import './_block-bar.scss';

function BlockBar({ children }) {
  return (
    <div className='block-bar'>{children}</div>
  );
}

export default BlockBar;