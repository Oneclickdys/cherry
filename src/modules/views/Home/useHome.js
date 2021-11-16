import { useState } from 'react';
import { useNavigate } from 'react-router';
import { getGame } from '../../../server/firebase';
import { USER_TYPES } from '../../../utils/constants';

export default function useHome() {
  const [game, setGame] = useState('');
  const navigate = useNavigate();

  async function onSubmit(data) {
    const game = await getGame(data);
    setGame(game);
  }

  function onSelectType(type) {
    if (type === USER_TYPES.host) {
      navigate('/list');
    }
  }

  return { onSubmit, game, onSelectType };
}
