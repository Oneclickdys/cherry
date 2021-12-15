import React from 'react'
import Loading from '../../../../../atoms/Loading/Loading';
import './_waiting-forComplete-activity.scss';

function WaitingForCompleteActivity () {
  return (
    <div className='waiting-forComplete-activity'>
      <div className="guest-countdown__loading">
        <Loading size="big" />
      </div>
      <span className='waiting-forComplete-activity__title'>Esperando a que todos terminen...</span>
    </div>

  )
}

export default WaitingForCompleteActivity