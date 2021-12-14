import React, { useCallback, useEffect, useRef, useState } from 'react';
import './_question-time-out.scss';

function QuestionTimeOut({ totalTime = 10, onComplete }) {
  const [counter, setCounter] = useState(totalTime);
  const timer = useRef(0);

  const finishTimer = useCallback(() => {
    clearInterval(timer.current);
    onComplete(counter);
  }, [counter, onComplete]);

  const handleTime = useCallback(() => {
    setCounter(currentCount => {
      if (currentCount > 1) return currentCount - 1;
      finishTimer();
      return 0;
    });
  }, [setCounter, finishTimer]);

  const initTimer = useCallback(() => {
    timer.current = setInterval(handleTime, 1000);
  }, [handleTime]);

  useEffect(() => {
    initTimer();
    return () => clearInterval(timer.current);
  }, []);

  return (
    <div className='question-time-out'>
      <span className='question-time-out__counter'>{counter}</span>
    </div>
  );
}

export default QuestionTimeOut;