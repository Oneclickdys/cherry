import { useNavigate } from 'react-router';
import { USER_TYPES } from '../../../utils/constants';

export default function useHome() {
  const navigate = useNavigate();

  function onSelectType(type) {
    if (type === USER_TYPES.host) {
      navigate('/list');
    }
  }

  return { onSelectType };
}
