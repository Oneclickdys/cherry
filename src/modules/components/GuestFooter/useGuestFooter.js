import { useAppContext } from '../../../context/AppContext';

export default function useGuestFooter() {
  const { user } = useAppContext();
  return { user };
}
