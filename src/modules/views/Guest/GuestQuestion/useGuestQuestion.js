import { useCallback, useEffect, useRef, useState } from 'react';

export default function useGuestQuestion () {
  const [isAnswered, setIsAnswered] = useState(false);
  const timer = useRef();

  const handleResponse = useCallback((userResponse) => {
    const responseTime = getResponseTime (timer.current)
    // enviar la respuesta y tiempo al servidor
    console.log('el usuario ha respondido: ', userResponse, `en ${responseTime} milisegundos`);
    setIsAnswered(true)
  }, [setIsAnswered]);

  useEffect(() => {
    timer.current = new Date();
  }, []);

  return {
    isAnswered, handleResponse
  }
}

// calcula el tiempo transcurrido hasta que el usuario responde
function getResponseTime (initialTime) {
  const actualDate = new Date()
  return Math.abs(initialTime - actualDate)
}