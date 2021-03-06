import { useEffect, useState } from 'react';
import { useAppContext } from '../../../../context/AppContext';
import { getGameUsers } from '../../../../server/firebase';

export default function useGuestPodium() {
  const { gameCode, user } = useAppContext();

  const [position, setPosition] = useState(null);

  useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    let response = await getGameUsers(gameCode);
    response = response.sort((a, b) => {
      return b.score - a.score;
    });
    setPosition(response.findIndex((item) => item.id === user.id) + 1);
  }

  return { position };
}
