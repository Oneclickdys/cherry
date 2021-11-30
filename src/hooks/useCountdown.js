import { useEffect, useState } from 'react';

export function useCountdown(initialTime) {
  const [countdown, setCountdown] = useState(initialTime);

  useEffect(() => {
    const timer = countdown > 0 && setInterval(() => setCountdown(countdown - 1), 1000);
    return () => clearInterval(timer);
  }, [countdown]);

  return { countdown };
}
