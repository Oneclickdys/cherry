import React from 'react';
import './_block-header.scss';

function BlockHeader({ children }) {
  return (
    <h3 className='block-header'>{children}</h3>
  );
}

export default BlockHeader;