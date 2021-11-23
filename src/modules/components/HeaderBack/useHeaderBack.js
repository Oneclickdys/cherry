import { useNavigate } from 'react-router';

export default function useHeaderBack() {
  const navigate = useNavigate();

  function goBack() {
    navigate(-1);
  }

  return { goBack };
}
