import { useNavigate } from 'react-router';
import { USER_TYPES } from '../../../utils/constants';
import { createAudio, getToGameAudio, playAudio } from '../../../utils/utilsAudio';

export default function useHome() {
  const navigate = useNavigate();

  function onSelectType(type) {
    if (type === USER_TYPES.host) {
      navigate('/create');
    }
    if (type === USER_TYPES.guest) {
      navigate('/join');
      audioPlay();
    }
  }

  function audioPlay() {
    let newAudioPlayer = createAudio(getToGameAudio());
    playAudio(newAudioPlayer);
  }

  return { onSelectType };
}
