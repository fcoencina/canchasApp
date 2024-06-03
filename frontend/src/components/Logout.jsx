
import { useEffect } from 'react';
import { useAuthContext } from '../contexts/AuthContext';

function Logout() {
  const { logout } = useAuthContext();
  useEffect(() => {
    logout();
  }, [logout]);

  return null;
}

export default Logout;
