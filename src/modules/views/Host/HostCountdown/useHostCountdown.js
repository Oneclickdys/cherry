import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useAppContext } from '../../../../context/AppContext';
import { useCountdown } from '../../../../hooks/useCountdown';
import { putCurrentPage } from '../../../../server/firebase';
import { PAGES } from '../../../../utils/constants';

export default function useHostCountdown() {
  const navigate = useNavigate();
  const { gameCode, currentQuiz } = useAppContext();

  const { countdown } = useCountdown(3);

  useEffect(() => {
    console.log('countdown: ', countdown);
    if (countdown <= 0 && currentQuiz.guid) finishCountdown();
  }, [countdown]);

  async function finishCountdown() {
    await putCurrentPage(gameCode, PAGES.statement, currentQuiz.questions[0], 0);
    navigate('/statement');
  }

  return { countdown };
}
