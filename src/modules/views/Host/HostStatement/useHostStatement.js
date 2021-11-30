import { useEffect, useState } from 'react';
import { useAppContext } from '../../../../context/AppContext';
import { getOnceCurrentPage } from '../../../../server/firebase';

export default function useHostStatement() {
  const [currentPage, setCurrentPage] = useState(null);
  const { gameCode } = useAppContext();

  useEffect(() => {
    getCurrentPage();
  }, []);

  async function getCurrentPage() {
    setCurrentPage(await getOnceCurrentPage(gameCode));
  }

  return { currentPage };
}
