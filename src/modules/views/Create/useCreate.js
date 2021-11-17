import { useNavigate } from 'react-router';

export default function useCreate() {
  const navigate = useNavigate();

  function goBack() {
    navigate(-1);
  }

  return { goBack };
}
