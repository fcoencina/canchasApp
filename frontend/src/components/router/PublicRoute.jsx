
import { Navigate, Outlet } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';

function PublicRoute() {
  const { isAuthenticated, role } = useAuthContext();

  if (isAuthenticated) {
    return role === 'admin' ? <Navigate to="/adminmenu" /> : <Navigate to="/stumenu" />;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
}

export default PublicRoute;
