import { useEffect, useState } from 'react';
import { useAppContext } from '../../../../context/AppContext';
import { getGameUsers } from '../../../../server/firebase';

export default function useGuestRanking() {
  const { gameCode, user } = useAppContext();

  const [position, setPosition] = useState(null);
  const [score, setScore] = useState(0);

  useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    let response = await getGameUsers(gameCode);
    response = response.sort((a, b) => {
      return b.score - a.score;
    });
    console.log('response: ', response);
    console.log('user: ', user);
    setScore(user.score);
    setPosition(response.findIndex((item) => item.id === user.id) + 1);
  }

  return { position, score };
}
