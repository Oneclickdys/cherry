import React from 'react'
import './_quiz-title.scss';
function QuizTitle ({title, subtitle}) {
  return (
    <div className='quiz-title-wrapper'>
      <h1 className='quiz-title'>{title}</h1>
      <h2 className='quiz-subtitle'>{subtitle}</h2>
    </div>

  )
}

export default QuizTitle