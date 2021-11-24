import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useAppContext } from '../../../../context/AppContext';
import { putCurrentPage } from '../../../../server/firebase';
import { PAGES } from '../../../../utils/constants';

export default function useHostCountdown() {
  const navigate = useNavigate();
  const { gameCode } = useAppContext();
  useEffect(() => {
    setTimeout(() => {
      finishCountdown();
    }, 4000);
  }, []);

  function finishCountdown() {
    console.log('finishCountdown');
    putCurrentPage(gameCode, PAGES.statement);
    navigate('/statement');
  }

  return {};
}
