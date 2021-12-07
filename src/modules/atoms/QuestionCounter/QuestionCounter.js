import React from 'react'

function QuestionCounter ({currentQuestion, totalQuestions}) {
  return <span>Pregunta {currentQuestion} de {totalQuestions}</span>
}

export default QuestionCounter