import React from 'react';
import { observer } from 'react-lemonade-editor';
import useGuestControls from './useGuestControls';
import './_guest-controls.scss';

function GuestControls({ currentPage, onResponse }) {
  const { handleChange, Question } = useGuestControls({ currentPage, onResponse, devMode: true });

  return (
    <div className='guest-question__body'>
      <div className='cherry lemonade-exercises'>
        <Question changed={handleChange} />
      </div>
    </div>
  );
}

export default observer(GuestControls);