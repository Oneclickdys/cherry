import React from 'react'
import './_vertical-center-layout.scss';

function VerticalCenterLayout ({children}) {
  return (
    <div className='vertical-center'>{children}</div>
  )
}

export default VerticalCenterLayout